"use client"

/**
 * 📖 HOOK PARA NAVEGAÇÃO DENTRO DOS ARTIGOS
 *
 * Gerencia a navegação interna dos artigos, incluindo:
 * - Scroll suave para seções
 * - Detecção da seção ativa
 * - Cópia de links
 */

import { useState, useEffect, useCallback } from "react"
import type { ArticleSummary } from "@/types/content"

interface UseArticleNavigationProps {
  summary: ArticleSummary[]
}

interface UseArticleNavigationReturn {
  // Estado atual
  activeSection: string

  // Ações
  scrollToSection: (id: string) => void
  copyLink: () => void

  // Utilitários
  isActive: (id: string) => boolean
}

/**
 * Hook para navegação dentro de artigos
 */
export function useArticleNavigation({ summary }: UseArticleNavigationProps): UseArticleNavigationReturn {
  // 📍 Seção ativa atual
  const [activeSection, setActiveSection] = useState(summary[0]?.id || "getting-started")

  // 🎯 Navegar para uma seção específica
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    // Scroll suave para o elemento
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })

    // Atualizar seção ativa
    setActiveSection(id)
  }, [])

  // 📋 Copiar link da seção atual
  const copyLink = useCallback(() => {
    const currentUrl = window.location.href
    const urlWithHash = activeSection ? `${currentUrl.split("#")[0]}#${activeSection}` : currentUrl

    navigator.clipboard
      .writeText(urlWithHash)
      .then(() => {
        // Feedback visual (pode ser implementado com toast)
        console.log("Link copiado:", urlWithHash)
      })
      .catch((error) => {
        console.error("Erro ao copiar link:", error)
      })
  }, [activeSection])

  // 👁️ Detectar seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      // Obter todas as seções do artigo
      const sections = summary.map((item) => item.id)

      // Encontrar a seção atualmente visível
      const currentSection = sections.find((id) => {
        const element = document.getElementById(id)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        // Considera ativa se estiver na parte superior da viewport
        return rect.top <= 100 && rect.bottom >= 100
      })

      // Atualizar seção ativa se encontrou uma
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // Adicionar listener de scroll
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Executar uma vez para definir seção inicial
    handleScroll()

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [summary, activeSection])

  // ❓ Verificar se uma seção está ativa
  const isActive = useCallback(
    (id: string) => {
      return activeSection === id
    },
    [activeSection],
  )

  return {
    // Estado
    activeSection,

    // Ações
    scrollToSection,
    copyLink,

    // Utilitários
    isActive,
  }
}
