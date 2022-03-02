import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, FontVariant } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import Link from 'next/link'

type Props = {
  title: string
  link?: string
  select?: boolean
  fontVariant?: FontVariant
  passHref?: boolean
}

const ItemNavBar: React.FC<Props> = ({
  title,
  link,
  select = true,
  fontVariant = 'small-caps',
  passHref = false,
}) => {
  const ref = useRef(null)
  const hover = useHover(ref)

  const fontSize = 14

  if (passHref) {
    return (
      <a href={link} style={{ textDecoration: 'none' }}>
        <TouchableOpacity style={styles.buttonNav}>
          <Text
            ref={ref}
            style={[
              { fontSize, fontVariant: [fontVariant] },
              styles.textNav,
              select && hover && styles.hoverText,
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </a>
    )
  }

  return (
    <TouchableOpacity style={styles.buttonNav}>
      <Link href={link} passHref={passHref}>
        <Text
          ref={ref}
          style={[
            { fontSize, fontVariant: [fontVariant] },
            styles.textNav,
            select && hover && styles.hoverText,
          ]}
        >
          {title}
        </Text>
      </Link>
    </TouchableOpacity>
  )
}

export default ItemNavBar

const styles = StyleSheet.create({
  textNav: {
    color: '#fff',
    fontWeight: '700',
  },
  hoverText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  buttonNav: {
    padding: 4,
    marginHorizontal: 4,
  },
  selectText: {},
})
