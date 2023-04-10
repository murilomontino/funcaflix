import React, { useState } from 'react'

import noCapa from '@/public/no-capa.jpg'
import Image, { ImageProps } from 'next/image'

type Props = {
	image: string
	unblur?: boolean
	imageStatic?: boolean
} & Partial<ImageProps>

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

const ImageNext = ({
	image,
	unblur = false,
	imageStatic = false,
	className,
	alt,
	...props
}: Props) => {
	const { width, height } = props
	const [isLoading, setIsLoading] = useState(false)

	return (
		<React.Fragment>
			<Image
				{...props}
				src={image}
				alt={alt.toString() || 'Imagem não encontrada'}
				width={width || 300}
				height={height || 300}
				loader={!imageStatic && imageLoader}
				className={`${isLoading && unblur ? 'unblur' : ''} ${className}`}
				onLoadingComplete={() => setIsLoading(true)}
			/>
			<style jsx global>{`
				.unblur {
					animation: unblur 0.5s linear;
				}

				@keyframes unblur {
					from {
						filter: blur(20px);
					}
					to {
						filter: blur(0);
					}
				}
			`}</style>
		</React.Fragment>
	)
}

export default ImageNext
