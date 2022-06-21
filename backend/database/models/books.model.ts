import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelBooks } from '@/types/models'

export type IModelCreationAttributes = Optional<IModelBooks, 'id'>

@Table({
	tableName: 'livros',
	freezeTableName: true,
	updatedAt: false,
	underscored: true,
})
class ModelBooks
	extends Model<IModelBooks, IModelCreationAttributes>
	implements IModelBooks
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
		field: 'autor',
		defaultValue: 'Não informado',
	})
	author: string

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
		field: 'sub_titulo',
		defaultValue: '',
	})
	subTitle: string

	@Column({
		type: DataType.STRING(13),
		unique: true,
	})
	isbn: string

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'editora',
		defaultValue: 'Não informado',
	})
	publisher: string

	@Column({
		type: DataType.STRING(10),
		allowNull: false,
		field: 'data_de_publicacao',
		defaultValue: '',
	})
	publicationDate: string

	@Column({
		type: DataType.STRING(4),
		allowNull: false,
		field: 'numero_de_paginas',
		defaultValue: 0,
	})
	numberOfPages: string

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'dimensoes',
		defaultValue: '',
	})
	dimensions: string

	@Column({
		type: DataType.STRING(5000),
		allowNull: false,
		field: 'sinopse',
		defaultValue: '',
	})
	synopsis: string

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
		type: DataType.BOOLEAN,
		defaultValue: false,
		allowNull: false,
		field: 'ilustracao',
	})
	illustration: boolean

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'ilustrador',
		defaultValue: 'Não informado',
	})
	illustrator: string

	@Column({
		type: DataType.DATE,
		allowNull: false,
		field: 'data_cadastro',
		defaultValue: DataType.NOW,
		comment: 'data que o produto foi enviado a base de dados',
	})
	createdAt: Date
}

export default ModelBooks
