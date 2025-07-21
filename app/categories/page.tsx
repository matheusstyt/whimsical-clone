"use client"

import { useContent } from "@/contexts/content-context"
import { Layout } from "@/components/layout/layout"
import { CategoriesGrid } from "@/components/sections/categories-grid"
import { useState } from "react"

export default function CategoriesPage() {
  const { content } = useContent()
  const [searchValue, setSearchValue] = useState("")

  return (
    <Layout searchValue={searchValue} onSearchChange={setSearchValue}>
      <div className="px-4 lg:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-black-900 mb-4"
              style={{
                fontSize: "calc((100vh * 0.06) * 0.34)",
              }}
            >
              Todas as Categorias
            </h1>
            <p className="text-lg text-gray-600">Explore todos os tópicos de ajuda organizados por categoria</p>
          </div>

          <CategoriesGrid title="Categorias Disponíveis" categories={content.homepage.categories.items} />
        </div>
      </div>
    </Layout>
  )
}
