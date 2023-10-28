import DailyPlanner from "../DailyPlanner";
import './WeeklySchedule.css';
import * as React from 'react'
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { getByDate } from "../../store/tasks";
import NavDrawer from "../NavDrawer";


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

const WeeklySchedule = () => {
    const dispatch = useDispatch()

    const currentDay = new Date().toDateString().split(" ")[0]
    const dayOfWeek = dayConvert(currentDay)
    const [selectedDay, setSelectedDay] = React.useState(dayOfWeek)


    React.useEffect(() => {
        dispatch(getByDate(dayOfWeek))
    }, [dispatch, dayOfWeek])
    return (
        <>
        <Box sx={{ display: 'flex' }}>
          <NavDrawer page={'Schedule'} />

<Box component="main"
  sx={{
    backgroundColor: (theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }}>
            <div id='user-dashboard-wrapper'>
            <div id='dashboard-header'>
                <h1>Weekly Overview</h1>
            </div>
            <section className='day-of-week'>
                <span className='weekday' id='monday' onClick={() => {
                    setSelectedDay("Monday")
                    dispatch(getByDate(selectedDay))
                }}>Monday</span>
                <span className='weekday' id='tuesday' onClick={() => {
                    setSelectedDay("Tuesday")
                    dispatch(getByDate(selectedDay))
                }}>Tuesday</span>
                <span className='weekday' id='wednesday' onClick={() => {
                    setSelectedDay("Wednesday")
                    dispatch(getByDate(selectedDay))
                }}>Wednesday</span>
                <span className='weekday' id='thursday' onClick={() => {
                    setSelectedDay("Thursday")
                    dispatch(getByDate(selectedDay))
                }}>Thursday</span>
                <span className='weekday' id='friday' onClick={() => {
                    setSelectedDay("Friday")
                    dispatch(getByDate(selectedDay))
                }}>Friday</span>
                <span className='weekday' id='saturday' onClick={() => {
                    setSelectedDay("Saturday")
                    dispatch(getByDate(selectedDay))
                }}>Saturday</span>
                <span className='weekday' id='sunday' onClick={() => {
                    setSelectedDay("Sunday")
                    dispatch(getByDate(selectedDay))
                }}>Sunday</span>
            </section>
            <section className='planners-wrapper'>
                <DailyPlanner id={1} nowDay={selectedDay} />
            </section>
        </div>
  </Box>
  </Box>
        </>
    )
}

export default WeeklySchedule;
