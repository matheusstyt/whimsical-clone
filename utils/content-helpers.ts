/**
 * 🛠️ UTILITÁRIOS PARA MANIPULAÇÃO DE CONTEÚDO
 *
 * Funções auxiliares para trabalhar com dados de conteúdo,
 * formatação e validação.
 */

import type { SidebarItem, Article } from "@/types/content"

/**
 * 🔍 Buscar artigos por termo
 */
export function searchArticles(
  articles: Record<string, Article>,
  searchTerm: string,
): Array<{ slug: string; article: Article; relevance: number }> {
  if (!searchTerm.trim()) return []

  const term = searchTerm.toLowerCase()
  const results: Array<{ slug: string; article: Article; relevance: number }> = []

  Object.entries(articles).forEach(([slug, article]) => {
    let relevance = 0

    // Busca no título (peso maior)
    if (article.title.toLowerCase().includes(term)) {
      relevance += 10
    }

    // Busca no conteúdo (peso menor)
    if (article.content.toLowerCase().includes(term)) {
      relevance += 5
    }

    // Busca nos breadcrumbs
    if (article.breadcrumb.some((crumb) => crumb.toLowerCase().includes(term))) {
      relevance += 3
    }

    // Se encontrou algo, adiciona aos resultados
    if (relevance > 0) {
      results.push({ slug, article, relevance })
    }
  })

  // Ordenar por relevância (maior primeiro)
  return results.sort((a, b) => b.relevance - a.relevance)
}

/**
 * 🏷️ Extrair todas as tags/categorias únicas
 */
export function extractCategories(items: SidebarItem[]): string[] {
  const categories = new Set<string>()

  items.forEach((item) => {
    categories.add(item.title)

    // Adicionar subcategorias se existirem
    item.subitems?.forEach((subitem) => {
      // Extrair categoria do slug (primeira parte)
      const category = subitem.slug.split("/")[0]
      categories.add(category)
    })
  })

  return Array.from(categories).sort()
}

/**
 * 📊 Contar artigos por categoria
 */
export function countArticlesByCategory(items: SidebarItem[]): Record<string, number> {
  const counts: Record<string, number> = {}

  items.forEach((item) => {
    const articleCount = item.subitems?.length || 0
    counts[item.title] = articleCount
  })

  return counts
}

/**
 * 🔗 Gerar slug a partir de título
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/-+/g, "-") // Remove hífens duplicados
    .trim()
}

/**
 * 📝 Truncar texto com reticências
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text

  return text.substring(0, maxLength).trim() + "..."
}

/**
 * 🎨 Gerar cor baseada em string (para ícones)
 */
export function generateColorFromString(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  const hue = hash % 360
  return `hsl(${hue}, 70%, 50%)`
}

/**
 * ⏰ Formatar data para exibição
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

/**
 * 🔍 Destacar termo de busca no texto
 */
export function highlightSearchTerm(text: string, searchTerm: string): string {
  if (!searchTerm.trim()) return text

  const regex = new RegExp(`(${searchTerm})`, "gi")
  return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>')
}

/**
 * 📱 Detectar se é dispositivo móvel
 */
export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false

  return window.innerWidth < 768
}

/**
 * 🎯 Validar estrutura de artigo
 */
export function validateArticle(article: Partial<Article>): boolean {
  const required = ["title", "breadcrumb", "summary", "content"]

  return required.every((field) => {
    const value = article[field as keyof Article]
    return value !== undefined && value !== null && value !== ""
  })
}

/**
 * 🔄 Debounce para otimizar performance
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
