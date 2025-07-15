import { BasicEstructure } from "../../../estruturais/basic-estructure"
import type { TableRow } from "./table-row"

export interface TableEstructure extends BasicEstructure {
  row: TableRow
}
