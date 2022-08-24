import React from 'react'

import Image from 'next/image'

import AboutFooter from '@/components/molecule/about-footer'

import {
  ContainerFooter,
  ContainerAbout,
  ContainerSocial,
  ContainerLogo,
  ContainerLinks,
} from './styles'

const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerAbout>
        <AboutFooter />
      </ContainerAbout>
      <ContainerSocial />

      <ContainerLogo>
        <ContainerLinks>
          <Image
            src={'/logo-funcap-texto.png'}
            width={'200%'}
            height={'125%'}
            alt="Logo Funcap"
            quality={100}
          />
        </ContainerLinks>
        <ContainerLinks>
          <Image
            src={'/governo-logo-sergipe-texto.png'}
            width={150}
            height={100}
            alt="Logo do Governo"
            quality={100}
          />
        </ContainerLinks>
      </ContainerLogo>
    </ContainerFooter>
  )
}

export default Footer
