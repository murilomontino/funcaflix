import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import privacyPolicy from '@/public/images/privacy-policy.webp'

import BreadCrumb from '@/components/organism/breadcrumb'

import scss from './styles.module.scss'

const PrivacyPolicyScreen = () => {
	return (
		<>
			<BreadCrumb title="Politica de Privacidade" image={privacyPolicy} />
			<main id="main" className={`site-main  mb-2 ${scss['container']}`}>
				<Container>
					<Row>
						<Col lg="12" sm="12">
							<div className={`iq-privacy-policy ${scss['container-privacy']}`}>
								<p className="my-3 text-justify text-dark">
									Atenção: Leia atentamente os termos abaixo antes de utilizar
									este site. O Mapa Cultural é um serviço interativo
									disponibilizado por meio de página eletrônica na internet que
									oferece informações sobre cultura, agentes cadastrados,
									serviços, chamadas, editais, espaços culturais, sociais e
									públicos etc. O acesso ao Mapa representa a aceitação expressa
									e irrestrita dos termos de uso abaixo descritos. Se você não
									concorda com os termos não utilize este site.{' '}
								</p>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">I. Introdução</h4>
									<p className="my-3 text-justify text-dark">
										Atenção: Leia atentamente os termos abaixo antes de utilizar
										este site. O Mapa Cultural é um serviço interativo
										disponibilizado por meio de página eletrônica na internet
										que oferece informações sobre cultura, agentes cadastrados,
										serviços, chamadas, editais, espaços culturais, sociais e
										públicos etc. O acesso ao Mapa representa a aceitação
										expressa e irrestrita dos termos de uso abaixo descritos. Se
										você não concorda com os termos não utilize este site.
									</p>
									<br></br>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">II. Dos Serviços</h4>
									<p className="my-3 text-justify text-dark">
										Os serviços ofertados pela plataforma são os seguintes:
										Cadastramento de espaços, agentes, eventos, projetos e
										oportunidades; Consulta aos cadastros de espaços, de
										agentes, de eventos, de projetos e de oportunidades;
										Apresentação dos dados cadastrais em interface de
										georreferenciamento; Exportação das informações públicas
										existentes nos cadastros mantidos pelo sistema; Execução,
										acompanhamento e publicação dos resultados de projetos e
										oportunidades. Novos serviços poderão ser disponibilizados a
										qualquer momento e os serviços existentes poderão ser
										removidos mediante comunicação através do site
										https://mapas.cultura.se.gov.br/{' '}
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										III. Da Qualificação das Partes
									</h4>
									<p className="my-3 text-justify text-dark">
										No escopo da Mapa Cultural , as seguintes qualificações se
										aplicam: Titular: pessoa física a quem se referem os dados
										cadastrados; Encarregado: pessoa física que cuida dos dados;
										Operador: pessoa que trata os dados em nome do controlador;
										Controlador: aquele que detém e faz decisões sobre o
										tratamento dos dados.{' '}
									</p>
									<br></br>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">IV. Dos Tipos de Dados</h4>
									<p className="my-3 text-justify text-dark">
										No escopo da Mapa Cultural , os seguintes tipos de dados se
										aplicam: Dado anonimizado: todo dado que não permita a
										identificação do titular; Dado pessoal sensível: todo dado
										que permite a caracterização do titular; Dado pessoal: todo
										dado que permite a identificação do titular;{' '}
									</p>
									<br></br>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										V. Da Classificação dos Dados
									</h4>
									<p className="my-3 text-justify text-dark">
										No escopo da Mapa Cultural , as seguintes classificações dos
										dados se aplicam: Dados Privados: são os dados pessoais e
										dados sensíveis do titular; Dados Públicos: são os dados
										pessoais e/ou sensíveis, mas classificados como de acesso
										público pelo titular; Dados Anonimizados: são as informações
										consolidadas e derivadas dos dados pessoais e/ou sensíveis
										fornecidos pelo conjunto de titulares cadastrados na Mapa
										Cultural.
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										VI. Da Finalidade no Uso dos Dados
									</h4>
									<p className="my-3 text-justify text-dark">
										No escopo da Mapa Cultural , dentre várias finalidades no
										uso dos dados, destacamos: Os dados privados fornecidas pelo
										titular e tratadas pelo Mapa Cultural serão utilizadas para
										o fornecimento do serviço, respeitando as funcionalidades
										descritas neste documento; Geração de índices e indicadores
										relacionados aos registros dos espaços, agentes, eventos,
										projetos e oportunidades; Criação de mapas com
										georreferenciamento, podendo ser utilizados para pesquisas
										acadêmicas e/ou para a geração/aplicação/acompanhamento de
										políticas públicas de incentivo e desenvolvimento cultural;
										Estas informações poderão ser utilizadas pela Secretaria da
										Cultura do Estado ou transferidas a outros Órgãos do
										Governo, sempre que houver o requerimento formal por parte
										destes, autorização do titular e, por último, quando a
										legislação o autorizar/demandar.{' '}
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										VII. Do Tratamento dos Dados
									</h4>
									<p className="my-3 text-justify text-dark">
										O tratamento dos dados registrados na Mapa Cultural observa
										a boa-fé e os seguintes princípios: I - finalidade: todos os
										dados coletados e armazenados na Mapa Cultural , serão
										utilizados no espírito exemplificado na seção “VI. Da
										Finalidade no Uso dos Dados na Mapa Cultural ”; II -
										adequação: os dados coletados e armazenados pela Mapa
										Cultural só serão utilizados no atendimento às finalidades
										criadas pelas e nas consultas e/ou inscrições realizadas
										pelo titular; III - necessidade: os resultados das consultas
										apresentarão somente os dados pertinentes e adequados às
										necessidades destas consultas, e, sempre que possível,
										anonimizados; IV - livre acesso: é garantido, aos titulares,
										mediante acesso identificado à Mapa Cultural , a consulta
										facilitada e gratuita a todos os dados armazenados; V -
										qualidade dos dados: é garantido, aos titulares, exatidão e
										clareza, dos dados, de acordo com a necessidade e para o
										cumprimento da finalidade de uso na Mapa Cultural ; VI -
										transparência: é garantido, aos titulares, acesso a este
										Termo de Uso; VII - segurança: os dados armazenados na Mapa
										Cultural utilizam-se de técnicas de separação entre dados e
										sistema, assim como conta com um sistema de cópias de
										segurança que mitiga os problemas em caso de necessidade de
										recuperação de informações, além disto utiliza-se de medidas
										técnicas e administrativas aptas a proteger os dados
										pessoais de acessos não autorizados e de situações
										acidentais ou ilícitas de destruição, perda ou alteração;
										VIII - prevenção: a adoção de boas práticas na verificação e
										na execução dos tratamentos dos dados armazenados na Mapa
										Cultural , previnem a ocorrência de danos aos titulares; IX
										- não discriminação: é garantido que nem os controladores,
										nem os operadores utilizarão os dados armazenados na Mapa
										Cultural para fins discriminatórios ilícitos ou abusivos; X
										- responsabilização e prestação de contas: a plataforma é
										submetida, a testes de resistência de acesso e/ou uso de
										dados indevidos.{' '}
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										VIII. Da Guarda dos Dados
									</h4>
									<p className="my-3 text-justify text-dark">
										As informações dos titulares registradas no Mapa Cultural
										ficarão disponibilizadas por tempo indeterminado, podendo, o
										titular, a qualquer tempo, rever e apagar as suas
										informações. A eliminação de informações, por parte do
										titular, antes que todos os prazos legais que exijam a sua
										manutenção é de inteira responsabilidade deste, não podendo
										a Mapa Cultural ser responsabilizada por esta ação.
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										V. Da Classificação dos Dados
									</h4>
									<p className="my-3 text-justify text-dark">
										No escopo da Mapa Cultural , as seguintes classificações dos
										dados se aplicam: Dados Privados: são os dados pessoais e
										dados sensíveis do titular; Dados Públicos: são os dados
										pessoais e/ou sensíveis, mas classificados como de acesso
										público pelo titular; Dados Anonimizados: são as informações
										consolidadas e derivadas dos dados pessoais e/ou sensíveis
										fornecidos pelo conjunto de titulares cadastrados na Mapa
										Cultural.
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										IX. Dos Deveres do Titular
									</h4>
									<p className="my-3 text-justify text-dark">
										A utilização do Mapa Cultural somente pode se dar para
										propósitos lícitos e de modo a não afetar os direitos ou
										possibilidades de uso do sistema por terceiros. Não serão
										toleradas condutas ilícitas, imorais ou que possam molestar
										ou ser inconvenientes para os administradores do sistema,
										para os serviços disponibilizados ou para terceiros. Da
										mesma forma, o Mapa Cultural não pode ser utilizado para
										difamar, abusar, assediar, perseguir, ameaçar ou violar
										quaisquer direitos individuais ou para a transmissão de
										conteúdo ilícito. O titular tem responsabilidade pessoal
										sobre suas informações de acesso ao Mapa Cultural (login e
										senha) e deverá mantê-las em segurança, estritamente sob seu
										controle pessoal, não franqueando, em nenhuma circunstância,
										seu acesso a terceiros. O titular é responsável pela
										veracidade e pela atualização dos dados que informar ao Mapa
										Cultural , bem como aos serviços disponíveis através dele. O
										fornecimento de informação falsa poderá causar desde
										resultados inexatos e indesejados em relação aos serviços,
										bem como suspender ou cancelar o acesso ao sistema e ainda
										poderá punir o responsável por qualquer ato, conforme a
										legislação aplicável ao caso. O titular deverá comunicar
										imediatamente ao suporte do Mapa Cultural , através do email
										mapacultural@secult.ce.gov.br acerca de qualquer suspeita de
										acesso indevido ao sistema, de falha de segurança ou do
										comprometimento de suas informações de acesso. A não
										observância pelo titular, dos seus deveres previstos nestes
										Termos de Uso ou em qualquer outra legislação aplicável,
										poderá acarretar na suspensão ou no cancelamento do seu
										acesso ao Mapa Cultural , ou a um ou mais serviços
										disponibilizados, além das outras sanções previstas em Lei.
										A utilização do Mapa Cultural somente pode se dar para
										propósitos lícitos e de modo a não afetar os direitos ou
										possibilidades de uso do sistema por terceiros. Não serão
										toleradas condutas ilícitas, imorais ou que possam molestar
										ou ser inconvenientes para os administradores do sistema,
										para os serviços disponibilizados ou para terceiros. Da
										mesma forma, o Mapa Cultural não pode ser utilizado para
										difamar, abusar, assediar, perseguir, ameaçar ou violar
										quaisquer direitos individuais ou para a transmissão de
										conteúdo ilícito. O titular tem responsabilidade pessoal
										sobre suas informações de acesso ao Mapa Cultural (login e
										senha) e deverá mantê-las em segurança, estritamente sob seu
										controle pessoal, não franqueando, em nenhuma circunstância,
										seu acesso a terceiros. O titular é responsável pela
										veracidade e pela atualização dos dados que informar ao Mapa
										Cultural , bem como aos serviços disponíveis através dele. O
										fornecimento de informação falsa poderá causar desde
										resultados inexatos e indesejados em relação aos serviços,
										bem como suspender ou cancelar o acesso ao sistema e ainda
										poderá punir o responsável por qualquer ato, conforme a
										legislação aplicável ao caso. O titular deverá comunicar
										imediatamente ao suporte do Mapa Cultural , através do email
										mapacultural@secult.ce.gov.br acerca de qualquer suspeita de
										acesso indevido ao sistema, de falha de segurança ou do
										comprometimento de suas informações de acesso. A não
										observância pelo titular, dos seus deveres previstos nestes
										Termos de Uso ou em qualquer outra legislação aplicável,
										poderá acarretar na suspensão ou no cancelamento do seu
										acesso ao Mapa Cultural , ou a um ou mais serviços
										disponibilizados, além das outras sanções previstas em Lei.{' '}
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">X. Direitos do Titular</h4>
									<p className="my-3 text-justify text-dark">
										O acesso às informações pessoais dos titulares, indicadas
										como privadas no seu perfil, não poderá ser comercializado e
										somente poderá ser efetuado por servidores autorizados
										(operadores) pela Secretaria da Cultura do Estado ou por
										ordem judicial. São direitos reconhecidos pela Mapa Cultural
										os definidos no artigo 18 da lei 13.709/2018.{' '}
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										XI. Responsabilidades dos Administradores
									</h4>
									<p className="my-3 text-justify text-dark">
										A Secretaria da Cultura do Estado é responsável pela
										segurança das informações coletadas, armazenadas e
										processadas pelo Mapa Cultural , bem como pela segurança das
										informações transmitidas aos serviços disponibilizados
										através do Mapa Cultural . A Secretaria da Cultura do Estado
										utilizará as medidas adequadas, para maximizar a segurança e
										a integridade das informações pessoais sob sua custódia e
										evitar qualquer modalidade de acesso indevido. Com o intuito
										de assegurar a liberdade de expressão e impedir a censura, a
										Secretaria da Cultura do Estado segue os princípios e
										garantias do Marco Civil da Internet, Lei nº 12.965, de 23
										de abril de 2014.
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										XII. Política de Uso de Dados Pessoais
									</h4>
									<p className="my-3 text-justify text-dark">
										As informações pessoais fornecidas pelo titular e tratadas
										pelo Mapa Cultural serão utilizadas para o fornecimento do
										serviço, com suas funcionalidades descritas nestes Termos de
										Uso. Estas informações poderão ser utilizadas pela
										Secretaria da Cultura do Estado ou transferidas a outros
										Órgãos do Governo, sempre que houver o requerimento formal
										por parte destes, autorização do titular e, por último,
										quando a legislação o autorizar.{' '}
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">XIII. Condições gerais</h4>
									<p className="my-3 text-justify text-dark">
										Ao utilizar o Mapa Cultural , o titular será informado
										previamente sobre quais as informações pessoais serão de
										visualização pública e quais são privadas. As informações do
										titular do Mapa Cultural somente poderão ser modificadas
										através do sítio web do sistema, mediante o uso de suas
										informações de acesso. Caso o titular tenha perdido as suas
										informações de acesso, ele poderá utilizar o serviço de
										recuperação deste, disponibilizados no site do Mapa Cultural
										ou através da equipe técnica no email
										https://mapas.cultura.se.gov.br/.{' '}
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										XIV. Suspensão ou Término da Disponibilização
									</h4>
									<p className="my-3 text-justify text-dark">
										O Mapa Cultural poderá ser suspenso ou ter sua
										disponibilização cessada a qualquer momento, mediante
										comunicação prévia, ou por e-mail, ou por postagem veiculada
										na página oficial da Secretaria da Cultura do Estado , aos
										seus titulares.{' '}
									</p>
								</div>
								<div className="mb-0">
									<h4 className="mb-3 text-justify">XV. Fundamentos Legais</h4>
									<p className="my-3 text-justify text-dark">
										Sem prejuízo de outras legislações, fundamentam o presente
										termo e a presente política – Constituição Federal –
										Tratados Internacionais – Lei 12.965/2014 (marco regulatório
										da internet no Brasil); Lei 9.610/1998 (Lei dos Direitos
										Autorais); Lei 17.449/2018 (lei do Sistema Estadual de
										Cultura); Lei 13.709/2018 (Lei Geral de Proteção de Dados);
										Lei 12.527/2011 (Lei de Acesso à Informação); Lei 8.159/1991
										(Lei de Arquivos Públicos e Privados);{' '}
									</p>
								</div>
								<div className="mb-3">
									<h4 className="mb-3 text-justify">
										XVI. Alteração dos termos de uso
									</h4>
									<p className="my-3 text-justify text-dark">
										As condições especificadas nestes Termos de Uso poderão ser
										modificadas a qualquer momento. Caso estas sejam
										significativas ou afetem, de forma concreta, os direitos e
										deveres dos titulares do sistema, serão apresentadas ao
										titular, de forma clara, para apreciação e concordância.
										Última modificação em 08/04/2021, às 10:30.{' '}
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</main>
		</>
	)
}

export default PrivacyPolicyScreen
