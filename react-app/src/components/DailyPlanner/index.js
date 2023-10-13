import './DailyPlanner.css';
import { useState, useEffect } from 'react';
import sampleTasks from './sampletaskdata';
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
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
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Input from '@mui/joy/Input';
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
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { createTask, getByDate } from '../../store/tasks';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const DailyPlanner = () => {
    const dispatch = useDispatch()
    const allTasks = useSelector(state => state.tasks.allTasks)
    const taskArr = Object.values(allTasks).toSorted((start_time, end_time) => start_time - end_time)
    console.log(taskArr)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [color, setColor] = useState('')
    const [icon, setIcon] = useState(null)
    const [day, setDay] = useState(null)
    const [iconOneActive, setIconOneActive] = useState(false)
    const [iconTwoActive, setIconTwoActive] = useState(false)
    const [iconThreeActive, setIconThreeActive] = useState(false)
    const [iconFourActive, setIconFourActive] = useState(false)
    const [iconFiveActive, setIconFiveActive] = useState(false)
    const [iconSixActive, setIconSixActive] = useState(false)
    const [iconSevenActive, setIconSevenActive] = useState(false)
    const [iconEightActive, setIconEightActive] = useState(false)
    const [iconNineActive, setIconNineActive] = useState(false)
    const [iconTenActive, setIconTenActive] = useState(false)
    const [iconElevenActive, setIconElevenActive] = useState(false)
    const [iconTwelveActive, setIconTwelveActive] = useState(false)
    const [iconThirteenActive, setIconThirteenActive] = useState(false)
    const [iconFourteenActive, setIconFourteenActive] = useState(false)
    const [iconFifteenActive, setIconFifteenActive] = useState(false)
    const [iconSixteenActive, setIconSixteenActive] = useState(false)
    const [dayError, setDayError] = useState(null)
    const [titleError, setTitleError] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [startTimeError, setStartTimeError] = useState(null)
    const [endTimeError, setEndTimeError] = useState(null)
    const [iconError, setIconError] = useState(null)
    const [currDay, setCurrDay] = useState("Monday")

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(getByDate(currDay))
    }, [dispatch])

    const handleTaskSubmit = async () => {
        if(title === null) {
            setTitleError("Please enter a valid title")

        }
        if(description === null) {
            setDescriptionError("Please enter a valid description")

        }
        if(day === null) {
            setDayError("Please enter a valid day (i.e., Monday)")

        } else if(day.toLowerCase() !== "monday" || day.toLowerCase() !== "tuesday" || day.toLowerCase() !== "wednesday" ||day.toLowerCase() !== "thursday" || day.toLowerCase() !== "friday" || day.toLowerCase() !== "saturday" || day.toLowerCase() !== "sunday") {
            setDayError("Please enter a valid day (i.e., Monday)")

        }

        if(startTime === null) {
            setStartTimeError("Please choose a valid start time")

        }

        if(endTime === null) {
            setEndTimeError("Please choose a valid end time")

        }

        if(icon === null) {
            setIconError("Please choose an icon")

        }

        if(iconError !== null || titleError !== null || descriptionError !== null || dayError !== null || startTimeError !== null || endTimeError !== null) {
            return
        } else {
            setTitleError(null)
            setDescriptionError(null)
            setDayError(null)
            setIconError(null)
            setStartTimeError(null)
            setEndTimeError(null)
            const exactStart = startTime["$d"]
            // const startSplit = exactStart.split(" ")
            const startDate = new Date(exactStart)
            const startHour = startDate.getHours()
            const startMinutes = startDate.getMinutes()
            console.log(`${startHour}:${startMinutes}`)
            const exactEnd = endTime["$d"]
            const endDate = new Date(exactEnd)
            const endHour = endDate.getHours()
            const endMinutes = endDate.getMinutes()
            console.log(`${endHour}:${endMinutes}`)
            const newTask = {
                title: title,
                description: description,
                icon: icon,
                day: day,
                start_time: `${startHour}:${startMinutes}`,
                end_time: `${endHour}:${endMinutes}`,
                color: color
            }
            console.log(newTask)
            await dispatch(createTask(newTask))
            // await dispatch(getBy)
        }

        setHasSubmitted(true)
    }

    return (
        <div id='user-timeline-container'>
                    <div>
                        <Button variant="contained" onClick={handleOpen}>Add a Task</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{height: "80%"}}

                        >
                            <Box sx={style}>
                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                Task title:
                            </Typography> */}
                            <FormControl error={title === null && hasSubmitted ? true : false}>
                                <label className='task-input-label'>Task Title:</label>
                                <Input
                                    className='task-input'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g., Practice C#"
                                />
                                {titleError && (
                                    <FormHelperText className='error-text'>
                                    {/* <InfoOutlined /> */}
                                        {titleError}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                Task Description:
                            </Typography> */}
                            <FormControl error={description === null && hasSubmitted ? true : false}>
                                <label className='task-input-label'>Task Description:</label>
                                <Input
                                    className='task-input'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="e.g., freecodecamp course"
                                />
                                {descriptionError !== null && (
                                    <FormHelperText className='error-text'>
                                    {/* <InfoOutlined /> */}
                                        {descriptionError}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                Day:
                            </Typography> */}
                                <FormControl sx={{margin: "10px 0"}} error={day === null && hasSubmitted ? true : false}>
                                    <label className='task-input-label'>Day:</label>
                                <Input
                                    className='task-input'
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    placeholder="e.g., Monday"
                                />
                                {dayError !== null && (
                                    <FormHelperText className='error-text'>
                                    {/* <InfoOutlined /> */}
                                        {dayError}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                Task Color:
                            </Typography> */}
                            <label id='task-color-label' className='task-input-label'>Task Color:</label>
                            <Input className='task-input' type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                Task Icon:
                            </Typography> */}
                            <label className='task-input-label'>Task Icon:</label>
                                <Box sx={{marginTop: "15px", marginBottom: "15px"}}>
                                    <Box sx={{width: "380px", display: "flex", justifyContent: "space-between"}}>
                                        <FastfoodIcon className={`task-icon icon-${iconOneActive}`} fontSize="medium" onClick={() => {
                                            setIcon("food")
                                            setIconOneActive(true)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <LaptopMacIcon className={`task-icon icon-${iconTwoActive}`} fontSize="medium" onClick={() => {
                                            setIcon("laptop")
                                            setIconOneActive(false)
                                            setIconTwoActive(true)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <RepeatIcon className={`task-icon icon-${iconThreeActive}`} fontSize="medium" onClick={() => {
                                            setIcon("repeat")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(true)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <HotelIcon className={`task-icon icon-${iconFourActive}`} fontSize="medium" onClick={() => {
                                            setIcon("hotel")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(true)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                    </Box>
                                    <Box sx={{width: "380px", display: "flex", justifyContent: "space-between"}}>
                                        <GroupsIcon className={`task-icon icon-${iconFiveActive}`} fontSize="medium" onClick={() => {
                                            setIcon("groups")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(true)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <FitnessCenterIcon className={`task-icon icon-${iconSixActive}`} fontSize="medium" onClick={() => {
                                            setIcon("fitness")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(true)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <HealthAndSafetyIcon className={`task-icon icon-${iconSevenActive}`} fontSize="medium" onClick={() => {
                                            setIcon("health")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(true)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <CallIcon className={`task-icon icon-${iconEightActive}`} fontSize="medium" onClick={() => {
                                            setIcon("call")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(true)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                    </Box>
                                    <Box sx={{width: "380px", display: "flex", justifyContent: "space-between"}}>
                                        <CakeIcon className={`task-icon icon-${iconNineActive}`} fontSize="medium" onClick={() => {
                                            setIcon("cake")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(true)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <CodeIcon className={`task-icon icon-${iconTenActive}`} fontSize="medium" onClick={() => {
                                            setIcon("code")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(true)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <LightModeIcon className={`task-icon icon-${iconElevenActive}`} fontSize="medium" onClick={() => {
                                            setIcon("morning")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(true)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <BedtimeIcon className={`task-icon icon-${iconTwelveActive}`} fontSize="medium" onClick={() => {
                                            setIcon("evening")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(true)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                    </Box>
                                    <Box sx={{width: "380px", display: "flex", justifyContent: "space-between"}}>
                                        <AutoAwesomeIcon className={`task-icon icon-${iconThirteenActive}`} fontSize="medium" onClick={() => {
                                            setIcon("sparkle")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(true)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <EventIcon className={`task-icon icon-${iconFourteenActive}`} fontSize="medium" onClick={() => {
                                            setIcon("event")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(true)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(false)
                                        }} />
                                        <AccountTreeIcon className={`task-icon icon-${iconFifteenActive}`} fontSize="medium" onClick={() => {
                                            setIcon("tree")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(true)
                                            setIconSixteenActive(false)
                                        }} />
                                        <CrisisAlertIcon className={`task-icon icon-${iconSixteenActive}`} fontSize='small' onClick={() => {
                                            setIcon("alert")
                                            setIconOneActive(false)
                                            setIconTwoActive(false)
                                            setIconThreeActive(false)
                                            setIconFourActive(false)
                                            setIconFiveActive(false)
                                            setIconSixActive(false)
                                            setIconSevenActive(false)
                                            setIconEightActive(false)
                                            setIconNineActive(false)
                                            setIconTenActive(false)
                                            setIconElevenActive(false)
                                            setIconTwelveActive(false)
                                            setIconThirteenActive(false)
                                            setIconFourteenActive(false)
                                            setIconFifteenActive(false)
                                            setIconSixteenActive(true)
                                        }} />
                                    </Box>
                                </Box>
                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                Choose a start time:
                            </Typography> */}
                            <FormControl error={startTime === null && hasSubmitted ? true : false}>
                                <label className='task-input-label'>Choose a Start Time:</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField value={startTime} onChange={(newValue) => setStartTime(newValue)} />
                                </LocalizationProvider>
                                {startTimeError && hasSubmitted && (
                                    <FormHelperText className='error-text'>
                                        {/* <InfoOutlined /> */}
                                        {startTimeError}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            {/* <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
                                Choose an end time:
                            </Typography> */}
                            <FormControl error={endTime === null && hasSubmitted ? true : false}>
                            <label className='task-input-label'>Choose an End Time:</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField value={endTime} onChange={(newValue) => setEndTime(newValue)} />
                                </LocalizationProvider>
                                {endTimeError && hasSubmitted && (
                                    <FormHelperText className='error-text'>
                                        {/* <InfoOutlined /> */}
                                        {endTimeError}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <Box id='task-submit-cont'>
                                <Button className='task-submit-btn' onClick={handleTaskSubmit} sx={{height: "20px"}} type="submit" variant="contained">Submit</Button>
                            </Box>
                            </Box>
                        </Modal>
                        </div>
                        <Timeline position="alternate">
                            {taskArr && taskArr.map(task => (
                                <>
                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{ m: 'auto 0' }}
                                            align="right"
                                            variant='body2'
                                            color={task.color}
                                        >
                                            {task.start_time} - {task.end_time}
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <FastfoodIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            {task.title}
                                        </Typography>
                                        <Typography>{task.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </>
                            ))}
                        </Timeline>
            {/* {taskArr && taskArr.map(task => (
                        <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                            >
                            {}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
            ))} */}

        {/* <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                >
                9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
                <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Eat
            </Typography>
            <Typography>Because you need strength</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
                <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
        </TimelineItem> */}

    </div>
    )
}

export default DailyPlanner;
