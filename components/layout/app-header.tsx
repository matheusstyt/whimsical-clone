"use client"

import { Search, ExternalLink, User, Check } from "lucide-react"
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
        width: "calc(100vw - 270px)",
        right: 0,
        zIndex: 3,
        background: "#F5F5F5",
        borderBottom: "1px solid #ccccccff",
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 max-w-xs lg:max-w-sm" style={{ width: "calc((100vw * 0.76) * 0.22)" }}>
          <div
            className="relative"
            style={{
              width: "calc((100vw * 0.76) * 0.22)"
            }}
          >
            <Search
              className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-black-100 w-4 h-4"
              style={{
                width: "calc((100vh * 0.06) * 0.34)",
              }}
            />
            <Input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={onOpenSearchModal}
              className="py-1.5 pl-8 w-full text-sm border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 primary-bg-color"
              style={{
                background: "#FFFFFF",
                borderRadius: "calc(100vh * 0.01)",
                border: "1px #ccccccff solid",

                height: "calc(100vh * 0.045)",
                width: "calc((100vw * 0.76) * 0.22)",
                fontSize: "calc((100vh * 0.06) * 0.26)",
              }}
            />
            <div
              className="absolute top-1/2 transform -translate-y-1/2 text-xs text-black-400 bg-gray-100 px-1.5 py-0.5 rounded hidden lg:block"
              style={{
                // background: "#FFFFFF",
                borderRadius: "calc(100vh * 0.014)",
                lineHeight: "1.4",
                // border: "1px #ccccccff solid",

                // height: "calc(100vh * 0.045)",
                // width: "calc((100vw * 0.76) * 0.22)",
                right: "calc(100vw * 0.0055)",
                fontSize: "calc((100vh * 0.06) * 0.2)",
              }}
            >
              CTRL K
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-3">
          <div className="hidden lg:flex items-center space-x-1">
            <div
              className="w-3 h-3 rounded-full flex items-center justify-center border border-black-100"
              style={{
                border: "1px solid #000",
              }}
            >
              <Check className="w-2.5 h-2.5 text-black-100" />
            </div>
            <span
              className="text-black-100"
              style={{
                fontSize: "calc((100vh * 0.06) * 0.28)",
              }}
            >All systems go</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="border-none hover:bg-gray-50 text-sm bg-transparent px-0 py-0"
          >
            <span
              className="hidden sm:inline text-black-100 px-2 flex align-center py-0.5 flex"
              style={{
                background: "#FFFFFF",
                fontSize: "calc((100vh * 0.06) * 0.28)",
                borderRadius: "12px",
              }}
            >Open app</span>
            <ExternalLink className="w-2 h-2" />
          </Button>

        </div>
      </div>
    </header>
  )
}
