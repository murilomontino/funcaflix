import React from 'react'
import Skeleton from 'react-loading-skeleton'

import LogoDefault from '@/public/logo-default.png'
import noCapa from '@/public/no-capa.jpg'

import ImageNext from '@/components/atom/image-next'
import Logo from '@/components/atom/logo-funcapflix'

import { ContainerLogo, Title } from './styles'

import { If } from '@/utils/tsx-controls'

type Props = {
	title: string
	thumbnail: string
	disabled?: boolean
	width?: string
	height?: string
	button?: string
	endpoint?: string
	linkDetails?: string
	imageStatic?: boolean
	existLogo?: boolean
}

const imageLoader = ({ src, endpoint = '' }) => {
	if (!src || src?.startsWith('Não')) {
		return noCapa
	}

	if (src?.startsWith('logo')) {
		return LogoDefault
	}

	if (src && src.startsWith('http')) {
		return src
	}

	const uuid = src.replace('imagens/', '')
	const URL = process.env._currentURL + 'images' + '/' + uuid

	return URL
}

const CardSwipper = ({
	title,
	thumbnail,
	endpoint,
	disabled,
	width = '100%',
	height = '160px',
	button = 'Assistir',
	existLogo = true,
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
		<React.Fragment>
			<div className="block-images position-relative">
				<div
					className="img-box"
					style={{
						width: width,
						height: height,
					}}
				>
					<ImageNext
						imageStatic={thumbnail?.startsWith('logo')}
						unoptimized
						image={imageLoader({ src: thumbnail, endpoint })}
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
					<If condition={existLogo}>
						<ContainerLogo>
							<Logo size={1.5} />
						</ContainerLogo>
					</If>
					<div
						style={{
							backgroundColor: 'rgba(0,0,0,0.3)',
						}}
					>
						<Title>{title}</Title>
					</div>

					<div
						className="ml-2 position-absolute"
						style={{
							width: 'fit-content',
							bottom: '20px',
						}}
					>
						<If condition={!disabled}>
							<a
								href={linkDetails}
								role="button"
								className="btn btn-hover iq-button button-hover iq-border-radius-5"
							>
								<i className="fa fa-play mr-1" aria-hidden="true"></i>
								{button}
							</a>
						</If>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default CardSwipper
