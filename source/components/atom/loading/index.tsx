import colors from '@/global/colors'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <div className="flex justify-content-center align-items-center mb-5 bg-transparent">
            <ActivityIndicator size="large" color={colors.white} />
        </div>
    )
}

export default Loading