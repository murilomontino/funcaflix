import React from 'react'
import { useScaledSize } from 'react-native-web-hooks'

import HeaderLogo from '@/components/molecule/header-logo'
import SkeletonHeadLogo from '@/components/molecule/header-logo/skeleton'
import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { ContainerLogo, ContainerBackground, ContainerChildren } from './styles'

import { useResources } from '@/hooks/utils/use-resources'

type Props = {
  children: React.ReactNode | React.FC | React.Component | JSX.Element
}

const TemplateAdminProduct = ({ children }: Props) => {
  const { isFontReady } = useResources()
  const TEXT_SIZE = useScaledSize(1)

  const WIDTH_LOGO = useScaledSize(3)

  return (
    <ContainerBackground>
      <>
        <Header />
        <ContainerLogo>
          {isFontReady ? (
            <HeaderLogo />
          ) : (
            <SkeletonHeadLogo width={WIDTH_LOGO} textSize={TEXT_SIZE} />
          )}
        </ContainerLogo>
        <ContainerChildren>{children}</ContainerChildren>
        <Footer />
      </>
    </ContainerBackground>
  )
}

export default TemplateAdminProduct
