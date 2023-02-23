import React from 'react'

type Props = {
	company: string
	startDate: string
	endDate: string
}

const OpportunityFooter = ({ company, endDate, startDate }: Props) => {
	return (
		<React.Fragment>
			<div className="container d-flex flex flex-row justify-between items-center text-black">
				<div>
					<p className="font-size-12 font-bold text-align-vertical-center text-gray text-uppercase">
						{company}
					</p>
					<div className="d-flex align-items-start justify-content-between flex-column">
						<div className="d-flex flex-row w-100 justify-content-between">
							<p className="font-bold font-size-12 text-gray">Inicio:</p>
							<p className="font-bold font-size-12 text-gray mr-2 ml-2">
								{startDate}
							</p>
						</div>
						<div className="d-flex flex-row w-100 justify-content-between">
							<p className="font-bold font-size-12 text-gray">Fim:</p>
							<p className="font-bold font-size-12 text-gray mr-2 ml-2">
								{endDate}
							</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default OpportunityFooter
