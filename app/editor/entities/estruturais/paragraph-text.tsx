import type { VerticalPositionEnum } from "../enums/vertical-position-enum"
import type { Text } from "./text"

export interface ParagraphText {
  position: VerticalPositionEnum
  texts: Text[]
}
