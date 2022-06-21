import { Optional } from 'sequelize'
import { Table, Column, Model, DataType } from 'sequelize-typescript'

import { IModelOptions } from '@/types/models'

type IModelCreationAttributes = Optional<IModelOptions, 'id'>

/* 
INSERT INTO `opcoes` (`id`, `label`, `tipo`) VALUES
(1, 'AudioVisual', 1),
(2, 'Livro', 1),
(3, 'Audio', 1),
(4, 'Evento', 1),
(5, 'Exposição', 1),
(6, 'Single', 2),
(7, 'Album', 2),
(8, 'Album Interprete', 2),
(9, 'Ep', 2),
(10, 'Livro', 3),
(11, 'Curta-Metragem', 4),
(12, 'Documentários', 4),
(13, 'Shows', 4),
(68, 'Evento presencial', 5),
(69, 'Live', 5),
(70, 'Videoconferência', 5),
(71, 'Desafio virtual esportivo', 5),
(72, 'Conteúdo digital', 5),
(14, 'Documento', 10),
(15, 'Link', 10),
(16, 'Foto de Artista', 10),
(17, 'Foto de Evento', 10),
(18, 'Foto de Local', 10),
(19, 'Demo', 30),
(20, 'Teaser', 30),
(21, 'Banner', 30),
(22, 'Autor(a)', 20), 
(23, 'Ilustrador(a)', 20),
(24, 'Diretor(a)', 20), 
(25, 'Cantor(a)', 20),
(26, 'Compositor(a)', 20),
(27, 'Produtor(a)', 20),
(28, 'Coordenador(a)', 20),
(62, 'Funcart', 60),
(63, 'Próprio', 60),
(64, 'Federal', 60),
(65, 'Municipal', 60),
(66, 'Estadual', 60),
(67, 'Outro Patrocínio', 60),
(100, 'Livro', 90),
(101, 'Música', 90),
(102, 'Video', 90),
(103, 'Obra', 90);
(104, 'Thumbnail', 10),
(105, 'Recurso Federal - Lei Aldir Blanc', 60),
(152, 'Programa de TV', '1');
*/

@Table({
	tableName: 'opcoes',
	freezeTableName: true,
	updatedAt: false,
	createdAt: false,
	underscored: true,
})
class ModelOptionsProduct
	extends Model<IModelOptions, IModelCreationAttributes>
	implements IModelOptions
{
	@Column({
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER({ length: 11 }),
		allowNull: false,
	})
	id: number

	@Column({
		type: DataType.STRING({ length: 300 }),
		allowNull: false,
		field: 'label',
		comment: 'Nome informado da label para uso no dropdown',
	})
	label: string

	@Column({
		type: DataType.TINYINT({ length: 4 }),
		allowNull: false,
		field: 'tipo',
		comment: `
    Tipo de Opção e seu significado: 
      1 - Categoria,
      2 - SubCategoria de Musicas,
      3 - Subcategoria de Livros,
      4 - SubCategorias de AudioVisual,
      5 - SubCategorias de Eventos,
      6 - SubCategorias de Exposições,
      10 - Tipo de Documentos Relacionados,
      20 - Funções de Pessoa na ficha técnica
      30 - Divulgação
      40 - Assuntos, eventos
      50 - Tipos de Eventos
      60 - Patrocínios
      90 - Produto Principal
      `,
	})
	type: number
}

/* 
tipos de labes disponiveis: tipo 1 categorias tipo 2 subcategorias tipo 3 livros tipo 4 videos tipo 10 tipos de documentos relacionados tipo 20 funções ficha técnica tipo 30 divulgação tipo 40 assuntos eventos tipo 50 tipos de eventos
*/

export default ModelOptionsProduct
