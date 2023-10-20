import './CreateQuiz.css'
import AddIcon from '@mui/icons-material/Add';
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

const CreateQuiz = () => {
    let qArr = []
    const history = useHistory()
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [numQuestions, setNumQuestion] = useState(1)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const [q1q, setQ1Q] = useState(null)
    const [q2q, setQ2Q] = useState(null)
    const [q3q, setQ3q] = useState(null)
    const [q4q, setQ4Q] = useState(null)
    const [q5q, setQ5Q] = useState(null)
    const [q6q, setQ6Q] = useState(null)
    const [q7q, setQ7Q] = useState(null)
    const [q8q, setQ8q] = useState(null)
    const [q9q, setQ9Q] = useState(null)
    const [q10q, setQ10Q] = useState(null)
    const [q11q, setQ11Q] = useState(null)
    const [q12q, setQ12Q] = useState(null)
    const [q13q, setQ13q] = useState(null)
    const [q14q, setQ14Q] = useState(null)
    const [q15q, setQ15Q] = useState(null)
    const [q16q, setQ16Q] = useState(null)
    const [q17q, setQ17Q] = useState(null)
    const [q18q, setQ18q] = useState(null)
    const [q19q, setQ19Q] = useState(null)
    const [q20q, setQ20Q] = useState(null)

    const [q1a1, setQ1A1] = useState(null)
    const [q1a2, setQ1A2] = useState(null)
    const [q1a3, setQ1A3] = useState(null)
    const [q1a4, setQ1A4] = useState(null)

    const [q2a1, setQ2A1] = useState(null)
    const [q2a2, setQ2A2] = useState(null)
    const [q2a3, setQ2A3] = useState(null)
    const [q2a4, setQ2A4] = useState(null)

    const [q3a1, setQ3A1] = useState(null)
    const [q3a2, setQ3A2] = useState(null)
    const [q3a3, setQ3A3] = useState(null)
    const [q3a4, setQ3A4] = useState(null)

    const [q4a1, setQ4A1] = useState(null)
    const [q4a2, setQ4A2] = useState(null)
    const [q4a3, setQ4A3] = useState(null)
    const [q4a4, setQ4A4] = useState(null)

    const [q5a1, setQ5A1] = useState(null)
    const [q5a2, setQ5A2] = useState(null)
    const [q5a3, setQ5A3] = useState(null)
    const [q5a4, setQ5A4] = useState(null)

    const [q6a1, setQ6A1] = useState(null)
    const [q6a2, setQ6A2] = useState(null)
    const [q6a3, setQ6A3] = useState(null)
    const [q6a4, setQ6A4] = useState(null)

    const [q7a1, setQ7A1] = useState(null)
    const [q7a2, setQ7A2] = useState(null)
    const [q7a3, setQ7A3] = useState(null)
    const [q7a4, setQ7A4] = useState(null)

    const [q8a1, setQ8A1] = useState(null)
    const [q8a2, setQ8A2] = useState(null)
    const [q8a3, setQ8A3] = useState(null)
    const [q8a4, setQ8A4] = useState(null)

    const [q9a1, setQ9A1] = useState(null)
    const [q9a2, setQ9A2] = useState(null)
    const [q9a3, setQ9A3] = useState(null)
    const [q9a4, setQ9A4] = useState(null)

    const [q10a1, setQ10A1] = useState(null)
    const [q10a2, setQ10A2] = useState(null)
    const [q10a3, setQ10A3] = useState(null)
    const [q10a4, setQ10A4] = useState(null)

    const [q11a1, setQ11A1] = useState(null)
    const [q11a2, setQ11A2] = useState(null)
    const [q11a3, setQ11A3] = useState(null)
    const [q11a4, setQ11A4] = useState(null)

    const [q12a1, setQ12A1] = useState(null)
    const [q12a2, setQ12A2] = useState(null)
    const [q12a3, setQ12A3] = useState(null)
    const [q12a4, setQ12A4] = useState(null)

    const [q13a1, setQ13A1] = useState(null)
    const [q13a2, setQ13A2] = useState(null)
    const [q13a3, setQ13A3] = useState(null)
    const [q13a4, setQ13A4] = useState(null)

    const [q14a1, setQ14A1] = useState(null)
    const [q14a2, setQ14A2] = useState(null)
    const [q14a3, setQ14A3] = useState(null)
    const [q14a4, setQ14A4] = useState(null)

    const [q15a1, setQ15A1] = useState(null)
    const [q15a2, setQ15A2] = useState(null)
    const [q15a3, setQ15A3] = useState(null)
    const [q15a4, setQ15A4] = useState(null)

    const [q16a1, setQ16A1] = useState(null)
    const [q16a2, setQ16A2] = useState(null)
    const [q16a3, setQ16A3] = useState(null)
    const [q16a4, setQ16A4] = useState(null)

    const [q17a1, setQ17A1] = useState(null)
    const [q17a2, setQ17A2] = useState(null)
    const [q17a3, setQ17A3] = useState(null)
    const [q17a4, setQ17A4] = useState(null)

    const [q18a1, setQ18A1] = useState(null)
    const [q18a2, setQ18A2] = useState(null)
    const [q18a3, setQ18A3] = useState(null)
    const [q18a4, setQ18A4] = useState(null)

    const [q19a1, setQ19A1] = useState(null)
    const [q19a2, setQ19A2] = useState(null)
    const [q19a3, setQ19A3] = useState(null)
    const [q19a4, setQ19A4] = useState(null)

    const [q20a1, setQ20A1] = useState(null)
    const [q20a2, setQ20A2] = useState(null)
    const [q20a3, setQ20A3] = useState(null)
    const [q20a4, setQ20A4] = useState(null)


    for(let i = 1; i < numQuestions; i++) {
        qArr.push({id: i, front: null, back: null})
    }
    const [finalQArr, setFinalQArr] = useState(qArr)

    const numsContent = (
        <div>
            {finalQArr.map(q => (
                <div style={{"border": "1px solid red"}}>
                    <h3>Card {qArr[q].id}</h3>
                    {/* <IndividualQ cardId={qArr[qArr.indexOf(q)].id} /> */}
                </div>
            ))}
        </div>
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        const cardFronts = document.querySelectorAll('#card-q-front')
        const cardBacks = document.querySelectorAll('#card-q-back')
        const resArr = []
        for(let i = 0; i < cardFronts.length; i ++) {
            resArr.push({
                front: cardFronts[i].value,
                back: cardBacks[i].value
            })
        }
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
              backgroundColor: "black"
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
            <img src="https://i.ibb.co/dLgCNcW/projectblockr-shieldonly.png" style={{"height": "50px", "marginRight": "10px"}} alt="projectblockr-shieldonly" />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Trivia
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
                <h1>Create a Quiz</h1>
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
                        <label htmlFor='num-cards'>How Many Questions?</label>
                        <Input sx={{"width": "300px"}}
                            type="number"
                            defaultValue={1}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 50
                                }
                            }}
                            value={numQuestions}
                            onChange={(e) => setNumQuestion(e.target.value)}
                        />

                    </section>
                    <section id='fc-cards-inputs'>
                        <h2>Questions</h2>
                        <section id='all-fcs'>
                            {qArr.map(card => (
                                <div>
                                </div>
                            ))}
                            {numsContent}
                        </section>
                    </section>
                    <section id='create-fc-submit'>
                        <Button type="submit" size="md">Submit</Button>
                    </section>
                </form>
            </div>
        </div>
          </Box>
          </Box>
    )
}

export default CreateQuiz;
