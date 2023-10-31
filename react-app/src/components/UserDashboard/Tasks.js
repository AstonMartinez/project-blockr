import { useSelector } from "react-redux"
import { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import GroupsIcon from '@mui/icons-material/Groups';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CallIcon from '@mui/icons-material/Call';
import CakeIcon from '@mui/icons-material/Cake';
import CodeIcon from '@mui/icons-material/Code';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EventIcon from '@mui/icons-material/Event';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Typography from '@mui/material/Typography';
import parseTime from "../DailyPlanner/timefunctions";
import './UserDashboard.css'

function createData(title, startTime, endTime) {
    return { title, startTime, endTime };
}

const dayConvert = (day) => {
    if(day === 'Mon') {
      return 'Monday'
    } else if(day === 'Tue') {
      return 'Tuesday'
    } else if(day === 'Wed') {
      return 'Wednesday'
    } else if(day === 'Thu') {
      return 'Thursday'
    } else if(day === 'Fri') {
      return 'Friday'
    } else if(day === 'Sat') {
      return 'Saturday'
    } else if(day === 'Sun') {
      return 'Sunday'
    }
  }

const TaskDisplay = () => {
    const [displayType, setTaskDisplayType] = useState('List')
    const currentDay = new Date().toDateString().split(" ")[0]
    const dayOfWeek = dayConvert(currentDay)

    const allTasks = useSelector(state => state.tasks.allTasks)
    let taskArr = []
    let taskRows = []

    function compare( a, b ) {
        const startSplitA = a.start_time.split(":")
        const startSplitB = b.start_time.split(":")
        if ( Number(startSplitA[0]) < Number(startSplitB[0])){
          return -1;
        }
        if ( Number(startSplitA[0]) > Number(startSplitB[0]) ){
          return 1;
        }
        return 0;
      }

    if(allTasks) {
        taskArr = Object.values(allTasks)
        taskArr.sort(compare)
        for(let i = 0; i < taskArr.length; i++) {
            let data = createData(taskArr[i].title, taskArr[i].start_time, taskArr[i].end_time)
            taskRows.push(data)
        }
    }

    let mainContent

    if(!allTasks) {
        mainContent = (
            <>
                <h4>Looks like you don't have any tasks listed for today yet!</h4>
                <button>Add Tasks</button>
            </>
        )
    } else if(allTasks && displayType === 'List') {
        mainContent = (
            <div id="task-display-wrapper">
                <Title>Today's Date: {dayOfWeek} {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()}</Title>
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
                                <TableCell>{row.startTime.split(":")[1] === "0" ? (row.startTime.split(":")[0] + ":00") : (row.startTime)}</TableCell>
                                <TableCell>{row.endTime.split(":")[1] === "0" ? (row.endTime.split(":")[0] + ":00") : (row.endTime)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    } else if(allTasks && displayType === 'Timeline') {
        mainContent = (
            <>
                <Title>Today's Date: {dayOfWeek} {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()}</Title>
                {!taskArr.length > 0 && (
                    <h3>You don't currently have any tasks for today!</h3>
                )}
                <Timeline position="alternate">
                    {taskArr && taskArr.map(task => (
                        <>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0', width: "200px" }}
                                    align="right"
                                    variant='body2'
                                    color={task.color}
                                >
                                    {parseTime(task.start_time, task.end_time)}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot sx={{backgroundColor: `${task.color}`}}>
                                        {task.icon === "food" && (
                                            <FastfoodIcon />
                                        )}
                                        {task.icon === "laptop" && (
                                            <LaptopMacIcon />
                                        )}
                                        {task.icon === "repeat" && (
                                            <RepeatIcon />
                                        )}
                                        {task.icon === "hotel" && (
                                            <HotelIcon />
                                        )}
                                        {task.icon === "group" && (
                                            <GroupsIcon />
                                        )}
                                        {task.icon === "fitness" && (
                                            <FitnessCenterIcon />
                                        )}
                                        {task.icon === "health" && (
                                            <HealthAndSafetyIcon />
                                        )}
                                        {task.icon === "call" && (
                                            <CallIcon />
                                        )}
                                        {task.icon === "cake" && (
                                            <CakeIcon />
                                        )}
                                        {task.icon === "code" && (
                                            <CodeIcon />
                                        )}
                                        {task.icon === "morning" && (
                                            <LightModeIcon />
                                        )}
                                        {task.icon === "evening" && (
                                            <BedtimeIcon />
                                        )}
                                        {task.icon === "sparkle" && (
                                            <AutoAwesomeIcon />
                                        )}
                                        {task.icon === "event" && (
                                            <EventIcon />
                                        )}
                                        {task.icon === "tree" && (
                                            <AccountTreeIcon />
                                        )}
                                        {task.icon === "alert" && (
                                            <CrisisAlertIcon />
                                        )}
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {task.title}
                                    </Typography>
                                    <Typography>
                                        {task.description}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </>
                    ))}
                </Timeline>
            </>
        )
    }

    return (
        <div>
            <div id='task-disp-button-holder'>
                <button className='db-task-disp-buttons' onClick={() => setTaskDisplayType('List')}>List</button>
                <span> | </span>
                <button className='db-task-disp-buttons' onClick={() => setTaskDisplayType('Timeline')}>Timeline</button>
            </div>
            <div>
                {mainContent}
            </div>
        </div>
    )
}

export default TaskDisplay;
