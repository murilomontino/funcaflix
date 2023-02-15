import React from 'react'


import ButtonGroupSocialMedia from './button-group-social-media'
import styles from './styles.module.scss'

import colors from '@/global/colors'
import useSocialMediaValid from '@/hooks/use-social-media-valid'


type Props = {
  youtube?: string
  instagram?: string
  facebook?: string
  twitter?: string
}


const SocialMedia = ({ facebook, instagram, twitter, youtube }: Props) => {

  const { 
    facebookValid, 
    instagramValid, 
    twitterValid, 
    youtubeValid 
  } = useSocialMediaValid({ facebook, instagram, twitter, youtube })

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
              <ButtonGroupSocialMedia 
                fValid={facebookValid}
                facebook={facebook}
                iValid={instagramValid}
                instagram={instagram}
                tValid={twitterValid}
                twitter={twitter}
                yValid={youtubeValid}
                youtube={youtube}              
              />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
