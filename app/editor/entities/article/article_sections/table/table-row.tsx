export interface TableRow {
  type: string
  description: string
  example?: string
  field?: string
  fields?: TableRow[]
}
