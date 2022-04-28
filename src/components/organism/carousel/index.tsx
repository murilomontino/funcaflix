import React, { useRef } from 'react'
import { FontAwesome } from 'react-web-vector-icons'

import TitleCarousel from '@/components/molecule/title-carousel'

import ThumbnailCard from '../../molecule/thumbnail-card'
import { items } from './home_slide.json'
import { TouchableIcon } from './styles'
import styles from './styles.module.scss'

type Props = {
  onChangeCurrent: (index: number) => void
  carousel?: number
}

const WIDTH_ITEM = 225
const HEIGHT_ITEM = 125

const Carousel = ({ onChangeCurrent, carousel = 0 }: Props) => {
  const listRef = useRef<HTMLDivElement>()

  const handleMouseEnter = (e) => {
    e.preventDefault()
    onChangeCurrent?.(carousel)
  }

  const handleMouseLeave = (e) => {
    e.preventDefault()
    onChangeCurrent?.(-1)
  }

  const nextPage = (e) => {
    e.preventDefault()
    const { width, x } = listRef.current.getBoundingClientRect()

    const newX = x - WIDTH_ITEM * 5

    if (newX > -(width / 2)) {
      listRef.current.style.transform = `translateX(${newX}px)`
    } else {
      listRef.current.style.transform = `translateX(${-width / 2}px)`
    }
  }

  const previousPage = (e) => {
    e.preventDefault()
    const { x } = listRef.current.getBoundingClientRect()
    const newX = x + WIDTH_ITEM * 5
    if (newX < 0) {
      listRef.current.style.transform = `translateX(${newX}px)`
    } else {
      listRef.current.style.transform = `translateX(0px)`
    }
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles['list']}>
      <TitleCarousel title={'Novos'} />

      <div className={styles['wrapper']}>
        <div className={`${styles['sliderArrow']} ${styles['left']}`} onClick={previousPage}>
          <TouchableIcon onPress={previousPage}>
            <FontAwesome name="chevron-left" size={24} color="rgba(255,255,255,0.8)" />
          </TouchableIcon>
        </div>
        <div className={styles['container']} ref={listRef}>
          {items.map((item, index) => (
            <ThumbnailCard
              width={WIDTH_ITEM}
              height={HEIGHT_ITEM}
              key={index}
              index={index}
              item={{
                id: item.id,
                title: item.snippet.title,
                description: item.snippet.description,
                image: item.snippet.thumbnails.medium.url,
              }}
            />
          ))}
        </div>
        <div className={`${styles['sliderArrow']} ${styles['right']}`} onClick={nextPage}>
          <TouchableIcon onPress={nextPage}>
            <FontAwesome name="chevron-right" size={24} color="rgba(255,255,255,0.8)" />
          </TouchableIcon>
        </div>
      </div>
    </div>
  )
}

export default Carousel
