import './FlashCards.css'
import Card from '@mui/material/Card'
import * as React from 'react'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink, useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCardSets, fetchAvailableSets, fetchUserSets, fetchSetByCategory } from '../../store/cards';
import CreateIcon from '@mui/icons-material/Create';
import NavDrawer from '../NavDrawer';
import Select from '@mui/material/Select';
import SetCard from './SetCard';

const FlashCards = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const allSets = useSelector(state => state.cards.allSets)

  const [filter, setFilter] = React.useState('All Public')

  const handleChange = (filter) => {
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
  return
}

  useEffect(() => {
    dispatch(getCardSets())
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
            <div style={{ 'margin': '30px 0px', backgroundColor: 'white' }}>
              <Select
                native
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value)
                  handleChange(e.target.value)
                }}
              >
                <optgroup label="By Visibility">
                  <option value="All Quizzes">All Sets</option>
                  <option value="All Public">All Public</option>
                  <option value="My Quizzes">My Sets</option>
                </optgroup>
                <optgroup label="By Topic">
                  <option value="General Knowledge Quizzes">General Knowledge Sets</option>
                  <option value="Angular Quizzes">Angular Sets</option>
                  <option value="C# Quizzes">C# Sets</option>
                  <option value="C++ Quizzes">C++ Sets</option>
                  <option value="JavaScript Quizzes">JavaScript Sets</option>
                  <option value="Java Quizzes">Java Sets</option>
                  <option value="Next.js Quizzes">Next.js Sets</option>
                  <option value="Python Quizzes">Python Sets</option>
                  <option value="React Quizzes">React Sets</option>
                  <option value="Rust Quizzes">Rust Sets</option>
                  <option value="Svelte Quizzes">Svelte Sets</option>
                  <option value="TypeScript Quizzes">TypeScript Sets</option>
                  <option value="SQL Quizzes">SQL Sets</option>
                </optgroup>
              </Select>
            </div>
            <section id='fc-options-holder'>
              <div id='quiz-options-holder'>
                {setsArr.length && setsArr.map(set => (
                  <SetCard set={set} filter={filter} />
                ))}
              </div>
            </section>
        </div>
      </Box>
      </Box>
    )
}

export default FlashCards;
