import React, { useState } from 'react'

import Carousel from '@/components/organism/carousel'

const ArrayCarousel = () => {
  const [selected, setSelected] = useState(0)

  const onChangeSelected = (index: number) => {
    setSelected(index)
  }

  return [1, 2, 3].map((item, index) => (
    <div
      key={item.toString()}
      style={{
        display: 'flex',
        marginTop: -120,
        flex: 1,
        zIndex: selected === index ? 99 : 'auto',
        width: '100%',
      }}
    >
      <Carousel onChangeCurrent={onChangeSelected} currentIndex={index} />
    </div>
  ))
}

export default ArrayCarousel
