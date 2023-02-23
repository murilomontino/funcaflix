/* eslint-disable react/react-in-jsx-scope */

import React from 'react'
import { useRef, useState, useEffect } from 'react'

import { CSSProperties } from 'styled-components'

import css from '../drag-drop.module.css'
import DrawTypes from './DrawTypes'
import ImageAdd from './ImageAdd'
import {
	UploaderWrapper,
	DescriptionWrapper,
	Description,
	HoverMsg,
} from './style'
import useDragging from './useDragging'
import { acceptedExt, checkType, getFileSizeMB } from './utils'

type Props = {
	name?: string
	hoverTitle?: string
	types?: Array<string>
	classes?: string
	children?: JSX.Element
	maxSize?: number
	minSize?: number
	fileOrFiles?: Array<File> | File | null
	disabled?: boolean | false
	label?: string | undefined
	multiple?: boolean | false
	onSizeError?: (arg0: string) => void
	onTypeError?: (arg0: string) => void
	onDrop?: (arg0: File | Array<File>) => void
	onSelect?: (arg0: File | Array<File>) => void
	handleChange?: (arg0: File | Array<File> | File | FileList) => void
	onDraggingStateChange?: (dragging: boolean) => void
	labelStyles?: CSSProperties
}
/**
 *
 * Draw a description on the frame
 * @param currFile - The uploaded file
 * @param uploaded - boolean to check if the file uploaded or not yet
 * @param typeError - boolean to check if the file has type errors
 * @param disabled - boolean to check if input is disabled
 * @param label - string to add custom label
 * @returns JSX Element
 *
 * @internal
 *
 */
const drawDescription = (
	currFile: Array<File> | File | null,
	uploaded: boolean,
	typeError: boolean,
	disabled: boolean | undefined,
	label: string | undefined,
	labelStyle: CSSProperties
) => {
	return typeError ? (
		<span>File type/size error, Hovered on types!</span>
	) : (
		<Description style={labelStyle}>
			{disabled ? (
				<span>Upload disabled</span>
			) : !currFile && !uploaded ? (
				<>
					{label ? (
						<p>
							<span className={css.spanLabel}>{label.split(' ')[0]}</span>{' '}
							{label.substr(label.indexOf(' ') + 1)}
						</p>
					) : (
						<p>
							<span>Upload</span>or drop a file right here
						</p>
					)}
				</>
			) : (
				<p>
					<span className={css.spanLabel}>{label.split(' ')[0]}</span>{' '}
					{label.substr(label.indexOf(' ') + 1)}
				</p>
			)}
		</Description>
	)
}

/**
 * File uploading main function
 * @param props - {name,
    hoverTitle,
    types,
    handleChange,
    classes,
    children,
    maxSize,
    minSize,
    fileOrFiles,
    onSizeError,
    onTypeError,
    onSelect,
    onDrop,
    onTypeError,
    disabled,
    label,
    multiple,
    onDraggingStateChange
  }
 * @returns JSX Element
 */
const FileUploader: React.FC<Props> = (props: Props): JSX.Element => {
	const {
		name,
		hoverTitle,
		types,
		handleChange,
		classes,
		children,
		maxSize,
		minSize,
		fileOrFiles,
		onSizeError,
		onTypeError,
		onSelect,
		onDrop,
		disabled,
		label,
		multiple,
		onDraggingStateChange,
		labelStyles,
	} = props
	const labelRef = useRef<HTMLLabelElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const [uploaded, setUploaded] = useState(false)
	const [currFiles, setFile] = useState<Array<File> | File | null>(null)
	const [error, setError] = useState(false)

	const validateFile = (file: File) => {
		if (types && !checkType(file, types)) {
			// types included and type not in them
			setError(true)
			if (onTypeError) onTypeError('File type is not supported')
			return false
		}
		if (maxSize && getFileSizeMB(file.size) > maxSize) {
			setError(true)
			if (onSizeError) onSizeError('File size is too big')
			return false
		}
		if (minSize && getFileSizeMB(file.size) < minSize) {
			setError(true)
			if (onSizeError) onSizeError('File size is too small')
			return false
		}
		return true
	}

	const handleChanges = (files: File | Array<File>): boolean => {
		let checkError = false
		if (files) {
			if (files instanceof File) {
				checkError = !validateFile(files)
			} else {
				for (let i = 0; i < files.length; i++) {
					const file = files[i]
					checkError = !validateFile(file) || checkError
				}
			}
			if (checkError) return false
			if (handleChange) handleChange(files)
			setFile(files)

			setUploaded(true)
			setError(false)
			return true
		}
		return false
	}
	const handleInputChange = (ev: any) => {
		const allFiles = ev.target.files
		const files = multiple ? allFiles : allFiles[0]
		const success = handleChanges(files)
		if (onSelect && success) onSelect(files)
	}
	const dragging = useDragging({
		labelRef,
		inputRef,
		multiple,
		handleChanges,
		onDrop,
	})

	useEffect(() => {
		onDraggingStateChange?.(dragging)
	}, [dragging])

	useEffect(() => {
		if (fileOrFiles) {
			setUploaded(true)
			setFile(fileOrFiles)
		} else {
			setUploaded(false)
			setFile(null)
		}
	}, [fileOrFiles])

	return (
		<UploaderWrapper
			overRide={children}
			className={`${classes || ''} ${disabled ? 'is-disabled' : ''}`}
			ref={labelRef}
			htmlFor={name}
		>
			<input
				onChange={handleInputChange}
				accept={acceptedExt(types)}
				ref={inputRef}
				type="file"
				name={name}
				disabled={disabled}
				multiple={multiple}
			/>
			{dragging && (
				<HoverMsg>
					<span>{hoverTitle || 'Drop Here'}</span>
				</HoverMsg>
			)}
			{!children && (
				<>
					<ImageAdd />
					<DescriptionWrapper error={error}>
						{drawDescription(
							currFiles,
							uploaded,
							error,
							disabled,
							label,
							labelStyles
						)}
						<DrawTypes types={types} minSize={minSize} maxSize={maxSize} />
					</DescriptionWrapper>
				</>
			)}
			{children}
		</UploaderWrapper>
	)
}
export default FileUploader
