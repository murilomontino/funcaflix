import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelProgramsTV } from '@/types/models'

export type IModelCreationAttributes = Optional<IModelProgramsTV, 'id'>

@Table({
	tableName: 'programas_de_tv',
	freezeTableName: true,
	updatedAt: false,
	underscored: true,
})
class ModelProgramsTV
	extends Model<IModelProgramsTV, IModelCreationAttributes>
	implements IModelProgramsTV
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
		field: 'produto_id',
	})
	idProduct: number

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'playlist_id',
		defaultValue: 'Não informado',
	})
	playlistId: string

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'video_id',
		defaultValue: 'Não informado',
	})
	videoId: string

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'data_de_publicacao',
		defaultValue: 'Não informado',
	})
	publishedAt: string

	@Column({
		type: DataType.STRING(5000),
		allowNull: false,
		field: 'sobre',
		defaultValue: 'Não informado',
	})
	description: string

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'thumbnail',
		defaultValue: 'Não informado',
	})
	thumbnail: string

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'titulo',
		defaultValue: 'Não informado',
	})
	title: string

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
		type: DataType.BOOLEAN(),
		allowNull: false,
		field: 'ativo',
		defaultValue: true,
	})
	active: boolean

	@Column({
		type: DataType.DATE,
		allowNull: false,
		field: 'data_cadastro',
		defaultValue: DataType.NOW,
		comment: 'data que o produto foi enviado a base de dados',
	})
	createdAt: Date
}

export default ModelProgramsTV
