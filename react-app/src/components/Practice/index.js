// import './Practice.css'
import { useState } from 'react'
import * as React from 'react'
import { useSelector } from 'react-redux';
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

const Practice = () => {
    const history = useHistory()
    const [codeType, setCodeType] = useState(null)
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    let repl;

    if(codeType === "JS") {
        repl = (
            <div>
                <iframe src="https://codesandbox.io/embed/vanilla-vanilla?fontsize=14&hidenavigation=1&theme=dark"
                    style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}}
                    title="Vanilla"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        )
    } else if (codeType === "C#") {
        repl = (
            <div>
                <iframe title='C#' width="100%" height="475" src="https://dotnetfiddle.net/Widget/CsCons" frameborder="0"></iframe>
            </div>
        )
    } else if (codeType === "React") {
        repl = (
            <div>
                <iframe src="https://codesandbox.io/embed/delicate-hooks-pqxflc?fontsize=14&hidenavigation=1&theme=dark"
                    style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}}
                    title="delicate-hooks-pqxflc"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        )
    } else if (codeType === "Next") {
        repl = (
            <div>
                <iframe title='next' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} src="https://codesandbox.io/p/sandbox/naughty-james-7x8zxx?embed=1" allowfullscreen></iframe>
            </div>
        )
    } else if (codeType === "Angular") {
        repl = (
            <div>
                <iframe title='angular' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} src="https://codesandbox.io/p/sandbox/github/codesandbox/sandbox-templates/tree/main/angular?embed=1" allowfullscreen></iframe>
            </div>
        )
    } else if (codeType === "C++") {
        repl = (
            <div>
                <iframe src="https://codesandbox.io/embed/c-e79sy?fontsize=14&hidenavigation=1&theme=dark"
                    style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}}
                    title="C++"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        )
    } else if (codeType === "Python") {
        repl = (
            <div>
                <iframe title='python' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} src="https://codesandbox.io/p/sandbox/shy-platform-nnghky?embed=1" allowfullscreen></iframe>
            </div>
        )
    } else if (codeType === "TypeScript") {
        repl = (
            <div>
                <iframe src="https://codesandbox.io/embed/affectionate-phoebe-64d5x5?fontsize=14&hidenavigation=1&theme=dark"
                    style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}}
                    title="affectionate-phoebe-64d5x5"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        )
    } else if (codeType === "Rust") {
        repl = (
            <div>
                <iframe title='rust' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} allowfullscreen></iframe>
            </div>
        )
    } else if (codeType === "Svelte") {
        repl = (
            <div>
                <iframe title='svelte' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} width="800" height="450" src="https://codesandbox.io/p/sandbox/musing-sanne-pjy4fv?embed=1" allowfullscreen></iframe>
            </div>
        )
    } else {
        repl = ''
    }

    return (
        <>
            <Box sx={{ display: 'flex', height: "100vh" }}>
            <Box sx={{ display: 'flex', height: "100vh" }}>
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
            <Box>
            <div id='practice-page-wrapper'>
                <div>
                    <h1 id='practice-header'>Practice</h1>
                </div>
                <section id='languages-to-choose'>
                    <div id='what-language-text'>
                        <h3>Which language would you like to practice?</h3>
                    </div>
                    <div id='languages'>
                        <span className='lang' onClick={() => {
                            setCodeType("JS")
                        }}>JavaScript</span>
                        <span className='lang' onClick={() => {
                            setCodeType("C#")
                        }}>C#</span>
                        <span className='lang' onClick={() => {
                            setCodeType("C++")
                        }}>C++</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Java")
                        }}>Java</span>
                        <span className='lang' onClick={() => {
                            setCodeType("React")
                        }}>ReactJS</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Next")
                        }}>NextJS</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Angular")
                        }}>Angular</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Python")
                        }}>Python</span>
                        <span className='lang' onClick={() => {
                            setCodeType("TypeScript")
                        }}>TypeScript</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Rust")
                        }}>Rust</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Svelte")
                        }}>Svelte</span>
                    </div>
                </section>
                <section>
                    {repl}
                </section>
            </div>
            </Box>
            </Box>
        </>
    )
}

export default Practice;
