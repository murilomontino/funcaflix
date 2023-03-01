import React from 'react'

import { GetterProjects } from '@/domain/entities'

import Card from '@/components/molecule/card'
import AboutDescription from '@/components/molecule/card-about-description'
import CardBasicInformation from '@/components/molecule/card-basic-information'

import FooterCard from '../../molecules/footer-card'

type Props = {
	item: GetterProjects
}

const CardOpportunities = ({ item }: Props) => {
	const dateStartFormatted = new Date(item.dateStart).toLocaleDateString(
		'pt-BR',
		{
			timeZone: 'UTC',
		}
	)
	const dateEndFormatted = new Date(item.dateEnd).toLocaleDateString('pt-BR', {
		timeZone: 'UTC',
	})

	return (
		<React.Fragment>
			<Card endpoint="project" item={item}>
				<CardBasicInformation title={item.nameProject} />

				<AboutDescription about={item.aboutProject} />
				<FooterCard
					company={item.company}
					endDate={dateEndFormatted}
					startDate={dateStartFormatted}
				/>
			</Card>
		</React.Fragment>
	)
}

export default CardOpportunities
