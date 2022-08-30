import React from 'react'

import AboutFooter from '@/components/molecule/about-footer'

import { ContainerFooter, ContainerAbout } from './styles'

const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerAbout>
        <AboutFooter />
      </ContainerAbout>
      {/* <ContainerSocial /> */}
    </ContainerFooter>
  )
}

export default Footer
