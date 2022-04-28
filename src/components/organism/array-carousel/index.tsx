import React, { useState } from 'react'

import Carousel from '@/components/organism/carousel'

const ArrayCarousel = () => {
  const [selected, setSelected] = useState(0)

  const onChangeSelected = (index: number) => {
    setSelected(index)
  }

  return [1, 2, 3, 4, 5].map((item, index) => (
    <div
      key={item.toString()}
      style={{
        zIndex: selected === index ? 99 : 'auto',
        width: '100%',
      }}
    >
      <Carousel onChangeCurrent={onChangeSelected} carousel={index} />
    </div>
  ))
}

export default ArrayCarousel
