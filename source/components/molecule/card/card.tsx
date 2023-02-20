import React, { useMemo } from 'react'

import { GetterBook, GetterProjects } from '@/domain/entities'
import DefaultImg from '@/public/logo-default.png'

import Img from '@/components/atom/image'

import { Card } from './styles'

type Props = {
	item: GetterProjects | GetterBook
	children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
	endpoint?: string
}

const CardDefault = ({ item, children, endpoint }: Props) => {
	const { dateEnd, dateStart, status, thumbnail } = (() => {
		if ('dateEnd' in item && 'dateStart' in item && 'status' in item) {
			return {
				dateEnd: item.dateEnd,
				dateStart: item.dateStart,
				status: item.status,
				thumbnail: item.thumbnail || null,
			}
		}

		return {
			dateEnd: null,
			dateStart: null,
			status: null,
			thumbnail: item.thumbnail,
		}
	})()

	const color = useMemo(() => {
		if (!status) return null
		if (new Date(dateEnd) < new Date() || status == 2) return '#FF0000'
		if (new Date(dateStart) > new Date()) return '#FFA500'
		return '#008000'
	}, [dateEnd, dateStart, status])

	return (
		<Card color={color}>
			<div className="d-flex col flex-column justify-content-between mh-2">
				<Img
					endpoint={endpoint}
					image={thumbnail || DefaultImg}
					style={{
						objectFit: 'cover',
						width: 250,
						height: '100%',
					}}
					staticImage={!thumbnail}
				/>
			</div>
			<div
				className="d-flex col flex-column justify-content-between mh-2"
				style={{ flex: 4 }}
			>
				{children || null}
			</div>
		</Card>
	)
}

export default CardDefault
