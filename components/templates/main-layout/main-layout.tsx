/**
 * 🏗️ LAYOUT PRINCIPAL (TEMPLATE)
 *
 * Layout que replica exatamente a estrutura do Whimsical.
 * Grid layout com sidebar fixo e conteúdo responsivo.
 */

"use client"

import type React from "react"
import { useContent } from "@/contexts/content-context"
import { useSidebar } from "@/hooks/use-sidebar"
import { Sidebar } from "@/components/organisms/sidebar/sidebar"
import { Header } from "@/components/organisms/header/header"
import { SearchModal } from "@/components/organisms/search-modal/search-modal"

interface MainLayoutProps {
  children: React.ReactNode
  searchValue?: string
  onSearchChange?: (value: string) => void
  mainSearchValue?: string
  onMainSearchChange?: (value: string) => void
  onOpenSearchModal?: () => void
  isSearchModalOpen?: boolean
  onCloseSearchModal?: () => void
  currentSlug?: string
}

export function MainLayout({
  children,
  searchValue = "",
  onSearchChange = () => {},
  mainSearchValue = "",
  onMainSearchChange = () => {},
  onOpenSearchModal = () => {},
  isSearchModalOpen = false,
  onCloseSearchModal = () => {},
  currentSlug,
}: MainLayoutProps) {
  const { content } = useContent()
  const { isOpen: sidebarOpen, expandedItems, openSidebar, closeSidebar, toggleItem } = useSidebar()

  return (
    <div className="whimsical-bg min-h-screen">
      <div className="main-container">
        {/* 📱 Overlay mobile */}
        {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeSidebar} />}

        {/* 🗂️ Sidebar */}
        <Sidebar
          items={content.sidebar.items}
          expandedItems={expandedItems}
          onToggleExpanded={toggleItem}
          onClose={closeSidebar}
          currentSlug={currentSlug}
          isOpen={sidebarOpen}
        />

        {/* 📄 Conteúdo principal */}
        <main className="main-content">
          {/* 🔝 Header */}
          <Header
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            onOpenSearchModal={onOpenSearchModal}
            onOpenSidebar={openSidebar}
          />

          {/* 📋 Área de conteúdo */}
          <div className="content-area">{children}</div>
        </main>
      </div>

      {/* 🔍 Modal de busca */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={onCloseSearchModal}
        searchValue={mainSearchValue}
        onSearchChange={onMainSearchChange}
        items={content.sidebar.items}
      />
    </div>
  )
}
