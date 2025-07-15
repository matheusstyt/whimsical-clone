import type { DocumentationLanguage } from "./enums/documentation-language"
import type { TopicEstructure } from "./topic-estructure"

export interface Documentation {
  lang: DocumentationLanguage
  topics: TopicEstructure
}
