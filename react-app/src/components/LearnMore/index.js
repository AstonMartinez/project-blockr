import './LearnMore.css'
import TopBar from '../LandingPage/TopBar';
import Footer from '../Footer';

const LearnMore = () => {
    return (
        <>
            <TopBar />
            <div id='learn-more-wrapper'>
                <div id='topbar'></div>
                <section>
                    <h1>So What Can You Do On Project Blockr?</h1>
                </section>
                <section style={{"display": 'flex', 'flexDirection': 'column', alignItems: 'center'}}>
                    <h3>User Dashboard</h3>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img id='lm-img-1' src="https://i.ibb.co/1Gz4KQT/Screenshot-2023-10-31-at-6-06-20-PM.png" alt="Screenshot-2023-10-31-at-6-06-20-PM" border="0" />
                            </div>
                            <div>
                                <h4>Intuitive Navigation</h4>
                                <p>Info about navigation...</p>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>
                                <h4>Task Overview</h4>
                                <p>Info about task overview...</p>
                            </div>
                            <div>
                                <img id='lm-img-2' src="https://i.ibb.co/hsqrLLC/Screenshot-2023-10-31-at-6-06-49-PM.png" alt="Screenshot-2023-10-31-at-6-06-49-PM" border="0" />
                                <img id='lm-img-3' src="https://i.ibb.co/KK5cSbP/Screenshot-2023-10-31-at-6-06-58-PM.png" alt="Screenshot-2023-10-31-at-6-06-58-PM" border="0" />
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img id='lm-img-4' src="https://i.ibb.co/syxNL3J/Screenshot-2023-10-31-at-6-07-23-PM.png" alt="Screenshot-2023-10-31-at-6-07-23-PM" border="0" />
                            </div>
                            <div>
                                <h4>Study Sessions Overview</h4>
                                <p>Info about study sessions overview...</p>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>
                                <h4>Study Materials Overview</h4>
                                <p>Info about study materials overview...</p>
                            </div>
                            <div>
                                <img id='lm-img-5' src="https://i.ibb.co/hBKX4gX/Screenshot-2023-10-31-at-6-07-37-PM.png" alt="Screenshot-2023-10-31-at-6-07-37-PM" border="0" />
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section>
                    <h3>Schedule</h3>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img id='lm-img-6' src="https://i.ibb.co/w6Krntd/Screenshot-2023-10-31-at-6-08-57-PM.png" alt="Screenshot-2023-10-31-at-6-08-57-PM" border="0" />
                            </div>
                            <div>
                                <h4>Customizable Timeline View of Daily Tasks</h4>
                                <p>Info about timeline view...</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section>
                    <h3>Trivia</h3>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <h4>Create & Take Quizzes</h4>
                                <p>Info about quizzes...</p>
                            </div>
                            <div>
                                <img id='lm-img-7' src="https://i.ibb.co/BKk12Wd/Screenshot-2023-10-31-at-6-07-51-PM.png" alt="Screenshot-2023-10-31-at-6-07-51-PM" border="0" />
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section>
                    <h3>Flash Cards</h3>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img id='lm-img-8' src="https://i.ibb.co/cFbXJ3S/Screenshot-2023-10-31-at-6-08-46-PM.png" alt="Screenshot-2023-10-31-at-6-08-46-PM" border="0" />
                            </div>
                            <div>
                                <h4>Create & Study Flash Cards</h4>
                                <p>Info about flash cards...</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section>
                    <h3>Practice</h3>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <h4>Practice Coding In Your Browser</h4>
                                <p>Info about practice...</p>
                            </div>
                            <div>
                                <img id='lm-img-9' src="https://i.ibb.co/YdZk91p/Screenshot-2023-10-31-at-6-08-02-PM.png" alt="Screenshot-2023-10-31-at-6-08-02-PM" border="0" />
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section>
                    <h3>Resources</h3>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img id='lm-img-10' src="https://i.ibb.co/r3Vh7Pk/Screenshot-2023-10-31-at-6-08-36-PM.png" alt="Screenshot-2023-10-31-at-6-08-36-PM" border="0" />
                            </div>
                            <div>
                                <h4>Hundreds of Comprehensive Resources</h4>
                                <p>Info about resources...</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section>
                    <h3>News</h3>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <h4>Programming News Articles</h4>
                                <p>Info about news...</p>
                            </div>
                            <div>
                                <img id='lm-img-11' src="https://i.ibb.co/xJhkL9b/Screenshot-2023-10-31-at-6-08-25-PM.png" alt="Screenshot-2023-10-31-at-6-08-25-PM" border="0" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <Footer />
            </section>
        </>
    )
}

export default LearnMore;
