import { Text, View } from '@tarojs/components'
import './index.scss'

const stickers = ['🌸', '⭐', '🍀', '☁️', '🍰', '📚', '✈️', '🐱']

interface StickerSelectorProps { value: string[]; onChange: (value: string[]) => void }

function StickerSelector({ value, onChange }: StickerSelectorProps) {
  const toggleSticker = (sticker: string) => {
    onChange(value.includes(sticker) ? value.filter((item) => item !== sticker) : [...value, sticker])
  }
  return <View className='sticker-selector'>{stickers.map((sticker) => <Text key={sticker} className={`sticker-chip ${value.includes(sticker) ? 'sticker-chip--active' : ''}`} onClick={() => toggleSticker(sticker)}>{sticker}</Text>)}</View>
}

export default StickerSelector
