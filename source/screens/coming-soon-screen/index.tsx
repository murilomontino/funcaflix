import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import Link from 'next/link'

import ButtonLogin from '@/components/atom/button-login'
import HeaderLogo from '@/components/molecule/header-logo'
import SkeletonHeadLogo from '@/components/molecule/header-logo/skeleton'

import { ContainerBackground, LinkAnchor, Warning } from './styles'

import { useResources } from '@/hooks/utils/use-resources'

const ComingSoonScreen = () => {
  const { isFontReady } = useResources()

  const WIDTH_NUMBER = 7
  const TEXT_NUMBER = 2

  const TEXT_SIZE = useScaledSize(TEXT_NUMBER)
  const WIDTH_LOGO = useScaledSize(WIDTH_NUMBER)

  useEffect(() => {
    alert(
      `Fique ATENTO!!! O domínio mapas.cultura.se.gov.br será inativado a partir do dia 31 de Julho não podendo mais ser utilizado para acesso da plataforma. \nO novo domínio será https://mapacultural.funcap.se.gov.br/`
    )
  }, [])

  return (
    <ContainerBackground>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isFontReady ? (
          <HeaderLogo
            widthLogo={WIDTH_NUMBER}
            textSize={TEXT_NUMBER}
            subTitle="EM BREVE NOVIDADES NA PRÓXIMA ATUALIZAÇÃO DA PLATAFORMA"
          />
        ) : (
          <SkeletonHeadLogo width={WIDTH_LOGO} textSize={TEXT_SIZE} />
        )}
        <Warning>
          Fique ATENTO!!! O domínio mapas.cultura.se.gov.br será inativado a partir do dia{' '}
          <strong
            style={{
              color: 'orange',
              fontWeight: 'bold',
            }}
          >
            31 DE JULHO
          </strong>{' '}
          não podendo mais ser utilizado para acesso na plataforma.
        </Warning>
        <Link href={'https://mapacultural.funcap.se.gov.br/'} passHref>
          <LinkAnchor>https://mapacultural.funcap.se.gov.br/</LinkAnchor>
        </Link>
        <ButtonLogin />
      </View>
    </ContainerBackground>
  )
}

export default ComingSoonScreen
