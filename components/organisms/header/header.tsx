/**
 * 🔝 COMPONENTE HEADER (ORGANISM)
 *
 * Cabeçalho principal que replica exatamente o design do Whimsical.
 * Inclui logo, busca, status e botão de abrir app.
 */

"use client"

import { Search, ExternalLink, Circle } from "lucide-react"

interface HeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
  onOpenSearchModal: () => void
  onOpenSidebar: () => void
}

export function Header({ searchValue, onSearchChange, onOpenSearchModal, onOpenSidebar }: HeaderProps) {
  return (
    <header className="header-container">
      {/* 🔍 Campo de busca */}
      <div className="header-search">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 whimsical-text-muted" />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={onOpenSearchModal}
            className="w-full pl-10 pr-16 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-white px-2 py-1 rounded border hidden lg:block">
            CTRL K
          </div>
        </div>
      </div>

      {/* 🎯 Ações do header */}
      <div className="header-actions">
        {/* 📊 Status do sistema */}
        <div className="header-status hidden lg:flex">
          <Circle className="w-3 h-3 fill-green-500 text-green-500" />
          <span>Loading...</span>
        </div>

        {/* 🚀 Botão Open app */}
        <button className="header-button">
          <span className="hidden sm:inline">Open app</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}
