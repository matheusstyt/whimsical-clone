"use client"

/**
 * 🗂️ HOOK PERSONALIZADO PARA GERENCIAR SIDEBAR
 *
 * Centraliza toda a lógica do menu lateral, incluindo:
 * - Estado de expansão dos itens
 * - Controle de abertura/fechamento
 * - Persistência do estado
 */

import { useState, useCallback, useEffect } from "react"
import { STORAGE } from "@/config/constants"

interface UseSidebarReturn {
  // Estados do sidebar
  isOpen: boolean
  expandedItems: number[]

  // Ações do sidebar
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  toggleItem: (index: number) => void

  // Utilitários
  isItemExpanded: (index: number) => boolean
  collapseAll: () => void
}

/**
 * Hook para gerenciar estado do sidebar
 */
export function useSidebar(): UseSidebarReturn {
  // 📊 Estados do sidebar
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  // 📂 Carregar estado salvo do localStorage
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(STORAGE.KEYS.SIDEBAR_STATE)
      if (savedState) {
        const { expandedItems: saved } = JSON.parse(savedState)
        setExpandedItems(saved || [])
      }
    } catch (error) {
      console.warn("Erro ao carregar estado do sidebar:", error)
    }
  }, [])

  // 💾 Salvar estado no localStorage
  useEffect(() => {
    try {
      const stateToSave = { expandedItems }
      localStorage.setItem(STORAGE.KEYS.SIDEBAR_STATE, JSON.stringify(stateToSave))
    } catch (error) {
      console.warn("Erro ao salvar estado do sidebar:", error)
    }
  }, [expandedItems])

  // 📂 Abrir sidebar
  const openSidebar = useCallback(() => {
    setIsOpen(true)
  }, [])

  // ❌ Fechar sidebar
  const closeSidebar = useCallback(() => {
    setIsOpen(false)
  }, [])

  // 🔄 Alternar sidebar
  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  // 🔄 Alternar expansão de item
  const toggleItem = useCallback((index: number) => {
    setExpandedItems((prev) => {
      const isExpanded = prev.includes(index)

      if (isExpanded) {
        // Remove o item da lista (colapsa)
        return prev.filter((i) => i !== index)
      } else {
        // Adiciona o item à lista (expande)
        return [...prev, index]
      }
    })
  }, [])

  // ❓ Verificar se item está expandido
  const isItemExpanded = useCallback(
    (index: number) => {
      return expandedItems.includes(index)
    },
    [expandedItems],
  )

  // 📁 Colapsar todos os itens
  const collapseAll = useCallback(() => {
    setExpandedItems([])
  }, [])

  return {
    // Estados
    isOpen,
    expandedItems,

    // Ações
    openSidebar,
    closeSidebar,
    toggleSidebar,
    toggleItem,

    // Utilitários
    isItemExpanded,
    collapseAll,
  }
}
