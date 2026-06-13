import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { templates } from '@/mock/templates'
import './index.scss'

function TemplatePage() {
  const useTemplate = (id: string) => Taro.navigateTo({ url: `/pages/editor/index?templateId=${id}` })

  return (
    <View className='soft-page template-page'>
      <Text className='template-title'>选择一个手账模板</Text>
      <Text className='template-subtitle'>先选风格，再写下今天的小故事。</Text>
      <View className='template-list'>
        {templates.map((template) => (
          <View key={template.id} className='template-card' style={{ background: template.coverColor }} onClick={() => useTemplate(template.id)}>
            <Text className='template-card__name'>{template.name}</Text>
            <Text className='template-card__desc'>{template.description}</Text>
            <View className='template-card__stickers'>{template.defaultStickers.map((sticker) => <Text key={sticker}>{sticker}</Text>)}</View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default TemplatePage
