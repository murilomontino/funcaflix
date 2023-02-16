import React from "react"

type GenericObject<T> = T & {
    thumbnail: string
}

type FilterThumbnailProps<T> = {
    items: GenericObject<T>[]
    condition?: (item: T) => boolean
}

function useFilterThumbnail<T>({ items, condition = () => true }: FilterThumbnailProps<T>) {
    const itemsMemo = React.useMemo(
        () => items.filter((item) => condition(item) && item?.thumbnail !== 'Não informado'),
        [items]
    )

    return itemsMemo
}

export default useFilterThumbnail