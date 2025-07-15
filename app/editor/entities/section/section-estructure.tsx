import { BasicEstructure } from "../estruturais/basic-estructure";
import { SectionContent } from "./section-content";


export interface SectionEstructure extends BasicEstructure {
  content: SectionContent
}
