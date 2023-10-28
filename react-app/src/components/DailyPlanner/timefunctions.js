const checkAmPm = (hour) => {
    if (hour === "0" || hour === "00" || hour === 0) {
        return "AM"
    } else if (hour === "1" || hour === "01" || hour === 1) {
        return "AM"
    } else if (hour === "2" || hour === "02" || hour === 2) {
        return "AM"
    } else if (hour === "3" || hour === "03" || hour === 3) {
        return "AM"
    } else if (hour === "4" || hour === "04" || hour === 4) {
        return "AM"
    } else if (hour === "5" || hour === "05" || hour === 5) {
        return "AM"
    } else if (hour === "6" || hour === "06" || hour === 6) {
        return "AM"
    } else if (hour === "7" || hour === "07" || hour === 7) {
        return "AM"
    } else if (hour === "8" || hour === "08" || hour === 8) {
        return "AM"
    } else if (hour === "9" || hour === "09" || hour === 9) {
        return "AM"
    } else if (hour === "10" || hour === 10) {
        return "AM"
    } else if (hour === "11" || hour === 11) {
        return "AM"
    } else if (hour === "12" || hour === 12) {
        return "PM"
    } else if (hour === "13" || hour === 13) {
        return "PM"
    } else if (hour === "14" || hour === 14) {
        return "PM"
    } else if (hour === "15" || hour === 15) {
        return "PM"
    } else if (hour === "16" || hour === 16) {
        return "PM"
    } else if (hour === "17" || hour === 17) {
        return "PM"
    } else if (hour === "18" || hour === 18) {
        return "PM"
    } else if (hour === "19" || hour === 19) {
        return "PM"
    } else if (hour === "20" || hour === 20) {
        return "PM"
    } else if (hour === "21" || hour === 21) {
        return "PM"
    } else if (hour === "22" || hour === 22) {
        return "PM"
    } else if (hour === "23" || hour === 23) {
        return "PM"
    }
}

const formatHour = (hour) => {
    if(hour === "13" || hour === 13) {
        return "1"
    } else if (hour === "14" || hour === 14) {
        return "2"
    } else if (hour === "15" || hour === 15) {
        return "3"
    } else if (hour === "16" || hour === 16) {
        return "4"
    } else if (hour === "17" || hour === 17) {
        return "5"
    } else if (hour === "18" || hour === 18) {
        return "6"
    } else if (hour === "19" || hour === 19) {
        return "7"
    } else if (hour === "20" || hour === 20) {
        return "8"
    } else if (hour === "21" || hour === 21) {
        return "9"
    } else if (hour === "22" || hour === 22) {
        return "10"
    } else if (hour === "23" || hour === 23) {
        return "11"
    } else if (hour === "0" || hour === "00" || hour === 0) {
        return "12"
    } else {
        return `${hour}`
    }
}

const formatMins = (mins) => {
    if(mins === "0" || mins === "00" || mins === 0) {
        return "00"
    } else if (mins === "1" || mins === "01" || mins === 1) {
        return "01"
    } else if (mins === "2" || mins === "02" || mins === 2) {
        return "02"
    } else if (mins === "3" || mins === "03" || mins === 3) {
        return "03"
    } else if (mins === "4" || mins === "04" || mins === 4) {
        return "04"
    } else if (mins === "5" || mins === "05" || mins === 5) {
        return "05"
    } else if (mins === "6" || mins === "06" || mins === 6) {
        return "06"
    } else if (mins === "7" || mins === "07" || mins === 7) {
        return "07"
    } else if (mins === "8" || mins === "08" || mins === 8) {
        return "08"
    } else if (mins === "9" || mins === "09" || mins === 9) {
        return "09"
    } else {
        return `${mins}`
    }
}

const parseTime = (start, end) => {
    const startTimeSplit = start.split(":")
    const startHour = startTimeSplit[0]
    const startMins = startTimeSplit[1]

    const endTimeSplit = end.split(":")
    const endHour = endTimeSplit[0]
    const endMins = endTimeSplit[1]

    if (checkAmPm(startHour) === "AM" && checkAmPm(endHour) === "AM") {
        const newStartHour = formatHour(startHour)
        const newStartMins = formatMins(startMins)

        const newEndHour = formatHour(endHour)
        const newEndMins = formatMins(endMins)

        return `${newStartHour}:${newStartMins} - ${newEndHour}:${newEndMins} AM`
    } else if (checkAmPm(startHour) === "PM" && checkAmPm(endHour) === "PM") {
        const newStartHour = formatHour(startHour)
        const newStartMins = formatMins(startMins)

        const newEndHour = formatHour(endHour)
        const newEndMins = formatMins(endMins)

        return `${newStartHour}:${newStartMins} - ${newEndHour}:${newEndMins} PM`
    } else {
        const newStartHour = formatHour(startHour)
        const newStartMins = formatMins(startMins)
        const startAmPm = checkAmPm(startHour)

        const newEndHour = formatHour(endHour)
        const newEndMins = formatMins(endMins)
        const endAmPm = checkAmPm(endHour)

        return `${newStartHour}:${newStartMins} ${startAmPm} - ${newEndHour}:${newEndMins} ${endAmPm}`
    }
}

export default parseTime;
