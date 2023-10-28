import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom'
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar'
import { getByDate } from '../../store/tasks';
import TaskDisplay from './Tasks';
import NavDrawer from '../NavDrawer';
import MaterialsDisplay from './Materials';


const dayConvert = (day) => {
  if(day === 'Mon') {
    return 'Monday'
  } else if(day === 'Tue') {
    return 'Tuesday'
  } else if(day === 'Wed') {
    return 'Wednesday'
  } else if(day === 'Thu') {
    return 'Thursday'
  } else if(day === 'Fri') {
    return 'Friday'
  } else if(day === 'Sat') {
    return 'Saturday'
  } else if(day === 'Sun') {
    return 'Sunday'
  }
}

const defaultTheme = createTheme();

export default function UserDashboard() {
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user)

  if(!sessionUser) {
    history.push('/login')
  }

  const currentDay = new Date().toDateString().split(" ")[0]
  const dayOfWeek = dayConvert(currentDay)

    React.useEffect(() => {
      dispatch(getByDate(dayOfWeek))
    }, [dispatch, dayOfWeek])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <NavDrawer page={'Dashboard'} />
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    height: 240,
                  }}
                >
                  <Avatar style={{"backgroundColor": "purple", "height": "200px", "width": "200px", "margin": "0 auto", "fontSize": "45px"}}>{sessionUser?.firstName[0]}{sessionUser?.lastName[0]}</Avatar>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                      <div style={{ "width": "48%", "height": "28vh", "maxHeight": "200px" }}>
                        <div>
                          <h5>Name: </h5>
                          <p>{sessionUser?.firstName} {sessionUser?.lastName}</p>
                        </div>
                        <div>
                          <h5>Email: </h5>
                          <p>{sessionUser?.email}</p>
                        </div>
                      </div>
                      <div style={{ "height": "98%", "borderLeft": "1px solid lightgray" }}></div>
                      <div style={{ "width": "48%", "height": "28vh", "maxHeight": "200px", "overflow": "auto" }}>
                        <h5>About Me:</h5>
                        <p style={{ "fontSize": "14px" }}>{sessionUser?.bio}</p>
                      </div>
                    </div>
                  </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TaskDisplay />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', "textAlign": "center" }}>
                  <MaterialsDisplay />
                </Paper>
              </Grid>
            </Grid>
            <Footer sx={{marginTop: "20px"}} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
