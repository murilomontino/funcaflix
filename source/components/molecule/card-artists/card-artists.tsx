import React, { useMemo } from 'react'
import { Col } from 'react-bootstrap'

import PersonDefault from '@/public/person-default.png'
import { IGetterCulturalProfile } from '@/types/getters'
import { QRCodeSVG } from 'qrcode.react'

import Img from '@/components/atom/image'

import SocialMedia from '../social-media'
import styles from './styles.module.scss'
import Link from 'next/link'

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
  const link = useMemo(() => {
    const nameNormalize = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const names = nameNormalize.split(' ')
    const username = names[0] + names[names.length - 1]
    return `/${username}@${id}`
  }, [name, id])

  return (
    <Col sm="6" md="4" lg="2" className={`block-images position-relative ${styles['btn']}`}>
      <div className="iq-card position-relative">
        <QRCode value={
          `${item.name.toLowerCase().replace(/ /g, '')}#${item.id}`
        } />
        <div className='position-relative overflow-hidden rounded-circle'>
          <Img
            endpoint="images/profile/"
            image={item.thumbnail || PersonDefault}
            staticImage={!item.thumbnail}
            className="img-zoom img-fluid w-100 h-100 rounded-circle"
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
    </Col>
  )
}

export default React.memo(CardArtists)
