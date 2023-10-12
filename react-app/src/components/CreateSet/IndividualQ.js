import { useState } from 'react'
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';

const IndividualQ = ({cardId}) => {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    console.log(cardId)
    return (
        <section className='card-questions'>
            <div>
                {/* <h3>Card {cardId}</h3> */}
                <label htmlFor='front'>Front</label>
                {/* <input
                    id='card-q-front'
                    type='text'
                    name='front'
                    value={front}
                    onChange={(e) => setFront(e.target.value)}
                /> */}
                <Textarea sx={{"width": "300px", "height": "100px"}}
                    value={front}
                    onChange={(e) => setFront(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='back'>Back</label>
                <Textarea sx={{"width": "300px", "height": "100px"}}
                    value={back}
                    onChange={(e) => setBack(e.target.value)}
                />
                    {/* <input
                        id='card-q-back'
                        type='text'
                        name='back'
                        value={back}
                        onChange={(e) => setBack(e.target.value)}
                    /> */}
            </div>
        </section>
    )
}

export default IndividualQ;
