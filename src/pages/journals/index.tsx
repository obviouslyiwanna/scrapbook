import Taro, { useDidShow } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import EmptyState from '@/components/EmptyState'
import JournalCard from '@/components/JournalCard'
import { JournalItem } from '@/types/journal'
import { deleteJournal, getJournalList } from '@/utils/storage'
import './index.scss'

function JournalsPage() {
  const [journals, setJournals] = useState<JournalItem[]>([])
  const loadJournals = () => setJournals(getJournalList())

  useDidShow(loadJournals)

  // Delete one journal after user confirmation and refresh the list.
  const handleDelete = (id: string) => {
    Taro.showModal({ title: '删除手账', content: '确定要删除这篇手账吗？' }).then((result: any) => {
      if (result.confirm) {
        deleteJournal(id)
        loadJournals()
      }
    })
  }

  return (
    <View className='soft-page journals-page'>
      <Text className='journals-title'>我的手账</Text>
      <Text className='journals-subtitle'>所有保存的生活碎片都会在这里。</Text>
      <View className='journals-list'>
        {journals.length ? journals.map((item) => <JournalCard key={item.id} item={item} onClick={() => Taro.navigateTo({ url: `/pages/detail/index?id=${item.id}` })} onDelete={() => handleDelete(item.id)} />) : <EmptyState text='还没有保存过手账' buttonText='去选择模板' onButtonClick={() => Taro.switchTab({ url: '/pages/template/index' })} />}
      </View>
    </View>
  )
}

export default JournalsPage
