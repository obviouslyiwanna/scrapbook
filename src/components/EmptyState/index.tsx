import { Button, Text, View } from '@tarojs/components'
import './index.scss'

interface EmptyStateProps {
  text: string
  buttonText?: string
  onButtonClick?: () => void
}

function EmptyState({ text, buttonText, onButtonClick }: EmptyStateProps) {
  return (
    <View className='empty-state'>
      <Text className='empty-icon'>☁️</Text>
      <Text className='empty-text'>{text}</Text>
      {buttonText ? <Button className='empty-button' onClick={onButtonClick}>{buttonText}</Button> : null}
    </View>
  )
}

export default EmptyState
