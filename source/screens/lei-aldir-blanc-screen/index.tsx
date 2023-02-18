import React, { useState } from 'react'
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap'

import { GetterProjects } from '@/domain/entities'
import { IGetterProduct } from '@/types/getters'

import NavigationProfile from '@/components/molecule/navigation-profile'
import TabPaneEvents from '@/components/tab-contents/tab-pane-events'
import TabPaneHome from '@/components/tab-contents/tab-pane-home'

import HeaderLeiAldirBlanc from './header-lei-aldir-blanc'

import useFilterThumbnail from '@/hooks/use-filter-thumbnail'
import useMapMemoItems from '@/hooks/use-map-memo-items'

import mapOpportunityForProduct from '@/utils/map-opportunity-for-product'

type Props = {
	books: IGetterProduct[]
	opportunities: GetterProjects[]
	events: IGetterProduct[]
	participation?: IGetterProduct[]
	workshops: IGetterProduct[]
	tvProgramsPlaylist: IGetterProduct[]
}

function LeiAldirBlankPage({
	books,
	opportunities,
	events,
	tvProgramsPlaylist,
	workshops,
}: Props) {
	const booksMemo = useFilterThumbnail({
		items: books,
		condition: (item) => item?.category == 2,
	})
	const playlistTvPrograms = useFilterThumbnail({ items: tvProgramsPlaylist })
	const eventsMemo = useFilterThumbnail({ items: events })
	const workshopsMemo = useFilterThumbnail({ items: workshops })
	const opportunitiesMemo = useMapMemoItems({
		items: opportunities,
		mapFunction: mapOpportunityForProduct,
	})

	const [activeTab, setActiveTab] = useState('1')

	const toggleTab = (tab) => {
		if (activeTab !== tab) {
			setActiveTab(tab)
		}
	}

	return (
		<React.Fragment>
			<HeaderLeiAldirBlanc />

			<div className="page-content">
				<Container fluid>
					<Row>
						<Col lg={12}>
							<div className="p-2">
								<div className="d-flex w-100 justify-content-center">
									<NavigationProfile
										activeTab={activeTab}
										onChangeActiveTab={toggleTab}
										optionsTab={['Página Principal', 'Eventos']}
									/>
								</div>

								<TabContent activeTab={activeTab} className="pt-4 text-muted">
									<TabPane tabId="1">
										<TabPaneHome
											books={booksMemo}
											opportunities={opportunitiesMemo}
											events={eventsMemo}
											tvProgramsPlaylist={playlistTvPrograms}
											workshops={workshopsMemo}
										/>
									</TabPane>
									<TabPane tabId="2">
										<TabPaneEvents events={events as any} />
									</TabPane>
								</TabContent>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	)
}

export default LeiAldirBlankPage
