import { VerticalPositionEnum } from "../enums/vertical-position-enum"

export interface ParagraphText {
  position: VerticalPositionEnum
  texts: Text[]
}


export interface BasicEstructure {
  title?: string
  subtitle?: string
  description?: ParagraphText
}
