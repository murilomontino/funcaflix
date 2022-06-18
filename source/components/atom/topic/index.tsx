import React from 'react'
import { ViewProps, TextProps, ViewStyle } from 'react-native'

import { TopicContainer, TopicRequered, TopicForm } from './styles'

type Props = {
  topic: string
  requered: boolean
  styleTopic?: ViewStyle | ViewStyle[]
  maxWidthTitle?: number | string
  textProps?: TextProps
} & ViewProps

const Topic = ({ requered, topic, maxWidthTitle, textProps, styleTopic, ...rest }: Props) => {
  return (
    <TopicContainer
      {...rest}
      style={[
        {
          maxWidth: maxWidthTitle,
        },
        styleTopic,
      ]}
    >
      <TopicForm {...textProps}>{topic}</TopicForm>
      {requered && <TopicRequered {...textProps}>*</TopicRequered>}
    </TopicContainer>
  )
}

export default Topic
