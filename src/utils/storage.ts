import Taro from '@tarojs/taro'
import { JournalItem } from '@/types/journal'

const STORAGE_KEY = 'journal_list'

// Read all journals safely from Taro local storage.
export function getJournalList(): JournalItem[] {
  try {
    const value = Taro.getStorageSync(STORAGE_KEY)
    return Array.isArray(value) ? value : []
  } catch (error) {
    return []
  }
}

// Create or update a journal and keep newest items first.
export function saveJournal(item: JournalItem): void {
  const list = getJournalList()
  const nextList = [item, ...list.filter((journal) => journal.id !== item.id)].sort((a, b) => b.createdAt - a.createdAt)
  Taro.setStorageSync(STORAGE_KEY, nextList)
}

// Remove a journal by id from local storage.
export function deleteJournal(id: string): void {
  const nextList = getJournalList().filter((journal) => journal.id !== id)
  Taro.setStorageSync(STORAGE_KEY, nextList)
}

// Find one journal by id for detail rendering.
export function getJournalById(id: string): JournalItem | undefined {
  return getJournalList().find((journal) => journal.id === id)
}
