import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import ButtonLogin from '@/components/atom/button-login'
import ButtonOpenMenu from '@/components/atom/button-open-menu'
import LogoMapaCultural from '@/components/atom/logo-mapa-cultural'
import NavBar from '@/components/molecule/nav-bar'

import { BarHeader } from './styles'

import { useSize } from '@/hooks/utils/use-size'

const Header = () => {
  const { size, web } = useSize()

  const [sizeNavBar, setSizeNavBar] = useState(web ? false : true)

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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          elevation: 5,
          shadowColor: '#fff',
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}
      >
        {!sizeNavBar ? (
          <>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <LogoMapaCultural />
              <NavBar />
            </View>
            <ButtonLogin />
          </>
        ) : (
          <>
            <ButtonOpenMenu />
            <LogoMapaCultural />
            <ButtonLogin textVisible={false} />
          </>
        )}
      </View>
    </BarHeader>
  )
}

export default Header
