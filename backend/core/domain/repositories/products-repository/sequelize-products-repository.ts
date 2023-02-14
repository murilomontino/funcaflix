import { InvalidParamError, MissingParamError } from '@/domain/usecases/errors'
import { converteInArray, existItemsInArray, isValid, verifiesCategories } from '@/helpers'
import promiseErrorHandler from '@/helpers/error-handler'
import { PromiseEither, left, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'
import { db } from 'mapacultural-database'
import { ProductsRepository, categories } from './products-repository.interface'

function generateProduct(product: any): IGetterProduct {
    const { id, title, about, thumbnail, category, link, createdAt, idUser } = product.get({ plain: true })
    return {
        id,
        title,
        about,
        thumbnail,
        category,
        link,
        createdAt,
        idUser,
    } as IGetterProduct
}

async function genericDBModelFindAll(
    where: object = {},
) {
    return await db.ModelInfoProducts.findAll({
        where: {
            active: true,
            ...where
        },
        order: [['createdAt', 'ASC']],
        attributes: ['id', 'title', 'about', 'thumbnail', 'category', 'link', 'createdAt', 'idUser'],
    })
}

export class SequelizeProductsRepository implements ProductsRepository {

    async findAll(): PromiseEither<IGetterProduct[], Error> {
        const [err, model] = await promiseErrorHandler(genericDBModelFindAll({}))

        if (err) {
            return right(err)
        }

        const products = model.map(generateProduct)
        return left(products)
    }

    async findAllProductsByCategory(categories: categories): PromiseEither<IGetterProduct[], Error> {
        // Verifica se a categoria foi passada como parâmetro e se for um array, se ele não está vazio
        if (!categories || (Array.isArray(categories) && categories.length === 0)) {
            return right(new MissingParamError({ parameter: 'categoria' }))
        }

        const treatmentCategories = converteInArray(categories)

        if (!verifiesCategories(treatmentCategories)) {
            return right(new InvalidParamError({ parameter: 'categoria' }))
        }

        const [err, model] = await promiseErrorHandler(genericDBModelFindAll({
            category: treatmentCategories,
        }))

        if (err) {
            return right(err)
        }

        const products = model.map(generateProduct)

        return left(products)
    }

    async findAllProductsByUser(idUser: number): PromiseEither<IGetterProduct[], Error> {
        if (!idUser) {
            return right(new MissingParamError({ parameter: 'idUser' }))
        }

        const [err, model] = await promiseErrorHandler(genericDBModelFindAll({
            idUser,
        }))

        if (err) {
            return right(err)
        }

        const products = model.map(generateProduct)

        return left(products)
    }

    async findAllProductsByUserAndCategory(idUser: number, categories: categories): PromiseEither<IGetterProduct[], Error> {

        if (!isValid(idUser)) return right(new MissingParamError({ parameter: 'idUser' }))

        if (!isValid(categories) || !existItemsInArray(categories)) {
            return right(new MissingParamError({ parameter: 'categoria' }))
        }

        const treatmentCategories = converteInArray(categories)

        if (!verifiesCategories(treatmentCategories)) {
            return right(new InvalidParamError({ parameter: 'categoria' }))
        }

        const [err, model] = await promiseErrorHandler(genericDBModelFindAll({
            active: true,
            idUser: idUser,
            category: treatmentCategories,
        }))

        if (err) {
            return right(err)
        }

        const products = model.map(generateProduct)

        return left(products)
    }

}