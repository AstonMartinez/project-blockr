import './UpdateSet.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useHistory, useParams } from 'react-router-dom';
import * as React from 'react';
import { useState } from 'react';
import IndividualFlashCard from './IndividualFlashCard';
import { useDispatch, useSelector } from 'react-redux';
import NavDrawer from '../NavDrawer';
import { fetchQuizInfoOnly } from '../../store/cards';
import { fetchFullSet } from '../../store/indivCard';
import { updateUserSet } from '../../store/cards';
import IndividualQ from '../CreateSet/IndividualQ';
import LoadingScreen from '../LoadingScreen';
import CreateIcon from '@mui/icons-material/Create';

const UpdateSet = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { setId } = useParams()
    const [toggleRender, setToggleRender] = useState(false)
    const [editingSetInfo, setEditingSetInfo] = useState(false)

    React.useEffect(() => {
        dispatch(fetchQuizInfoOnly(setId)).then(() => {
            dispatch(fetchFullSet(setId))
        }).then(() => {
            setTimeout(() => {
                setToggleRender(true)
            }, 3000)
        })
    }, [dispatch])

    const setData = useSelector(state => state.cards.singleSet)
    const setCards = useSelector(state => state.indivCards.allFlashCards)

    const questionsArr = Object.values(setCards)
    const cardArr = []

    const [numCards, setNumCards] = useState(0)
    const [title, setTitle] = useState(setData.title)
    const [description, setDescription] = useState(setData.description)
    const [category, setCategory] = useState(setData.category)
    const [status, setStatus] = useState(setData.status)
    const [submitError, setSubmitError] = React.useState('')

    const initialTitle = setData.title

    for(let i = 0; i < numCards; i++) {
        cardArr.push({id: i, front: null, back: null})
    }

    const handleChangeSetInfo = async () => {
        const setInfo = {
            title: title,
            description: description,
            category: category,
            status: status
        }

        dispatch(updateUserSet(setId, setInfo))
    }

    const handleAddCards = async () => {
        const cardFronts = document.querySelectorAll('#card-q-front')
        const cardBacks = document.querySelectorAll('#card-q-back')
        const resArr = []

        if(cardFronts.length > 0) {
            for(let i = 0; i < cardFronts.length; i++) {
                resArr.push({
                    front: cardFronts[i].value,
                    back: cardBacks[i].value
                })
            }

            const cardInfo = { cards: resArr }

            const response = await fetch(`/api/cards/sets/${setId}/add`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardInfo)
            })
        }
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
                }}
            >
                {toggleRender === false && (
                    <LoadingScreen />
                )}
                <div id='update-set-wrapper'>
                    <div>
                        <h1>Update Set</h1>
                    </div>
                    <div>
                        <div>
                            <section id='update-set-info'>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <h2>Set Info</h2> <CreateIcon sx={{marginLeft: '5px'}} onClick={() => setEditingSetInfo(true)} />
                                </div>
                                <section id='update-set-sec-1'>
                                    <div>
                                        <label htmlFor='title' id='set-title-label'>Title</label><span style={{ "color": "red" }}>*</span>
                                    </div>
                                    {!editingSetInfo && (
                                        <p>{setData.title}</p>
                                    )}
                                    {editingSetInfo && (
                                        <input
                                            id='quiz-title-input'
                                            style={{ 'width': '300px', 'marginBottom': '10px' }}
                                            defaultValue={initialTitle}
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    )}
                                </section>
                                <section>
                                    <div style={{textAlign: 'center'}}>
                                        <label htmlFor='description' id='set-desc-label'>Description</label><span style={{ "color": "red" }}>*</span>
                                    </div>
                                    {!editingSetInfo && (
                                        <p>{setData.description}</p>
                                    )}
                                    {editingSetInfo && (
                                        <textarea id='quiz-desc-input'
                                            value={description}
                                            defaultValue={setData?.description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        />
                                    )}
                                </section>
                            </section>
                            <section id='quiz-cat-select' style={{marginTop: '10px'}}>
                                <label id='set-cat-label'>Category</label>
                                {!editingSetInfo && (
                                    <p>{setData.category}</p>
                                )}
                                {editingSetInfo && (
                                    <select
                                        className='update-quiz-select-field'
                                        defaultValue={setData?.category}
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="Angular">Angular</option>
                                        <option value="CSharp">C#</option>
                                        <option value="C++">C++</option>
                                        <option value="General">General</option>
                                        <option value="Java">Java</option>
                                        <option value="JavaScript">JavaScript</option>
                                        <option value="NextJS">NextJS</option>
                                        <option value="Python">Python</option>
                                        <option value="React">React</option>
                                        <option value="Rust">Rust</option>
                                        <option value="Svelte">Svelte</option>
                                        <option value="TypeScript">TypeScript</option>
                                        <option value="SQL">SQL</option>
                                        <option value="Other">Other</option>
                                    </select>
                                )}
                            </section>
                            <section id='set-cat-select' style={{marginTop: '10px'}}>
                                <label className='set-update-stat-label'>Status</label>
                                {!editingSetInfo && (
                                    <p>{setData.status}</p>
                                )}
                                {editingSetInfo && (
                                    <select
                                        className='update-quiz-select-field'
                                        value={status}
                                        defaultValue={setData?.status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                    </select>
                                )}
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-around', width: '250px', margin: '15px auto'}}>
                                {editingSetInfo && (
                                    <>
                                        <Button variant="contained" onClick={handleChangeSetInfo}>Save Changes</Button>
                                        <Button variant="contained" onClick={() => setEditingSetInfo(false)}>Cancel</Button>
                                    </>
                                )}
                            </section>
                            <section id='set-qs-inputs'>
                                <h2 style={{ textAlign: 'center' }}>Current Cards</h2>
                                <section id='all-cards'>
                                    <div style={{paddingLeft: '30px'}}>
                                        {questionsArr.length > 0 && questionsArr.map(card => (
                                            <>
                                                <IndividualFlashCard setId={card.set_id} cardId={card.id} questionData={card} />
                                            </>
                                        ))}
                                    </div>
                                </section>
                            </section>
                            <section>
                                <h2 style={{ textAlign: 'center' }}>Add Cards</h2>
                                <section id='update-add-quiz-qs'>
                                    <label htmlFor='num-cards' id='fc-hw-mny-label'>How Many Cards?</label>
                                    <input
                                        id='quiz-num-qs-input'
                                        type='number'
                                        defaultValue={0}
                                        min={0}
                                        max={20}
                                        value={numCards}
                                        onChange={(e) => setNumCards(e.target.value)}
                                    />
                                </section>
                                <section>
                                    <div style={{paddingLeft: '30px'}}>
                                        {cardArr.map(card => (
                                            <>
                                                <IndividualQ />
                                            </>
                                        ))}
                                    </div>
                                    <div id='update-quiz-submit'>
                                        {numCards > 0 && (
                                            <Button variant="contained" onClick={handleAddCards}>Save New Cards</Button>
                                        )}
                                    </div>
                                </section>
                            </section>
                            <section>
                                {submitError && (<p style={{ 'color': 'red' }}>{submitError}</p>)}
                            </section>
                            <section id='update-quiz-submit'>
                                <Button variant="contained" onClick={() => {
                                    history.push(`/flashcards`)
                                }}>Done Editing</Button>
                            </section>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default UpdateSet;
