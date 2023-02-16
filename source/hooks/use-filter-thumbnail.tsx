import React from "react"

type FilterThumbnailProps = {
    items: any[]
    condition?: (item: any) => boolean
}

const useFilterThumbnail = ({ items, condition = () => true }: FilterThumbnailProps) => {

    const itemsMemo = React.useMemo(
        () => items.filter((item) => condition(item) && item?.thumbnail !== 'Não informado'),
        [items]
    )

    return itemsMemo
}

export default useFilterThumbnail