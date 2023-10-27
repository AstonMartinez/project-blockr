import './FlashCards.css'
import Card from '@mui/material/Card'
import * as React from 'react'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCardSets } from '../../store/cards';
import CreateIcon from '@mui/icons-material/Create';
import NavDrawer from '../NavDrawer';

const FlashCards = () => {
  const dispatch = useDispatch()
  const allSets = useSelector(state => state.cards.allSets)

  useEffect(() => {
    dispatch(getCardSets()).then(() => {
      console.log(allSets)
    })

  }, [dispatch, allSets])

  const setsArr = Object.values(allSets)

  return (
      <Box sx={{ display: 'flex'}}>
        <NavDrawer page={'Flash Cards'} />
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
      <div style={{"marginTop": "70px"}} id='flash-card-page-wrapper'>
            <div id='fc-header'>
                <h1>Flash Cards</h1>
            </div>
            <div>
              <NavLink exact to='/sets/new'>
                <Button variant="contained" size="medium">
                  <CreateIcon sx={{"marginRight": "5px"}} />Create Set
                </Button>
              </NavLink>
            </div>
            <section id='fc-options-holder'>
              {setsArr.length && setsArr.map(set => (
                <Card className='fc-set-wrapper' variant="outlined">
                  <CardContent>
                    <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.secondary" gutterBottom>
                      {set.title}
                    </Typography>
                    <Typography sx={{ fontSize: 13, textAlign: 'center' }} color="text.secondary" gutterBottom>
                      {set.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <NavLink exact to={`/sets/${set.id}`}>
                      <Button size="small">Practice</Button>
                    </NavLink>
                  </CardActions>
                </Card>
              ))}
            </section>
        </div>
      </Box>
      </Box>
    )
}

export default FlashCards;
