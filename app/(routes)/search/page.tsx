"use client"

import { useState } from "react"
import { useContent } from "@/contexts/content-context"
import { Layout } from "@/components/layout/layout"
import { SearchModal } from "@/components/modals/search-modal"

export default function SearchPage() {
  const { content } = useContent()
  const [searchValue, setSearchValue] = useState("")

  return (
    <Layout searchValue={searchValue} onSearchChange={setSearchValue}>
      <div className="px-4 lg:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Buscar Artigos</h1>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <SearchModal
              isOpen={true}
              onClose={() => {}}
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              items={content.sidebar.items}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
