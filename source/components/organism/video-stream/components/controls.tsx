import React, { forwardRef, useState } from 'react'

import '@fontsource/roboto'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import Slider from '@material-ui/core/Slider'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import FastForwardIcon from '@material-ui/icons/FastForward'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import FullScreen from '@material-ui/icons/Fullscreen'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import VolumeDown from '@material-ui/icons/VolumeDown'
import VolumeMute from '@material-ui/icons/VolumeOff'
import VolumeUp from '@material-ui/icons/VolumeUp'

const useStyles = makeStyles((theme) => ({
	controlsWrapper: {
		visibility: 'hidden',
		zIndex: 999,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		height: '100%',
		background: 'rgba(0,0,0,0.6)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

	button: {
		margin: theme.spacing(1),
	},
	controlIcons: {
		color: '#777',

		fontSize: 50,
		transform: 'scale(0.9)',
		'&:hover': {
			color: '#fff',
			transform: 'scale(1)',
		},
	},

	bottomIcons: {
		color: '#999',
		'&:hover': {
			color: '#fff',
		},
	},

	volumeSlider: {
		width: 100,
	},
}))

const SliderProgress = withStyles({
	root: {
		height: 8,
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		marginTop: -8,
		marginLeft: -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
	},
})(Slider)

function ValueLabelComponent(props) {
	const { children, open, value } = props

	return (
		<Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
			{children}
		</Tooltip>
	)
}

type Props = {
	playing?: boolean
	volume?: number
	playbackRate?: number
	muted?: boolean
	onBookmark?: () => void
	onPlayPause?: () => void
	onPlaybackRateChange?: (rate: number) => void
	onVolumeChange?: (e: any, volume: number) => void
	onMute?: () => void
	onSeek?: (e: any, newValue: number) => void
	onToggleFullScreen?: () => void
	onSeekMouseDown?: (e?: any) => void
	onSeekMouseUp?: (e: any, newValue: number) => void
	onDuration?: (e: any, duration: number) => void
	onRewind?: () => void
	played?: number
	onFastForward?: () => void
	elapsedTime?: string
	totalDuration?: string
	onVolumeSeekDown?: (e: any, newValue: number) => void
	onChangeDisplayFormat?: () => void
}

// eslint-disable-next-line react/display-name
const Controls = forwardRef(
	(
		{
			onSeek,
			onSeekMouseDown,
			onSeekMouseUp,
			onDuration,
			onRewind,
			onPlayPause,
			onFastForward,
			playing,
			played,
			elapsedTime,
			totalDuration,
			onMute,
			muted,
			onVolumeSeekDown,
			onChangeDisplayFormat,
			playbackRate,
			onPlaybackRateChange,
			onToggleFullScreen,
			volume,
			onVolumeChange,
			onBookmark,
		}: Props,
		ref
	) => {
		const classes = useStyles()
		const [anchorEl, setAnchorEl] = useState(null)

		const handleClick = (event) => {
			setAnchorEl(event.currentTarget)
		}

		const handleClose = () => {
			setAnchorEl(null)
		}

		const open = Boolean(anchorEl)
		const id = open ? 'simple-popover' : undefined

		return (
			<div ref={ref} className={classes.controlsWrapper}>
				<Grid
					container
					direction="column"
					justify="space-between"
					style={{ flexGrow: 1 }}
				>
					<Grid
						container
						direction="row"
						alignItems="center"
						justify="space-between"
						style={{ padding: 16 }}
					></Grid>
					<Grid container direction="row" alignItems="center" justify="center">
						<IconButton
							onClick={onRewind}
							className={classes.controlIcons}
							aria-label="rewind"
						>
							<FastRewindIcon
								className={classes.controlIcons}
								fontSize="inherit"
							/>
						</IconButton>
						<IconButton
							onClick={onPlayPause}
							className={classes.controlIcons}
							aria-label="play"
						>
							{playing ? (
								<PauseIcon
									className={classes.controlIcons}
									fontSize="inherit"
								/>
							) : (
								<PlayArrowIcon
									className={classes.controlIcons}
									fontSize="inherit"
								/>
							)}
						</IconButton>
						<IconButton
							onClick={onFastForward}
							className={classes.controlIcons}
							aria-label="forward"
						>
							<FastForwardIcon
								className={classes.controlIcons}
								fontSize="inherit"
							/>
						</IconButton>
					</Grid>
					{/* bottom controls */}
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="center"
						style={{ padding: 16 }}
					>
						<Grid item xs={12}>
							<SliderProgress
								min={0}
								max={100}
								ValueLabelComponent={(props) => (
									<ValueLabelComponent {...props} value={elapsedTime} />
								)}
								aria-label="custom thumb label"
								value={played * 100}
								onChange={onSeek}
								onMouseDown={onSeekMouseDown}
								onChangeCommitted={onSeekMouseUp}
								onDuration={onDuration}
							/>
						</Grid>

						<Grid item>
							<Grid container alignItems="center">
								<IconButton
									onClick={onPlayPause}
									className={classes.bottomIcons}
								>
									{playing ? (
										<PauseIcon fontSize="large" />
									) : (
										<PlayArrowIcon fontSize="large" />
									)}
								</IconButton>

								<IconButton
									onClick={onMute}
									className={`${classes.bottomIcons}`}
								>
									{muted ? (
										<VolumeMute fontSize="large" />
									) : volume > 0.5 ? (
										<VolumeUp fontSize="large" />
									) : (
										<VolumeDown fontSize="large" />
									)}
								</IconButton>

								<Slider
									min={0}
									max={100}
									value={muted ? 0 : volume * 100}
									onChange={onVolumeChange}
									aria-labelledby="input-slider"
									className={classes.volumeSlider}
									onMouseDown={onSeekMouseDown}
									onChangeCommitted={onVolumeSeekDown}
								/>
								<Button variant="text" onClick={onChangeDisplayFormat}>
									<Typography
										variant="body1"
										style={{ color: '#fff', marginLeft: 16 }}
									>
										{elapsedTime}/{totalDuration}
									</Typography>
								</Button>
							</Grid>
						</Grid>

						<Grid item>
							<Button
								onClick={handleClick}
								aria-describedby={id}
								className={classes.bottomIcons}
								variant="text"
							>
								<Typography>{playbackRate}X</Typography>
							</Button>

							<Popover
								container={ref?.current}
								open={open}
								id={id}
								onClose={handleClose}
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								transformOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
							>
								<Grid container direction="column-reverse">
									{[0.5, 1, 1.5, 2].map((rate) => (
										<Button
											key={rate}
											//   onClick={() => setState({ ...state, playbackRate: rate })}
											onClick={() => onPlaybackRateChange(rate)}
											variant="text"
										>
											<Typography
												color={rate === playbackRate ? 'secondary' : 'inherit'}
											>
												{rate}X
											</Typography>
										</Button>
									))}
								</Grid>
							</Popover>
							<IconButton
								onClick={onToggleFullScreen}
								className={classes.bottomIcons}
							>
								<FullScreen fontSize="large" />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</div>
		)
	}
)

export default Controls
