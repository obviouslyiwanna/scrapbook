import Taro, { useDidShow } from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import { useState } from 'react'
import EmptyState from '@/components/EmptyState'
import JournalCard from '@/components/JournalCard'
import { JournalItem } from '@/types/journal'
import { getJournalList } from '@/utils/storage'
import './index.scss'

function IndexPage() {
  const [recentJournals, setRecentJournals] = useState<JournalItem[]>([])

  useDidShow(() => setRecentJournals(getJournalList().slice(0, 3)))

  const goTemplate = () => Taro.switchTab({ url: '/pages/template/index' })
  const goJournals = () => Taro.switchTab({ url: '/pages/journals/index' })
  const goDetail = (id: string) => Taro.navigateTo({ url: `/pages/detail/index?id=${id}` })

  return (
    <View className='soft-page home-page'>
      <View className='home-banner'>
        <Text className='home-banner__eyebrow'>Pocket Journal</Text>
        <Text className='home-banner__title'>今天也要记录生活</Text>
        <Text className='home-banner__desc'>用模板、心情和贴纸，把日常变成可爱的手账小页。</Text>
      </View>
      <Button className='primary-button' onClick={goTemplate}>开始制作手账</Button>
      <View className='home-shortcuts'>
        <Button className='home-shortcuts__button' onClick={goTemplate}>模板</Button>
        <Button className='home-shortcuts__button' onClick={goJournals}>我的手账</Button>
      </View>
      <Text className='section-title'>最近手账</Text>
      <View className='home-list'>
        {recentJournals.length ? recentJournals.map((item) => <JournalCard key={item.id} item={item} onClick={() => goDetail(item.id)} />) : <EmptyState text='还没有手账，快去创建第一篇吧' buttonText='新建手账' onButtonClick={goTemplate} />}
      </View>
    </View>
  )
}

export default IndexPage
