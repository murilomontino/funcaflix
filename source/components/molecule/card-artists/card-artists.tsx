import React from 'react'

import PersonDefault from '@/public/person-default.png'
import { IGetterCulturalProfile } from '@/types/getters'
import { QRCodeSVG } from 'qrcode.react'

import Img from '@/components/atom/image'

import Link from 'next/link'
import SocialMedia from '../social-media'
import styles from './styles.module.scss'

type Props = {
  item: IGetterCulturalProfile
}

const QRCode = ({ value }) => {
  return (
    <div className={`position-absolute ${styles['qr-code-custom']}`}>
      <QRCodeSVG value={value} size={64} />
    </div>
  )
}

const CardArtists = ({ item }: Props) => {

  const { name, id } = item
  const link = React.useMemo(() => {
    const nameNormalize = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const names = nameNormalize.split(' ')
    const username = names[0] + names[names.length - 1]
    return `${process.env.URL}/${username}@${id}`
  }, [name, id])

  return (
    <div
      className={`${styles['btn']} position-relative m-1`}
      style={{
        width: '240px',
        height: '240px',
      }}>
      <QRCode value={link} />
      <div className={`position-relative overflow-hidden rounded-circle`} >
        <Img
          endpoint="images/profile/"
          image={item.thumbnail || PersonDefault}
          staticImage={!item.thumbnail}
          style={{
            width: '240px',
            height: '240px',
          }}
          className="img-zoom rounded-circle w-100 h-100"
          alt={`Foto do artista ${item.name}`}
        />
        <Link href={link}>
          <div className={`wrapper w-100 position-absolute ${styles['title-btn']}`}>
            <h6 className="text-white mb-0">{item.name}</h6>
          </div>
        </Link>
        <SocialMedia {...item} />
      </div>
    </div>

  )
}

export default React.memo(CardArtists)
