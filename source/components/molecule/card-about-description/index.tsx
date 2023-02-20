import React, { useMemo } from 'react'

type Props = {
	about: string
}

const AboutDescription = ({ about }: Props) => {
	const elipses = about.length > 1000 ? '...' : ''

	const aboutMemo = useMemo(
		() =>
			(about || 'Sem descrição')
				.replace(/(<([^>]+)>)/gi, '')
				.slice(0, 1000)
				.trim()
				.concat(elipses),
		[about, elipses]
	)

	return (
		<React.Fragment>
			<div className="container d-flex justify-content-center align-items-center ph-4">
				<p className="font-size-16 text-black text-muted p-2 m-2 text-justify overflow-hidden text-overflow-ellipsis">
					{aboutMemo}
				</p>
			</div>
		</React.Fragment>
	)
}

export default AboutDescription
