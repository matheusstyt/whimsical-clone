"use client"

/**
 * 🔍 HOOK PERSONALIZADO PARA FUNCIONALIDADE DE BUSCA
 *
 * Este hook centraliza toda a lógica relacionada à busca,
 * incluindo estado, filtros e navegação por teclado.
 */

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { SidebarItem } from "@/types/content"

interface UseSearchProps {
  items: SidebarItem[]
}

interface UseSearchReturn {
  // Estados da busca
  searchValue: string
  isModalOpen: boolean
  selectedIndex: number
  filteredItems: Array<{ item: SidebarItem; type: "category" | "article"; slug?: string; title: string }>

  // Ações da busca
  setSearchValue: (value: string) => void
  openModal: () => void
  closeModal: () => void
  handleKeyDown: (event: KeyboardEvent) => void
  selectItem: (index: number) => void
  navigateToItem: (item: any) => void

  // Utilitários
  clearSearch: () => void
  hasResults: boolean
}

/**
 * Hook para gerenciar funcionalidade de busca
 */
export function useSearch({ items }: UseSearchProps): UseSearchReturn {
  const router = useRouter()

  // 📊 Estados da busca
  const [searchValue, setSearchValue] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // 🔍 Filtrar itens baseado na busca
  const filteredItems = useCallback(() => {
    if (!searchValue.trim()) {
      // Se não há busca, mostra todos os itens (exceto "Contact us")
      return items.slice(0, -1).map((item) => ({
        item,
        type: "category" as const,
        title: item.title,
      }))
    }

    const searchTerm = searchValue.toLowerCase()
    const results: Array<{ item: SidebarItem; type: "category" | "article"; slug?: string; title: string }> = []

    items.slice(0, -1).forEach((item) => {
      // Buscar na categoria
      if (item.title.toLowerCase().includes(searchTerm) || item.description?.toLowerCase().includes(searchTerm)) {
        results.push({
          item,
          type: "category",
          title: item.title,
        })
      }

      // Buscar nos subitens (artigos)
      item.subitems?.forEach((subitem) => {
        if (subitem.title.toLowerCase().includes(searchTerm)) {
          results.push({
            item,
            type: "article",
            slug: subitem.slug,
            title: subitem.title,
          })
        }
      })
    })

    return results
  }, [items, searchValue])()

  // 🎯 Navegar para item
  const navigateToItem = useCallback(
    (item: any) => {
      if (item.type === "article" && item.slug) {
        // Navegar para artigo específico
        router.push(`/article/${item.slug}`)
      } else if (item.type === "category" && item.item.subitems && item.item.subitems.length > 0) {
        // Navegar para primeiro artigo da categoria
        router.push(`/article/${item.item.subitems[0].slug}`)
      }
      closeModal()
    },
    [router],
  )

  // 🎯 Abrir modal de busca
  const openModal = useCallback(() => {
    setIsModalOpen(true)
    setSelectedIndex(0)
  }, [])

  // ❌ Fechar modal de busca
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setSearchValue("")
    setSelectedIndex(0)
  }, [])

  // 🧹 Limpar busca
  const clearSearch = useCallback(() => {
    setSearchValue("")
    setSelectedIndex(0)
  }, [])

  // 🎯 Selecionar item específico
  const selectItem = useCallback(
    (index: number) => {
      const item = filteredItems[index]
      if (item) {
        navigateToItem(item)
      }
    },
    [filteredItems, navigateToItem],
  )

  // ⌨️ Navegação por teclado
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isModalOpen) return

      switch (event.key) {
        case "Escape":
          event.preventDefault()
          closeModal()
          break

        case "ArrowDown":
          event.preventDefault()
          setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
          break

        case "ArrowUp":
          event.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
          break

        case "Enter":
          event.preventDefault()
          selectItem(selectedIndex)
          break
      }
    },
    [isModalOpen, filteredItems.length, selectedIndex, closeModal, selectItem],
  )

  // 🎧 Listener para atalhos globais
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      // Ctrl+K para abrir busca
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault()
        openModal()
      }
    }

    document.addEventListener("keydown", handleGlobalKeyDown)
    return () => document.removeEventListener("keydown", handleGlobalKeyDown)
  }, [openModal])

  // 🎧 Listener para navegação no modal
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isModalOpen, handleKeyDown])

  // 🔄 Reset do índice selecionado quando filtros mudam
  useEffect(() => {
    setSelectedIndex(0)
  }, [searchValue])

  return {
    // Estados
    searchValue,
    isModalOpen,
    selectedIndex,
    filteredItems,

    // Ações
    setSearchValue,
    openModal,
    closeModal,
    handleKeyDown,
    selectItem,
    navigateToItem,

    // Utilitários
    clearSearch,
    hasResults: filteredItems.length > 0,
  }
}
