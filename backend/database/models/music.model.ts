import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelMusic } from '@/types/models'

export type IModelCreationAttributes = Optional<IModelMusic, 'id'>

@Table({
	tableName: 'musicas',
	freezeTableName: true,
	updatedAt: false,
	underscored: true,
})
class ModelMusics
	extends Model<IModelMusic, IModelCreationAttributes>
	implements IModelMusic
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
		field: 'documento_id',
	})
	idDocument: number

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		field: 'produto_id',
	})
	idProduct: number

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'artista',
		defaultValue: 'Não informado',
	})
	artist: string

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'titulo',
		defaultValue: 'Não informado',
	})
	title: string

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'duracao',
		defaultValue: '',
	})
	duration: string

	@Column({
		type: DataType.STRING(1000),
		allowNull: false,
		field: 'tags',
		defaultValue: '',
	})
	tags: string

	@Column({
		type: DataType.STRING(1000),
		allowNull: false,
		field: 'generos',
		defaultValue: '',
	})
	genres: string

	@Column({
		type: DataType.STRING(1000),
		allowNull: false,
		field: 'compositor',
		defaultValue: '',
	})
	composer: string

	@Column({
		type: DataType.DATE,
		allowNull: false,
		field: 'data_cadastro',
		defaultValue: DataType.NOW,
		comment: 'data que o produto foi enviado a base de dados',
	})
	createdAt: Date
}

export default ModelMusics
