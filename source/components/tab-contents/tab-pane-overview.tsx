import React from 'react'
import { Card, CardBody, Col, Row, Table } from 'reactstrap'

import styles from './tab-pane-overview.module.scss'

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
}: OverviewProps) => {
	return (
		<Row
			className={`w-100 justify-content-center align-content-lg-center m-2 ${styles['row-customize']}`}
		>
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
	)
}

export default TabPaneOverview
