export interface SidebarSubitem {
  title: string
  slug: string
}

export interface SidebarItem {
  iconHtml: string
  title: string
  description?: string
  hasChevron: boolean
  hasExternalLink?: boolean
  subitems?: SidebarSubitem[]
}

export interface CategoryItem {
  iconHtml: string
  title: string
  description?: string
  articles?: string
  link: string
}

export interface ArticleSummary {
  title: string
  id: string
}

export interface Article {
  title: string
  breadcrumb:{ text: string, goTo: string }[],
  summary: ArticleSummary[]
  content: string
}

export interface ContentConfig {
  settings: {
    siteTitle: string
    siteDescription: string
    brandName: string
  }
  homepage: {
    hero: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    categories: {
      title: string
      items: CategoryItem[]
    }
  }
  sidebar: {
    items: SidebarItem[]
  }
  articles: {
    [key: string]: Article
  }
}
