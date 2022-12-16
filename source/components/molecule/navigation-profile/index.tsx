import React from 'react'
import classnames from 'classnames';

import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import { For } from '@/utils/tsx-controls';

import styles from './navigation-profile.module.scss'

type NavigationProfileProps = {
    activeTab: string
    onChangeActiveTab: (tab: string) => void
    optionsTab?: string[]
}

const NavigationProfile = ({ activeTab, onChangeActiveTab, optionsTab }: NavigationProfileProps) => {

    return (
        <div className="d-flex">
            <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1" role="tablist">

                <For items={optionsTab} >
                    {(item, index) => (
                        <NavItem key={`#${item.toLowerCase()}-${index}`}  >
                            <NavLink
                                href={`#${item.toLowerCase()}-tab`}
                                className={classnames({
                                    [styles['nav-link-customize-active']]: activeTab === (index + 1).toString(),
                                    [styles['nav-link-customize']]: true,
                                })}
                                onClick={() => { onChangeActiveTab((index + 1).toString()); }}
                            >
                                <span className="d-md-inline-block">{item}</span>
                            </NavLink>
                        </NavItem>
                    )}
                </For>

            </Nav>
        </div>
    )
}

export default NavigationProfile