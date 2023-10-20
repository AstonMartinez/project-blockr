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
import IndividualQuestion from './IndividualQA';

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

    for(let i = 0; i < numQuestions; i++) {
        qArr.push({id: i, front: null, back: null})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const allQuestions = document.querySelectorAll('#question-text')
        const firstOptions = document.querySelectorAll('#ans-opt-1')
        const secondOptions = document.querySelectorAll('#ans-opt-2')
        const thirdOptions = document.querySelectorAll('#ans-opt-3')
        const fourthOptions = document.querySelectorAll('#ans-opt-4')
        const solutions = document.querySelectorAll('#solutions')
        const resArr = []
        for(let i = 0; i < allQuestions.length; i ++) {
            resArr.push({
                question: allQuestions[i].value,
                answer_one: firstOptions[i].value,
                answer_two: secondOptions[i].value,
                answer_three: thirdOptions[i].value,
                answer_four: fourthOptions[i].value,
                solution: solutions[i].value
            })
        }
        const quizInfo = {
            title: title,
            description: description,
            category: category,
            questions: resArr
        }
        console.log(quizInfo)

    }
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', marginBottom: "20px" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar sx={{ pr: '24px', backgroundColor: "black" }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
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
            <Box
                component="main"
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
                        <div>
                            <section id='create-fc-info'>
                                <h2>Set Info</h2>
                                <section id='fc-title-input'>
                                    <label htmlFor='title' id='quiz-title-label'>Title</label>
                                    <Input sx={{"width": "300px", marginBottom: "10px"}}
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </section>
                                <section id='fc-desc-input'>
                                    <label htmlFor='description' id='quiz-desc-label'>Description</label>
                                    <Textarea sx={{"height": "100px", "width": "300px"}}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </section>
                            </section>
                            <section id='fc-cat-select'>
                                <label id='quiz-cat-label'>Category</label>
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
                                <label htmlFor='num-cards' id='quiz-hw-mny-label'>How Many Questions?</label>
                                <input
                                    id='quiz-num-qs-input'
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    max={20}
                                    value={numQuestions}
                                    onChange={(e) => setNumQuestion(e.target.value)}
                                />
                            </section>
                            <section id='fc-cards-inputs'>
                                <h2>Questions</h2>
                                <section id='all-fcs'>
                                    <div>
                                        {qArr.map(q => (
                                            <>
                                                <IndividualQuestion />
                                            </>
                                        ))}
                                    </div>
                                </section>
                            </section>
                            <section id='create-quiz-submit'>
                                <Button size="md" onClick={handleSubmit}>Submit</Button>
                            </section>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default CreateQuiz;
