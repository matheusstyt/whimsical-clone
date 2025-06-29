"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { defaultContent } from "@/data/content-config"
import type { ContentConfig } from "@/types/content"

interface ContentContextType {
  content: ContentConfig
  updateContent: (section: string, data: any) => void
  resetContent: () => void
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentConfig>(defaultContent)

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem("whimsical-content")
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent))
      } catch (error) {
        console.error("Failed to parse saved content:", error)
      }
    }
  }, [])

  // Save content to localStorage whenever it changes
  useEffect(() => {
    // localStorage.setItem("whimsical-content", JSON.stringify(content))
  }, [content])

  const updateContent = (section: string, data: any) => {
    setContent((prev) => ({
      ...prev,
      [section]: data,
    }))
  }

  const resetContent = () => {
    setContent(defaultContent)
    // localStorage.removeItem("whimsical-content")
  }

  return <ContentContext.Provider value={{ content, updateContent, resetContent }}>{children}</ContentContext.Provider>
}

export function useContent() {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider")
  }
  return context
}
