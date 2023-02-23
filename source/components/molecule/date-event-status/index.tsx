import React from 'react'

import { STATUS_DATE } from '@/types/constants'

type DateEventProps = {
	status: STATUS_DATE
}

const DateEventStatus = ({ status }: DateEventProps) => {
	if (status === STATUS_DATE['not-started']) {
		return (
			<React.Fragment>
				<h6 className="card-subtitle m-2 text-center text-warning">
					Não Iniciado
				</h6>
			</React.Fragment>
		)
	}

	if (status === STATUS_DATE['done']) {
		return (
			<React.Fragment>
				<h6 className="card-subtitle m-2 text-center text-danger">Encerrado</h6>
			</React.Fragment>
		)
	}

	if (status === STATUS_DATE['in-progress']) {
		return (
			<React.Fragment>
				<h6 className="card-subtitle m-2 text-center text-success">
					Em Andamento
				</h6>
			</React.Fragment>
		)
	}

	return (
		<React.Fragment>
			<h6 className="card-subtitle m-2 text-center text-success">
				Não Informado
			</h6>
		</React.Fragment>
	)
}

export default DateEventStatus
