import './CreateSet.css'
import AddIcon from '@mui/icons-material/Add';
import IndividualQ from './IndividualQ';
import { useState } from 'react'
import Textarea from '@mui/joy/Textarea';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useHistory } from 'react-router-dom'
import mainListItems from '../UserDashboard/listItems'
import PersonIcon from '@mui/icons-material/Person';
import * as React from 'react'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

const CreateSet = () => {
    let cardsArr = []
    const history = useHistory()
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [numCards, setNumCards] = useState(1)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    for(let i = 1; i < numCards; i++) {
        cardsArr.push({id: i, front: null, back: null})
    }
    const [finalCardArr, setFinalCardArr] = useState(cardsArr)
    // console.log(cardsArr[0].id)
    const numsContent = (
        <div>
            {finalCardArr.map(card => (
                <div style={{"border": "1px solid red"}}>
                    <h3>Card {cardsArr[card].id}</h3>
                    <IndividualQ cardId={cardsArr[cardsArr.indexOf(card)].id} />
                </div>
            ))}
        </div>
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(document.querySelectorAll('#card-q-front'))
        // console.log(document.querySelectorAll('#card-q-back'))
        const cardFronts = document.querySelectorAll('#card-q-front')
        const cardBacks = document.querySelectorAll('#card-q-back')
        const resArr = []
        for(let i = 0; i < cardFronts.length; i ++) {
            // console.log("INSIDE FRONT LOOP: ", cardFronts[i].value)
            resArr.push({
                front: cardFronts[i].value,
                back: cardBacks[i].value
            })
        }
        // console.log("FINAL: ", resArr)
        const setInfo = {
            title: title,
            description: description,
            category: category,
            cards: resArr
        }
        console.log(setInfo)

    }

    return (
        <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
                <PersonIcon onClick={() => history.push('/user')} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
          </List>
        </Drawer>
        </Box>

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
                    <div id='create-fc-wrapper'>
            <div>
                <h1>Create a Flashcard Set</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <section id='create-fc-info'>
                        <h2>Set Info</h2>
                        <section id='fc-title-input'>
                            <label htmlFor='title'>Title</label>
                            <Input sx={{"width": "300px"}}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </section>
                        <section id='fc-desc-input'>
                            <label htmlFor='description'>Description</label>
                            <Textarea sx={{"height": "100px", "width": "300px"}}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </section>
                    </section>
                    <section id='fc-cat-select'>
                        <label>Category</label>
                        <Select defaultValue="General" onChange={(e) => setCategory(e.target.value)} sx={{"width": "300px"}}>
                            <Option value="Angular">Angular</Option>
                            <Option value="C#">C#</Option>
                            <Option value="C++">C++</Option>
                            <Option value="General">General</Option>
                            <Option value="Java">Java</Option>
                            <Option value="JavaScript">JavaScript</Option>
                            <Option value="NextJS">NextJS</Option>
                            <Option value="Python">Python</Option>
                            <Option value="React">React</Option>
                            <Option value="Rust">Rust</Option>
                            <Option value="Svelte">Svelte</Option>
                            <Option value="TypeScript">TypeScript</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </section>
                    <section id='fc-num-select'>
                        <label htmlFor='num-cards'>How Many Cards?</label>
                        <Input sx={{"width": "300px"}}
                            type="number"
                            defaultValue={1}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 50
                                }
                            }}
                            value={numCards}
                            onChange={(e) => setNumCards(e.target.value)}
                        />
                        {/* <input
                            type='number'
                            value={numCards}
                            onChange={(e) => setNumCards(e.target.value)}
                            name='num-cards'
                        /> */}
                    </section>
                    <section id='fc-cards-inputs'>
                        <h2>Cards</h2>
                        <section id='all-fcs'>
                            <IndividualQ />
                            {cardsArr.map(card => (
                                <div>
                                    <IndividualQ front={card.front} back={card.back} />
                                </div>
                            ))}
                            {numsContent}
                        </section>
                        {/* <section>
                            <AddIcon onClick={() => {
                                cardsArr.push({
                                    front: null,
                                    back: null
                                })
                                setFinalCardArr(cardsArr)
                            }} />
                        </section> */}
                    </section>
                    <section id='create-fc-submit'>
                        <Button type="submit" size="md">Submit</Button>
                    </section>
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        </div>
          </Box>
          </Box>
    )
}

export default CreateSet;
