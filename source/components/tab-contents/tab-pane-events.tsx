import React, { useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import ReactTooltip from 'react-tooltip'

import { IGetterEvent } from '@/types/getters'

import ImageNext from '../atom/image-next'
import DateEventStatus from '../molecule/date-event-status'

type EventProps = {
	events: IGetterEvent[]
}

// Padroniza o título para 30 caracteres e adiciona 3 pontos no final, todas as iniciais maiúsculas
const formatText = (title: string, length = 50) => {
	const titleFormatted =
		title.length > length ? `${title.slice(0, length)}...` : title
	const titleFormattedInitials = titleFormatted
		.toLocaleLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')

	return titleFormattedInitials
}

const TabPaneEvents = ({ events }: EventProps) => {
	const sortedEvents = useMemo(
		() =>
			events.sort((a, b) => {
				return a.statusDate - b.statusDate
			}),
		[events]
	)

	if (!sortedEvents?.length) {
		return (
			<Container fluid className="card">
				<div className={`d-flex w-100 row justify-content-around  p-2`}>
					<h4 className="text-center text-muted text-black text-center mt-1">
						Não há eventos cadastrados por este Perfil
					</h4>
				</div>
			</Container>
		)
	}

	return (
		<React.Fragment>
			<Container fluid>
				{sortedEvents.map(
					({
						id,
						title: _title,
						thumbnail,
						dateStart: _dateStart,
						hourStart: _hourStart,
						local: _local,
						about,
						address: _address,
						cep,
						city,
						complement,
						dateEnd: _dateEnd,
						hourEnd: _hourEnd,
						neighborhood,
						statusDate,
						number,
					}) => {
						const address = `${_address}, ${number}, ${complement}, ${neighborhood}, ${city}, ${cep}`
						const title = formatText(_title)
						const local = formatText(_local)
						const dateAndHourStart = `${_dateStart} - ${_hourStart}`
						const dateAndHourEnd = `${_dateEnd} - ${_hourEnd}`

						return (
							<div
								key={id}
								className={`
								card
								d-flex
								col
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
								<ReactTooltip />

								<div
									className={`d-flex w-100 row justify-content-around ${styles['row-customize']}`}
								>
									<div
										className="d-flex col p-2 w-30"
										style={{
											borderRight: '1px solid #E5E5E5',
											maxWidth: '150px',
										}}
									>
										<ImageNext
											imageStatic={thumbnail?.startsWith('logo')}
											image={thumbnail}
											width={150}
											height={150}
											unblur
											alt={`thumbnail de ${title}`}
										/>
									</div>
									<div className="d-flex w-50 col justify-content-center align-items-center">
										<h6
											data-tip={formatText(_title, _title.length)}
											className="card-title m-2 text-black text-center"
										>
											{title}
										</h6>
									</div>
									<div className="d-flex col justify-content-center align-items-center flex-column">
										<DateEventStatus status={statusDate} />
										<h6 className="card-subtitle m-2 text-muted text-center">
											<span data-tip="Data de Inicio do Evento">
												{dateAndHourStart}
											</span>
											<br />
											<span data-tip="Data de Final do Evento">
												{dateAndHourEnd}
											</span>
										</h6>
										<h6
											data-tip={formatText(_local, _local.length)}
											className="card-subtitle m-2 text-muted mt-2"
										>
											{local}
										</h6>
									</div>
									<div className="d-flex w-30 justify-content-end align-items-center">
										<div className="h-100 d-flex justify-content-center align-items-center">
											{/** icon de exclamação rounded */}
											<i
												data-tip={about}
												className="fas fa-exclamation-circle m-1 text-secondary"
											/>
											{/** icon de endereço rounded */}
											<i
												data-tip={address}
												className="fas fa-map-marker-alt m-1 text-secondary"
											/>
										</div>
									</div>
								</div>
							</div>
						)
					}
				)}
			</Container>
		</React.Fragment>
	)
}

export default TabPaneEvents
