import Taro, { useLoad } from '@tarojs/taro'
import { Button, Input, ScrollView, Text, Textarea, View } from '@tarojs/components'
import { useState } from 'react'
import JournalPreview from '@/components/JournalPreview'
import MoodSelector from '@/components/MoodSelector'
import StickerSelector from '@/components/StickerSelector'
import { getTemplateById } from '@/mock/templates'
import { JournalItem } from '@/types/journal'
import { formatDate } from '@/utils/date'
import { createId } from '@/utils/id'
import { saveJournal } from '@/utils/storage'
import './index.scss'

const backgrounds = ['#fff4f8', '#f6f2ff', '#fff9e8', '#f1fbff', '#fff3ec']

function EditorPage() {
  const [templateId, setTemplateId] = useState('daily')
  const template = getTemplateById(templateId)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState('平静')
  const [background, setBackground] = useState(template.defaultBackground)
  const [stickers, setStickers] = useState<string[]>(template.defaultStickers)
  const [images, setImages] = useState<string[]>([])
  const date = formatDate()

  useLoad((options) => {
    const selected = getTemplateById(options.templateId)
    setTemplateId(selected.id)
    setBackground(selected.defaultBackground)
    setStickers(selected.defaultStickers)
  })

  const previewJournal: Partial<JournalItem> = { title, content, date, mood, templateId, background, stickers, images }

  // Choose local images through Taro API and append them to preview data.
  const chooseImages = async () => {
    const result = await Taro.chooseImage({ count: 3, sizeType: ['compressed'], sourceType: ['album', 'camera'] })
    setImages((current) => [...current, ...result.tempFilePaths].slice(0, 6))
  }

  // Persist the current journal into local storage and jump to the journal list.
  const handleSave = () => {
    const now = Date.now()
    const item: JournalItem = { id: createId(), title: title.trim() || '未命名手账', content: content.trim(), date, mood, templateId, background, images, stickers, createdAt: now, updatedAt: now }
    saveJournal(item)
    Taro.showToast({ title: '保存成功', icon: 'success' })
    Taro.switchTab({ url: '/pages/journals/index' })
  }

  return (
    <ScrollView className='editor-page' scrollY>
      <View className='editor-inner'>
        <Text className='section-title'>实时预览</Text>
        <JournalPreview journal={previewJournal} />
        <View className='editor-panel'>
          <Text className='editor-label'>标题</Text>
          <Input className='editor-input' value={title} placeholder='给今天取个名字' onInput={(event: any) => setTitle(event.detail.value)} />
          <Text className='editor-label'>正文</Text>
          <Textarea className='editor-textarea' value={content} placeholder='记录生活里的温柔瞬间...' onInput={(event: any) => setContent(event.detail.value)} />
          <Text className='editor-label'>心情</Text>
          <MoodSelector value={mood} onChange={setMood} />
          <Text className='editor-label'>贴纸</Text>
          <StickerSelector value={stickers} onChange={setStickers} />
          <Text className='editor-label'>背景颜色</Text>
          <View className='color-list'>{backgrounds.map((color) => <View key={color} className={`color-dot ${background === color ? 'color-dot--active' : ''}`} style={{ background: color }} onClick={() => setBackground(color)} />)}</View>
          <Button className='editor-image-button' onClick={chooseImages}>添加图片</Button>
          <Button className='primary-button editor-save' onClick={handleSave}>保存手账</Button>
        </View>
      </View>
    </ScrollView>
  )
}

export default EditorPage
