import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ItemNavBar from '@/components/atom/item-nav-bar'

import colors from '@/global/colors'

const LINK_FUNCAP = 'https://www.funcap.se.gov.br/'
const LINK_GOVERNO = 'https://www.se.gov.br/'

const AboutFooter = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ItemNavBar
          title="Política e Privacidade"
          link="/politica-de-privacidade"
          fontVariant="proportional-nums"
        />
        {/* <ItemNavBar title="Sobre nós" link="www.google.com" fontVariant="proportional-nums" /> */}
        <ItemNavBar title="Funcap" link={LINK_FUNCAP} fontVariant="proportional-nums" />
        <ItemNavBar
          title="Governo do Estado de Sergipe"
          link={LINK_GOVERNO}
          fontVariant="proportional-nums"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ItemNavBar
          title="Lei Aldir Blank"
          link="/lei-aldir-blank"
          fontVariant="proportional-nums"
        />
        {/* <ItemNavBar title="Sobre nós" link="www.google.com" fontVariant="proportional-nums" /> */}
      </View>
      <View>
        <Text style={[{ fontSize: '1rem' }, styles.textNav]}>
          © 2021 MAPA DA CULTURA DE SERGIPE. Todos os direitos reservados
        </Text>
      </View>
    </>
  )
}

export default AboutFooter

const styles = StyleSheet.create({
  textNav: {
    color: colors.white,
    fontWeight: '700',
    padding: 8,
    fontVariant: ['proportional-nums'],
    marginTop: 12,
  },
})
