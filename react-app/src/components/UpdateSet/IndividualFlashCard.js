import { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSet } from '../../store/cards';
import { fetchSingleCard } from '../../store/indivCard';

const IndividualFlashCard = ({ setId, cardId, cardData }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleCard(cardId))
    }, [dispatch])

    const cardInfo = useSelector(state => state.indivCards.allFlashCards)[cardId]

    const startingFront = cardInfo?.front
    const startingBack = cardInfo?.back

    const [front, setFront] = useState(startingFront)
    const [back, setBack] = useState(startingBack)
    const [isEditing, setIsEditing] = useState(false)

    const deleteCard = async() => {
        const response = await fetch(`/api/flashCards/${cardId}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const data = await response.json()
            await dispatch(getOneSet(setId))
            return data
        }
    }

    const updateCard = async () => {
        const updatedCard = {
            front: front,
            back: back
        }

        const response = await fetch(`/api/flashCards/${cardId}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCard)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(getOneSet(setId))
            setIsEditing(false)
            return data
        }
    }

    return (
        <section className='card-questions'>
            <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                <label htmlFor='front'>Front</label>
                <textarea
                    id='card-update-q-front'
                    className='new-fc-textarea'
                    placeholder='Enter front of flash card here...'
                    name='front'
                    value={front}
                    onChange={(e) => setFront(e.target.value)}
                    disabled={isEditing ? false : true}
                />
            </div>
            <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                <label htmlFor='back'>Back</label>
                <textarea
                    id='card-update-q-back'
                    className='new-fc-textarea'
                    placeholder='Enter back of flash card here...'
                    name='back'
                    value={back}
                    onChange={(e) => setBack(e.target.value)}
                    disabled={isEditing ? false : true}
                />
            </div>
            <div>
                <Button variant='contained' onClick={deleteCard}>Delete Card</Button>
                {isEditing === false && (
                    <Button variant='contained' onClick={() => setIsEditing(true)}>Edit Card</Button>
                )}
                {isEditing && (
                    <Button variant='contained' onClick={updateCard}>Save Edits</Button>
                )}
            </div>
        </section>
    )

}

export default IndividualFlashCard;
