import { useState } from 'react'

const IndividualQ = () => {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    return (
        <section className='card-questions'>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
                <label htmlFor='front'>Front</label>
                <textarea
                    id='card-q-front'
                    className='new-fc-textarea'
                    placeholder='Enter front of flash card here...'
                    name='front'
                    value={front}
                    onChange={(e) => setFront(e.target.value)}
                    required
                />
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
                <label htmlFor='back'>Back</label>
                <textarea
                    id='card-q-back'
                    className='new-fc-textarea'
                    placeholder='Enter back of flash card here...'
                    name='back'
                    value={back}
                    onChange={(e) => setBack(e.target.value)}
                    required
                />
            </div>
        </section>
    )
}

export default IndividualQ;
