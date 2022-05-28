import React, { startTransition } from 'react'
import { Button } from 'react-native'

import styled from 'styled-components/native'

import TemplateFrontEnd from '@/components/templates/frontend'

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 500px;
`

const ContainerCards = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Card = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

const Description = styled.Text`
  font-size: 14px;
  font-weight: 600;
`

const TitleInput = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
`

const DescriptionInput = styled.TextInput`
  font-size: 14px;
  font-weight: 600;
`

const example = [
  {
    id: 1,
    title: 'Array Carousel',
    description: 'Array Carousel',
  },
  {
    id: 2,
    title: 'Template FrontEnd',
    description: 'Template FrontEnd',
  },
  {
    id: 3,
    title: 'Template BackEnd',
    description: 'Template BackEnd',
  },
]

const Lab = () => {
  const [data, setData] = React.useState(example)
  const [selected, setSelected] = React.useState(null)

  const printData = () => {
    console.log(data)
  }

  const onChangeTitle = (value) => {
    setSelected({ ...selected, title: value })
    setData((state) => {
      const find = state.find((item) => item.id === selected.id)
      if (find) {
        find.title = value
      }
      return [...state]
    })
  }

  const onChangeDescription = (value) => {
    startTransition(() => {
      setSelected({ ...selected, description: value })
      setData((state) => {
        const find = state.find((item) => item.id === selected.id)
        if (find) {
          find.description = value
        }
        return [...state]
      })
    })
  }

  return (
    <TemplateFrontEnd>
      <Container>
        <ContainerCards>
          {data.map((item) => {
            const onPress = () => {
              setSelected(item)
            }

            return (
              <Card key={item.id} onPress={onPress}>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </Card>
            )
          })}
        </ContainerCards>

        <Card disabled>
          <TitleInput onChangeText={onChangeTitle} value={selected?.title} />
          <DescriptionInput onChangeText={onChangeDescription} value={selected?.description} />
        </Card>
        <Button onPress={printData} title="Print Data" />
      </Container>
    </TemplateFrontEnd>
  )
}

export default Lab
