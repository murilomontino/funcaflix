import React from 'react'

type Props = {
	about: string
}

const AboutDescription = ({ about }: Props) => {
	return (
		<React.Fragment>
			<div className="container d-flex justify-content-center align-items-center pt-2 ph-2 mt-5 ">
				<p className="font-size-16 text-black text-muted text-justify overflow-hidden text-overflow-ellipsis text-indent-2 line-height-2 clamp-6">
					{about}
				</p>
			</div>
		</React.Fragment>
	)
}

export default AboutDescription
