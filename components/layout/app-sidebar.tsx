"use client"
import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"
import type { SidebarItem } from "@/types/content"

interface AppSidebarProps {
  items: SidebarItem[]
  expandedItems: number[]
  onToggleExpanded: (index: number) => void
  onClose: () => void
  currentSlug?: string
}

export function AppSidebar({ items, expandedItems, onToggleExpanded, onClose, currentSlug }: AppSidebarProps) {
  return (
    <aside
      className="xl:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out xl:transform-none primary-bg-color"
      style={{ maxWidth: "300px" }}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-gray-200" style={{ display: "flex", justifyContent: "space-around" }}>
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          onClick={onClose}
        >
          <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="font-semibold text-gray-900">Whimsical</span>
        </Link>
        <span className="text-gray-600 text-sm mt-1 block help-center">Help Center</span>
      </div>

      <nav className="px-4 space-y-1 overflow-y-auto h-full" style={{ height: "100vh" }}>
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

interface SidebarItemProps {
  item: SidebarItem
  index: number
  isExpanded: boolean
  onToggleExpanded: (index: number) => void
  onClose: () => void
  currentSlug?: string
}

function SidebarItemComponent({ item, index, isExpanded, onToggleExpanded, onClose, currentSlug }: SidebarItemProps) {
  return (
    <div style={{ marginBottom: "11px" }}>
      <div
        className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer group"
        onClick={() => {
          if (item.hasChevron) {
            onToggleExpanded(index)
          } else {
            onClose()
          }
        }}
      >
        <div className="flex items-center space-x-2">
          <div dangerouslySetInnerHTML={{ __html: item.iconHtml }} />
          <span className="primary-font-color xl-font">{item.title}</span>
        </div>
        {item.hasChevron && (
          <ChevronRight
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
          />
        )}
        {item.hasExternalLink && <ExternalLink className="w-4 h-4 text-gray-400" />}
      </div>
      {item.hasChevron && isExpanded && item.subitems && (
        <div className="ml-7 mt-1 space-y-1">
          {item.subitems.map((subitem, subIndex) => (
            <Link
              key={subIndex}
              href={`/article/${subitem.slug}`}
              className={`block px-3 py-1 text-sm rounded-md hover:bg-gray-50 cursor-pointer primary-font-color xl-sub-item primary-font-color xl-font ${
                currentSlug === subitem.slug ? "bg-purple-50 text-purple-700 font-medium" : "text-gray-600"
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
