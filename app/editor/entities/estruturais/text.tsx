import { TextLink } from "./text-link"

export interface Text {
  text: string
  links?: TextLink[]
  order: number
}
