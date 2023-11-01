import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { getRecentSessions } from "../../store/studySessions";

function createData(correct, incorrect, outOf, timeSpent, date, type, category) {
    return { correct, incorrect, outOf, timeSpent, date, type, category };
}

const formatDuration = (duration) => {
    const durationSplit = duration.split(" ")
    if(durationSplit[0] === "0" && durationSplit[2] === 0) {
      return `00:00:${durationSplit[4]}`
    } else if (durationSplit[0] === "0" && durationSplit[2] !== "0") {
      return `00:${durationSplit[2]}:${durationSplit[4]}`
    } else {
      return `${durationSplit[0]}:${durationSplit[2]}:${durationSplit[4]}`
    }
}

const formatMonth = (month) => {
    if(month === "Jan") {
      return "01"
    } else if (month === "Feb") {
      return "02"
    } else if (month === "Mar") {
      return "03"
    } else if (month === "Apr") {
      return "04"
    } else if (month === "May") {
      return "05"
    } else if (month === "Jun") {
      return "06"
    } else if (month === "Jul") {
      return "07"
    } else if (month === "Aug") {
      return "08"
    } else if (month === "Sep") {
      return "09"
    } else if (month === "Oct") {
      return "10"
    } else if (month === "Nov") {
      return "11"
    } else if (month === "Dec") {
      return "12"
    }
  }

  const formatDate = (date) => {
    const dateSplit = date.split(" ")
    const day = dateSplit[1]
    const month = formatMonth(dateSplit[2])
    const year = dateSplit[3]
    return `${month}/${day}/${year}`
  }

const StudySessionDisplay = () => {
    const dispatch = useDispatch()
    const sessions = useSelector(state => state.study.allSessions)

    let sessionArr = []
    let sessionRows = []


    if(sessions) {
        sessionArr = Object.values(sessions)
        for(let i = 0; i < sessionArr.length; i++) {
            let data = createData(sessionArr[i].correct, sessionArr[i].incorrect, sessionArr[i].out_of, sessionArr[i].time_spent, sessionArr[i].date, sessionArr[i].type, sessionArr[i].category)
            sessionRows.push(data)
        }
    }


    useEffect(() => {
        dispatch(getRecentSessions())
    }, [dispatch])

    return (
        <div style={{"textAlign": "left"}} id='study-sess-disp-wrap'>
            <Title>My Recent Study Sessions</Title>
            {!sessions ? (
                <h3>You haven't completed any study sessions yet!</h3>
            ) : (
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Correct</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Incorrect</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Total</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Duration</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Date</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Type</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sessionRows.map((row) => (
                            <TableRow>
                                <TableCell align="center">{row.correct}</TableCell>
                                <TableCell align="center">{row.incorrect}</TableCell>
                                <TableCell align="center">{row.outOf}</TableCell>
                                <TableCell align="center">{formatDuration(row.timeSpent)}</TableCell>
                                <TableCell align="center">{formatDate(row.date)}</TableCell>
                                <TableCell align="center">{row.type}</TableCell>
                                <TableCell align="center">{row.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
            </div>

    )

}

export default StudySessionDisplay;
