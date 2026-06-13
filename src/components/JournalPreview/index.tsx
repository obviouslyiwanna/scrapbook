import { Image, Text, View } from '@tarojs/components'
import { JournalItem } from '@/types/journal'
import './index.scss'

interface JournalPreviewProps { journal: Partial<JournalItem> }

function JournalPreview({ journal }: JournalPreviewProps) {
  return (
    <View className='journal-preview' style={{ background: journal.background || '#fff4f8' }}>
      <View className='journal-preview__stickers'>
        {(journal.stickers || []).map((sticker, index) => <Text key={`${sticker}-${index}`} className='journal-preview__sticker'>{sticker}</Text>)}
      </View>
      <Text className='journal-preview__date'>{journal.date}</Text>
      <Text className='journal-preview__title'>{journal.title || '今天的小小记录'}</Text>
      <Text className='journal-preview__mood'>心情：{journal.mood || '平静'}</Text>
      <Text className='journal-preview__content'>{journal.content || '写下今天值得纪念的片刻，让生活慢慢变成一本温柔的手账。'}</Text>
      <View className='journal-preview__images'>
        {(journal.images || []).map((image) => <Image key={image} className='journal-preview__image' src={image} mode='aspectFill' />)}
      </View>
    </View>
  )
}

export default JournalPreview
