import styled from 'styled-components/native'

type Props = {
	bgColor: string
}

export const ButtonSocialContainer = styled.TouchableOpacity<Props>`
	flex-direction: row;
	padding: 2px;
	margin: 4px;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	background-color: ${(props) => props.bgColor};
	width: 250px;
`

export const ContainerIconSocial = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 2px;
	border-right-width: 1px;
	border-right-color: #fff;
`

export const ButtonSocialText = styled.Text`
	flex: 3;
	color: #fff;
	font-size: 0.8rem;
	font-weight: bold;
	text-transform: capitalize;
	padding-inline: 1rem;
	text-align: center;
	padding: 4px;
`
