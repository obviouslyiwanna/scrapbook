import { Button, Text, View } from '@tarojs/components'
import { JournalItem } from '@/types/journal'
import './index.scss'

interface JournalCardProps {
  item: JournalItem
  key?: string
  onClick?: () => void
  onDelete?: () => void
}

function JournalCard({ item, onClick, onDelete }: JournalCardProps) {
  const handleDelete = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    onDelete?.()
  }

  return (
    <View className='journal-card' style={{ background: item.background }} onClick={onClick}>
      <View className='journal-card__header'>
        <Text className='journal-card__title'>{item.title || '未命名手账'}</Text>
        <Text className='journal-card__mood'>{item.mood}</Text>
      </View>
      <Text className='journal-card__date'>{item.date}</Text>
      <Text className='journal-card__content'>{item.content || '还没有写正文，留一点空白也很美好。'}</Text>
      {onDelete ? <Button className='journal-card__delete' onClick={handleDelete}>删除</Button> : null}
    </View>
  )
}

export default JournalCard
