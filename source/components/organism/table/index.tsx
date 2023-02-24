import React from 'react'
import DataTable, { createTheme, TableColumn } from 'react-data-table-component'

import theme from '@/theme'

import { Container, Container50Percent } from './styles'

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme(
	'solarized',
	{
		text: {
			primary: theme.COLORS.TEXT,
			secondary: theme.COLORS.TEXT,
		},
		background: {
			default: '#002b36',
		},
		context: {
			background: '#cb4b16',
			text: '#FFFFFF',
		},
		divider: {
			default: '#073642',
		},
		action: {
			button: 'rgba(0,0,0,.54)',
			hover: 'rgba(0,0,0,.08)',
			disabled: 'rgba(0,0,0,.12)',
		},
	},
	'dark'
)

type Props<T> = {
	columns: TableColumn<T>[]
	data: T[]
	title: string
}

function Table<T>({ columns, data, title }: Props<T>) {
	return (
		<Container>
			<Container50Percent>
				<DataTable
					title={title}
					columns={columns}
					data={data}
					theme="solarized"
					pagination
					customStyles={{
						cells: {
							style: {
								fontSize: '1.2rem',
								justifyContent: 'center',
								fontVariant: 'small-caps',
								textTransform: 'lowercase',
							},
						},
						headCells: {
							style: {
								fontSize: '1.2rem',
								justifyContent: 'center',
							},
						},
						header: {
							style: {
								fontFamily: theme.FONTS.TITLE_BOLD,
								fontVariant: 'small-caps',
								justifyContent: 'center',
							},
						},
					}}
				/>
			</Container50Percent>
		</Container>
	)
}

export default Table
