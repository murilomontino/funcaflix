import React from 'react'
import { Col } from 'react-bootstrap'

import Link from 'next/link'
import { QRCodeSVG } from 'qrcode.react'

import styles from './styles.module.scss'

import colors from '@/global/colors'

const QRCode = ({ value }) => {
  return (
    <div className={`position-absolute ${styles['qr-code-custom']}`}>
      <QRCodeSVG value={value} size={64} />
    </div>
  )
}

const SocialMedia = () => {
  return (
    <div className={`block-social-info ${styles['social-custom']}`}>
      <ul className="list-inline p-0 m-0 music-play-lists">
        <li className="share">
          <span>
            <i
              className="ri-share-fill"
              style={{
                color: colors.orange,
              }}
            ></i>
          </span>
          <div className="share-box">
            <div className="d-flex align-items-center">
              <a
                to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                target="_blank"
                rel="noopener noreferrer"
                className="share-ico"
                tabIndex="0"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                to="https://twitter.com/intent/tweet?text=Currentlyreading"
                target="_blank"
                rel="noopener noreferrer"
                className="share-ico"
                tabIndex="0"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                to="#"
                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                className="share-ico iq-copy-link"
                tabIndex="0"
              >
                <i className="ri-links-fill"></i>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

const CardArtists = ({ item }) => {
  return (
    <Link href={'www.google.com'}>
      <Col
        sm="6"
        md="4"
        lg="2"
        className={`block-images position-relative ${styles['btn']}`}
        style={{
          minWidth: '125px',
          margin: '10px 2px',
        }}
      >
        <div className="iq-card position-relative ">
          <QRCode value={item.name} />
          <img
            src={item.thumbnail}
            style={{
              objectFit: 'cover',
              minHeight: '200px',
            }}
            className="img-zoom img-fluid w-100 h-100"
            alt={`Foto do artista ${item.name}`}
          />
          <SocialMedia />

          <div
            className="wrapper w-100 position-absolute"
            style={{
              bottom: '0',
              left: '0',
              height: '60px',
              background: 'rgba(0, 0, 0, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h6
              className="text-white mb-0"
              style={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '1.5',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              {item.name}
            </h6>
          </div>
        </div>
      </Col>
    </Link>
  )
}

export default CardArtists
