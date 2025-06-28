"use client"

import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"
import { Icon } from "@/components/atoms/icon/icon"
import { Text } from "@/components/atoms/typography/text"
import type { SidebarItem } from "@/types/content"

interface SidebarItemProps {
  item: SidebarItem
  index: number
  isExpanded: boolean
  onToggleExpanded: (index: number) => void
  onClose: () => void
  currentSlug?: string
}

export function SidebarItemComponent({
  item,
  index,
  isExpanded,
  onToggleExpanded,
  onClose,
  currentSlug,
}: SidebarItemProps) {
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
          <Icon html={item.iconHtml} />
          <Text className="primary-font-color xl-font">{item.title}</Text>
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
