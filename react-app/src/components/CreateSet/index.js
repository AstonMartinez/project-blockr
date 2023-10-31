import './CreateSet.css'
import IndividualQ from './IndividualQ';
import { useState } from 'react'
import Textarea from '@mui/joy/Textarea';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom'
import * as React from 'react'
import { useDispatch } from 'react-redux';
import { createFlashCardSet } from '../../store/cards';
import NavDrawer from '../NavDrawer';

const CreateSet = () => {
    let cardsArr = [{}]
    const dispatch = useDispatch()
    const history = useHistory()
    const [numCards, setNumCards] = useState(1)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('General')
    const [status, setStatus] = useState('Public')

    for(let i = 1; i < numCards; i++) {
        cardsArr.push({id: i, front: null, back: null})
    }

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
            status: status
        }

        const cardInfo = { cards: resArr }

        dispatch(createFlashCardSet(setInfo))
        .then(async(res) => {
          const response = await fetch(`/api/cards/sets/${res.id}/add`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardInfo)
          })

          if(response.ok) {
            history.push(`/sets/${res.id}`)
          }
        })
    }

    return (
      <Box sx={{ display: 'flex' }}>
        <NavDrawer page={'Flash Cards'} />
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
              <h1>Create a Flashcard Set</h1>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <section id='create-fc-info'>
                  <h2>Set Info</h2>
                  <section id='fc-title-input'>
                    <label htmlFor='title' className='create-fc-set-label'>Title</label>
                    <Input sx={{"width": "300px"}}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </section>
                  <section id='fc-desc-input'>
                    <label className='create-fc-set-label' htmlFor='description'>Description</label>
                    <Textarea sx={{"height": "100px", "width": "300px"}}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </section>
                </section>
                <section id='fc-cat-select'>
                  <label className='create-fc-set-label'>Category</label>
                  <Select defaultValue="General" onChange={(e) => setCategory(e.target.value)} sx={{"width": "300px"}}>
                    <Option value="Angular">Angular</Option>
                    <Option value="CSharp">C#</Option>
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
                <section id='fc-cat-select'>
                  <label className='create-fc-set-label'>Status</label>
                  <Select defaultValue="Public" onChange={(e) => setStatus(e.target.value)} sx={{"width": "300px"}}>
                    <Option value="Public">Public</Option>
                    <Option value="Private">Private</Option>
                  </Select>
                </section>
                <section id='fc-num-select'>
                  <label className='create-fc-set-label' htmlFor='num-cards'>How Many Cards?</label>
                  <input
                    id='num-fc-new'
                    style={{"width": "300px"}}
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={30}
                    value={numCards}
                    onChange={(e) => setNumCards(e.target.value)}
                  />
                </section>
                <section id='fc-cards-inputs'>
                  <h2>Cards</h2>
                  <section id='all-fcs'>
                    <div>
                      {/* <IndividualQ /> */}
                        {cardsArr.map(card => (
                          <>
                            <IndividualQ />
                          </>
                        ))}
                    </div>
                  </section>
                </section>
                <section id='create-fc-submit'>
                  <Button type="submit" size="md" onClick={handleSubmit}>Submit</Button>
                </section>
              </form>
            </div>
          </div>
        </Box>
      </Box>
    )
}

export default CreateSet;
