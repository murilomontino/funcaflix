import React from 'react'
import { View } from 'react-native'

import ItemNavBar from '@/components/atom/item-nav-bar'

type Props = {
  flexDirection?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined
}

const NavBar: React.FC<Props> = ({ flexDirection = 'row' }) => {
  return (
    <View
      style={{
        flexDirection: flexDirection,
        marginLeft: 16,
      }}
    >
      <ItemNavBar
        title="FILMES"
        link="https://funcap.mapacultural.se.gov.br/streaming/movies"
        passHref
      />
      <ItemNavBar
        title="SHOWS"
        link="https://funcap.mapacultural.se.gov.br/streaming/shows"
        passHref
      />
      <ItemNavBar
        title="PROGRAMAS DE TV"
        link="https://funcap.mapacultural.se.gov.br/streaming/tv-programs"
        passHref
      />

      <ItemNavBar title="LITERATURA" select={true} link="/literatura" />
      <ItemNavBar title="MÚSICAS" select={true} link="/musicas" />
      <ItemNavBar
        title="ARTES VISUAIS"
        link="https://funcap.mapacultural.se.gov.br/streaming/workshops"
        passHref
      />

      <ItemNavBar title="AGENDA CULTURAL" link="/agenda" />
    </View>
  )
}

export default NavBar
