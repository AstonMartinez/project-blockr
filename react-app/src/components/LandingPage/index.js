// import './LandingPage.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TopBar from './TopBar';
import Button from '@mui/material/Button';
import './TopBar.css'

const LandingPage = () => {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    if(sessionUser) {
        history.push('/dashboard')
    }

    return (
        <div id='landing-page-wrapper'>
            <TopBar />
            <div id='topbar'></div>
            <div id='landing-page-outer'>
                <div id='landing-page-welcome' style={{ "marginBottom": "0" }}>
                    <h1 id='lp-header-h1' style={{ "marginBottom": "0" }}>Welcome to Project Blockr!</h1>
                </div>
                <section id='lp-logo-holder'>
                    <img src="https://i.ibb.co/0BKnXzX/projectblockrlogo.png" alt="projectblockrlogo" style={{"border": "0"}} />
                </section>
                <section>
                    <div className='lp-text-holder lp-p-and-span'>
                        <h2>Welcome to Project Blockr, your ultimate learning and productivity companion on your coding journey! <span>&#128640;</span></h2>
                    </div>
                    <div className='lp-text-holder'>
                        <p>Are you eager to dive into the exciting world of coding but often find yourself overwhelmed by the endless stream of information and distractions? Look no further. Project Blockr is here to help you conquer the coding universe one block at a time. Our powerful platform empowers aspiring coders, beginners, and even seasoned programmers to unlock their full potential.</p>
                        <p>Project Blockr also equips you with powerful productivity tools to help you stay focused and organized. Say goodbye to procrastination, and hello to a new level of productivity. We understand that the coding journey can be tough, and that's why we're here to provide the guidance and support you need.</p>
                        <p>Ready to supercharge your coding skills while staying on top of your game? Join Project Blockr today and embark on a learning adventure like never before. Don't just dream about becoming a coding wizard – make it happen with Project Blockr. Let's start coding and building a brighter future together.</p>
                    </div>
                    <div className='lp-text-holder lp-p-and-span'>
                        <h4>Unlock your potential and join us on this incredible coding adventure today! <span>&#128421; &#128218; &#128074;</span></h4>
                    </div>
                </section>
                <section>
                    <Button variant='contained' onClick={() => {
                            history.push('/signup')
                        }}>Get Started</Button>
                </section>
            </div>
        </div>
    )
}

export default LandingPage;
