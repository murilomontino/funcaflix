import React from 'react'

type PropsButton = {
	icon: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const ButtonSocialMedia = React.forwardRef(
	({ onClick, href, target = '_blank', icon, ...rest }: PropsButton, ref) => {
		return (
			<a
				href={href}
				onClick={onClick}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				ref={ref as any}
				target={target}
				rel="noopener noreferrer"
				className="share-ico"
				tabIndex={0}
				{...rest}
			>
				<i className={icon}></i>
			</a>
		)
	}
)

export default ButtonSocialMedia
