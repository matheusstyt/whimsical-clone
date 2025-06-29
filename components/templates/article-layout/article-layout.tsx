import { ArticleContent } from "@/components/organisms/article-content/article-content"
import { ArticleSidebar } from "@/components/organisms/article-sidebar/article-sidebar"
import type { Article } from "@/types/content"

interface ArticleLayoutProps {
  article: Article
  activeSection: string
  scrollToSection: (id: string) => void
  copyLink: () => void
}

export function ArticleLayout({ article, activeSection, scrollToSection, copyLink }: ArticleLayoutProps) {
  return (
    <div className="flex-1 flex" style={{justifyContent: "right"}}>
      <ArticleContent article={article} />
      <ArticleSidebar
        summary={article.summary}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        copyLink={copyLink}
      />
    </div>
  )
}
