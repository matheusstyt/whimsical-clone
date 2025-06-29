"use client"

import { Search, ExternalLink, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AppHeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
  onOpenSearchModal: () => void
  onOpenSidebar: () => void
}

export function AppHeader({ searchValue, onSearchChange, onOpenSearchModal, onOpenSidebar }: AppHeaderProps) {
  return (
    <header
      className="bg-white border-b border-gray-200 px-4 xl:px-6 py-2.5 primary-bg-color"
      style={{
        position: "fixed",
        width: "calc(100vw - 300px)",
        right: 0,
        zIndex: 3,
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 max-w-xs lg:max-w-sm" style={{ maxWidth: "17rem" }}>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={onOpenSearchModal}
              className="pl-8 pr-12 py-1.5 w-full text-sm border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 primary-bg-color"
            />
            <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded hidden lg:block">
              CTRL K
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-3">
          <div className="hidden lg:flex items-center space-x-2.5">
            <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
              <User className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-gray-500 text-sm">All systems go</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-gray-700 border-gray-300 hover:bg-gray-50 text-sm px-2 lg:px-3 py-1.5 primary-bg-color bg-transparent"
          >
            <span className="hidden sm:inline">Open app</span>
            <ExternalLink className="w-3.5 h-3.5 sm:ml-1.5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
