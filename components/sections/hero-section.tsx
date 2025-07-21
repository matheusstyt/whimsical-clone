"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

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
  const renderTitle = () => {
    const parts = title.split(/(\{[^}]+\})/)
    return parts.map((part, index) => {
      if (part.startsWith("{") && part.endsWith("}")) {
        const content = part.slice(1, -1)
        return (
          <span
            key={index}
            className="title-size"
          >
            {content}
          </span>
        )
      }
      return (
        <span key={index} className="title-size">
          {part}
        </span>
      )
    })
  }

  return (
    <div
      className="text-center"
      style={{
        // background: "red",
        width: "calc((100vw * 0.76) * 0.8)",
        // margin: "0 auto",
      }}
    >
      <h1 className="text-3xl font-bold leading-tight title-size">{renderTitle()}</h1>
      <p
        className="text-gray-600 text-base mb-8 lg:mb-6 leading-relaxed subtitle-size"
        style={{ color: "#252525" }}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />

      {/* Main Search - Agora abre o modal ao clicar */}
      <div
        className="relative mx-auto px-4"
        style={{
          borderRadius: "calc(100vh * 0.012)",
          background: "#FFFFFF",
          border: "1px #ccccccff solid",
          height: "calc(100vh * 0.052)",
          // width: "calc((100vw * 0.76) * 0.4)",
          width: "calc((100vw * 0.76) * 0.48)",
          display: "flex",
          alignItems: "center",
        }}
      >

        <Search
          className="absolute top-1/2 transform -translate-y-1/2 text-black-100"
          style={{
            width: "calc((100vh * 0.06) * 0.35)",
          }}
        />
        <Input
          type="text"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={onOpenSearchModal}
          onClick={onOpenSearchModal} // Adiciona click handler
          className="pl-2 py-3 w-full border-1 rounded-lg focus:ring-purple-500 focus:border-purple-500 shadow-sm cursor-pointer"
          readOnly // Torna o input apenas para abrir o modal
          style={{
            height: "calc(100vh * 0.052)",
            width: "calc((100vw * 0.76) * 0.4)",
            fontSize: "calc((100vh * 0.06) * 0.28)",
            margin: "0 auto",
          }}
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 bg-gray-100 px-2 py-1 rounded hidden lg:block"
          style={{
            fontSize: "calc((100vh * 0.06) * 0.2)",
            color: "black",
            height: "calc(100vh * 0.026)",
            borderRadius: "calc(100vh * 0.03)",
            display: "flex",
            alignItems: "center",
          }}
        >
          CTRL K
        </div>
      </div>

    </div>
  )
}
