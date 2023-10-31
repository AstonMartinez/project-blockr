import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { deleteUserQuiz, fetchAllAvailable, fetchByCategory, fetchUserQuizzes, fetchAllPublic } from '../../store/quiz';

const ITEM_HEIGHT = 48;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '3px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    borderRadius: "15px"
  };

const QuizMenu = ({ quiz, filter }) => {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [modalOpen, setModalOpen] = React.useState(false)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const handleQuizDelete = (quizId) => {
        dispatch(deleteUserQuiz(quizId)).then(() => {

                    if(filter === "All Quizzes") {
                        dispatch(fetchAllAvailable())

                    } else if (filter === "All Public") {
                        dispatch(fetchAllPublic())

                    } else if (filter === "My Quizzes") {
                        dispatch(fetchUserQuizzes())

                    } else if (filter === "General Knowledge Quizzes") {
                        dispatch(fetchByCategory("General"))

                    } else if (filter === "Angular Quizzes") {
                        dispatch(fetchByCategory("Angular"))

                    } else if (filter === "C# Quizzes") {
                        dispatch(fetchByCategory("C#"))

                    } else if (filter === "C++ Quizzes") {
                        dispatch(fetchByCategory("C++"))

                    } else if (filter === "JavaScript Quizzes") {
                        dispatch(fetchByCategory("JavaScript"))

                    } else if (filter === "Java Quizzes") {
                        dispatch(fetchByCategory("Java"))

                    } else if (filter === "Next.js Quizzes") {
                        dispatch(fetchByCategory("Next.js"))

                    } else if (filter === "Python Quizzes") {
                        dispatch(fetchByCategory("Python"))

                    } else if (filter === "React Quizzes") {
                        dispatch(fetchByCategory("React"))

                    } else if (filter === "Rust Quizzes") {
                        dispatch(fetchByCategory("Rust"))

                    } else if (filter === "Svelte Quizzes") {
                        dispatch(fetchByCategory("Svelte"))

                    } else if (filter === "TypeScript Quizzes") {
                        dispatch(fetchByCategory("TypeScript"))

                    } else if (filter === "SQL Quizzes") {
                        dispatch(fetchByCategory("SQL"))

                    }
                    handleModalClose()
                    return

        })
    }

    return (
        <>
            <div>
            <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            >
            <MoreVertIcon />
            </IconButton>
            <Menu
            id="long-menu"
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '15ch',
                backgroundColor: "#1e1e1e",
                color: "white"
                },
            }}
            >
                <MenuItem onClick={handleModalOpen}>
                    <DeleteForeverIcon sx={{ marginRight: "10px" }} /> Delete
                </MenuItem>
                <MenuItem sx={{ display: 'flex', 'alignItems': 'center' }}>
                    <NavLink exact to={`/trivia/${quiz.id}/update`} style={{ 'color': 'white', 'textDecoration': 'none' }}>
                        <SystemUpdateAltIcon sx={{ marginRight: "10px", 'marginTop': '2px' }} /> Update
                    </NavLink>
                </MenuItem>
            </Menu>
        </div>
        {modalOpen && (
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby='delete-modal-title'
                aria-describedby='delete-modal-description'
            >
                <Box sx={style}>
                    <Typography variant="h5" component='h2'>
                        Confirm Delete
                    </Typography>
                    <Typography component='p'>
                        Are you sure you want to delete this quiz?
                    </Typography>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", margin: "15px 0" }}>
                        <Button variant="contained" sx={{ backgroundColor: "darkred" }} onClick={() => {
                            handleQuizDelete(quiz.id)
                            return
                        }}>Yes, Delete</Button>
                        <Button variant='contained' sx={{ backgroundColor: "green" }} onClick={handleModalClose}>No, Keep</Button>
                    </div>
                </Box>
            </Modal>
        )}
        </>
    )
}

const QuizCard = ({ quiz, filter }) => {
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
            <div className='single-quiz-info-card' style={{ zIndex: "0" }}>
            {sessionUser && sessionUser.id === quiz.user_id ? (
                <div className='quiz-controls-holder-notempty'>
                    <QuizMenu quiz={quiz} filter={filter} />
                </div>
            ) : (
                <div className='quiz-controls-holder-empty'></div>
            )}
            <div>
                <h3>{quiz?.title}</h3>
                <span>{quiz?.description}</span>
            </div>
            <div style={{ "margin": "10px 0" }}>
                <Button variant='contained' sx={{ backgroundColor: "purple" }} onClick={() => {
                    history.push(`/quizzes/${quiz.id}`)
                }}>Take Quiz</Button>
            </div>
        </div>
        </>
    )
}

export default QuizCard;
