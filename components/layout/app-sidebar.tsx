"use client"
import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"
import type { SidebarItem } from "@/types/content"
import LogoPassChumbo from "../../public/logo_pass_2025_chumbo.svg"

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
      style={{
        width: "270px",
        position: "fixed",
        background: "#F5F5F5",
        borderRight: "1px solid #ccccccff",
      }}
    >
      {/* Sidebar Header */}
      <div
        className="border-gray-200 pl-7 pr-5 py-2"
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          onClick={onClose}
        >
          <img src={LogoPassChumbo} />
        </Link>
        <span
          className="text-black-600 font-bold text-sm mt-1 block py-1 px-2"
          style={{
            color: "#000000",
            background: "#FFFFFF",
            fontSize: "calc((100vh * 0.06) * 0.26)",
            borderRadius: "calc(100vh * 0.26)",
          }}
        >Help Center</span>
      </div>

      <nav
        className="px-4 overflow-y-auto h-full"
      >
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
    <div
    >
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
        <div
          className="flex items-center space-x-2"
        >
          <div dangerouslySetInnerHTML={{ __html: item.iconHtml }} />
          <span
            className="primary-font-color xl-font"
            style={{
              color: "#000000",
              fontSize: "calc((100vh * 0.06) * 0.29)",
            }}
          >
            {item.title}
          </span>
        </div>
        {/* {item.hasChevron && (
          <ChevronRight
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
          />
        )} */}
        {item.hasExternalLink && <ExternalLink className="w-4 h-4 text-gray-400" />}
      </div>
      {item.hasChevron && isExpanded && item.subitems && (
        <div className="ml-7 mt-1 space-y-1">
          {item.subitems.map((subitem, subIndex) => (
            <Link
              key={subIndex}
              href={`/article/${subitem.slug}`}
              className={`block px-3 py-1 text-sm rounded-md hover:bg-gray-50 cursor-pointer primary-font-color xl-sub-item primary-font-color xl-font ${currentSlug === subitem.slug ? "bg-purple-50 text-purple-700 font-medium" : "text-gray-600"
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
