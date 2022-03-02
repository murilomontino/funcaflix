import React, { useMemo, useRef } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { useHover, useScaledSize } from 'react-native-web-hooks'
import { AntDesign } from 'react-web-vector-icons'

import Link from 'next/link'

import colors from '@/global/colors'

type Props = {
  textVisible?: boolean
}

const ButtonLogin = ({ textVisible = true }: Props) => {
  const fontSize = useScaledSize(0.7)
  const iconSize = useScaledSize(1.2)

  const ref = useRef(null)
  const hover = useHover(ref)

  const color = useMemo(() => (hover ? 'orange' : colors.white), [hover])

  return (
    <Link href={'https://funcap.mapacultural.acesso.se.gov.br/'}>
      <View
        ref={ref}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableHighlight
          style={{
            padding: 12,
            marginRight: 4,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <React.Fragment>
            <AntDesign name="login" size={iconSize} color={color} />

            {!!textVisible && (
              <Text
                style={{
                  color: color,
                  padding: 8,
                  fontSize: fontSize,
                  fontWeight: 'bold',
                }}
              >
                Entrar
              </Text>
            )}
          </React.Fragment>
        </TouchableHighlight>
      </View>
    </Link>
  )
}

export default ButtonLogin
