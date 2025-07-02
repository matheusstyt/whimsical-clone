"use client"

import { useState } from "react"
import { Layout } from "@/components/layout/layout"

export default function AboutPage() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <Layout searchValue={searchValue} onSearchChange={setSearchValue}>
      <div className="px-4 lg:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sobre o{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Whimsical
              </span>
            </h1>
            <p className="text-lg text-gray-600">Conheça mais sobre nossa plataforma de colaboração visual</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">O que é o Whimsical?</h2>
              <p className="text-gray-700 leading-relaxed">
                O Whimsical é uma plataforma de colaboração visual que permite criar fluxogramas, wireframes, mapas
                mentais e documentos de forma rápida e intuitiva. Nossa missão é tornar o pensamento visual acessível
                para todos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Principais Recursos</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Fluxogramas e diagramas interativos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Wireframes para design de interfaces
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Mapas mentais colaborativos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Documentos ricos e conectados
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Colaboração em tempo real
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nossa Visão</h2>
              <p className="text-gray-700 leading-relaxed">
                Acreditamos que as melhores ideias surgem quando as pessoas podem pensar visualmente e colaborar sem
                barreiras. O Whimsical foi criado para democratizar o acesso a ferramentas de pensamento visual
                profissionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
