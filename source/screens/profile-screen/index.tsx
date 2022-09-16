import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import Avatar from '@/public/avatar-7.jpg'
import image from '@/public/images/literatura.jpg'

import BreadCrumb from '@/components/organism/breadcrumb'

import scss_styles from './styles-scss.module.scss'

import colors from '@/global/colors'
import constants from '@/global/constants'
import { useResources } from '@/hooks/utils/use-resources'

type Props = {
  profile: {
    username: string
  }
}

const ScreenProfile = ({ profile }: Props) => {
  const { isFontReady } = useResources()

  if (!isFontReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <BreadCrumb title={profile.username} image={image} />
      <section className={scss_styles['container-section']}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-profile">
                <div className="card-header"></div>
                <div className="card-body text-center">
                  <img className="card-profile-img" src={Avatar} title="..." />
                  <h3 className="mb-3">{profile.username}</h3>
                  <p className="mb-4">One morning, when Gregor Samsa woke from troubled </p>
                  <button className="btn btn-outline-dark btn-sm">
                    <i className="fab fa-twitter"></i> Follow
                  </button>

                  <button className="btn btn-outline-dark btn-sm">
                    <i className="fab fa-facebook"></i> Follow
                  </button>

                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="+420777555987"
                    className="btn btn-outline-dark btn-sm"
                  >
                    <i className="fas fa-phone"></i>
                    Follow
                  </button>
                  <button className="btn btn-outline-dark btn-sm">
                    <i className="fab fa-skype"></i>
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header border-0">
                  <div className="input-group">
                    <input className="form-control" type="text" placeholder="Message" />
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
                <div className="list-group">
                  <div className="list-group-item border-start-0 border-end-0 py-5 px-lg-4">
                    <div className="d-flex">
                      <img
                        className="shadow-0 avatar avatar-md"
                        src="img/avatar-7.jpg"
                        title="..."
                      />
                      <div className="ms-3">
                        <div className="d-flex justify-content-between">
                          <h5>Nathan Andrews</h5>
                          <small className="text-nowrap">10 min</small>
                        </div>
                        <div className="text-muted text-sm">
                          One morning, when Gregor Samsa woke from troubled dreams, he found himself
                          transformed in his bed into a horrible vermin. He lay on his armour-like
                          back, and if he lifted his head a little he could see his brown belly,
                          slightly domed and divided by arches into stiff sections
                        </div>
                        <div className="d-flex mt-4">
                          <img className="shadow-0 avatar avatar-sm" src={Avatar} title="..." />
                          <div className="ms-3 text-muted text-sm">
                            <strong className="text-dark">Serenity Mitchelle: </strong>The bedding
                            was hardly able to cover it and seemed ready to slide off any moment.
                            His many legs, pitifully thin compared with the size of the rest of him,
                            waved about helplessly as he looked. &quot;What's happened to me?&quot;
                            he thought. It wasn't a dream.
                          </div>
                        </div>
                        <div className="d-flex mt-4">
                          <img
                            className="shadow-0 avatar avatar-sm"
                            src="img/avatar-1.jpg"
                            title="..."
                          />
                          <div className="ms-3 text-muted text-sm">
                            <strong className="text-dark">Tony O'Brian: </strong>His room, a proper
                            human room although a little too small, lay peacefully between its four
                            familiar walls. A collection of textile samples lay spread out on the
                            table.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item border-start-0 border-end-0 py-5 px-lg-4">
                    <div className="d-flex">
                      <img
                        className="shadow-0 avatar avatar-md"
                        src="img/avatar-7.jpg"
                        title="..."
                      />
                      <div className="ms-3">
                        <div className="d-flex justify-content-between">
                          <h5>Nathan Andrews</h5>
                          <small className="text-muted text-nowrap">12 min</small>
                        </div>
                        <div className="text-muted text-sm">
                          Samsa was a travelling salesman - and above it there hung a picture that
                          he had recently cut out of an illustrated magazine and housed in a nice,
                          gilded frame.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item border-start-0 border-end-0 py-5 px-lg-4">
                    <div className="d-flex">
                      <img
                        className="shadow-0 avatar avatar-md"
                        src="img/avatar-7.jpg"
                        title="..."
                      />
                      <div className="ms-3">
                        <div className="d-flex justify-content-between">
                          <h5>Nathan Andrews</h5>
                          <small className="text-muted text-nowrap">34 min</small>
                        </div>
                        <div className="text-muted text-sm">
                          He must have tried it a hundred times, shut his eyes so that he wouldn't
                          have to look at the floundering legs, and only stopped when he began to
                          feel a mild, dull pain there that he had never felt before.
                        </div>
                        <div className="d-flex mt-4">
                          <img
                            className="shadow-0 avatar avatar-sm"
                            src="img/avatar-6.jpg"
                            title="..."
                          />
                          <div className="ms-3 text-muted text-sm">
                            <strong className="text-dark">Javier Gregory: </strong>One morning, when
                            Gregor Samsa woke from troubled dreams, he found himself transformed in
                            his bed into a horrible vermin. He lay on his armour-like back, and if
                            he lifted his head a little he could see his brown belly, slightly domed
                            and divided by arches into stiff sections
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </View>
  )
}

export default ScreenProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: constants.footerHight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
