import { DbModels } from '@mapa-cultural/database/types/source/models/types'

import { SetterDataSheet } from '@/domain/entities/setters/setter-datasheet'
import { SequelizeInsert } from '@/domain/repositories/ports-repositories/sequelize-insert'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterDataSheet } from '@/types/getters'
import { IDatasheet } from '@/types/setters'

import { UseCase } from '../ports/use-case'

export class InsertDatasheetUseCase
	implements UseCase<IDatasheet, IGetterDataSheet>
{
	constructor(
		private readonly repository: SequelizeInsert<
			DbModels.ModelDataSheetProducts,
			IDatasheet,
			IGetterDataSheet
		>
	) {}

	async execute(body: IDatasheet): PromiseEither<IGetterDataSheet, Error> {
		const datasheetOrErr = await SetterDataSheet.create(body)

		if (datasheetOrErr.isRight()) return right(datasheetOrErr.value)

		const insertOrErr = await this.repository.run(datasheetOrErr.value)

		if (insertOrErr.isRight()) return right(insertOrErr.value)

		return left(insertOrErr.value.params())
	}
}
