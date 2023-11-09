import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { updateUserApplication } from '../../store/applications';

const newTheme = (theme) => createTheme({
  ...theme,
  components: {
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: 'black',
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#2196f3',
          border: '1px solid',
          backgroundColor: 'white',
        }
      }
    }
  }
})

const convertMonth = (month) => {
    if(month === "Jan") {
        return '01'
    } else if (month === "Feb") {
        return '02'
    } else if (month === "Mar") {
        return '03'
    } else if (month === "Apr") {
        return '04'
    } else if (month === "May") {
        return '05'
    } else if (month === "Jun") {
        return '06'
    } else if (month === "Jul") {
        return '07'
    } else if (month === "Aug") {
        return '08'
    } else if (month === "Sep") {
        return '09'
    } else if (month === "Oct") {
        return '10'
    } else if (month === "Nov") {
        return '11'
    } else if (month === "Dec") {
        return '12'
    }
}

const formatDate = (date) => {
    const dateSplit = date.split(" ")
    const month = convertMonth(dateSplit[2])
    const day = dateSplit[1]
    const year = dateSplit[3]
    return dayjs(`${year}-${month}-${day}`)

}


const SingleApp = ({ appData, colData }) => {
    // console.log("COLUMN DATA: ", colData)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [company, setCompany] = useState(appData.company)
    const [jobTitle, setJobTitle] = useState(appData.job_title)
    const [jobUrl, setJobUrl] = useState(appData.job_url)
    const [dateApplied, setDateApplied] = useState(appData.date_applied ? formatDate(appData.date_applied) : '')


    const [location, setLocation] = useState(appData.location)
    const [description, setDescription] = useState(appData.job_description)
    const [salary, setSalary] = useState(appData.salary)

    const [deadline, setDeadline] = useState(appData.deadline ? formatDate(appData.deadline) : '')

    const [notes, setNotes] = useState(appData.notes)
    const [status, setStatus] = useState(appData.status)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAppStatusUpdate = (newStatus) => {

    }

    // console.log("LOOK HERE: ", `${deadline['$M'] + 1}-${deadline['$D']}-${deadline['$y']}`)

    const handleAppDetailsUpdate = () => {
        if(status !== appData.status) {
            handleAppStatusUpdate(status)
        }

        let deadlineUpdate
        let dateAppliedUpdate

        if(deadline !== appData.deadline) {
            deadlineUpdate = `${deadline['$M'] + 1}-${deadline['$D']}-${deadline['$y']}`
        } else {
            deadlineUpdate = appData.deadline
        }

        if(dateApplied !== appData.date_applied) {
            dateAppliedUpdate = `${dateApplied['$M'] + 1}-${dateApplied['$D']}-${dateApplied['$y']}`
        } else {
            dateAppliedUpdate = appData.date_applied
        }

        const updatedApp = {
            company: company,
            job_title: jobTitle,
            job_url: jobUrl,
            date_applied: dateAppliedUpdate,
            job_description: description,
            location: location,
            salary: salary,
            deadline: deadlineUpdate,
            notes: notes,
            status: status
        }

        dispatch(updateUserApplication())
    }


    const handleAppDelete = () => {

    }

    return (
        <>
            <div id='single-app-holder' onClick={handleOpen}>
                <div>
                    <h4>{appData.company}</h4>
                </div>
                <div>
                    <p>{appData.job_title}</p>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{height: "500px", marginTop: "70px", bgcolor: 'background.paper'}}
            >
                <Box id='edit-app-modal' sx={{bgcolor: 'background.paper'}}>
                    <section>
                        <section id='edit-app-exit'>
                            <Button onClick={handleClose}>X</Button>
                        </section>
                        <section id='edit-app-header'>
                            <h2>Edit Application Info</h2>
                        </section>
                    </section>
                    <section style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <section className='edit-app-half'>
                            <h3>Application Details</h3>
                            <section>
                                <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='company'>Company</label>
                                    <input
                                        className='edit-app-input-reg'
                                        name='company'
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </section>
                                <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='job-title'>Job Title</label>
                                    <input
                                        className='edit-app-input-reg'
                                        name='job-title'
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                    />
                                </section>
                                <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='job-url'>Job Listing Url</label>
                                    <input
                                        className='edit-app-input-reg'
                                        name='job-url'
                                        value={jobUrl}
                                        onChange={(e) => setJobUrl(e.target.value)}
                                    />
                                </section>
                                <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='date-applied'>Date Applied</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <ThemeProvider theme={newTheme}>

                                        <DatePicker
                                            id='app-date-picker'
                                            value={dateApplied}
                                            readOnly={true}
                                            disabled={true}
                                            onChange={(newValue) => setDateApplied(newValue)}
                                        />
                                    </ThemeProvider>
                                    </LocalizationProvider>
                                </section>

                            </section>
                        </section>
                        <Divider id='edit-app-info-divider' orientation='vertical' flexItem />
                        <section className='edit-app-half'>
                            <h3>Job Details</h3>
                            <section>
                                <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='location'>Location</label>
                                    <input
                                        className='edit-app-input-reg'
                                        name='location'
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </section>
                                <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='job-description'>Job Description</label>
                                    <textarea
                                        className='edit-app-textarea'
                                        id='edit-app-textarea-1'
                                        name='job-description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </section>
                                <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='salary'>Salary</label>
                                    <input
                                        className='edit-app-num-input'
                                        name='salary'
                                        type='number'
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                        min={1}
                                    />
                                </section>
                                <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='status'>Status</label>
                                    <select
                                        id='edit-app-select'
                                        className='edit-app-select-input'
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="Applied">Applied</option>
                                        <option value="Interviewed">Interviewed</option>
                                        <option value="Received Offer">Received Offer</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </section>
                                {/* <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='deadline'>Deadline</label>
                                    <div style={{backgroundColor: 'white'}}>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            value={deadline}
                                            readOnly={true}
                                            onChange={(newValue) => {
                                                console.log(newValue)
                                                setDeadline(newValue)
                                            }}
                                        />
                                    </LocalizationProvider>
                                    </div>
                                </section> */}
                            </section>
                        </section>
                        <Divider id='app-edit-info-divider' orientation='vertical' sx={{marginTop: '5px'}} flexItem />
                        <section className='edit-app-half'>
                            <h3>Notes</h3>
                            <section>
                                <section className='edit-app-field'>
                                    {/* <label className='edit-app-modal-labels' htmlFor='notes'>Notes</label> */}
                                    <textarea
                                        className='edit-app-textarea'
                                        id='edit-app-textarea-2'
                                        name='notes'
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </section>
                                {/* <section className='edit-app-field'>
                                    <label className='edit-app-modal-labels' htmlFor='status'>Status</label>
                                    <select
                                        id='edit-app-select'
                                        className='edit-app-select-input'
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="Applied">Applied</option>
                                        <option value="Interviewed">Interviewed</option>
                                        <option value="Received Offer">Received Offer</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </section> */}
                            </section>
                        </section>
                    </section>
                        {/* <Divider id='app-edit-info-divider' sx={{marginTop: '5px'}} flexItem />
                    <section id='edit-app-modal-bottom'>
                        <section className='edit-app-field'>
                            <label htmlFor='notes'>Notes</label>
                            <textarea
                                name='notes'
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </section>
                        <section className='edit-app-field'>
                            <label htmlFor='status'>Status</label>
                            <select id='edit-app-select' value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Applied">Applied</option>
                                <option value="Interviewed">Interviewed</option>
                                <option value="Received Offer">Received Offer</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </section>
                    </section> */}
                    <section id='edit-app-modal-button-cont'>
                        <Button variant="contained">Submit Changes</Button>
                    </section>
                </Box>
            </Modal>
        </>
    )
}

export default SingleApp;
