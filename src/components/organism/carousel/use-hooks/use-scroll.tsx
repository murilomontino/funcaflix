import React, { useEffect, useState } from 'react'
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
  const { width } = useWindowDimensions()

  const [WIDTH_ITEM, setWIDTH_ITEM] = useState(0)
  const [positionCurrent, setPositionCurrent] = useState(0)
  const [MAX_LAYERS, setMAX_LAYERS] = useState(0)
  const [SCROLL_TO_FOR_WIDTH_ITEM, setSCROLL_TO_FOR_WIDTH_ITEM] = useState(0)
  const [VISIBLE_LEFT, setVISIBLE_LEFT] = useState(true)
  const [VISIBLE_RIGHT, setVISIBLE_RIGHT] = useState(true)
  const [ITEMS_POR_PAGE, setITEMS_POR_PAGE] = useState(5)

  const calculateItemsPorPage = () => {
    if (width <= theme.CONSTANTS.SCREEN.TINY) {
      return 1.5
    } else if (width <= theme.CONSTANTS.SCREEN.SMALL) {
      return 3
    } else if (width <= theme.CONSTANTS.SCREEN.MEDIUM) {
      return 4
    }

    return 5 // default
  }

  useEffect(() => {
    setITEMS_POR_PAGE(calculateItemsPorPage())
  }, [width])

  useEffect(() => {
    setWIDTH_ITEM(carousel.current?.clientWidth / ITEMS_POR_PAGE)
  }, [carousel.current?.clientWidth, ITEMS_POR_PAGE])

  useEffect(() => {
    setSCROLL_TO_FOR_WIDTH_ITEM(carousel.current?.clientWidth)
  }, [carousel.current?.clientWidth])

  useEffect(() => {
    const visible = carousel.current?.scrollLeft < carousel.current?.scrollLeftMax
    setVISIBLE_RIGHT(visible)
  }, [carousel.current?.scrollLeft, carousel.current?.scrollLeftMax])

  useEffect(() => {
    const visible = carousel.current?.scrollLeft > 0
    setVISIBLE_LEFT(visible)
  }, [carousel.current?.scrollLeft])

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
