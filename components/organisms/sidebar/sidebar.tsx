/**
 * 🗂️ COMPONENTE SIDEBAR (ORGANISM)
 *
 * Menu lateral que replica exatamente o design do Whimsical.
 * Inclui logo, navegação hierárquica e estados visuais.
 */

"use client"

import { ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { SidebarItem } from "@/types/content"

interface SidebarProps {
  items: SidebarItem[]
  expandedItems: number[]
  onToggleExpanded: (index: number) => void
  onClose: () => void
  currentSlug?: string
  isOpen?: boolean
}

export function Sidebar({ items, expandedItems, onToggleExpanded, onClose, currentSlug, isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar-container ${isOpen ? "open" : ""}`}>
      {/* 🏷️ Cabeçalho do sidebar */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="w-3 h-3 bg-white rounded-sm"></div>
        </div>
        <span className="sidebar-brand">Whimsical</span>
        <span className="sidebar-subtitle">Help Center</span>
      </div>

      {/* 🧭 Navegação principal */}
      <nav className="sidebar-nav">
        {items.map((item, index) => (
          <SidebarItemComponent
            key={index}
            item={item}
            index={index}
            isExpanded={expandedItems.includes(index)}
            onToggleExpanded={onToggleExpanded}
            onClose={onClose}
            currentSlug={currentSlug}
          />
        ))}
      </nav>
    </aside>
  )
}

interface SidebarItemComponentProps {
  item: SidebarItem
  index: number
  isExpanded: boolean
  onToggleExpanded: (index: number) => void
  onClose: () => void
  currentSlug?: string
}

function SidebarItemComponent({
  item,
  index,
  isExpanded,
  onToggleExpanded,
  onClose,
  currentSlug,
}: SidebarItemComponentProps) {
  const handleClick = () => {
    if (item.hasChevron) {
      onToggleExpanded(index)
    } else {
      onClose()
    }
  }

  return (
    <div className="space-y-1">
      {/* 📋 Item principal */}
      <div
        className={`sidebar-item ${currentSlug && item.subitems?.some((sub) => sub.slug === currentSlug) ? "active" : ""}`}
        onClick={handleClick}
      >
        <div className="sidebar-item-icon" dangerouslySetInnerHTML={{ __html: item.iconHtml }} />
        <span className="sidebar-item-text">{item.title}</span>
        {item.hasChevron && <ChevronRight className={`sidebar-item-chevron ${isExpanded ? "expanded" : ""}`} />}
        {item.hasExternalLink && <ExternalLink className="w-3 h-3 opacity-50" />}
      </div>

      {/* 📂 Subitens expandidos */}
      {item.hasChevron && isExpanded && item.subitems && (
        <div className="ml-8 space-y-1">
          {item.subitems.map((subitem, subIndex) => (
            <Link
              key={subIndex}
              href={`/article/${subitem.slug}`}
              className={`block py-1 px-2 text-sm rounded transition-colors ${
                currentSlug === subitem.slug
                  ? "text-indigo-600 bg-indigo-50 font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={onClose}
            >
              {subitem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
