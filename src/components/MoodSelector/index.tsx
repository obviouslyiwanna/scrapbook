import { Text, View } from '@tarojs/components'
import './index.scss'

const moods = ['开心', '平静', '疲惫', '焦虑', '期待', '难过']

interface MoodSelectorProps { value: string; onChange: (value: string) => void }

function MoodSelector({ value, onChange }: MoodSelectorProps) {
  return <View className='mood-selector'>{moods.map((mood) => <Text key={mood} className={`mood-chip ${value === mood ? 'mood-chip--active' : ''}`} onClick={() => onChange(mood)}>{mood}</Text>)}</View>
}

export default MoodSelector
