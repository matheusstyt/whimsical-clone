"use client"

import { Search, ExternalLink, User, Check, CircleCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

interface AppHeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
  onOpenSearchModal: () => void
  onOpenSidebar: () => void
}

export function AppHeader({ searchValue, onSearchChange, onOpenSearchModal, onOpenSidebar }: AppHeaderProps) {
  return (
    <header
      className={
        clsx(
          "sticky top-0",
          "bg-white border-b border-gray-200 px-6 xl:px-6 py-2.5 primary-bg-color",
          "z-10 bg-[#F5F5F5]" ,
          "border-b border-l border-gray-200"
        )
      }
    >
      <div className="flex items-center justify-between w-full">
        <div 
          className={
            clsx(
              "relative flex justify-between items-center",
              "border rounded-xl",
              "p-2 gap-2"
            )
          }
        >
          <Search
            className="text-gray-500 w-4 h-4"
          />
          <p className="font-semibold text-gray-500 mr-24">Search</p>
          <div className="flex gap-1">
            <span
              className="text-xs text-gray-500 font-semibold bg-gray-100 px-1.5 py-0.5 rounded hidden lg:block"
            > CTRL </span>
            <span
              className="text-xs text-gray-500 font-semibold bg-gray-100 px-1.5 py-0.5 rounded hidden lg:block"
            > K </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-3">
          <div className="hidden lg:flex items-center space-x-1">
            <CircleCheck size={20} className="text-gray-500" />
            <span
              className="text-gray-500 font-semibold text-xs"
            >All systems go</span>
          </div>

          <Button
            variant="outline"
            className={
              clsx(
                "border border-gray-200 rounded-xl text-sm",
                "bg-gray-200 hover:bg-gray-600",
                "px-3"
              )
            }
          >
            <span
              className="text-gray-600 font-semibold text-xs align-center"
            >Open app</span>
            <ExternalLink className="text-gray-600 w-2 h-2" />
          </Button>
        </div>
      </div>
    </header>
  )
}
