import type { IGetterBooks } from '@/types/getters'

import Card from '@/components/molecule/card'
import AboutDescription from '@/components/molecule/card-about-description'
import CardBasicInformation from '@/components/molecule/card-basic-information'

import BookFooter from '../../molecules/book-footer'

type Props = {
	item: IGetterBooks
}

const CardBooks = ({ item }: Props) => {
	return (
		<Card item={item as any}>
			<CardBasicInformation
				title={item.title}
				subTitle={item.subTitle}
				author={item.author}
			/>
			<AboutDescription about={item.synopsis} />
			<BookFooter item={item} />
		</Card>
	)
}

export default CardBooks
