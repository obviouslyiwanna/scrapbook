import { JournalTemplate } from '@/types/journal'

export const templates: JournalTemplate[] = [
  { id: 'daily', name: '日常记录', description: '写下今天的小确幸与生活碎片', coverColor: '#ffe3ed', defaultBackground: '#fff4f8', defaultStickers: ['🌸', '☁️'] },
  { id: 'study', name: '学习打卡', description: '记录学习进度、重点和收获', coverColor: '#e7e0ff', defaultBackground: '#f6f2ff', defaultStickers: ['📚', '⭐'] },
  { id: 'travel', name: '旅行记录', description: '收藏路上的风景和心情', coverColor: '#dff6ff', defaultBackground: '#f1fbff', defaultStickers: ['✈️', '☁️'] },
  { id: 'mood', name: '心情日记', description: '给情绪一个柔软的角落', coverColor: '#fff0c9', defaultBackground: '#fff9e8', defaultStickers: ['⭐', '🐱'] },
  { id: 'food', name: '美食记录', description: '记录好吃的瞬间和味道', coverColor: '#ffe2d1', defaultBackground: '#fff3ec', defaultStickers: ['🍰', '🍀'] }
]

export function getTemplateById(id?: string) {
  return templates.find((template) => template.id === id) ?? templates[0]
}
