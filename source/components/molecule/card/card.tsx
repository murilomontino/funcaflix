import React, { useMemo } from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

import { GetterProjects, GetterBook } from '@/domain/entities'
import DefaultImg from '@/public/logo-default.png'

import Img from '@/components/atom/image'

import { Card } from './styles'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
    item: GetterProjects | GetterBook
    children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
    endpoint?: string
}

const CardDefault = ({ item, children, endpoint }: Props) => {
    const { size } = useSize()
    const { dateEnd, dateStart, status, thumbnail } = (() => {
        if (
            'dateEnd' in item
            && 'dateStart' in item
            && 'status' in item
        ) {
            return {
                dateEnd: item.dateEnd,
                dateStart: item.dateStart,
                status: item.status,
                thumbnail: item.thumbnail || null,
            }
        }

        return { dateEnd: null, dateStart: null, status: null, thumbnail: item.thumbnail }
    })();

    const color = useMemo(() => {
        if (!status) return null
        if (new Date(dateEnd) < new Date() || status == 2) return '#FF0000'
        if (new Date(dateStart) > new Date()) return '#FFA500'
        return '#008000'
    }, [dateEnd, dateStart])


    return (
        <Card color={color}>
            <View
                style={
                    (viewStyles.viewContainerImage,
                        size.width < 640 && {
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        })
                }
            >
                <Img
                    endpoint={endpoint}
                    image={thumbnail || DefaultImg}
                    style={{
                        objectFit: 'cover',
                        width: 250,
                        height: '100%',
                    }}
                    staticImage={!thumbnail}
                />
            </View>
            <View style={[viewStyles.viewDetails]}>
                {children || null}
            </View>
        </Card>
    )
}

export default CardDefault


const viewStyles = StyleSheet.create({
    viewContainerImage: {
        minWidth: 150,
        maxWidth: 150,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    viewDetails: {
        flex: 4,
        justifyContent: 'space-between',
        marginHorizontal: 12,

        flexWrap: 'wrap',
    },
})
