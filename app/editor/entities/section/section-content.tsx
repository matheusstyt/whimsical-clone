import { BasicEstructure } from "../estruturais/basic-estructure"
import { SectionMedia } from "./section-media"
import type { SectionTable } from "./section-table"

export interface SectionContent extends BasicEstructure {
  tables?: SectionTable[]
  medias?: SectionMedia[]
}
