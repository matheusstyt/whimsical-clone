"use client"

/**
 * 🔍 HOOK PERSONALIZADO PARA FUNCIONALIDADE DE BUSCA
 *
 * Este hook centraliza toda a lógica relacionada à busca,
 * incluindo estado, filtros e navegação por teclado.
 */

import { useState, useCallback, useEffect } from "react"
import type { SidebarItem } from "@/types/content"

interface UseSearchProps {
  items: SidebarItem[]
  currentSlug?: string // Adicionar slug atual
}

interface SearchResult {
  item: SidebarItem
  type: "category" | "article"
  slug?: string
  title: string
  isCurrentArticle?: boolean // Novo campo para indicar se é o artigo atual
}

interface UseSearchReturn {
  // Estados da busca
  searchValue: string
  isModalOpen: boolean
  selectedIndex: number
  filteredItems: SearchResult[]

  // Ações da busca
  setSearchValue: (value: string) => void
  openModal: () => void
  closeModal: () => void
  handleKeyDown: (event: KeyboardEvent) => void
  selectItem: (index: number) => void
  navigateToItem: (item: SearchResult) => void

  // Utilitários
  clearSearch: () => void
  hasResults: boolean
  currentArticleIndex: number // Índice do artigo atual nos resultados
}

/**
 * Hook para gerenciar funcionalidade de busca
 */
export function useSearch({ items, currentSlug }: UseSearchProps): UseSearchReturn {
  // 📊 Estados da busca
  const [searchValue, setSearchValue] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // 🔍 Filtrar itens baseado na busca
  const filteredItems = useCallback((): SearchResult[] => {
    const results: SearchResult[] = []

    if (!searchValue.trim()) {
      // Se não há busca, mostra todas as categorias
      items.slice(0, -1).forEach((item) => {
        if (!item || !item.title) return

        results.push({
          item,
          type: "category",
          title: item.title,
          isCurrentArticle: false,
        })
      })
    } else {
      // Se há busca, filtra por termo
      const searchTerm = searchValue.toLowerCase()

      items.slice(0, -1).forEach((item) => {
        if (!item || !item.title) return

        // Buscar na categoria
        if (item.title.toLowerCase().includes(searchTerm) || item.description?.toLowerCase().includes(searchTerm)) {
          results.push({
            item,
            type: "category",
            title: item.title,
            isCurrentArticle: false,
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
              isCurrentArticle: subitem.slug === currentSlug, // Marcar se é o artigo atual
            })
          }
        })
      })
    }

    return results
  }, [items, searchValue, currentSlug])()

  // 🎯 Encontrar índice do artigo atual
  const currentArticleIndex = useCallback(() => {
    if (!currentSlug) return -1

    return filteredItems.findIndex((item) => item.type === "article" && item.slug === currentSlug)
  }, [filteredItems, currentSlug])()

  // 🎯 Navegar para item
  const navigateToItem = useCallback((item: SearchResult) => {
    if (item.type === "article" && item.slug) {
      // Simular navegação para artigo específico
      console.log(`Navegando para artigo: /article/${item.slug}`)

      // Em um ambiente real, usaria:
      // router.push(`/article/${item.slug}`)
    } else if (item.type === "category" && item.item.subitems && item.item.subitems.length > 0) {
      // Navegar para primeiro artigo da categoria
      console.log(`Navegando para categoria: /article/${item.item.subitems[0].slug}`)

      // Em um ambiente real, usaria:
      // router.push(`/article/${item.item.subitems[0].slug}`)
    }
    closeModal()
  }, [])

  // 🎯 Abrir modal de busca
  const openModal = useCallback(() => {
    setIsModalOpen(true)

    // Se há um artigo atual, definir como selecionado
    if (currentArticleIndex !== -1) {
      setSelectedIndex(currentArticleIndex)
    } else {
      // Se não há artigo atual, procurar pela categoria do artigo atual
      const categoryIndex = filteredItems.findIndex((item) => {
        if (item.type === "category" && item.item.subitems && currentSlug) {
          return item.item.subitems.some((subitem) => subitem.slug === currentSlug)
        }
        return false
      })

      setSelectedIndex(categoryIndex !== -1 ? categoryIndex : 0)
    }
  }, [currentArticleIndex, filteredItems, currentSlug])

  // ❌ Fechar modal de busca
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setSearchValue("")
    setSelectedIndex(0)
  }, [])

  // 🧹 Limpar busca
  const clearSearch = useCallback(() => {
    setSearchValue("")

    // Resetar para item atual quando limpar busca
    if (currentArticleIndex !== -1) {
      setSelectedIndex(currentArticleIndex)
    } else {
      setSelectedIndex(0)
    }
  }, [currentArticleIndex])

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

  // 🔄 Atualizar selectedIndex quando filtros mudam
  useEffect(() => {
    if (!searchValue.trim()) {
      // Se não há busca, definir baseado no item atual
      if (currentArticleIndex !== -1) {
        setSelectedIndex(currentArticleIndex)
      } else {
        // Procurar pela categoria do artigo atual
        const categoryIndex = filteredItems.findIndex((item) => {
          if (item.type === "category" && item.item.subitems && currentSlug) {
            return item.item.subitems.some((subitem) => subitem.slug === currentSlug)
          }
          return false
        })

        setSelectedIndex(categoryIndex !== -1 ? categoryIndex : 0)
      }
    } else {
      // Se há busca, resetar para 0 ou manter artigo atual se visível
      if (currentArticleIndex !== -1) {
        setSelectedIndex(currentArticleIndex)
      } else {
        setSelectedIndex(0)
      }
    }
  }, [searchValue, currentArticleIndex, filteredItems, currentSlug])

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
    currentArticleIndex,
  }
}
