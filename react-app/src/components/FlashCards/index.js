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
      dispatch(fetchSetByCategory("TypeScript"))
      return
  } else if (filter === "SQL Sets") {
      dispatch(fetchSetByCategory("SQL"))
      return
  }
  return
}

const allSets = useSelector(state => state.cards.allSets)
const setsArr = Object.values(allSets)

useEffect(() => {
  if(filter === "All Sets") {
    dispatch(fetchAvailableSets())

} else if (filter === "All Public") {
    dispatch(getCardSets())

} else if (filter === "My Sets") {
    dispatch(fetchUserSets())

} else if (filter === "General Knowledge Sets") {
    dispatch(fetchSetByCategory("General"))

} else if (filter === "Angular Sets") {
    dispatch(fetchSetByCategory("Angular"))

} else if (filter === "C# Sets") {
    dispatch(fetchSetByCategory("CSharp"))

} else if (filter === "C++ Sets") {
    dispatch(fetchSetByCategory("C++"))

} else if (filter === "JavaScript Sets") {
    dispatch(fetchSetByCategory("JavaScript"))

} else if (filter === "Java Sets") {
    dispatch(fetchSetByCategory("Java"))

} else if (filter === "Next.js Sets") {
    dispatch(fetchSetByCategory("Next.js"))

} else if (filter === "Python Sets") {
    dispatch(fetchSetByCategory("Python"))

} else if (filter === "React Sets") {
    dispatch(fetchSetByCategory("React"))

} else if (filter === "Rust Sets") {
    dispatch(fetchSetByCategory("Rust"))

} else if (filter === "Svelte Sets") {
    dispatch(fetchSetByCategory("Svelte"))

} else if (filter === "TypeScript Sets") {
    dispatch(fetchSetByCategory("TypeScript"))
} else if (filter === "SQL") {
  dispatch(fetchSetByCategory("SQL"))
}

}, [dispatch])


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
                  <option value="All Sets">All Sets</option>
                  <option value="All Public">All Public</option>
                  <option value="My Sets">My Sets</option>
                </optgroup>
                <optgroup label="By Topic">
                  <option value="General Knowledge Sets">General Knowledge Sets</option>
                  <option value="Angular Sets">Angular Sets</option>
                  <option value="C# Sets">C# Sets</option>
                  <option value="C++ Sets">C++ Sets</option>
                  <option value="JavaScript Sets">JavaScript Sets</option>
                  <option value="Java Sets">Java Sets</option>
                  <option value="Next.js Sets">Next.js Sets</option>
                  <option value="Python Sets">Python Sets</option>
                  <option value="React Sets">React Sets</option>
                  <option value="Rust Sets">Rust Sets</option>
                  <option value="Svelte Sets">Svelte Sets</option>
                  <option value="TypeScript Sets">TypeScript Sets</option>
                  <option value="SQL Sets">SQL Sets</option>
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
