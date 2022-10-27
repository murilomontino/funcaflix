import React, { useState } from 'react'
import { IGetterCulturalProfile } from '@/types/getters'

import BreadCrumb from '@/components/organism/breadcrumb'

import CardProfile from '@/components/molecule/card-profile'
import {
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'

import NavigationProfile from '@/components/molecule/navigation-profile';
import TabPaneOverview from './tab-contents/tab-pane-overview';
import SocialMedia from '@/components/molecule/social-media'
import useSocialMediaValid from '@/hooks/use-social-media-valid'
import ButtonGroupSocialMedia from '@/components/molecule/social-media/button-group-social-media'

type Props = {
  profile: IGetterCulturalProfile
}

const ProfileScreen = ({ profile }: Props) => {

  const {
    about,
    acting,
    banner,
    city,
    email,
    facebook,
    hashtags,
    instagram,
    name,
    phone,
    segment,
    thumbnail,
    twitter,
    uf,
    youtube
  } = profile

  const bannerURL = `${process.env._currentURL}/images/banner/${banner}`

  const [activeTab, setActiveTab] = useState('1');

  const {
    facebookValid,
    instagramValid,
    twitterValid,
    youtubeValid
  } = useSocialMediaValid({ facebook, instagram, twitter, youtube })

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div>
      <BreadCrumb title={name} image={bannerURL} >
        <div
          className='h-100'
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CardProfile
            name={name}
            avatar={thumbnail}
            segment={segment}
            city={city}
            acting={acting}
          />
        </div>
      </BreadCrumb>

      <React.Fragment>
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
                        'Sobre',
                      ]}
                    />
                  </div>
                  <div className='d-flex w-100 justify-content-center align-items-center'>
                    <ButtonGroupSocialMedia
                      facebook={facebook}
                      instagram={instagram}
                      twitter={twitter}
                      youtube={youtube}
                      fValid={facebookValid}
                      iValid={instagramValid}
                      tValid={twitterValid}
                      yValid={youtubeValid}
                      iconProps={{
                        className: 'btn btn-primary btn-sm mx-1',
                        style: {
                          marginTop: 24,
                        }
                      }}
                    />
                  </div>
                  <TabContent activeTab={activeTab} className="pt-4 text-muted">
                    <TabPane tabId="1">
                      <TabPaneOverview
                        about={about}
                        email={email}
                        name={name}
                        phone={phone}
                        city={city}
                        uf={uf}
                        segment={segment}
                        acting={acting}
                        hashtags={hashtags}
                      />
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </Row>

          </Container>
        </div>
      </React.Fragment>
    </div>
  )
}

export default ProfileScreen