import { Breadcrumb } from "@/components/molecules/breadcrumb/breadcrumb"
import { Heading } from "@/components/atoms/typography/heading"
import type { Article } from "@/types/content"

interface ArticleContentProps {
  article: Article
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div
      className="md:py-6 md:px-40"
    >
      <Breadcrumb items={article.breadcrumb} />

      {/* Article Title */}
      <div id="getting-started" className="scroll-mt-24 mb-8">
        <Heading level={1} className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {article.title}
          </span>
        </Heading>
      </div>

      {/* Article Content */}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}
