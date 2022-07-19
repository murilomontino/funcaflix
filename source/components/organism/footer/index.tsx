import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { useLayout } from 'react-native-web-hooks'

import LogoGoverno from '@/components/atom/logo-governo'
import AboutFooter from '@/components/molecule/about-footer'

import { ContainerFooter, ContainerAbout, ContainerSocial, ContainerLogo } from './styles'

const Footer = () => {
  const web = Platform.OS === 'web'

  const [sizeNavBar, setSizeNavBar] = useState(web ? false : true)
  const { onLayout, width } = useLayout()

  web &&
    useEffect(() => {
      if (width < 720) {
        setSizeNavBar(true)
      } else {
        setSizeNavBar(false)
      }
    }, [width])

  // 720

  return (
    <ContainerFooter onLayout={onLayout}>
      <ContainerAbout>
        <AboutFooter />
      </ContainerAbout>
      <ContainerSocial />

      <ContainerLogo>
        {/* {!sizeNavBar ? <LogoFuncapVertical size={8} /> : <Logo size={4} />} */}
        <div style={{ padding: 12 }} />
        <LogoGoverno size={!sizeNavBar ? 10 : 12} textVisible={!sizeNavBar} />
      </ContainerLogo>
    </ContainerFooter>
  )
}

export default Footer
