import './LandingPage.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    let landingPageContent

    if(sessionUser) {
        landingPageContent = (
            <div>
                <div>
                    <button>My Dashboard</button>
                </div>
                <div>
                    <button>Trivia</button>
                </div>
                <div>
                    <h2>My Study Stats</h2>
                    <div></div>
                </div>
            </div>
        )
    } else {
        landingPageContent = (
            <div>
                <div>
                    <button onClick={() => history.push('/login')}>Log In</button>
                </div>
                <div>
                    <button onClick={() => history.push('/signup')}>Sign Up</button>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div>
                <h1>Welcome to ProjectBlockr!</h1>
            </div>
            <section>
                {landingPageContent}
            </section>
        </div>
    )
}

export default LandingPage;
