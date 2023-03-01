import React from 'react'
import { Card, CardBody, Col, Row, Table } from 'reactstrap'

import { IGetterProduct } from '@/types/getters'

import SlideSwipper from '@/components/organism/slide-swipper'

type OverviewProps = {
	name: string
	phone: string
	email: string
	city: string
	uf: string
	segment: string
	acting: string
	about: string
	hashtags: string
	items: {
		audiovisuals: IGetterProduct[]
		musics: IGetterProduct[]
		workshops: IGetterProduct[]
		literature: IGetterProduct[]
	}
}

const TabPaneOverview = ({
	name,
	email,
	phone,
	city,
	hashtags,
	segment,
	uf,
	about,
	acting,
	items,
}: OverviewProps) => {
	return (
		<React.Fragment>
			<Row className="w-100 justify-content-center align-content-lg-center m-2">
				<Card
					className="w-30 m-1"
					style={{
						maxHeight: '380px',
					}}
				>
					<CardBody>
						<Col lg={12}>
							<h5 className="mb-3 text-black text-center">Informações:</h5>
							<div className="table-responsive">
								<Table className="table-borderless mb-0">
									<tbody>
										<tr>
											<th className="ps-0" scope="row">
												Nome Perfil:
											</th>
											<td className="text-muted">{name}</td>
										</tr>
										<tr>
											<th className="ps-0" scope="row">
												Telefone Público:
											</th>
											<td className="text-muted">{phone}</td>
										</tr>
										<tr>
											<th className="ps-0" scope="row">
												Email Público:
											</th>
											<td className="text-muted">{email}</td>
										</tr>
										<tr>
											<th className="ps-0" scope="row">
												Cidade:
											</th>
											<td className="text-muted">
												{city}, {uf}
											</td>
										</tr>
										<tr>
											<th className="ps-0" scope="row">
												Segmento:
											</th>
											<td className="text-muted">{segment}</td>
										</tr>

										<tr>
											<th className="ps-0" scope="row">
												Atuação:
											</th>
											<td className="text-muted">{acting}</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Col>
					</CardBody>
				</Card>
				<Card className="w-50 m-1">
					<CardBody>
						<h5 className="mb-3 text-black text-center">Sobre</h5>
						<p
							className="text-justify"
							style={{
								textJustify: 'inter-word',
								textIndent: '2em',
							}}
						>
							{about}
						</p>
					</CardBody>
				</Card>
			</Row>
			<Row className="w-100 justify-content-center align-content-lg-center m-2">
				<SlideSwipper
					title="Literatura"
					id="iq-literatura"
					items={items?.literature}
					height="280px"
					link="literatura"
					itemsPerView={6.5}
					buttonText="Ler"
				/>

				<SlideSwipper
					title="Oficinas"
					id="iq-workshops"
					height="200px"
					items={items?.workshops}
					buttonText="Ver"
					allLink="workshops"
				/>

				<SlideSwipper
					title="AudioVisual"
					id="iq-audiovisual"
					height="200px"
					items={items?.audiovisuals}
					buttonText="Assistir"
					allLink="audiovisual"
					link="video"
				/>
			</Row>
		</React.Fragment>
	)
}

export default TabPaneOverview
