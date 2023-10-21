// import './Resources.css'
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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import './Resources.css'

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

const ResourcesComponent = () => {
    const history = useHistory()
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        // <>
      <Box sx={{ display: 'flex', height: "100vh" }}>
        <Box sx={{ display: 'flex', height: "100vh" }}>
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
                Resources
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
            marginTop: "70px"
          }}
        >
        <div id='resource-page-wrapper'>
          <div style={{"display": "flex", "justifyContent": "center"}}>
            <h1>Resources</h1>
          </div>
          <div className='resource-main-content'>
            <div>
              <h2 style={{ "borderBottom": "1px solid gray", "paddingBottom": "10px" }}>Topics</h2>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>General</h4>
              {/* Technical Interviews */}
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Data Structures & Algorithms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                    Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Coding Challenges */}
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Coding Problems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Developer Communities */}
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Developer Communities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* News */}
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>News</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Libraries & Frameworks</h4>
              {/* Angular */}
              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Angular</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* React */}
              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>React</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Svelte */}
              <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7bh-content"
                  id="panel7bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Svelte</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* NextJS */}
              <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel8bh-content"
                  id="panel8bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>NextJS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Flask */}
              <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel9bh-content"
                  id="panel9bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Flask</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Express */}
              <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel10bh-content"
                  id="panel10bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Express.js</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Bootstrap */}
              <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel11bh-content"
                  id="panel11bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Bootstrap</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* MaterialUI */}
              <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel12bh-content"
                  id="panel12bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>MaterialUI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tailwind CSS */}
              <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel13bh-content"
                  id="panel13bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tailwind CSS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Databases, ORMs, and RDMS</h4>
              {/* SQL */}
              <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel14bh-content"
                  id="panel14bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>SQL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Sequelize */}
              <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel15bh-content"
                  id="panel15bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Sequelize</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* SQLAlchemy */}
              <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel16bh-content"
                  id="panel16bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>SQLAlchemy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* PostgreSQL */}
              <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel17bh-content"
                  id="panel17bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>PostgreSQL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* MongoDB */}
              <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel18bh-content"
                  id="panel18bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>MongoDB</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* NoSQL */}
              <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel19bh-content"
                  id="panel19bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>NoSQL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Containerization</h4>
              {/* Docker */}
              <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel20bh-content"
                  id="panel20bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Docker</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Kubernetes */}
              <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel21bh-content"
                  id="panel21bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Svelte</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='resource-main-content'>
            <h3>Specialties</h3>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Machine Learning</h4>
                {/* Services & Tools */}
                <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel22bh-content"
                  id="panel22bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Services & Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Courses */}
                <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel23bh-content"
                  id="panel23bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Tutorials */}
                <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel24bh-content"
                  id="panel24bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Documentation */}
                <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel25bh-content"
                  id="panel25bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Front-End Development</h4>
                {/* Services & Tools */}
                <Accordion expanded={expanded === 'panel26'} onChange={handleChange('panel26')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel26bh-content"
                  id="panel26bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Services & Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Courses */}
                <Accordion expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel27bh-content"
                  id="panel27bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Tutorials */}
                <Accordion expanded={expanded === 'panel28'} onChange={handleChange('panel28')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel28bh-content"
                  id="panel28bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Documentation */}
                <Accordion expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel29bh-content"
                  id="panel29bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Svelte</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Back-End Development</h4>
                {/* Services & Tools */}
                <Accordion expanded={expanded === 'panel30'} onChange={handleChange('panel30')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel30bh-content"
                  id="panel30bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Services & Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Courses */}
                <Accordion expanded={expanded === 'panel31'} onChange={handleChange('panel31')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel31bh-content"
                  id="panel31bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Tutorials */}
                <Accordion expanded={expanded === 'panel32'} onChange={handleChange('panel32')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel32bh-content"
                  id="panel32bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Documentation */}
                <Accordion expanded={expanded === 'panel33'} onChange={handleChange('panel33')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel33bh-content"
                  id="panel33bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Game Development</h4>
                {/* Services & Tools */}
                <Accordion expanded={expanded === 'panel34'} onChange={handleChange('panel34')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel34bh-content"
                  id="panel34bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Services & Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Courses */}
                <Accordion expanded={expanded === 'panel35'} onChange={handleChange('panel35')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel35bh-content"
                  id="panel35bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Tutorials */}
                <Accordion expanded={expanded === 'panel36'} onChange={handleChange('panel36')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel36bh-content"
                  id="panel36bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Documentation */}
                <Accordion expanded={expanded === 'panel37'} onChange={handleChange('panel37')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel37bh-content"
                  id="panel37bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='resource-main-content'>
            <h3>Languages</h3>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>C#</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel38'} onChange={handleChange('panel38')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel38bh-content"
                  id="panel38bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel39'} onChange={handleChange('panel39')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel39bh-content"
                  id="panel39bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel40'} onChange={handleChange('panel40')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel40bh-content"
                  id="panel40bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Continue Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>C++</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel41'} onChange={handleChange('panel41')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel41bh-content"
                  id="panel41bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel42'} onChange={handleChange('panel42')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel42bh-content"
                  id="panel42bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel43'} onChange={handleChange('panel43')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel43bh-content"
                  id="panel43bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>CSS</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel44'} onChange={handleChange('panel44')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel44bh-content"
                  id="panel44bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel45'} onChange={handleChange('panel45')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel45bh-content"
                  id="panel45bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel46'} onChange={handleChange('panel46')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel46bh-content"
                  id="panel46bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Continue Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>HTML</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel47'} onChange={handleChange('panel47')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel47bh-content"
                  id="panel47bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel48'} onChange={handleChange('panel48')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel48bh-content"
                  id="panel48bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel49'} onChange={handleChange('panel49')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel49bh-content"
                  id="panel49bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Continue Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>JavaScript</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel50'} onChange={handleChange('panel50')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel50bh-content"
                  id="panel50bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel51'} onChange={handleChange('panel51')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel51bh-content"
                  id="panel51bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel52'} onChange={handleChange('panel52')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel52bh-content"
                  id="panel52bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Continue Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Java</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel53'} onChange={handleChange('panel53')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel53bh-content"
                  id="panel53bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel54'} onChange={handleChange('panel54')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel54bh-content"
                  id="panel54bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel55'} onChange={handleChange('panel55')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel55bh-content"
                  id="panel55bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Continue Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Python</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel56'} onChange={handleChange('panel56')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel56bh-content"
                  id="panel56bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel57'} onChange={handleChange('panel57')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel57bh-content"
                  id="panel57bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel58'} onChange={handleChange('panel58')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel58bh-content"
                  id="panel58bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Continue Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Rust</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel59'} onChange={handleChange('panel59')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel59bh-content"
                  id="panel59bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel60'} onChange={handleChange('panel60')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel60bh-content"
                  id="panel60bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel61'} onChange={handleChange('panel61')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel61bh-content"
                  id="panel61bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Continue Learning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>TypeScript</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel62'} onChange={handleChange('panel62')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel62bh-content"
                  id="panel62bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel63'} onChange={handleChange('panel63')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel63bh-content"
                  id="panel63bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel64'} onChange={handleChange('panel64')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel64bh-content"
                  id="panel64bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default ResourcesComponent;
