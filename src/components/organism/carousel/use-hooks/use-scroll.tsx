import React, { useMemo, useState } from 'react'
import { ScrollView, useWindowDimensions } from 'react-native'

import theme from '@/theme'

type ExtendsScrollViewProps = ScrollView & {
  scrollLeft: number
  scrollWidth: number
  scrollLeftMax: number
  clientWidth: number
  offsetWidth: number
}

type Props = {
  carousel: React.MutableRefObject<ExtendsScrollViewProps>
  MARGIN_LEFT: string
  length: number
}

const useScroll = ({ carousel, MARGIN_LEFT, length }: Props) => {
  if (!carousel) return null

  const [positionCurrent, setPositionCurrent] = useState(0)

  const [MAX_LAYERS, setMAX_LAYERS] = useState(0)

  const { width } = useWindowDimensions()

  const ITEMS_POR_PAGE = useMemo(() => {
    if (width <= theme.CONSTANTS.SCREEN.TINY) {
      return 1
    } else if (width <= theme.CONSTANTS.SCREEN.SMALL) {
      return 2
    } else if (width <= theme.CONSTANTS.SCREEN.MEDIUM) {
      return 3
    } else if (width <= theme.CONSTANTS.SCREEN.LARGE) {
      return 4
    }

    return 5 // default
  }, [width])

  const NUMBER_IN_PX_MARGIN_LEFT = (parseInt(MARGIN_LEFT.replace('vw', '')) * width) / 100
  const SCROLL_TO_FOR_WIDTH_ITEM = carousel.current?.clientWidth
  const WIDTH_ITEM = carousel.current?.clientWidth / ITEMS_POR_PAGE

  const nextPage = () => {
    const next = carousel.current.scrollLeft + SCROLL_TO_FOR_WIDTH_ITEM

    if (next < carousel.current.scrollLeftMax) {
      scrollToOffset(next)
      setPositionCurrent((state) => state + 1)
    } else {
      carousel.current.scrollToEnd({ animated: true })
      if (positionCurrent + 1 < MAX_LAYERS) setPositionCurrent((state) => state + 1)
    }
  }

  const previousPage = () => {
    const previous = carousel.current.scrollLeft - SCROLL_TO_FOR_WIDTH_ITEM
    if (0 < previous) {
      scrollToOffset(previous)
      setPositionCurrent((state) => state - 1)
    } else {
      scrollToOffset(0)
      setPositionCurrent((state) => state - 1)
    }
  }

  const scrollToOffset = (offset: number) => {
    if (carousel.current) {
      carousel.current.scrollTo({
        animated: true,
        x: offset,
      })
    }
  }

  const VISIBLE_RIGHT = carousel.current?.scrollLeft < carousel.current?.scrollLeftMax
  const VISIBLE_LEFT = carousel.current?.scrollLeft > NUMBER_IN_PX_MARGIN_LEFT

  return {
    WIDTH_ITEM,
    nextPage,
    previousPage,
    scrollToOffset,
    MAX_LAYERS,
    positionCurrent,
    VISIBLE_RIGHT,
    VISIBLE_LEFT,
  }
}

export default useScroll
