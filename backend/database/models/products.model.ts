import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelInfoProducts } from '@/types/models'

type IModelCreationAttributes = Optional<IModelInfoProducts, 'id'>

@Table({
	tableName: 'info_produto',
	freezeTableName: true,
	updatedAt: false,
	createdAt: false,
	underscored: true,
})
class ModelInfoProducts
	extends Model<IModelInfoProducts, IModelCreationAttributes>
	implements IModelInfoProducts
{
	@Column({
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
	})
	declare id: number

	@Column({
		type: DataType.STRING({ length: 300 }),
		allowNull: false,
		field: 'titulo',
		defaultValue: 'Não informado',
		comment:
			'titulo do produto, pode ser de um evento, exposição, filmes, livros e musicas',
	})
	declare title: string

	@Column({
		type: DataType.STRING({ length: 5000 }),
		allowNull: false,
		field: 'sobre',
		defaultValue: 'Não informado',
		comment: 'sobre o produto',
	})
	declare about: string

	@Column({
		type: DataType.SMALLINT({ length: 6 }),
		allowNull: false,
		defaultValue: 0,
		field: 'categoria',
		comment:
			'categoria recebe um numérico referente ao produto, pode ser  audio visual, música, livro, evento e exposição',
	})
	declare category: number

	@Column({
		type: DataType.SMALLINT({ length: 6 }),
		allowNull: false,
		defaultValue: 0,
		field: 'recurso',
		comment:
			'categoria recebe um numérico referente ao produto, pode ser  audio visual, música, livro, evento e exposição',
	})
	declare financialResource: number

	@Column({
		type: DataType.SMALLINT({ length: 6 }),
		allowNull: false,
		field: 'subcategoria',
		defaultValue: 0,
		comment: 'pode ser mp3, album, single, ep, curtas, documentários, shows, ',
	})
	declare subCategory: number

	@Column({
		type: DataType.STRING({ length: 500 }),
		allowNull: false,
		defaultValue: 'Não informado',
		field: 'imagem_divulgacao',
	})
	declare thumbnail: string

	@Column({
		type: DataType.STRING({ length: 300 }),
		allowNull: false,
		defaultValue: 'Não informado',
		field: 'link',
		comment: 'recebe o link da pagina desse produto',
	})
	declare link: string

	@Column({
		type: DataType.STRING({ length: 100 }),
		allowNull: false,
		defaultValue: 'Não informado',
		field: 'local_cadastro',
		comment:
			'Recebe o tipo de filtro para visualização de url, se Sergipe, mostra tudo d Sergipe, se Aracaju mostra tudo de Aracaju e por ai vai.',
	})
	declare location: string

	@Column({
		type: DataType.STRING({ length: 20 }),
		allowNull: false,
		defaultValue: 'Não informado',
		field: 'cpf_cnpj',
		comment: 'recebe o cpf ou cnpj de quem é o responsável pelo o produto',
	})
	declare cpf_cnpj: string

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		defaultValue: 0,
		field: 'id_usuario',
		comment:
			'recebe o id do usuário que está logado e que cadastrou o produto.',
	})
	declare idUser: number

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		defaultValue: 0,
		field: 'id_orgao',
		comment:
			'recebe o id do orgão que esse produto foi cadastrado. Para facilitar nos filtros',
	})
	declare idInstitution: number

	@Column({
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
		field: 'id_usuario_cadastrou',
		defaultValue: 0,
		comment: 'recebe o id do usuario que está cadastrando o produto',
	})
	declare idUserRegistered: number

	@Column({
		type: DataType.DATE,
		allowNull: false,
		field: 'data_cadastro',
		defaultValue: DataType.NOW,
		comment: 'data que o produto foi enviado a base de dados',
	})
	declare createdAt: Date

	@Column({
		type: DataType.DATE,
		allowNull: false,
		field: 'data_atualizacao',
		defaultValue: DataType.NOW,
		comment: 'data que o produto foi atualizado na base',
	})
	declare updatedAt: Date

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
		field: 'ativo',
		defaultValue: false,
		comment: 'informa se o produto é visível ou não',
	})
	declare active: boolean

	get params(): IModelInfoProducts {
		return {
			id: this.id,
			title: this.title,
			about: this.about,
			category: this.category,
			subCategory: this.subCategory,
			link: this.link,
			cpf_cnpj: this.cpf_cnpj,
			idUser: this.idUser,
			idUserRegistered: this.idUserRegistered,
			financialResource: this.financialResource,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			active: this.active,
			idInstitution: this.idInstitution,
			location: this.location,
			thumbnail: this.thumbnail,
		}
	}
}

export default ModelInfoProducts
