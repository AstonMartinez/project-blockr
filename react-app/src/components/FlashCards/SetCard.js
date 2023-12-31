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
import { deleteUserSet, fetchAvailableSets, fetchUserSets, fetchSetByCategory, getCardSets } from '../../store/cards';

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
    textAlign: 'center',
    borderRadius: '15px'
}

const SetMenu = ({ set, filter }) => {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const [modalOpen, setModalOpen] = React.useState(false)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const handleSetDelete = (setId) => {
        dispatch(deleteUserSet(setId)).then(() => {

            if(filter === "All Sets") {
                dispatch(fetchAvailableSets())
                return
            } else if (filter === "All Public") {
                dispatch(getCardSets())
                return
            } else if (filter === "My Sets") {
                dispatch(fetchUserSets())
                return
            } else if (filter === "General Knowledge Sets") {
                dispatch(fetchSetByCategory("General"))
                return
            } else if (filter === "Angular Sets") {
                dispatch(fetchSetByCategory("Angular"))
                return
            } else if (filter === "C# Sets") {
                dispatch(fetchSetByCategory("CSharp"))
                return
            } else if (filter === "C++ Sets") {
                dispatch(fetchSetByCategory("C++"))
                return
            } else if (filter === "JavaScript Sets") {
                dispatch(fetchSetByCategory("JavaScript"))
                return
            } else if (filter === "Java Sets") {
                dispatch(fetchSetByCategory("Java"))
                return
            } else if (filter === "Next.js Sets") {
                dispatch(fetchSetByCategory("Next.js"))
                return
            } else if (filter === "Python Sets") {
                dispatch(fetchSetByCategory("Python"))
                return
            } else if (filter === "React Sets") {
                dispatch(fetchSetByCategory("React"))
                return
            } else if (filter === "Rust Sets") {
                dispatch(fetchSetByCategory("Rust"))
                return
            } else if (filter === "Svelte Sets") {
                dispatch(fetchSetByCategory("Svelte"))
                return
            } else if (filter === "TypeScript Sets") {
                dispatch(fetchSetByCategory("Svelte"))
                return
            } else if (filter === "SQL Sets") {
                dispatch(fetchSetByCategory("SQL"))
                return
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
                    id='long-button'
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id='long-menu'
                    MenuListProps={{
                        'aria-labelledby': 'long-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '15ch',
                            backgroundColor: '#1e1e1e',
                            color: "white"
                        },
                    }}
                >
                    <MenuItem onClick={handleModalOpen}>
                        <DeleteForeverIcon sx={{ marginRight: '10px' }} /> Delete
                    </MenuItem>
                    <MenuItem sx={{ display: 'flex', alignItems: 'center' }}>
                        <NavLink exact to={`/sets/${set.id}/update`} style={{ 'color': 'white', 'textDecoration': 'none' }}>
                            <SystemUpdateAltIcon sx={{ marginRight: '10px', marginTop: '2px' }} /> Update
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
                        <Typography component="p">
                            Are you sure you want to delete this set?
                        </Typography>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', margin: '15px 0' }}>
                            <Button variant="contained" sx={{ backgroundColor: 'darkred' }} onClick={() => {
                                handleSetDelete(set.id)
                                return
                            }}>Yes, Delete</Button>
                            <Button variant="contained" sx={{ backgroundColor: "green" }} onClick={handleModalClose}>No, Keep</Button>
                        </div>
                    </Box>
                </Modal>
            )}
        </>
    )
}

const SetCard = ({ set, filter }) => {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
            <div className='single-set-info-card' style={{ zIndex: "0" }}>
                {sessionUser && sessionUser.id === set.creator_id ? (
                    <div className='set-controls-holder-notempty'>
                        <SetMenu set={set} filter={filter} />
                    </div>
                ) : (
                    <div className='set-controls-holder-empty'></div>
                )}
                <div>
                    <h3>{set?.title}</h3>
                    <span>{set?.description}</span>
                </div>
                <div style={{ 'margin': '10px 0' }}>
                    <Button variant='contained' sx={{ backgroundColor: 'purple' }} onClick={() => {
                        history.push(`/sets/${set.id}`)
                    }}>Study Set</Button>
                </div>
            </div>
        </>
    )
}

export default SetCard;
