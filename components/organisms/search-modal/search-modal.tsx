/**
 * 🔍 COMPONENTE SEARCH MODAL (ORGANISM)
 *
 * Modal completo de busca com navegação por teclado.
 * Combina múltiplos molecules e atoms para criar uma experiência rica.
 */

"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { SearchInput } from "@/components/molecules/search-input/search-input"
import { Icon } from "@/components/atoms/icon/icon"
import { Heading } from "@/components/atoms/typography/heading"
import { Text } from "@/components/atoms/typography/text"
import { Button } from "@/components/atoms/button/button"
import { SEARCH_CONFIG } from "@/config/constants"
import type { SidebarItem } from "@/types/content"

// 🎯 Interface do componente principal
interface SearchModalProps {
  /** Se o modal está aberto */
  isOpen: boolean
  /** Função para fechar o modal */
  onClose: () => void
  /** Valor atual da busca */
  searchValue: string
  /** Função chamada quando a busca muda */
  onSearchChange: (value: string) => void
  /** Itens para busca */
  items: SidebarItem[]
  /** Índice do item selecionado */
  selectedIndex?: number
}

/**
 * Componente SearchModal - Organism completo de busca
 *
 * Funcionalidades:
 * - Busca em tempo real
 * - Navegação por teclado (↑↓ Enter Esc)
 * - Click fora para fechar
 * - Navegação para artigos
 * - Feedback visual de seleção
 *
 * @example
 * ```tsx
 * <SearchModal
 *   isOpen={isModalOpen}
 *   onClose={() => setIsModalOpen(false)}
 *   searchValue={searchTerm}
 *   onSearchChange={setSearchTerm}
 *   items={sidebarItems}
 * />
 * ```
 */
export function SearchModal({
  isOpen,
  onClose,
  searchValue,
  onSearchChange,
  items,
  selectedIndex = 0,
}: SearchModalProps) {
  // 🎯 Referências DOM
  const modalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // ⌨️ Manipular teclas do modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  // 🎯 Navegar para item selecionado
  const handleItemClick = (item: SidebarItem) => {
    // Se tem subitems, navega para o primeiro
    if (item.subitems && item.subitems.length > 0) {
      router.push(`/article/${item.subitems[0].slug}`)
      onClose()
    } else if (!item.hasExternalLink) {
      // Para itens sem subitems, apenas fecha o modal
      // Pode ser customizado para navegar para página de categoria
      onClose()
    }
  }

  // 🖱️ Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevenir scroll do body quando modal está aberto
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // 🚫 Não renderizar se fechado
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 flex items-start justify-center pt-16 lg:pt-24 px-4">
      <div
        ref={modalRef}
        className="bg-white shadow-2xl w-full max-w-xl lg:max-w-2xl max-h-96 modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        {/* 🔍 Cabeçalho com busca */}
        <SearchModal.Header searchValue={searchValue} onSearchChange={onSearchChange} onKeyDown={handleKeyDown} />

        {/* 📋 Lista de resultados */}
        <SearchModal.Content items={items} onItemClick={handleItemClick} selectedIndex={selectedIndex} />

        {/* 🎮 Rodapé com controles */}
        <SearchModal.Footer onClose={onClose} />
      </div>
    </div>
  )
}

// 🧩 SUBCOMPONENTES (Composition Pattern)

/**
 * Cabeçalho do modal com input de busca
 */
SearchModal.Header = function SearchModalHeader({
  searchValue,
  onSearchChange,
  onKeyDown,
}: {
  searchValue: string
  onSearchChange: (value: string) => void
  onKeyDown: (e: React.KeyboardEvent) => void
}) {
  return (
    <div className="p-3 lg:p-4 border-b border-gray-100">
      <SearchInput
        placeholder={SEARCH_CONFIG.PLACEHOLDERS.MODAL}
        value={searchValue}
        onChange={onSearchChange}
        className="w-full"
        size="lg"
      />
    </div>
  )
}

/**
 * Conteúdo principal com lista de itens
 */
SearchModal.Content = function SearchModalContent({
  items,
  onItemClick,
  selectedIndex = 0,
}: {
  items: SidebarItem[]
  onItemClick: (item: SidebarItem) => void
  selectedIndex?: number
}) {
  // 🔍 Filtrar itens de contato (último item geralmente)
  const searchableItems = items.slice(0, -1)

  return (
    <div className="max-h-80 overflow-y-auto bg-white p-1" role="listbox" aria-label="Resultados da busca">
      {searchableItems.map((item, index) => (
        <div
          key={index}
          className={`
            flex items-start space-x-3 p-3 lg:p-4 cursor-pointer border-b border-gray-50 last:border-b-0 transition-colors
            ${index === selectedIndex ? "bg-purple-50" : "hover:bg-gray-50"}
          `}
          onClick={() => onItemClick(item)}
          role="option"
          aria-selected={index === selectedIndex}
        >
          {/* 🎨 Ícone do item */}
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-5 lg:w-6 h-5 lg:h-6 rounded bg-slate-100 flex items-center justify-center">
              <Icon html={item.iconHtml} size="sm" />
            </div>
          </div>

          {/* 📝 Conteúdo do item */}
          <div className="flex-1 min-w-0">
            <Heading level={3} className="font-medium text-gray-900 text-sm mb-1">
              {item.title}
            </Heading>
            {item.description && (
              <Text variant="caption" className="text-xs leading-relaxed">
                {item.description}
              </Text>
            )}
          </div>
        </div>
      ))}

      {/* 🚫 Estado vazio */}
      {searchableItems.length === 0 && (
        <div className="p-8 text-center">
          <Text variant="caption" color="muted">
            Nenhum resultado encontrado
          </Text>
        </div>
      )}
    </div>
  )
}

/**
 * Rodapé com instruções de uso
 */
SearchModal.Footer = function SearchModalFooter({
  onClose,
}: {
  onClose: () => void
}) {
  return (
    <div className="modal-footer px-3 lg:px-4 py-2.5 lg:py-3 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between text-xs text-gray-500">
      {/* 🎮 Instruções de navegação */}
      <div className="flex items-center space-x-3 lg:space-x-4">
        <span className="flex items-center space-x-1.5">
          <kbd className="px-1.5 lg:px-2 py-0.5 lg:py-1 bg-white border border-gray-200 rounded text-xs font-medium">
            ↵
          </kbd>
          <span>Selecionar</span>
        </span>
        <span className="flex items-center space-x-1.5">
          <kbd className="px-1.5 lg:px-2 py-0.5 lg:py-1 bg-white border border-gray-200 rounded text-xs font-medium">
            ↑↓
          </kbd>
          <span>Navegar</span>
        </span>
      </div>

      {/* ❌ Controles de fechamento */}
      <div className="flex items-center space-x-3 lg:space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="hover:text-gray-700 transition-colors p-0 h-auto"
        >
          Fechar
        </Button>
        <span className="flex items-center space-x-1.5">
          <kbd className="px-1.5 lg:px-2 py-0.5 lg:py-1 bg-white border border-gray-200 rounded text-xs font-medium">
            ESC
          </kbd>
        </span>
      </div>
    </div>
  )
}
