type Time = {
	date: string
	time: string
	object: Date
}

function getDefault(): Time {
	const object = new Date()
	const date = object.toISOString().split("T")[0]
	const time = object.toISOString().split("T")[1].slice(0, 5)
	return {
		date,
		time,
		object,
	}
}

function convert(timeObject: Time): Time {
	timeObject.date = timeObject.date ? timeObject.date : getDefault().date
	timeObject.time = timeObject.time ? timeObject.time : getDefault().time
	const dateParts = timeObject.date.split("-")
	const timeParts = timeObject.time.split(":")

	const year = parseInt(dateParts[0])
	const month = parseInt(dateParts[1]) - 1
	const day = parseInt(dateParts[2])
	const hour = parseInt(timeParts[0])
	const minute = parseInt(timeParts[1])

	timeObject.object = new Date(year, month, day, hour, minute)
	return timeObject
}

export default convert
