"use client"

import { Copy } from "lucide-react"
import { Button } from "@/components/atoms/button/button"
import { Heading } from "@/components/atoms/typography/heading"
import type { ArticleSummary } from "@/types/content"

interface ArticleSidebarProps {
  summary: ArticleSummary[]
  activeSection: string
  scrollToSection: (id: string) => void
  copyLink: () => void
}

export function ArticleSidebar({ summary, activeSection, scrollToSection, copyLink }: ArticleSidebarProps) {
  return (
    <aside className="hidden lg:block bg-gray-100 border-l border-gray-200 min-h-screen" style={{ minWidth: "200px" }}>
      <div className="sticky top-0 p-6">
        <Heading level={3} className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">
          SUMMARY
        </Heading>
        <nav className="space-y-1">
          {summary.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-sm py-2 px-0 transition-colors ${
                activeSection === item.id ? "text-purple-600 font-medium" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>

        {/* Copy Link Button */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={copyLink}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors p-0"
          >
            <Copy className="w-4 h-4" />
            <span>Copy Link</span>
          </Button>
        </div>
      </div>
    </aside>
  )
}
