import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelDataSheet } from '@/types/models'

type IModelCreationAttributes = Optional<IModelDataSheet, 'id'>

@Table({
	tableName: 'ficha_tecnica',
	freezeTableName: true,
	updatedAt: false,
	createdAt: false,
	underscored: true,
})
class ModelDataSheetProducts
	extends Model<IModelDataSheet, IModelCreationAttributes>
	implements IModelDataSheet
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
		type: DataType.STRING({ length: 20 }),
		allowNull: false,
		defaultValue: 'Não informado',
		field: 'cpf_cnpj',
		comment: 'recebe o cpf ou cnpj de quem é o responsável pelo o produto',
	})
	cpf_cnpj: string

	@Column({
		type: DataType.STRING({ length: 300 }),
		allowNull: false,
		field: 'nome',
		comment: 'nome do produtor, artista, diretor e etc',
	})
	name: string

	@Column({
		type: DataType.STRING({ length: 5000 }),
		allowNull: false,
		defaultValue: 'Não informado',
		field: 'sobre',
		comment: 'pequena biografia',
	})
	about: string

	@Column({
		type: DataType.TINYINT({ length: 1 }),
		allowNull: false,
		defaultValue: 0,
		field: 'responsavel',
		comment: 'se for 0 é false se for 1 é true',
	})
	responsible: boolean

	@Column({
		type: DataType.SMALLINT({ length: 6 }),
		allowNull: false,
		comment: 'se é um diretor, produtor, camareira e etc',
	})
	personFunction: number

	@Column({
		type: DataType.STRING({ length: 300 }),
		allowNull: true,
		field: 'img_perfil',
		comment: 'recebe o caminho relativo da imagem do responsável',
	})
	imgProfile: string

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		defaultValue: 0,
		field: 'id_usuario',
		comment: 'recebe o id do usuario que cadastrou a ficha',
	})
	idUser: number

	@Column({
		type: DataType.DATE,
		allowNull: false,
		field: 'data_cadastro',
		defaultValue: DataType.NOW,
		comment: 'data que essa info foi enviado a base de dados',
	})
	declare createdAt: Date
}

export default ModelDataSheetProducts
