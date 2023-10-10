import './UserProfile.css'
import React, { useState } from 'react'
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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const UserProfile = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [taskValue, setTaskValue] = useState("")
    const [error, setError] = useState(false)
    const tasksArr = ["Data Structures & Algorithms", "Capstone Project", "Resume", "Job Search", "Project Blockr","Learn C#"]
    const codingLangs = ["JavaScript", "Python", "React", "C#", "C++", "Angular", "NextJs", "Java", "TypeScript", "Rust", "Svelte"]
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const checkEntry = () => {
        if(taskValue) {
            return true
        }
        return true
    }

    const handleLangDelete = () => {
        console.log("You delete this.")
    }

    return (
        <div id='user-profile-wrapper'>
            <section>
                <div>
                    <h1>{sessionUser.firstName} {sessionUser.lastName}</h1>
                    <Avatar style={{"backgroundColor": "purple"}}>{sessionUser.firstName[0]}{sessionUser.lastName[0]}</Avatar>
                </div>
                <div>
                    <span>{sessionUser.email}</span>
                </div>
            </section>
            <section>
                <div>
                    <h2>My Stats</h2>
                </div>
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    {codingLangs.map(lang => (
                        <>
                            <Stack direction="row" spacing={1}>
                                <Tooltip title="Delete">
                                    <Chip label={lang} variant="outlined" onDelete={handleLangDelete} />
                                </Tooltip>
                            </Stack>
                        </>
                    ))}
                </div>
            </section>
            <section>
                <div>
                    <h2>My Tasks</h2>
                    <div>
                        <Button onClick={handleOpen}>Edit Tasks</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Delete
                            </Typography>
                            <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
                                Update
                            </Typography>
                            </Box>
                        </Modal>
                        </div>
                    <div>
                        <TextField
                        error={false}
                        id="outlined-error"
                        label="Add a Task"
                        placeholder="Add a Task"
                        helperText={error ? "Incorrect entry." : ''}
                        value={taskValue}
                        onChange={(e) => setTaskValue(e.target.value)}
                        />
                    </div>
                    <div>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                            <Item>Data Structures & Algorithms</Item>
                            <Item>Capstone Project</Item>
                            <Item>Resume</Item>
                            <Item>Job Search</Item>
                            <Item>Project Blockr</Item>                            <Item>Learn C#</Item>
                        </Stack>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>My Timeline</h2>
                </div>
                <div id='user-timeline-container'>
                    <Timeline position="alternate">
                    <TimelineItem>
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
                    </TimelineItem>
                    </Timeline>
                </div>
            </section>
        </div>
    )
}

export default UserProfile;
