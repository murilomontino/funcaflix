import { IBook, IDocumentsProducts, IProduct, IDatasheet } from '../setters'

export type IProductBook = IBook & {
	dataSheets: IDatasheet[]
	culturalName: string
} & IDocumentsProducts &
	IProduct
