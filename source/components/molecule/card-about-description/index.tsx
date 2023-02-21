import React, { useMemo } from 'react'

import styled from 'styled-components'

type Props = {
	about: string
}

const P = styled.p`
	-webkit-line-clamp: 8;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	overflow: hidden;
`

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
			<div className="container d-flex justify-content-center align-items-center pt-2 ph-2 mt-5">
				<P className="font-size-16 text-black text-muted text-justify overflow-hidden text-overflow-ellipsis text-indent-2 line-height-2">
					{aboutMemo}
				</P>
			</div>
		</React.Fragment>
	)
}

export default AboutDescription
