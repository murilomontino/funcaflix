import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelDocsProducts } from '@/types/models'

type IModelCreationAttributes = Optional<IModelDocsProducts, 'id'>

@Table({
	tableName: 'doc_produto',
	freezeTableName: true,
	updatedAt: false,
	createdAt: false,
	underscored: true,
})
class ModelDocsProducts
	extends Model<IModelDocsProducts, IModelCreationAttributes>
	implements IModelDocsProducts
{
	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
		field: 'id',
	})
	public id: number

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		field: 'id_produto',
	})
	public idProduct: number

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		field: 'titulo',
	})
	public title: string

	@Column({
		type: DataType.STRING(500),
		allowNull: false,
		field: 'descricao',
		defaultValue: 'Não informado',
	})
	public description: string

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		defaultValue: 0,
		field: 'tipo',
		comment:
			'informa se é um capa, foto do artista, foto do local, documentário e etc',
	})
	public type: number

	@Column({
		type: DataType.STRING(300),
		allowNull: true,
		field: 'arquivo_path',
		comment:
			'nome unico do arquivo para ser pesquisado na pasta, com seu caminho relativo.',
	})
	public filePath: string

	@Column({
		type: DataType.DATE,
		allowNull: false,
		field: 'data_cadastro',
		defaultValue: DataType.NOW,
		comment: 'data que o documento foi enviado a base',
	})
	public createdAt: Date
}

export default ModelDocsProducts
