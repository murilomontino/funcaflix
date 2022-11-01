import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

import image from '@/public/images/banner-perfis-culturais-2.jpg'
import { View } from 'moti'

import BreadCrumb from '@/components/organism/breadcrumb'

import colors from '@/global/colors'
import constants from '@/global/constants'
import { useResources } from '@/hooks/utils/use-resources'

import NavigationProfile from '@/components/molecule/navigation-profile'

import {
  Col,
  Container,
  Row,
  TabContent,
  TabPane
} from 'reactstrap'
import TabPaneCitiesProfiles from './tab-pane/tab-pane-cities-profiles'
import TabPaneSegmentsProfiles from './tab-pane/tab-pane-segments-profiles'
import Loading from '@/components/atom/loading'

type Props = {
  segments: string[]
  cities: string[]
}

const CulturalProfilesScreen = ({ segments, cities }: Props) => {

  const { isFontReady } = useResources()
  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  if (!isFontReady) return <Loading />

  return (
    <React.Fragment>
      <BreadCrumb title="Perfis Culturais" image={image} />


      <div className="page-content">

        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className='p-2'>
                <div className="d-flex w-100 justify-content-center">
                  <NavigationProfile
                    activeTab={activeTab}
                    onChangeActiveTab={toggleTab}
                    optionsTab={[
                      'Segmentos',
                      'Cidades'
                    ]}
                  />
                </div>

                <TabContent activeTab={activeTab} className="pt-4 text-muted">
                  <TabPane tabId="1">
                    <TabPaneSegmentsProfiles segments={segments} active={activeTab === "1"} />
                  </TabPane>
                </TabContent>

                <TabContent activeTab={activeTab} className="pt-4 text-muted">
                  <TabPane tabId="2">
                    <TabPaneCitiesProfiles cities={cities} active={activeTab === "2"} />
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

export default CulturalProfilesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: constants.footerHight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})
