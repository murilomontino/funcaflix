import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelSponsor } from '@/types/models'

type IModelCreationAttributes = Optional<IModelSponsor, 'id'>

@Table({
	tableName: 'patrocinador_produto',
	freezeTableName: true,
	updatedAt: false,
	createdAt: false,
	underscored: true,
})
class ModelSponsorProduct
	extends Model<IModelSponsor, IModelCreationAttributes>
	implements IModelSponsor
{
	@Column({
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
	})
	id: number

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		field: 'id_produto',
		comment: 'recebe o id do produto',
	})
	idProduct: number

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		defaultValue: 0,
		field: 'id_patrocinador',
		comment:
			'recebe o id da secretaria, orgao ou empresa cadastrada na tabela instituicao_pub_priv. caso seja 0 é porque o recurso não possui patrocinio',
	})
	idSponsor: number

	@Column({
		type: DataType.TINYINT({ length: 4 }),
		allowNull: false,
		field: 'tipo_recurso',
		comment:
			'tipo recurso utilizado, por exemplo lei aldir blanc, recurso proprio',
	})
	typeResource: number

	@Column({
		type: DataType.STRING({ length: 300 }),
		allowNull: false,
		field: 'valor_recurso',
		comment: 'valor destinado para esse produto',
	})
	valueResource: string

	@Column({
		type: DataType.DATE,
		allowNull: false,
		defaultValue: DataType.NOW,
		field: 'data_cadastro',
		comment: 'data de cadastro do recurso',
	})
	createdAt: Date
}

export default ModelSponsorProduct
