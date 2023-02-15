import React from 'react'
import ReactTooltip from 'react-tooltip';

import Link from 'next/link'

import ButtonSocialMedia from './button-social-media'


import { If } from '@/utils/tsx-controls'

type ButtonGroupSocialMediaProps = {
    fValid: boolean
    facebook: string
    iValid: boolean
    instagram: string
    tValid: boolean
    twitter: string
    yValid: boolean
    youtube: string
    iconProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

const ButtonGroupSocialMedia = ({
    fValid,
    facebook,
    iValid,
    instagram,
    tValid,
    twitter,
    yValid,
    youtube,
    iconProps
}: ButtonGroupSocialMediaProps) => {
    return (
        <div className="d-flex align-items-center">
            <ReactTooltip />

            <If condition={fValid}>
                <Link href={facebook} passHref>
                    <ButtonSocialMedia
                        data-tip="Facebook"
                        icon="ri-facebook-fill"
                        {...iconProps}
                    />
                </Link>
            </If>
            <If condition={iValid}>
                <Link href={instagram} passHref>
                    <ButtonSocialMedia
                        data-tip="Instagram"
                        icon="ri-instagram-fill" {...iconProps} />
                </Link>
            </If>

            <If condition={tValid}>
                <Link href={twitter} passHref>
                    <ButtonSocialMedia
                        data-tip="Twitter"
                        icon="ri-twitter-fill" {...iconProps} />
                </Link>
            </If>

            <If condition={yValid}>
                <Link href={youtube} passHref>
                    <ButtonSocialMedia
                        data-tip="Youtube"
                        icon="ri-youtube-fill" {...iconProps} />
                </Link>
            </If>
        </div>
    )
}

export default ButtonGroupSocialMedia