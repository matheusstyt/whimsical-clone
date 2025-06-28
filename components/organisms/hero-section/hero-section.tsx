/**
 * 🦸 COMPONENTE HERO SECTION (ORGANISM)
 *
 * Seção principal da homepage que replica o design do Whimsical.
 * Inclui título com gradiente, subtítulo e busca principal.
 */

"use client"

import { Search } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  searchPlaceholder: string
  searchValue: string
  onSearchChange: (value: string) => void
  onOpenSearchModal?: () => void
}

export function HeroSection({
  title,
  subtitle,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  onOpenSearchModal,
}: HeroSectionProps) {
  // 🎨 Renderizar título com gradiente
  const renderTitle = () => {
    const parts = title.split(/(\{[^}]+\})/)
    return parts.map((part, index) => {
      if (part.startsWith("{") && part.endsWith("}")) {
        const content = part.slice(1, -1)
        return (
          <span key={index} className="whimsical-gradient">
            {content}
          </span>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <section className="hero-section">
      {/* 🎯 Título principal */}
      <h1 className="hero-title">{renderTitle()}</h1>

      {/* 📝 Subtítulo */}
      <div className="hero-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />

      {/* 🔍 Campo de busca principal */}
      <div className="hero-search">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={onOpenSearchModal}
            className="w-full pl-12 pr-20 py-3 text-base border-2 border-indigo-200 rounded-xl bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 shadow-sm"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-md hidden lg:block">
            CTRL K
          </div>
        </div>
      </div>
    </section>
  )
}
