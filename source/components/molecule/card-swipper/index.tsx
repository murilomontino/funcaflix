import React from 'react'
import Skeleton from 'react-loading-skeleton'

import noCapa from '@/public/no-capa.jpg'
import theme from '@/theme'
import { MotiView } from 'moti'

import ImageNext from '@/components/atom/image-next'
import Logo from '@/components/atom/logo-funcap'

import { ContainerLogo, Title } from './styles'

type Props = {
  title: string
  thumbnail: string
  width?: string
  height?: string
  button?: string
  linkDetails?: string
}

const imageLoader = ({ src }) => {
  if (!src || src?.startsWith('Não')) {
    return noCapa
  }

  if (src && src.startsWith('http')) {
    return src
  }

  const uuid = src.replace('imagens/', '')
  const URL = process.env._currentURL + 'images/' + uuid

  return URL
}

const CardSwipper = ({
  title,
  thumbnail,
  width = '100%',
  height = '160px',
  button = 'Assistir',
  linkDetails = '/',
}: Props) => {
  if (!thumbnail) {
    return (
      <div className="block-images position-relative">
        <Skeleton height={height} width={width} />
      </div>
    )
  }

  return (
    <div className="block-images position-relative">
      <div
        className="img-box"
        style={{
          width: width,
          height: height,
        }}
      >
        <ImageNext
          image={imageLoader({ src: thumbnail })}
          layout="fill"
          unblur
          style={{
            width: width,
            height: height,
          }}
          alt={`thumbnail de ${title}`}
        />
      </div>

      <div
        className="block-description"
        style={{
          left: 0,
          width: '100%',
        }}
      >
        <ContainerLogo>
          <Logo size={1.5} />
        </ContainerLogo>
        <MotiView
          animate={{
            width: '100%',
          }}
          transition={{
            type: 'timing',
            delay: theme.EFFECT.DELAY,
            duration: theme.EFFECT.DURATION,
          }}
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <Title>{title}</Title>
        </MotiView>

        {/*<h6 className="iq-title">
          <a href={linkDetails}>{title}</a>
        </h6>
           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
          <div className="badge badge-secondary p-1 mr-2">13+</div>
          <span className="text-white">2h 30m</span>
        </div> 
        */}
        <div
          className="ml-2 position-absolute"
          style={{
            width: 'fit-content',
            bottom: '20px',
          }}
        >
          <a
            href={linkDetails}
            role="button"
            className="btn btn-hover iq-button button-hover iq-border-radius-5"
          >
            <i className="fa fa-play mr-1" aria-hidden="true"></i>
            {button}
          </a>
        </div>
      </div>
      {/* <div className="block-social-info">
        <ul className="list-inline p-0 m-0 music-play-lists">
          <li className="share">
            <span>
              <i className="ri-share-fill"></i>
            </span>
            <div className="share-box">
              <div className="d-flex align-items-center">
                <a
                  href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-ico"
                  tabIndex="0"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Currentlyreading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-ico"
                  tabIndex="0"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
                <a
                  href="#"
                  data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                  className="share-ico iq-copy-link"
                  tabIndex="0"
                >
                  <i className="ri-links-fill"></i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <span>
              <i className="ri-heart-fill"></i>
            </span>
            <span className="count-box">19+</span>
          </li>
          <li>
            <span>
              <i className="ri-add-line"></i>
            </span>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default CardSwipper
