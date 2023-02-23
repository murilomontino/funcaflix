const createDateEvent = (date, hour) => {
	const [day, month, year] = date.split('/')
	const [hourStart, minuteStart] = hour.split(':')

	return new Date(year, month - 1, day, hourStart, minuteStart)
}

export default createDateEvent
