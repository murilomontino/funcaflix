import React, { useMemo, useRef } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useHover } from 'react-native-web-hooks'

import theme from '@/theme'
import { AntDesign } from '@expo/vector-icons'
import Link from 'next/link'

import { Button, Container, Text } from './styles'

type Props = {
  textVisible?: boolean
}

const ButtonLogin = ({ textVisible = true }: Props) => {
  const fontSize = RFValue(8)
  const iconSize = RFValue(18)

  const ref = useRef(null)
  const hover = useHover(ref)

  const color = useMemo(() => (hover ? 'orange' : theme.COLORS.TEXT), [hover])

  return (
    <Link href={'https://mapacultural.acesso.funcap.se.gov.br/'} passHref>
      <a>
        <Container ref={ref}>
          <Button>
            <React.Fragment>
              <AntDesign name="login" size={iconSize} color={color} />

              <Text fontSize={fontSize} color={color} textVisible={textVisible}>
                Entrar
              </Text>
            </React.Fragment>
          </Button>
        </Container>
      </a>
    </Link>
  )
}

export default ButtonLogin
