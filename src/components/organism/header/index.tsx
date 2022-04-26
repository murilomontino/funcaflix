import React, { useEffect, useState, useRef } from 'react'
import { useHover } from 'react-native-web-hooks'

import ButtonLogin from '@/components/atom/button-login'
import ButtonOpenMenu from '@/components/atom/button-open-menu'
import LogoMapaCultural from '@/components/atom/logo-mapa-cultural'
import NavBar from '@/components/molecule/nav-bar'

import { BarHeader, Container, ContainerRow } from './styles'

import { useSize } from '@/hooks/utils/use-size'

const Header = () => {
  const { size, web } = useSize()
  const [isScrolled, setIsScrolled] = useState(false)

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
    <BarHeader>
      <Container
        ref={ref}
        animate={{
          opacity: hovered || !isScrolled ? 1 : 0.1,
          shadowOpacity: hovered || !isScrolled ? 0.1 : 0,
        }}
        transition={{ type: 'timing', delay: 0, duration: 100 }}
        style={[
          {
            elevation: 5,
            shadowColor: '#fff',
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowRadius: 4,
          },
        ]}
      >
        {!sizeNavBar ? (
          <>
            <ContainerRow>
              <LogoMapaCultural />
              <NavBar />
            </ContainerRow>
            <ButtonLogin />
          </>
        ) : (
          <>
            <ButtonOpenMenu />
            <LogoMapaCultural />
            <ButtonLogin textVisible={false} />
          </>
        )}
      </Container>
    </BarHeader>
  )
}

export default Header
