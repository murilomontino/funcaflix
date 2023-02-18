import React from 'react'
import ReactTooltip from 'react-tooltip'

import styles from './tab-pane-overview.module.scss'

const DEVELOPMENT = true

const events = [
	{
		id: 1,
		name: 'Evento 1',
		date: '01/01/2021',
		hour: '10:00',
		local: 'Local 1',
		description: 'Descrição do evento 1',
	},
	{
		id: 2,
		name: 'Evento 2',
		date: '01/01/2021',
		hour: '10:00',
		local: 'Local 2',
		description: 'Descrição do evento 2',
	},
	{
		id: 3,
		name: 'Evento 3',
		date: '01/01/2021',
		hour: '10:00',
		local: 'Local 3',
		description: 'Descrição do evento 3',
	},
	{
		id: 4,
		name: 'Evento 4',
		date: '01/01/2021',
		hour: '10:00',
		local: 'Local 4',
		description: 'Descrição do evento 4',
	},
	{
		id: 5,
		name: 'Evento 5',
		date: '01/01/2021',
		hour: '10:00',
		local: 'Local 5',
		description: 'Descrição do evento 5',
	},
	{
		id: 6,
		name: 'Evento 6',
		date: '01/01/2021',
		hour: '10:00',
		local: 'Local 6',
		description: 'Descrição do evento 6',
	},
]

type EventProps = {
	events: {
		id: number
		name: string
		date: string
		hour: string
		local: string
		description: string
	}[]
}

const TabPaneEvents = (props: EventProps) => {
	// console.log('TabPaneEvents', props)
	// if (DEVELOPMENT) return null

	return (
		<>
			{events.map(({ name, date, hour, local, description }) => {
				const id = React.useId()
				return (
					<div
						key={id}
						className={`
                                w-100 
                                bg-white 
                                justify-content-center 
                                align-content-center 
                                m-1
                            `}
						style={{
							boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
							borderRadius: '8px',
						}}
					>
						<div
							className={`d-flex row justify-content-around ${styles['row-customize']}`}
						>
							<ReactTooltip />
							<h6 className="m-2 text-black">{name}</h6>
							<div className="d-flex row w-30 justify-content-center align-items-center">
								<h6 className="card-subtitle m-2 text-muted">
									{date} - {hour}
								</h6>
								<h6 className="card-subtitle m-2 text-muted">{local}</h6>
								<div className="h-100 d-flex justify-content-center align-items-center">
									{/** icon de exclamação rounded */}
									<i
										data-tip={description}
										className="fas fa-exclamation-circle m-1 text-secondary"
									/>
									{/** icon de endereço rounded */}
									<i
										data-tip="endereço"
										className="fas fa-map-marker-alt m-1 text-secondary"
									/>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default TabPaneEvents
