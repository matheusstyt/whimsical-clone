"use client"

import type React from "react"
import { useMemo } from "react"
import type { ReactElement } from "react"
import { useRef, useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { SidebarItem } from "@/types/content"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  searchValue: string
  onSearchChange: (value: string) => void
  items: SidebarItem[]
}

export function SearchModal({
  isOpen,
  onClose,
  searchValue,
  onSearchChange,
  items,
}: SearchModalProps): ReactElement | null {
  const pathname = usePathname();
  const modalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0)

  // 🔍 Filtrar itens baseado na busca - agora retorna SidebarItem diretamente
  const filteredItems = useMemo(() => {
    if (!searchValue.trim()) {
      // Se não há busca, mostra todos os itens (exceto "Contact us")
      return items.slice(0, -1).filter((item) => item && item.iconHtml)
    }

    const searchTerm = searchValue.toLowerCase()
    const results: SidebarItem[] = []

    items.slice(0, -1).forEach((item) => {
      // Verificação de segurança
      if (!item || !item.title) return

      // Buscar na categoria
      if (item.title.toLowerCase().includes(searchTerm) || item.description?.toLowerCase().includes(searchTerm)) {
        results.push(item)
      }

      // Buscar nos subitens (artigos) - adiciona o item pai se encontrar subitem
      const hasMatchingSubitem = item.subitems?.some(
        (subitem) => subitem && subitem.title && subitem.title.toLowerCase().includes(searchTerm),
      )

      if (hasMatchingSubitem && !results.includes(item)) {
        results.push(item)
      }
    })

    return results
  }, [items, searchValue])

  // 🎯 Navegar para item selecionado
  const navigateToItem = (item: SidebarItem) => {
    // Se tem subitems, navega para o primeiro
    if (item.subitems && item.subitems.length > 0) {
      router.push(`/article/${item.subitems[0].slug}`)
    }

    onClose()
  }

  // ⌨️ Manipular teclas do modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        onClose()
        break
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
        break
      case "Enter":
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          navigateToItem(filteredItems[selectedIndex])
        }
        break
    }
  }

  // 🔄 Reset do índice selecionado quando filtros mudam
  useEffect(() => {
    // let selectedItem: string = pathname.split("/")[2]
    // setSelectedIndex(0)

    console.log()

    if (pathname.split("/")[1] === "article") {
      let selectedItem: string = pathname.split("/")[2];
      const selectedIndex = items.findIndex(item => item.title.toLowerCase().replace(" ", "-") === selectedItem.toLowerCase());

      if (selectedIndex !== -1) {
        setSelectedIndex(selectedIndex);
      } else {
        setSelectedIndex(0); // Valor padrão caso não encontre
      }
    } else setSelectedIndex(0); 

    // console.log(items);
  }, [searchValue])

  // 🖱️ Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

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
        <SearchModal.Header
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onKeyDown={handleKeyDown}
        />
        <SearchModal.Content
          items={filteredItems}
          onItemClick={navigateToItem}
          selectedIndex={selectedIndex}
          searchValue={searchValue}
        />
        <SearchModal.Footer onClose={onClose} />
      </div>
    </div>
  )
}

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
}): ReactElement {
  return (
    <div className="p-3 lg:p-4 border-b border-gray-100">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search help articles (e.g. flowcharts or settings)"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="pl-10 py-2.5 lg:py-3 w-full border-0 focus:ring-0 text-sm lg:text-base bg-transparent"
          autoFocus
        />
      </div>
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
  searchValue,
}: {
  items: SidebarItem[]
  onItemClick: (item: SidebarItem) => void
  selectedIndex?: number
  searchValue: string
}): ReactElement {
  // 🎨 Destacar termo de busca
  const highlightSearchTerm = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text
    const regex = new RegExp(`(${searchTerm})`, "gi")
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>')
  }

  return (
    <div className="max-h-80 overflow-y-auto bg-white p-1" role="listbox" aria-label="Resultados da busca">
      {items.length > 0 ? (
        items.map((item, index) => {
          if (!item) return null

          return (
            <div
              key={`${item.title}-${index}`}
              className={`
                flex items-start space-x-3 p-3 lg:p-4 cursor-pointer border-b border-gray-50 last:border-b-0 transition-colors
                ${index === selectedIndex ? "bg-purple-50 border-purple-100" : "hover:bg-gray-50"}
              `}
              onClick={() => onItemClick(item)}
              role="option"
              aria-selected={index === selectedIndex}
            >
              {/* 🎨 Ícone do item */}
              <div className="flex-shrink-0 mt-0.5">
                <div
                  className={`
                    w-5 lg:w-6 h-5 lg:h-6 rounded bg-slate-100 flex items-center justify-center
                    ${index === selectedIndex ? "bg-purple-100" : ""}
                  `}
                >
                  <div className="w-4 h-4 text-gray-600" dangerouslySetInnerHTML={{ __html: item.iconHtml || "" }} />
                </div>
              </div>

              {/* 📝 Conteúdo do item */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className="font-medium text-gray-900 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchTerm(item.title || "", searchValue),
                    }}
                  />
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {item.subitems?.length || 0} artigos
                  </span>
                </div>

                {/* 📝 Descrição */}
                {item.description && (
                  <p
                    className="text-gray-500 text-xs leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchTerm(item.description, searchValue),
                    }}
                  />
                )}

                {/* 📋 Mostrar alguns subitens se houver busca */}
                {searchValue && item.subitems && (
                  <div className="mt-2">
                    {item.subitems
                      .filter((subitem) => subitem.title.toLowerCase().includes(searchValue.toLowerCase()))
                      .slice(0, 2)
                      .map((subitem, subIndex) => (
                        <div key={subIndex} className="text-xs text-blue-600 truncate">
                          → {subitem.title}
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* 🎯 Indicador de seleção */}
              {index === selectedIndex && (
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
              )}
            </div>
          )
        })
      ) : (
        /* 🚫 Estado vazio */
        <div className="p-8 text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-gray-500 text-sm mb-1">
            {searchValue ? "Nenhum resultado encontrado" : "Digite para buscar"}
          </p>
          {searchValue && <p className="text-gray-400 text-xs">Tente usar termos diferentes ou mais gerais</p>}
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
}): ReactElement {
  return (
    <div className="modal-footer px-3 lg:px-4 py-2.5 lg:py-3 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between text-xs text-gray-500">
      <div className="flex items-center space-x-3 lg:space-x-4">
        <span className="flex items-center space-x-1.5">
          <kbd className="px-1.5 lg:px-2 py-0.5 lg:py-1 bg-white border border-gray-200 rounded text-xs font-medium">
            ↵
          </kbd>
          <span>Abrir</span>
        </span>
        <span className="flex items-center space-x-1.5">
          <kbd className="px-1.5 lg:px-2 py-0.5 lg:py-1 bg-white border border-gray-200 rounded text-xs font-medium">
            ↑↓
          </kbd>
          <span>Navegar</span>
        </span>
      </div>
      <div className="flex items-center space-x-3 lg:space-x-4">
        <button onClick={onClose} className="hover:text-gray-700 transition-colors text-xs">
          Fechar
        </button>
        <span className="flex items-center space-x-1.5">
          <kbd className="px-1.5 lg:px-2 py-0.5 lg:py-1 bg-white border border-gray-200 rounded text-xs font-medium">
            ESC
          </kbd>
        </span>
      </div>
    </div>
  )
}
