import React, { useState } from 'react'

import ButtonsCard from '@/components/atom/buttons-card/buttons-card'
import DescriptionMovie from '@/components/atom/description-movie'
import ThumbnailImage from '@/components/atom/thumbnail-image'

import CardHovered from '../card-hovered'
import {
	Container,
	ContainerButtons,
	ContainerDescription,
	ContainerInformation,
	ContainerThumbnail,
} from './styles'

type Props = {
	height?: number
	width?: number
	index: number
	isButton?: boolean
	item: {
		id: number | string
		title: string
		description: string
		image: string
	}
} & React.HTMLAttributes<HTMLDivElement>

const WIDTH_ITEM = 250
const HEIGHT_ITEM = 150

const ThumbnailCard = ({ index, item, isButton = false, ...rest }: Props) => {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = (e) => {
		e.preventDefault()
		setIsHovered(true)
	}

	const handleMouseLeave = (e) => {
		e.preventDefault()
		setIsHovered(false)
	}

	return (
		<Container
			{...rest}
			btn={isButton}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			width={WIDTH_ITEM}
			height={HEIGHT_ITEM}
		>
			<ContainerThumbnail
				style={{
					height: HEIGHT_ITEM,
				}}
			>
				<ThumbnailImage
					unblur
					image={item.image}
					width={WIDTH_ITEM}
					height={HEIGHT_ITEM}
					title={item.title}
				/>
			</ContainerThumbnail>

			{isHovered && !isButton && (
				<CardHovered width={WIDTH_ITEM} index={index}>
					<>
						<ThumbnailImage
							image={item.image}
							width={WIDTH_ITEM}
							height={HEIGHT_ITEM}
							title={item.title}
						/>
						<ContainerInformation
							transition={{
								type: 'timing',
								delay: 50,
								duration: 100,
							}}
						>
							<ContainerDescription>
								<DescriptionMovie description={item.description} animated />
							</ContainerDescription>
							<ContainerButtons>
								<ButtonsCard animated />
							</ContainerButtons>
						</ContainerInformation>
					</>
				</CardHovered>
			)}
		</Container>
	)
}

export default ThumbnailCard
