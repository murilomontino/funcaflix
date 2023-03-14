import React from 'react'

type AboutDescriptionProps = {
	about: string
	className?: string
	clamp?: string
}

const AboutDescription = ({
	about,
	className,
	clamp = 'clamp-6',
}: AboutDescriptionProps) => {
	return (
		<React.Fragment>
			<div className="container d-flex justify-content-center align-items-center pt-2 ph-2 mt-5 ">
				<p
					className={`font-size-16 text-black text-muted text-justify overflow-hidden text-overflow-ellipsis text-indent-2 line-height-2 ${clamp} ${className}`}
				>
					{about}
				</p>
			</div>
		</React.Fragment>
	)
}

export default AboutDescription
