"use client"

import { Copy } from "lucide-react"
import type { ArticleSummary } from "@/types/content"

interface ArticleSidebarProps {
  summary: ArticleSummary[]
  activeSection: string
  scrollToSection: (id: string) => void
  copyLink: () => void
}

export function ArticleSidebar({ summary, activeSection, scrollToSection, copyLink }: ArticleSidebarProps) {
  return (
    <aside
      className="hidden xl:block bg-gray-100 border-l border-gray-200"
      style={{
        minWidth: "200px",
        right: 0,
        bottom: 0,
        position: "fixed",
        height: "calc(100vh - 61px)",
        width: "10vw"
      }}
    >
      <div className="sticky top-0 p-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">SUMMARY</h3>
        <nav className="space-y-1">
          {summary.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-sm py-2 px-0 transition-colors ${activeSection === item.id ? "text-purple-600 font-medium" : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {item.title}
            </button>
          ))}
        </nav>

        {/* Copy Link Button */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={copyLink}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Copy className="w-4 h-4" />
            <span>Copy Link</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
