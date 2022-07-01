import React, { useEffect, useRef } from 'react'

import { FontAwesome } from '@expo/vector-icons'

import TitleCarousel from '@/components/molecule/title-carousel'

import { TouchableIcon } from './styles'
import styles from './styles.module.scss'

type Props = {
  onChangeCurrent?: (index: number) => void
  carousel?: number
  title: string
  children: JSX.Element[]
}

const Carousel = ({ onChangeCurrent, carousel = 0, children, title }: Props) => {
  const listRef = useRef<HTMLDivElement>()
  const carouselRef = useRef<HTMLDivElement>()

  useEffect(() => {
    console.log(listRef.current)
  }, [listRef])

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

    const newX = x - listRef.current.offsetWidth

    if (newX > -(width / 2)) {
      listRef.current.style.transform = `translateX(${newX}px)`
    } else {
      listRef.current.style.transform = `translateX(${-width / 2}px)`
    }
  }

  const previousPage = (e) => {
    e.preventDefault()
    const { x } = listRef.current.getBoundingClientRect()
    const newX = x + listRef.current.offsetWidth
    if (newX < 0) {
      listRef.current.style.transform = `translateX(${newX}px)`
    } else {
      listRef.current.style.transform = `translateX(0px)`
    }
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles['list']}>
      <TitleCarousel title={title} />

      <div className={styles['wrapper']}>
        <div className={`${styles['sliderArrow']} ${styles['left']}`} onClick={previousPage}>
          <TouchableIcon onPress={previousPage}>
            <FontAwesome name="chevron-left" size={24} color="rgba(255,255,255,0.8)" />
          </TouchableIcon>
        </div>
        <div className={styles['container']} ref={listRef}>
          {children}
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
