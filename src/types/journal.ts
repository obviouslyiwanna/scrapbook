export interface JournalItem {
  id: string
  title: string
  content: string
  date: string
  mood: string
  templateId: string
  background: string
  images: string[]
  stickers: string[]
  createdAt: number
  updatedAt: number
}

export interface JournalTemplate {
  id: string
  name: string
  description: string
  coverColor: string
  defaultBackground: string
  defaultStickers: string[]
}
