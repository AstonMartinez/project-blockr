import DailyPlanner from "../DailyPlanner";
import './WeeklySchedule.css';
import * as React from 'react'
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { getByDate } from "../../store/tasks";
import NavDrawer from "../NavDrawer";

const WeeklySchedule = () => {
    const dispatch = useDispatch()

    const [currDay, setCurrDay] = React.useState("Monday")

    React.useEffect(() => {
        dispatch(getByDate(currDay))
    }, [dispatch, currDay])
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
                    setCurrDay("Monday")
                    dispatch(getByDate("Monday"))
                }}>Monday</span>
                <span className='weekday' id='tuesday' onClick={() => {
                    setCurrDay("Tuesday")
                    dispatch(getByDate("Tuesday"))
                }}>Tuesday</span>
                <span className='weekday' id='wednesday' onClick={() => {
                    setCurrDay("Wednesday")
                    dispatch(getByDate("Wednesday"))
                }}>Wednesday</span>
                <span className='weekday' id='thursday' onClick={() => {
                    setCurrDay("Thursday")
                    dispatch(getByDate("Thursday"))
                }}>Thursday</span>
                <span className='weekday' id='friday' onClick={() => {
                    setCurrDay("Friday")
                    dispatch(getByDate("Friday"))
                }}>Friday</span>
                <span className='weekday' id='saturday' onClick={() => {
                    setCurrDay("Saturday")
                    dispatch(getByDate("Saturday"))
                }}>Saturday</span>
                <span className='weekday' id='sunday' onClick={() => {
                    setCurrDay("Sunday")
                    dispatch(getByDate("Sunday"))
                }}>Sunday</span>
            </section>
            <section className='planners-wrapper'>
                <DailyPlanner id={1} nowDay={currDay} />
            </section>
        </div>
  </Box>
  </Box>
        </>
    )
}

export default WeeklySchedule;
