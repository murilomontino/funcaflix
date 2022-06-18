import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useHover } from 'react-native-web-hooks'

import Image from 'next/image'

import ButtonLogin from '@/components/atom/button-login'
import ButtonOpenMenu from '@/components/atom/button-open-menu'
import ImageNext from '@/components/atom/image-next'
import NavBar from '@/components/molecule/nav-bar'

import { BarHeader, Container, ContainerRow } from './styles'

import { useSize } from '@/hooks/utils/use-size'

const OrderHeader = ({ logoLeft }) => {
  const link = 'https://funcap.mapacultural.se.gov.br/'
  const height = useMemo(() => (logoLeft ? RFValue(25) : RFValue(40)), [logoLeft])
  const width = useMemo(() => (logoLeft ? RFValue(45) : RFValue(90)), [logoLeft])

  if (logoLeft) {
    return (
      <>
        <ContainerRow>
          <a href={link} style={{ textDecoration: 'none', marginLeft: '12px' }}>
            <ImageNext
              image={'/logo-mapa-cultural.png'}
              alt="Logo do Mapa Cultural"
              height={height}
              width={width}
            />
          </a>
          <NavBar />
        </ContainerRow>
        <ButtonLogin />
      </>
    )
  }

  return (
    <>
      <ButtonOpenMenu />
      <a href={link} style={{ textDecoration: 'none', marginLeft: '12px' }}>
        <Image src={'/logo-mapa-cultural.png'} alt="Mapa Cultural" height={height} width={width} />
      </a>
      <ButtonLogin textVisible={false} />
    </>
  )
}

const Header = () => {
  const { size, web } = useSize()
  const [isScrolled, setIsScrolled] = useState(false)

  const mobile = Platform.OS === 'android' || Platform.OS === 'ios'
  function onScroll(window, _event): any {
    const { scrollTop } = window.target.scrollingElement

    if (scrollTop === 0) {
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll as any)
    return () => {
      window.removeEventListener('scroll', onScroll as any)
    }
  }, [])

  const [sizeNavBar, setSizeNavBar] = useState(web ? false : true)
  const ref = useRef()
  const hovered = useHover(ref)

  const { width } = size
  web &&
    useEffect(() => {
      if (width < 1127) {
        setSizeNavBar(true)
      } else {
        setSizeNavBar(false)
      }
    }, [width])

  // 1127

  return (
    <BarHeader mobile={mobile}>
      <Container
        ref={ref}
        animate={{
          opacity: hovered || !isScrolled ? 1 : 0.1,
          shadowOpacity: hovered || !isScrolled ? 0.1 : 0,
        }}
        transition={{ type: 'timing', delay: 0, duration: 100 }}
      >
        <OrderHeader logoLeft={!sizeNavBar} />
      </Container>
    </BarHeader>
  )
}

export default Header
