import './LearnMore.css'
import TopBar from '../LandingPage/TopBar';
import Footer from '../Footer';

const LearnMore = () => {

    return (
        <>
            <TopBar />
            <div id='learn-more-wrapper'>
                <div id='topbar'></div>
                <section id='lm-header-holder' style={{textAlign: 'center'}}>
                    <h1 id='lm-header'>So What Can You Do On Project Blockr?</h1>
                </section>
                <section style={{"display": 'flex', 'flexDirection': 'column', alignItems: 'center'}}>
                    <div style={{textAlign: 'center'}}>
                        <h2>User Dashboard</h2>
                    </div>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around', marginBottom: '20px'}}>
                        <div className='lm-ud-sect sect-switch-1' style={{marginBottom: '40px'}}>
                            <div className='lm-row-half lm-row-img-left'>
                                <img id='lm-img-1' src="https://i.ibb.co/1Gz4KQT/Screenshot-2023-10-31-at-6-06-20-PM.png" alt="Screenshot-2023-10-31-at-6-06-20-PM" border="0" />
                            </div>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Intuitive Navigation</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>Our website boasts an intuitive navigation menu, meticulously designed
                                        to simplify your experience. Whether you're starting your day or
                                        embarking on a learning adventure, the menu offers seamless access to
                                        your user dashboard, where you can keep track of your progress and goals.
                                        Organize your day with the schedule feature, challenge your mind with
                                        practice quizzes, or reinforce your knowledge with flash cards.
                                        Dive into a wealth of carefully curated resources to aid your learning
                                        journey, and stay updated with the latest industry news. With this menu,
                                        we've created a user-friendly roadmap for your success, putting everything
                                        you need at your fingertips.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='lm-ud-sect sect-switch-2'>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Task Overview</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        In our user dashboard, we've introduced a powerful "Task Overview" feature that
                                        empowers you to manage your day with precision. Whether you prefer a quick glance
                                        at your tasks in a table format or a visual representation through a timeline,
                                        this feature provides you with the flexibility to choose how you want to organize
                                        your day. Your to-do list, your way – it's all about making your schedule management
                                        effortless and efficient. Stay in control, stay on track, and make the most of your
                                        valuable time with this customizable tool.
                                    </p>
                                </div>
                            </div>
                            <div className='lm-row-half lm-row-img-right' id='lm-double-img-holder'>
                                <img id='lm-img-2' src="https://i.ibb.co/YTRDpMx/Screenshot-2023-10-31-at-9-09-20-PM.png" alt="Screenshot-2023-10-31-at-9-09-20-PM" border="0" />
                                <img id='lm-img-3' src="https://i.ibb.co/x5zFsmG/Screenshot-2023-10-31-at-9-06-50-PM.png" alt="Screenshot-2023-10-31-at-9-06-50-PM" border="0" />
                            </div>
                        </div>
                        <div className='lm-ud-sect sect-switch-1'>
                            <div className='lm-row-half lm-row-img-left'>
                                <img id='lm-img-4' src="https://i.ibb.co/fNzW7JX/Screenshot-2023-10-31-at-9-04-50-PM.png" alt="Screenshot-2023-10-31-at-9-04-50-PM" border="0" />
                            </div>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Study Sessions Overview</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        Our user dashboard offers a powerful "Recent Study Sessions" feature, providing you with
                                        insightful snapshots of your learning journey. With this tool, you can easily track and
                                        analyze your most recent study sessions, including the number of correct answers, the
                                        ones you got wrong, session duration, the study category, and the date and time of each
                                        session. It's not just about studying; it's about understanding your progress, identifying
                                        your strengths, and areas that need improvement. With this feature, your learning experience
                                        is more transparent, allowing you to fine-tune your approach and enhance your knowledge
                                        effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='lm-ud-sect sect-switch-2'>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Study Materials Overview</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        For a personalized and streamlined learning experience, our user dashboard includes the "My Study Materials"
                                        feature, a handy tool that keeps your custom content within reach. This feature provides you with an organized
                                        list of quizzes and flashcards you've personally crafted, putting your unique study materials just a click away.
                                        Whether you're reviewing for an exam or reinforcing key concepts, having your own study resources at your
                                        fingertips ensures that your learning journey is both efficient and tailored to your needs. With this feature,
                                        you have the power to take control of your educational path and make the most of your study time.
                                    </p>
                                </div>
                            </div>
                            <div className='lm-row-half lm-row-img-right'>
                                <img id='lm-img-5' src="https://i.ibb.co/hBKX4gX/Screenshot-2023-10-31-at-6-07-37-PM.png" alt="Screenshot-2023-10-31-at-6-07-37-PM" border="0" />
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section id='lm-sect-sched'>
                    <div style={{textAlign: 'center'}}>
                        <h2>Schedule</h2>
                    </div>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div className='lm-ud-sect sched-sect sect-switch-1' style={{display: 'flex'}}>
                            <div className='lm-row-half lm-row-img-left' id='lm-sched'>
                                <img id='lm-img-6' src="https://i.ibb.co/w6Krntd/Screenshot-2023-10-31-at-6-08-57-PM.png" alt="Screenshot-2023-10-31-at-6-08-57-PM" border="0" />
                            </div>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Customizable Timeline View of Daily Tasks</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        Our "Schedule" page is your daily companion, providing a clear and dynamic timeline view of your tasks. It's not
                                        just about organization; it's about empowerment. With this feature, you have the flexibility to effortlessly add,
                                        edit, or remove tasks from your schedule, ensuring that your day aligns perfectly with your goals. Stay in charge
                                        of your time, make adjustments as needed, and keep your daily to-dos in one convenient location. Whether you're
                                        planning your day ahead or fine-tuning your schedule on the fly, our "Schedule" page is here to make time management
                                        simple and efficient, allowing you to focus on what matters most.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section id='lm-sect-sched'>
                    <div style={{textAlign: 'center'}}>
                        <h2>Trivia</h2>
                    </div>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div className='lm-ud-sect triv-sect sect-switch-2' style={{display: 'flex'}}>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Create & Take Quizzes</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        Dive into the world of knowledge with our "Trivia" page, a treasure trove of learning opportunities. Here,
                                        you can easily filter and access a wide variety of quizzes, covering a range of topics to challenge and
                                        expand your mind. But that's not all - we believe in your expertise, too. With the ability to create, edit,
                                        and delete your quizzes, you can share your knowledge with the community or fine-tune your own customized
                                        learning experiences. What's more, each time you complete a quiz, a study session is generated, allowing
                                        you to track your progress and celebrate your growth. It's not just about questions and answers; it's
                                        about the journey of discovery and development, and our "Trivia" page is your portal to endless possibilities.
                                    </p>
                                </div>
                            </div>
                            <div className='lm-row-half lm-row-img-right' id='lm-trivia'>
                                <img id='lm-img-7' src="https://i.ibb.co/BKk12Wd/Screenshot-2023-10-31-at-6-07-51-PM.png" alt="Screenshot-2023-10-31-at-6-07-51-PM" border="0" />
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section id='lm-sect-sched'>
                    <div style={{textAlign: 'center'}}>
                        <h2>Flash Cards</h2>
                    </div>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div className='lm-ud-sect fc-sect' style={{display: 'flex'}}>
                            <div className='lm-row-half lm-row-img-left'>
                                <img id='lm-img-8' src="https://i.ibb.co/cFbXJ3S/Screenshot-2023-10-31-at-6-08-46-PM.png" alt="Screenshot-2023-10-31-at-6-08-46-PM" border="0" />
                            </div>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Create & Study Flash Cards</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        Unleash the power of flash cards with our dedicated "Flash Cards" page, your gateway to efficient and effective
                                        learning. Explore a wide array of flash card sets with ease, designed to cater to various subjects and topics.
                                        But what sets us apart is your role as the creator. Craft, refine, and personalize your own flash card sets to
                                        suit your unique learning needs. The learning journey doesn't stop at creation; each time you dive into practicing
                                        your flash cards, a study session is generated, enabling you to monitor your progress and celebrate your
                                        accomplishments. With the "Flash Cards" page, learning becomes an interactive and rewarding experience, where
                                        knowledge sticks with you long after the cards are put away.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section id='lm-sect-sched'>
                    <div style={{textAlign: 'center'}}>
                        <h2>Practice</h2>
                    </div>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div className='lm-ud-sect prac-sect sect-switch-2' style={{display: 'flex'}}>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Practice Coding In Your Browser</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        At our "Practice" page, we empower you to sharpen your coding skills in the programming language or framework of
                                        your choice. With a rich selection of options, including C#, C++, JavaScript, Java, React.js, Next.js, Angular,
                                        Python, Svelte, TypeScript, and Rust, we put the control in your hands. Once you've selected your preferred
                                        language or framework, an embedded REPL (Read-Eval-Print Loop) appears, allowing you to dive into hands-on
                                        coding right in your browser. This interactive practice space ensures that you can experiment, make mistakes,
                                        and refine your coding abilities without any barriers. Whether you're a seasoned developer or just starting,
                                        our "Practice" page is your playground for growth and mastery, all within a few clicks.
                                    </p>
                                </div>
                            </div>
                            <div className='lm-row-half lm-row-img-right'>
                                <img id='lm-img-9' src="https://i.ibb.co/YdZk91p/Screenshot-2023-10-31-at-6-08-02-PM.png" alt="Screenshot-2023-10-31-at-6-08-02-PM" border="0" />
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section id='lm-sect-sched'>
                    <div style={{textAlign: 'center'}}>
                        <h2>Resources</h2>
                    </div>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px', alignItems: 'space-around'}}>
                        <div className='lm-ud-sect rsrcs-sect' style={{display: 'flex'}}>
                            <div className='lm-row-half lm-row-img-left'>
                                <img id='lm-img-10' src="https://i.ibb.co/r3Vh7Pk/Screenshot-2023-10-31-at-6-08-36-PM.png" alt="Screenshot-2023-10-31-at-6-08-36-PM" border="0" />
                            </div>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Hundreds of Comprehensive Resources</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        Our "Resources" page is your ultimate gateway to a world of knowledge. With an extensive collection of tools,
                                        guides, tutorials, courses, and documentation, we've curated an extensive library covering a wide range of
                                        programming languages, frameworks, and topics. Whether you're venturing into web development, game development,
                                        or exploring the depths of machine learning, you'll find invaluable resources to guide your journey. With hundreds
                                        of materials at your fingertips, we've made it easy for you to access the information you need to excel in your
                                        chosen field. Dive into the "Resources" page, where boundless learning opportunities await, and where your
                                        aspirations meet the wealth of expertise within your reach.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id='about-divider'></div>
                <section id='lm-sect-sched'>
                    <div style={{textAlign: 'center'}}>
                        <h2>News</h2>
                    </div>
                    <div style={{"display": 'flex', 'flexDirection': 'column', padding: '10px 100px 50px 100px', alignItems: 'space-around'}}>
                        <div className='lm-ud-sect news-sect sect-switch-2' style={{display: 'flex'}}>
                            <div className='lm-row-half lm-row-text'>
                                <div style={{textAlign: 'center'}}>
                                    <h3>Programming News Articles</h3>
                                </div>
                                <div className='lm-paragraph-holder'>
                                    <p>
                                        Our "News" page is your go-to source for staying up-to-date with the latest programming-related developments.
                                        By harnessing the power of the Currents API, we bring you real-time programming news articles that keep you
                                        informed about industry trends, innovations, and insights. Whether you're a seasoned developer, a tech enthusiast,
                                        or a curious learner, this page offers a valuable resource to broaden your knowledge and awareness. With the "News"
                                        page, you can be at the forefront of the ever-evolving tech world, ensuring you're well-informed and ready to tackle
                                        the challenges and opportunities that come your way.
                                    </p>
                                </div>
                            </div>
                            <div className='lm-row-half lm-row-img-right'>
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
