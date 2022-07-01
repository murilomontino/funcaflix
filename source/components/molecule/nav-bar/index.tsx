import React from 'react'
import { View } from 'react-native'

import ItemNavBar from '@/components/atom/item-nav-bar'

type Props = {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined
}

const NavBar: React.FC<Props> = ({ flexDirection = 'row' }) => {
  return (
    <View
      style={{
        flexDirection: flexDirection,
        marginLeft: 16,
      }}
    >
      <ItemNavBar title="AUDIOVISUAL" link="/audiovisual" passHref />
      <ItemNavBar title="PROGRAMAS DE TV" link="/programas-de-tv" passHref />
      <ItemNavBar title="LITERATURA" select={true} link="/literatura" />
      <ItemNavBar title="MÚSICAS" select={true} link="/musicas" />
      <ItemNavBar title="ARTES VISUAIS" link="/workshops" passHref />
      <ItemNavBar title="AGENDA CULTURAL" link="/agenda" />
    </View>
  )
}

export default NavBar
