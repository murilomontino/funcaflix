/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, forwardRef, useImperativeHandle, useEffect } from 'react'
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { AntDesign } from '@expo/vector-icons'

import { ContainerButton } from './styles'

import colors from '@/global/colors'
import constants from '@/global/constants'

interface Props {
  refScroll: React.MutableRefObject<ScrollView | undefined>
  abas: number
  current: number
  condition: boolean
  offset: number
}

const MoveButton = forwardRef(({ refScroll, abas, current, condition, offset }: Props, ref) => {
  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { height, width } = size

  const MAX_WIDTH_CONTENT = useMemo(() => abas * width, [abas])

  useEffect(() => {
    if (refScroll.current) {
      refScroll.current.scrollTo({ x: offset, y: 0, animated: false })
    }
  }, [offset])

  const scrollToOffset = (offset: number) => {
    if (refScroll.current) {
      refScroll.current.scrollTo({
        animated: true,
        x: offset,
      })
    }
  }

  const nextPage = useCallback(() => {
    const next = offset + width

    if (next < MAX_WIDTH_CONTENT) {
      scrollToOffset(next)
    } else {
      scrollToOffset(MAX_WIDTH_CONTENT)
    }
  }, [offset])

  const previousPage = () => {
    const previous = offset - width

    if (previous > 0) {
      scrollToOffset(previous)
    } else {
      scrollToOffset(0)
    }
  }

  useImperativeHandle(ref, () => ({
    nextPage,
    previousPage,
  }))

  return (
    <>
      <View
        style={[
          styles.buttonsScrollsContainer,
          {
            width: width,
            top: '40vh',
          },
        ]}
      >
        <ContainerButton>
          <TouchableOpacity
            disabled={current === 0}
            style={[styles.containerButtons, { left: 0 }]}
            onPress={previousPage}
          >
            <AntDesign
              style={current === 0 || !condition ? styles.textNoExist : styles.textExist}
              name="leftcircle"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </ContainerButton>
        <ContainerButton>
          <TouchableOpacity
            disabled={current === abas - 1 || !condition}
            style={[styles.containerButtons, { right: 0 }]}
            onPress={nextPage}
          >
            <AntDesign
              style={current === abas - 1 || !condition ? styles.textNoExist : styles.textExist}
              name="rightcircle"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </ContainerButton>
      </View>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(abas).keys()).map((key, index) => (
          <View
            style={[styles.paginationDots, { opacity: current === index ? 1 : 0.4 }]}
            key={index}
          />
        ))}
      </View>
    </>
  )
})

export default MoveButton

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: constants.headerHight + 8,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsScrollsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerButtons: {
    position: 'absolute',
    backgroundColor: 'transparent',
    padding: 32,
    borderRadius: 2,
    margin: 8,
    borderWidth: 0,
    elevation: 0,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    marginBottom: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'gray',
    marginLeft: 10,
    borderColor: colors.black,
    borderWidth: 1,
  },
  textNoExist: {
    color: 'transparent',
  },
  textExist: {
    backgroundColor: colors.white,
    color: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 90,
  },
})
