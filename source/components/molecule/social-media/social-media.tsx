import React, { useMemo } from 'react'

import Link from 'next/link'

import styles from './styles.module.scss'

import colors from '@/global/colors'

import { If } from '@/utils/tsx-controls'

type Props = {
  youtube?: string
  instagram?: string
  facebook?: string
  twitter?: string
}

type PropsButton = {
  icon: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

// eslint-disable-next-line react/display-name
const ButtonSocialMedia = React.forwardRef(
  ({ onClick, href, target = '_blank', icon, ...rest }: PropsButton, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        target={target}
        rel="noopener noreferrer"
        className="share-ico"
        tabIndex={0}
        {...rest}
      >
        <i className={icon}></i>
      </a>
    )
  }
)

const SocialMedia = ({ facebook, instagram, twitter, youtube }: Props) => {

  const [facebookValid, instagramValid, twitterValid, youtubeValid] = useMemo(() => {
    // verifica se começa com http ou https ou se a palavra é Não Declarou
    const regex = /^(http|https)/

    // Retorna apenas os que começam com http ou https, e os que não começam com Não Declarou
    return [
      regex.test(facebook) && !facebook?.startsWith('Não'),
      regex.test(instagram) && !instagram?.startsWith('Não'),
      regex.test(twitter) && !twitter?.startsWith('Não'),
      regex.test(youtube) && !youtube?.startsWith('Não'),
    ]

  }, [facebook, instagram, twitter, youtube])

  // verifica se não há nenhum link válido
  if (!facebookValid && !instagramValid && !twitterValid && !youtubeValid) {
    return null
  }


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
              <If condition={facebookValid}>
                <Link href={facebook} passHref>
                  <ButtonSocialMedia icon="ri-facebook-fill" />
                </Link>
              </If>
              <If condition={instagramValid}>
                <Link href={instagram} passHref>
                  <ButtonSocialMedia icon="ri-instagram-fill" />
                </Link>
              </If>

              <If condition={twitterValid}>
                <Link href={twitter} passHref>
                  <ButtonSocialMedia icon="ri-twitter-fill" />
                </Link>
              </If>

              <If condition={youtubeValid}>
                <Link href={youtube} passHref>
                  <ButtonSocialMedia icon="ri-youtube-fill" />
                </Link>
              </If>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
