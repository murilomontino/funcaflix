import { If } from '@/utils/tsx-controls'
import Link from 'next/link'
import React from 'react'
import ButtonSocialMedia from './button-social-media'

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
            <If condition={fValid}>
                <Link href={facebook} passHref>
                    <ButtonSocialMedia icon="ri-facebook-fill" {...iconProps}/>
                </Link>
            </If>
            <If condition={iValid}>
                <Link href={instagram} passHref>
                    <ButtonSocialMedia icon="ri-instagram-fill" {...iconProps}/>
                </Link>
            </If>

            <If condition={tValid}>
                <Link href={twitter} passHref>
                    <ButtonSocialMedia icon="ri-twitter-fill" {...iconProps}/>
                </Link>
            </If>

            <If condition={yValid}>
                <Link href={youtube} passHref>
                    <ButtonSocialMedia icon="ri-youtube-fill" {...iconProps}/>
                </Link>
            </If>
        </div>
    )
}

export default ButtonGroupSocialMedia