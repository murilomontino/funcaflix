import promiseErrorHandler from '@/helpers/error-handler'

import api from '@/services'
import { ICulturalProfile } from '@/types/setters'
import { Choose, For, When } from '@/utils/tsx-controls'
import React, { useEffect, useDeferredValue } from 'react'

import ReactInfiniteScroll from 'react-infinite-scroll-component'
import InputTopic from '@/components/molecule/input-topic'
import { Col } from 'reactstrap'
import CardArtists from '@/components/molecule/card-artists'
import { IGetterCulturalProfile } from '@/types/getters'



type CitiesProps = {
    active: boolean
}

const TabPaneSearchProfiles = ({ active }: CitiesProps) => {

    if (!active) return null

    const [dataSearch, setDataSearch] = React.useState<ICulturalProfile[]>([])
    const [data, setData] = React.useState<IGetterCulturalProfile[]>(dataSearch.slice(0, 10))
    const [loading, setLoading] = React.useState(false)
    const deferredData = useDeferredValue(data)
    const [search, setSearch] = React.useState('')

    const handleFetchSearch = async () => {
        const data = await fetchSearch()
        setDataSearch(data)
        setData(data.slice(0, 10))
    }

    useEffect(() => {
        const controller = new AbortController();

        if (search === '') {
            setDataSearch([])
            setData([])
            return
        }

        fetchSearch(controller.signal).then(data => {
            setDataSearch(data)
            setData(data.slice(0, 10))
        })

        return () => {
            controller.abort()
        }

    }, [search])

    const fetchMoreData = () => {
        setTimeout(() => {
            setData(state => [...state, ...data.slice(state.length, state.length + 10)])
        }, 200)
    }

    const hasMore = data.length < [].length

    const fetchSearch = async (
        signal?: AbortSignal
    ) => {
        setLoading(true)
        const [err, response] = await promiseErrorHandler(
            api.get(`profiles/search/${search}`, {
                signal
            }))

        setLoading(false)
        if (err) return []

        return response.data?.data as ICulturalProfile[]
    }

    const onChangeSearch = (text: string) => {
        setSearch(text)
    }

    return (
        <React.Fragment>

            <div className="d-flex w-100 justify-content-center align-content-center">
                <InputTopic
                    onChangeText={onChangeSearch}
                    value={search}
                    nameIcon="search"
                    placeholder='Buscar Artista'
                    onClickIcon={handleFetchSearch}
                />
            </div>

            <ReactInfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Carregando...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Isso é tudo pessoal!</b>
                    </p>
                }
            >

                <Choose>
                    <When condition={loading}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </When>
                    <When condition={true}>
                        <div className="d-flex align-items-center overflow-hidden flex-wrap">
                            <For items={deferredData} >
                                {(item) => {
                                    return (
                                        <Col key={item.id} xs="12" sm="6" md="4" lg="3" xl="3">
                                            <CardArtists key={item.id} item={item} />
                                        </Col>
                                    )
                                }}
                            </For>
                        </div>
                    </When>
                </Choose>


            </ReactInfiniteScroll>


        </React.Fragment>
    )
}

export default TabPaneSearchProfiles