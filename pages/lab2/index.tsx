import React, { useState } from 'react'

import FsLightbox from 'fslightbox-react'
import styled from 'styled-components/native'

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
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          'images/literatura.jpg',
          'https://i.imgur.com/fsyrScY.jpg',
          'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        ]}
      />
    </>
  )
}

export default Lab
