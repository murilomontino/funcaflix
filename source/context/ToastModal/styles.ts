import { Animated } from 'react-native'

import styled from 'styled-components/native'

export const Title = styled.Text`
	color: #000;
	font-weight: bold;
	font-size: 16px;
`
export const Message = styled.Text`
	margin-top: 5px;
	font-weight: 300;
	font-size: 12px;
	color: #000;
`

export const ContainerIcon = styled.View`
	width: 40px;
	height: 40px;
	align-self: center;
	border-radius: 50px;
	margin-left: 20px;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`
export const Image = styled.Image`
	background-size: contain;
	width: 40px;
	height: 40px;
`

export const ContainerMessage = styled.View`
	flex: 1;
	align-self: center;
	padding-left: 20px;
	padding-right: 20px;
`

export const ContainerClose = styled.TouchableOpacity`
	padding: 12px;
`
export const Toast = styled(Animated.View)`
	position: absolute;
	flex-direction: row;
	width: 90%;
	align-self: center;
	border-radius: 5px;
	border-bottom-width: 10px;
	border-color: rgba(255, 255, 255, 0.5);
	min-height: 100px;
	box-shadow: 10px 5px 5px black;
	bottom: 10px;
`
