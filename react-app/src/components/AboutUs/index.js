import './AboutUs.css';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import TopBar from '../LandingPage/TopBar';

const AboutUs = () => {
    return (
        <>
            <TopBar />
            <div id='about-us-wrapper'>
            <div id='topbar'></div>
                <section id='about-us-header'>
                    <h1>Project Blockr's Origin Story</h1>
                </section>
                <section id='about-us-img-container'>
                    <img id='aston-photo' src="https://i.ibb.co/8K1fvFg/aston-about-photo.jpg" alt='aston martinez' />
                </section>
                <section className='about-text-section'>
                    <p>
                        Hello, and welcome to Project Blockr, your all-in-one companion for your
                        learning journey and job search! I'm Aston Martinez, a software engineer,
                        mother, wife, and avid gamer. But my journey to this point has been quite
                        the adventure.
                    </p>
                    <p>
                        I recently graduated from the Full Stack Software Engineering bootcamp at
                        App Academy, but before that, I was a writer, crafting stories and diving
                        into the world of words. So, why did I create this website? The answer lies
                        in the challenges I faced and the solutions I wanted to provide.
                    </p>
                    <p>
                        In addition to my tech ventures, I'm also deeply involved in community-based
                        activism for the rare disease, chronic illness, and disabled communities. I'm
                        passionate about creative writing and believe that diverse interests and
                        experiences make us better problem solvers.
                    </p>
                </section>
                <div id='about-divider'></div>
                <section className='about-text-section'>
                    <div className='about-h2-holder'>
                        <h2 className='about-section-h2'>My Motivation</h2>
                    </div>
                    <p>
                        The job search process can be overwhelming. As a recent graduate in the tech
                        world, I found myself struggling to keep track of everything - from the numerous
                        resources and courses I was exploring to the applications I was sending out. I
                        hated that I needed so many different websites just to stay on top of everything.
                        That's when the idea for this website was born. I wanted to create a one-stop-shop
                        for everything I needed.
                    </p>
                    <p>
                        But it goes beyond that. As someone who is neurodivergent, I understand the importance
                        of structure and how challenging it can be to maintain a schedule. So, I built this
                        platform not just for myself but also for others who are navigating the job search
                        process, especially those who are neurodivergent.
                    </p>
                </section>
                <div id='about-divider'></div>
                <section className='about-text-section'>
                    <div className='about-h2-holder'>
                        <h2 className='about-section-h2'>Our Mission</h2>
                    </div>
                    <p>
                        At Project Blockr, our mission is simple yet powerful. We aim to help other students,
                        self-taught programmers, and engineers who are in the midst of the job search process
                        manage their goals and track their progress with ease. We understand the struggles of
                        those who find it challenging to manage their time and stay organized, and we're here
                        to provide the tools and support they need.
                    </p>
                </section>
                <div id='about-divider'></div>
                <section className='about-text-section'>
                    <div className='about-h2-holder'>
                        <h2 className='about-section-h2'>Our Audience</h2>
                    </div>
                    <p>
                        Our primary audience includes students, self-taught programmers, and engineers who,
                        like us, struggle to manage their time and stay organized during the job search process.
                        We are here to make your journey smoother.
                    </p>
                </section>
                <div id='about-divider'></div>
                <section className='about-text-section'>
                    <div className='about-h2-holder'>
                        <h2 className='about-section-h2'>Why We're Unique</h2>
                    </div>
                    <p>
                        Combining the precision of a software engineer with the heart of a mother, the enthusiasm of
                        a gamer, and the storytelling skills of a writer, I bring you a website that's more than just
                        a tool. It's a friend in your pursuit of knowledge and career dreams. Tailored to assist
                        neurodivergent individuals, students, and self-taught programmers, I've painstakingly curated
                        resources, courses, and tools to keep you on track. With a fine attention to detail, intuitive
                        design, and a commitment to accessibility, my website is here to empower you. Whether it's
                        planning your day or navigating the complex world of job searches, we've got your back.
                    </p>
                </section>
                <div id='about-divider'></div>
                <section className='about-text-section'>
                    <div className='about-h2-holder'>
                        <h2 className='about-section-h2'>Get In Touch</h2>
                    </div>
                    <p>
                        If you have any questions, suggestions, or just want to reach out, feel free to contact me at
                        astonmartinezengineering@gmail.com. You can also find me on <a className='socials-link' href="https://github.com/AstonMartinez">GitHub</a> and <a className='socials-link' href='https://www.linkedin.com/in/aston-martinez-0716/'>LinkedIn</a>,
                        or view my other projects on my <a className='socials-link' href="https://astons-portfolio.netlify.app/">portfolio</a>!
                    </p>
                </section>
                <div id='about-divider'></div>
                <section className='about-text-section'>
                    <div className='about-h2-holder'>
                        <h2 className='about-section-h2'>Our Vision for the Future</h2>
                    </div>
                    <p>
                        This website is a labor of love, and I'm commited to making it even better. My future plans include adding more
                        coding languages and categories, curating a job search section that includes the ability to search and save job
                        listings and track applications you've submitted. I'm also exploring the possibility of incorporating AI models
                        to answer your questions throughout the learning process.
                    </p>
                    <p>
                        So, let's embark on this journey together. Sign up today and be a part of our growing community. Let's learn, grow,
                        and achieve together!
                    </p>
                </section>
                <section id='about-button-section'>
                    <NavLink exact to='/signup'>
                        <Button variant="contained" sx={{bgcolor: 'purple'}}>Get Started</Button>
                    </NavLink>
                </section>
            </div>
            <section>
                <Footer />
            </section>
        </>
    )
}

export default AboutUs;
