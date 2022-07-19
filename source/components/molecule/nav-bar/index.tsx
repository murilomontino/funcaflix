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
      <ItemNavBar title="AUDIOVISUAL" link="/audiovisual" disabled />
      <ItemNavBar title="PROGRAMAS DE TV" link="/programas-de-tv" disabled />
      <ItemNavBar title="LITERATURA" select={true} link="/literatura" disabled />
      <ItemNavBar title="MÚSICAS" select={true} link="/musicas" disabled />
      <ItemNavBar title="ARTES VISUAIS" link="/artes-visuais" disabled />
      <ItemNavBar title="AGENDA CULTURAL" link="/agenda" disabled />
      <ItemNavBar title="PERFIS CULTURAIS" link="/perfil" disabled />
      <ItemNavBar title="OPORTUNIDADES" link="/perfil" disabled />
    </View>
  )
}

export default NavBar
