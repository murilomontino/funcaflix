import React, { useState, useRef } from 'react'
import { ScrollView } from 'react-native'
import { useHover } from 'react-native-web-hooks'
import { FontAwesome } from 'react-web-vector-icons'

import DotsLayers from '@/components/atom/dots-layers'
import ThumbnailCardVersion2 from '@/components/molecule/thumbnail-card/version-2'
import TitleCarousel from '@/components/molecule/title-carousel'

import HomeData from './home_slide.json'
import {
  ContainerRow,
  Left,
  Right,
  TouchableIcon,
  ScrollViewContainer,
  InternalScrollViewContainer,
  ContainerInfo,
} from './styles'
import useScroll from './use-hooks/use-scroll'

type ExtendsScrollViewProps = ScrollView & {
  scrollLeft: number
  scrollWidth: number
  scrollLeftMax: number
  clientWidth: number
  offsetWidth: number
}

type Props = {
  onChangeCurrent?: (index: number) => void
  currentIndex?: number
  title?: string
  isAnimated?: boolean
  isBoxDescription?: boolean
  items: {
    id: number | string
    title: string
    description: string
    thumbnail: string
  }[]
}

const MARGIN_LEFT = '2vw'
const PADDING_RIGHT = '4vw'

const Carousel = ({
  currentIndex,
  onChangeCurrent,
  title,
  isAnimated = true,
  isBoxDescription = true,
  items,
}: Props) => {
  const [data] = useState(items || HomeData.items)

  const carousel = useRef<ExtendsScrollViewProps>(null)

  const refLeftContainer = useRef(null)
  const hoveredLeft = useHover(refLeftContainer)
  const refRightContainer = useRef(null)
  const hoveredRight = useHover(refRightContainer)

  const [selected, setSelected] = useState(0)

  if (!carousel || !data || !data.length) return null

  const {
    nextPage,
    previousPage,
    MAX_LAYERS,
    positionCurrent,
    VISIBLE_LEFT,
    VISIBLE_RIGHT,
    WIDTH_ITEM,
  } = useScroll({
    carousel,
    MARGIN_LEFT,
    length: data.length,
  })

  const ComponentData = () => {
    return data.map((item, index) => {
      const onMouseIn = () => {
        setSelected(index)
        if (onChangeCurrent) onChangeCurrent(currentIndex)
      }

      const onMouseOut = () => {
        setSelected(-1)
        if (onChangeCurrent) onChangeCurrent(-1)
      }

      return (
        <div
          key={index}
          style={{
            zIndex: selected === index ? 999 : -1,
          }}
          onMouseEnter={onMouseIn}
          onMouseLeave={onMouseOut}
        >
          <ThumbnailCardVersion2
            isAnimated={isAnimated}
            isBoxDescription={isBoxDescription}
            image={item.thumbnail}
            index={index}
            item={item}
            width={WIDTH_ITEM}
          />
        </div>
      )
    })
  }

  return (
    <ContainerRow>
      <ContainerInfo
        style={{
          zIndex: selected === -1 ? 10 : 0,
        }}
      >
        <TitleCarousel title={title} />
        <DotsLayers
          current={positionCurrent}
          maxLayers={MAX_LAYERS}
          visible={hoveredLeft || hoveredRight}
        />
      </ContainerInfo>
      <ScrollViewContainer
        ref={carousel}
        pagingEnabled={true}
        horizontal
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <InternalScrollViewContainer
          style={{
            marginLeft: MARGIN_LEFT,
            paddingRight: PADDING_RIGHT,
          }}
        >
          {ComponentData()}
        </InternalScrollViewContainer>
      </ScrollViewContainer>

      <Left ref={refLeftContainer} style={{ display: !VISIBLE_LEFT ? 'none' : 'flex' }}>
        <TouchableIcon onPress={previousPage}>
          <FontAwesome name="chevron-left" size={24} color="rgba(255,255,255,0.8)" />
        </TouchableIcon>
      </Left>

      <Right
        ref={refRightContainer}
        style={{
          display: !VISIBLE_RIGHT ? 'none' : 'flex',
        }}
      >
        <TouchableIcon onPress={nextPage}>
          <FontAwesome name="chevron-right" size={24} color="rgba(255,255,255,0.8)" />
        </TouchableIcon>
      </Right>
    </ContainerRow>
  )
}

export default Carousel
