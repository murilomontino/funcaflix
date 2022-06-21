import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelInstitution } from '@/types/models'

type IModelCreationAttributes = Optional<IModelInstitution, 'id'>

@Table({
	tableName: 'instituicao_pub_priv',
	freezeTableName: true,
	updatedAt: false,
	createdAt: false,
	underscored: true,
})
class ModelInstitution
	extends Model<IModelInstitution, IModelCreationAttributes>
	implements IModelInstitution
{
	@Column({
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
	})
	id: number

	@Column({
		type: DataType.STRING(300),
		allowNull: false,
		field: 'nome_instituicao',
	})
	name: string

	@Column({
		type: DataType.STRING(50),
		allowNull: false,
		field: 'sigla',
	})
	abbreviation: string

	@Column({
		type: DataType.STRING(20),
		allowNull: false,
		field: 'cnpj',
	})
	cnpj: string

	@Column({
		type: DataType.STRING(100),
		allowNull: false,
		field: 'municipio',
	})
	city: string

	@Column({
		type: DataType.STRING(300),
		allowNull: false,
		field: 'logo',
		defaultValue: 'Não informado',
	})
	logo: string

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		field: 'id_usuario',
	})
	idUser: number

	@Column({
		type: DataType.DATE,
		allowNull: false,
		field: 'data_cadastro',
		defaultValue: DataType.NOW,
	})
	createdAt: Date
}

export default ModelInstitution
