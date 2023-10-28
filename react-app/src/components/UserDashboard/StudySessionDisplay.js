import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
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

const StudySessionDisplay = () => {
    const dispatch = useDispatch()
    const sessions = useSelector(state => state.study.allSessions)



    useEffect(() => {
        dispatch(getRecentSessions())
    }, [dispatch])

    return (
        <>
            {/* <Title>Today's Date: {dayOfWeek} {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()}</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Task Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Start Time</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>End Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskRows.map((row) => (
                            <TableRow>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.startTime}</TableCell>
                                <TableCell>{row.endTime}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> */}
            </>

    )

}

export default StudySessionDisplay;
