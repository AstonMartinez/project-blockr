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
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import { TimeField } from '@mui/x-date-pickers/TimeField';import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import { useDispatch } from 'react-redux';
import { createTask, getByDate } from '../../store/tasks';
import Modal from '@mui/material/Modal';
import { updateUserTask, deleteUserTask } from '../../store/tasks';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
  };

const TaskEditModal = ({ task, onClose, nowDay }) => {
    const dispatch = useDispatch()
    console.log(task.id)

    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [day, setDay] = useState(task.day)
    const [startTime, setStartTime] = useState(task.start_time)
    const [endTime, setEndTime] = useState(task.end_time)
    const [icon, setIcon] = useState(task.icon)
    const [color, setColor] = useState(task.color)

    const determineActive = (icon, option) => {
        if(icon === option) {
            return true
        }
        return
    }

    const [iconOneActive, setIconOneActive] = useState(determineActive(task.icon, 'food'))
    const [iconTwoActive, setIconTwoActive] = useState(determineActive(task.icon, 'laptop'))
    const [iconThreeActive, setIconThreeActive] = useState(determineActive(task.icon, 'repeat'))
    const [iconFourActive, setIconFourActive] = useState(determineActive(task.icon, 'hotel'))
    const [iconFiveActive, setIconFiveActive] = useState(determineActive(task.icon, 'groups'))
    const [iconSixActive, setIconSixActive] = useState(determineActive(task.icon, 'fitness'))
    const [iconSevenActive, setIconSevenActive] = useState(determineActive(task.icon, 'health'))
    const [iconEightActive, setIconEightActive] = useState(determineActive(task.icon, 'call'))
    const [iconNineActive, setIconNineActive] = useState(determineActive(task.icon, 'cake'))
    const [iconTenActive, setIconTenActive] = useState(determineActive(task.icon, 'code'))
    const [iconElevenActive, setIconElevenActive] = useState(determineActive(task.icon, 'morning'))
    const [iconTwelveActive, setIconTwelveActive] = useState(determineActive(task.icon, 'evening'))
    const [iconThirteenActive, setIconThirteenActive] = useState(determineActive(task.icon, 'sparkle'))
    const [iconFourteenActive, setIconFourteenActive] = useState(determineActive(task.icon, 'event'))
    const [iconFifteenActive, setIconFifteenActive] = useState(determineActive(task.icon, 'tree'))
    const [iconSixteenActive, setIconSixteenActive] = useState(determineActive(task.icon, 'alert'))

    const [dayError, setDayError] = useState(null)
    const [titleError, setTitleError] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [startTimeError, setStartTimeError] = useState(null)
    const [endTimeError, setEndTimeError] = useState(null)
    const [iconError, setIconError] = useState(null)

    const [open, setOpen] = useState(true)

    const handleTaskDelete = async () => {
        await dispatch(deleteUserTask(task.id))
        await dispatch(getByDate(nowDay))
        onClose()
    }

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
            const startDate = new Date(exactStart)
            const startHour = startDate.getHours()
            const startMinutes = startDate.getMinutes()

            const exactEnd = endTime["$d"]
            const endDate = new Date(exactEnd)
            const endHour = endDate.getHours()
            const endMinutes = endDate.getMinutes()

            const updatedTask = {
                title: title,
                description: description,
                icon: icon,
                day: day,
                start_time: `${startHour}:${startMinutes}`,
                end_time: `${endHour}:${endMinutes}`,
                color: color
            }

            await dispatch(updateUserTask(task.id, updatedTask))
            await dispatch(getByDate(nowDay))
            setHasSubmitted(true)
            onClose()
            return
        }

    }

    return (
        <div id='task-modal-wrapper'>
                    <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{height: "80%", marginTop: "70px"}}
        >

<Box id='add-task-modal-box' sx={{ bgcolor: 'background.paper' }}>
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button onClick={onClose}>X</Button>
    </div>
                <Box id='add-task-box-2' sx={{ display: 'flex', height: '100%' }}>
                    <Box sx={{ width: '50%' }}>
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
                                    {titleError}
                                </FormHelperText>
                            )}
                        </FormControl>
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
                                    {descriptionError}
                                </FormHelperText>
                            )}
                        </FormControl>
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
                                    {dayError}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <label id='task-color-label' className='task-input-label'>Task Color:</label>
                        <Input className='task-input' type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    </Box>
                    <Divider id='create-task-divider' orientation='vertical' flexItem />
                    <Box sx={{width: '50%', 'padding': '0 15px', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'space-between'}}>
                        <label className='task-input-label'>Task Icon:</label>
                        <Box sx={{ 'height': "138px", 'marginBottom': '0', 'paddingBottom': '0', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'space-between'}}>

                        <Box sx={{width: "350px", display: "flex", justifyContent: "space-between", height: '35px', padding: '8px 13px 0 13px'}}>
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
                            <Box sx={{width: "350px", display: "flex", justifyContent: "space-between", height: '35px', padding: '8px 13px 0 13px'}}>
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
                            <Box sx={{width: "350px", display: "flex", justifyContent: "space-between", height: '35px', padding: '8px 13px 0 13px'}}>
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
                            <Box sx={{width: "350px", display: "flex", justifyContent: "space-between", height: '35px', padding: '8px 13px 0 13px'}}>
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
                        <Box sx={{'paddingBottom': '0', 'marginTop': '8px'}}>
                            <FormControl error={startTime === null && hasSubmitted ? true : false}>
                                <label className='task-input-label'>Start Time:</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField value={startTime} onChange={(newValue) => setStartTime(newValue)} />
                                </LocalizationProvider>
                                {startTimeError && hasSubmitted && (
                                    <FormHelperText className='error-text'>
                                        {startTimeError}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl error={endTime === null && hasSubmitted ? true : false}>
                            <label className='task-input-label'>End Time:</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField value={endTime} onChange={(newValue) => setEndTime(newValue)} />
                                </LocalizationProvider>
                                {endTimeError && hasSubmitted && (
                                    <FormHelperText className='error-text'>
                                        {endTimeError}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ margin: '12px 0' }}>
                    <Divider id='create-task-divider' />
                </Box>
                <Box id='update-delete-task-buttons' sx={{height: '50px', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                    {/* <Button className='task-submit-btn' onClick={handleTaskSubmit} type="submit" variant="contained">Submit</Button> */}
                    <Button sx={{marginRight: '10px'}} variant="contained" onClick={handleTaskSubmit}>Submit Edits</Button>
                    <Button variant="contained" onClick={handleTaskDelete}>Delete Task</Button>
                </Box>
            </Box>
            {/* <section style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button>X</Button>
            </section>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{paddingRight: '100px'}}>
                    <section>
                        <h3>Task Title</h3>
                        {isEditing && (
                            <input />
                        )}
                        <p>{task.title}</p>
                    </section>
                    <section>
                        <h3>Description</h3>
                        <p>{task.description}</p>
                    </section>
                    <section>
                        <h3>Day</h3>
                        <p>{task.day}</p>
                    </section>
                </div>
                <Divider variant='vertical' flexItem />
                <div>
                    <section>
                        <h3>Start Time</h3>
                        <p>{task.start_time}</p>
                    </section>
                    <section>
                        <h3>End Time</h3>
                        <p>{task.end_time}</p>
                    </section>
                    <section>
                        <h3>Icon</h3>
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
                    </section>
                </div>
            </div> */}
            </Modal>
        </div>
    )
}

export default TaskEditModal;
