// import './LandingPage.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './TopBar.css'

const LandingPage = () => {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    // if(sessionUser) {
    //     history.push('/dashboard')
    // }

    let landingPageContent

    return (
        <>
            <div id='topbar'></div>
            <div style={{ "backgroundColor": "black", "height": "100vh", "paddingTop": "20px", "display": "flex", "alignItems": "center", "flexDirection": "column" }}>
                <div>
                    <h1 style={{ "color": "white", "fontFamily": "Roboto Condensed, sans-serif" }}>Welcome to ProjectBlockr!</h1>
                </div>
                <section>
                    <img src="https://i.ibb.co/0BKnXzX/projectblockrlogo.png" alt="projectblockrlogo" style={{"border": "0"}} />
                </section>
            </div>
        </>
    )
}

export default LandingPage;
