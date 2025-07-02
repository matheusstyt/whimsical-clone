"use client"

import { useState } from "react"
import { useContent } from "@/contexts/content-context"
import { Layout } from "@/components/layout/layout"
import { CategoriesGrid } from "@/components/sections/categories-grid"
import { HeroSection } from "@/components/sections/hero-section"

export default function HelpPage() {
  const { content } = useContent()
  const [searchValue, setSearchValue] = useState("")

  return (
    <Layout searchValue={searchValue} onSearchChange={setSearchValue}>
      <div className="px-4 lg:px-6 py-8" style={{ paddingTop: "80px" }}>
        <div className="max-w-6xl ttt">
          <HeroSection
            title="Central de {Ajuda}"
            subtitle="Encontre respostas, ganhe conhecimento e<br />aprenda a trabalhar mais rápido no Whimsical."
            searchPlaceholder="Buscar artigos de ajuda (ex: fluxogramas, integrações ou configurações)"
            searchValue={searchValue}
            onSearchChange={setSearchValue}
          />

          <CategoriesGrid title="Tópicos Populares" categories={content.homepage.categories.items.slice(0, 6)} />
        </div>
      </div>
    </Layout>
  )
}
