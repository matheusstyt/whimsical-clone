import type { ArticleEstructure } from "./article/article"
import { BasicEstructure } from "./estruturais/basic-estructure"

export interface TopicEstructure extends BasicEstructure {
  icon: string
  quantityArticles: number
  articles: ArticleEstructure[]
}
