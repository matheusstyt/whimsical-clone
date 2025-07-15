import type { DocumentationLanguage } from "../enums/documentation-language"
import { BasicEstructure } from "../estruturais/basic-estructure"
import { ArticleSection } from "./article_sections/article-section"
import { ArticleSummaryItem } from "./article_summary/article-summary-item"

export interface ArticleDetails {
  createdAt: Date
  createdBy: Date
}

export interface ArticleEstructure extends BasicEstructure {
  lang: DocumentationLanguage
  details: ArticleDetails
  summary: ArticleSummaryItem[]
  sections: ArticleSection[]
  order: number
}
