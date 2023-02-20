import React from 'react'

import { IGetterBooks } from '@/types/getters'
import Link from 'next/link'

type Props = {
	item: IGetterBooks
}

const BookFooter = ({ item }: Props) => {
	return (
		<React.Fragment>
			<div className="d-flex w-100 align-items-end justify-content-center ">
				<div className="d-flex align-items-end justify-content-center ">
					<Link href={`/literatura/${item.id}`}>
						<h6 className="text-black text-muted p-2 m-2 cursor-pointer">
							Ver Mais
						</h6>
					</Link>
				</div>
			</div>
		</React.Fragment>
	)
}

export default BookFooter
