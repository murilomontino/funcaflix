import React from 'react'

type Props = {
	title: string
	author?: string
	subTitle?: string
	children?: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
}

const CardBasicInformation = ({ title, author, subTitle, children }: Props) => {
	return (
		<div className="d-flex flex-column justify-content-between w-100">
			<div className="d-flex col flex-column justify-content-between mb-2">
				<h6 className="text-center text-black-50 card-title font-size-20 font-Weight-600 m-2 text-uppercase">
					<span>{title}</span>
					<br />
					<span className="d-inline-block text-truncate w-100">{subTitle}</span>
				</h6>
			</div>
			<div className="d-flex col flex-column justify-content-between mb-2 text-black">
				{author}
			</div>
			{children}
		</div>
	)
}

export default CardBasicInformation
