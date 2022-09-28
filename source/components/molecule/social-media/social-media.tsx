import React from 'react'

import Link from 'next/link'

import styles from './styles.module.scss'

import colors from '@/global/colors'

import { If } from '@/utils/tsx-controls'

type Props = {
  youtube?: string
  instagram?: string
  facebook?: string
  twitter?: string
  website?: string
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

const SocialMedia = ({ facebook, instagram, twitter, website, youtube }: Props) => {
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
              <If condition={!!facebook && facebook !== 'Não declarou'}>
                <Link href={facebook} passHref>
                  <ButtonSocialMedia icon="ri-facebook-fill" />
                </Link>
              </If>
              <If condition={!!instagram && instagram !== 'Não declarou'}>
                <Link href={instagram} passHref>
                  <ButtonSocialMedia icon="ri-instagram-fill" />
                </Link>
              </If>

              <If condition={!!twitter && twitter !== 'Não declarou'}>
                <Link href={twitter} passHref>
                  <ButtonSocialMedia icon="ri-twitter-fill" />
                </Link>
              </If>

              <If condition={!!website && website !== 'Não declarou'}>
                <Link href={website} passHref>
                  <ButtonSocialMedia icon="ri-link" />
                </Link>
              </If>

              <If condition={!!youtube && youtube !== 'Não declarou'}>
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
