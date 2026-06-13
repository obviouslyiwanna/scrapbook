import Taro, { useLoad } from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import { useState } from 'react'
import EmptyState from '@/components/EmptyState'
import JournalPreview from '@/components/JournalPreview'
import { JournalItem } from '@/types/journal'
import { deleteJournal, getJournalById } from '@/utils/storage'
import './index.scss'

function DetailPage() {
  const [journal, setJournal] = useState<JournalItem | undefined>()

  useLoad((options) => {
    if (options.id) setJournal(getJournalById(options.id))
  })

  // Delete current journal and return to the saved journal tab.
  const handleDelete = () => {
    if (!journal) return
    Taro.showModal({ title: '删除手账', content: '删除后无法恢复，确定继续吗？' }).then((result: any) => {
      if (result.confirm) {
        deleteJournal(journal.id)
        Taro.switchTab({ url: '/pages/journals/index' })
      }
    })
  }

  if (!journal) {
    return <View className='soft-page'><EmptyState text='没有找到这篇手账' buttonText='返回我的手账' onButtonClick={() => Taro.switchTab({ url: '/pages/journals/index' })} /></View>
  }

  return (
    <View className='soft-page detail-page'>
      <Text className='detail-title'>手账详情</Text>
      <JournalPreview journal={journal} />
      <View className='detail-actions'>
        <Button className='detail-edit'>再次编辑（预留）</Button>
        <Button className='detail-delete' onClick={handleDelete}>删除手账</Button>
      </View>
    </View>
  )
}

export default DetailPage
