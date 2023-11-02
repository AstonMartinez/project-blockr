
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AstonMartinez/project-blockr">
    <img src="https://i.ibb.co/dLgCNcW/projectblockr-shieldonly.png" alt="Logo" width="300" height="300">
  </a>

<h3 align="center">Project Blockr</h3>

  <p align="center"> Project Blockr is a powerful platform designed to simplify your learning journey and enhance your productivity. Whether you're a student, self-taught programmer, or engineer navigating the job search process, our all-in-one hub offers a wealth of features to help you achieve your goals. From dynamic scheduling and custom study materials to coding practice and curated resources, we've got you covered. Welcome to a community where learning, growth, and empowerment are the focus. 
    <br />
    <a href="https://github.com/AstonMartinez/project-blockr"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://project-blockr.onrender.com"><strong>Visit the Live Site »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AstonMartinez/project-blockr/issues">Report Bug</a>
    ·
    <a href="https://github.com/AstonMartinez/project-blockr/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1405" alt="Screenshot 2023-11-01 at 10 04 10 PM" src="https://github.com/AstonMartinez/project-blockr/assets/129995811/f2141e40-966d-42f1-99cb-db89d90517f3">

<img width="1405" alt="Screenshot 2023-11-01 at 10 04 30 PM" src="https://github.com/AstonMartinez/project-blockr/assets/129995811/98fdf202-4bc8-40ce-9def-f023e6f46c07">

Project Blockr is a versatile and user-centric platform born out of a passion for learning, a commitment to accessibility, and a desire to empower students, self-taught programmers, and engineers in the midst of the job search process. As a recent graduate from the Full Stack Software Engineering bootcamp at App Academy, and with a background in writing, I embarked on this journey to provide an all-in-one solution for managing goals, tracking progress, and optimizing productivity. This project is driven by a dedication to fine attention to detail, intuitive user experience, and a deep understanding of the unique challenges faced by individuals, particularly those who are neurodivergent. Join us on this adventure, and together, we'll learn, grow, and succeed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AstonMartinez/project-blockr.git
   ```
2. Install Python Packages
   ```sh
   pip install -r requirements.txt
   ```
4. Install NPM packages
   ```sh
   cd react-app && npm install
   ```

### Database Setup

1. From the root directory of the project, initialize the database
	```sh
   flask db init
   ```
2. Migrate database tables
	```sh
   flask db migrate
   ```
3. Upgrade database migrations
	```sh
   flask db upgrade
   ```
4. Add seed data to database tables
	```sh
   flask seed all
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
### User Dashboard
#### Intuitive Navigation
<img src="https://i.ibb.co/1Gz4KQT/Screenshot-2023-10-31-at-6-06-20-PM.png" alt="Screenshot-2023-10-31-at-6-06-20-PM" />
<p>Our website boasts an intuitive navigation menu, meticulously designed to simplify your experience. Whether you're starting your day or embarking on a learning adventure, the menu offers seamless access to
your user dashboard, where you can keep track of your progress and goals.
Organize your day with the schedule feature, challenge your mind with
practice quizzes, or reinforce your knowledge with flash cards.
Dive into a wealth of carefully curated resources to aid your learning
journey, and stay updated with the latest industry news. With this menu,
we've created a user-friendly roadmap for your success, putting everything
you need at your fingertips.</p>

#### Task Overview
<img src="https://i.ibb.co/YTRDpMx/Screenshot-2023-10-31-at-9-09-20-PM.png" alt="Screenshot-2023-10-31-at-9-09-20-PM" />

<img src="https://i.ibb.co/x5zFsmG/Screenshot-2023-10-31-at-9-06-50-PM.png" alt="Screenshot-2023-10-31-at-9-06-50-PM" />

<p>In our user dashboard, we've introduced a powerful "Task Overview" feature that empowers you to manage your day with precision. Whether you prefer a quick glance at your tasks in a table format or a visual representation through a timeline, this feature provides you with the flexibility to choose how you want to organize your day. Your to-do list, your way – it's all about making your schedule management effortless and efficient. Stay in control, stay on track, and make the most of your valuable time with this customizable tool.</p>

#### Study Sessions Overview
<img src="https://i.ibb.co/fNzW7JX/Screenshot-2023-10-31-at-9-04-50-PM.png" alt="Screenshot-2023-10-31-at-9-04-50-PM" />
<p>Our user dashboard offers a powerful "Recent Study Sessions" feature, providing you with insightful snapshots of your learning journey. With this tool, you can easily track and analyze your most recent study sessions, including the number of correct answers, the ones you got wrong, session duration, the study category, and the date and time of each session. It's not just about studying; it's about understanding your progress, identifying your strengths, and areas that need improvement. With this feature, your learning experience is more transparent, allowing you to fine-tune your ap roach and enhance your knowledge effectively.</p> 

#### Study Materials Overview
<img src="https://i.ibb.co/hBKX4gX/Screenshot-2023-10-31-at-6-07-37-PM.png" alt="Screenshot-2023-10-31-at-6-07-37-PM" />
<p>For a personalized and streamlined learning experience, our user dashboard includes the "My Study Materials" feature, a handy tool that keeps your custom content within reach. This feature provides you with an organizedlist of quizzes and flashcards you've personally crafted, putting your unique study materials just a click away. Whether you're reviewing for an exam or reinforcing key concepts, having your own study resources at your fingertips ensures that your learning journey is both efficient and tailored to your needs. With this feature, you have the power to take control of your educational path and make the most of your study time.</p>

### Schedule
<img src="https://i.ibb.co/w6Krntd/Screenshot-2023-10-31-at-6-08-57-PM.png" alt="Screenshot-2023-10-31-at-6-08-57-PM" />
<p>Our "Schedule" page is your daily companion, providing a clear and dynamic timeline view of your tasks. It's not just about organization; it's about empowerment. With this feature, you have the flexibility to effortlessly add, edit, or remove tasks from your schedule, ensuring that your day aligns perfectly with your goals. Stay in charge of your time, make adjustments as needed, and keep your daily to-dos in one convenient location. Whether you're planning your day ahead or fine-tuning your schedule on the fly, our "Schedule" page is here to make time management simple and efficient, allowing you to focus on what matters most.</p>

### Create & Take Quizzes
<img src="https://i.ibb.co/BKk12Wd/Screenshot-2023-10-31-at-6-07-51-PM.png" alt="Screenshot-2023-10-31-at-6-07-51-PM" />
<p>Dive into the world of knowledge with our "Trivia" page, a treasure trove of learning opportunities. Here, you can easily filter and access a wide variety of quizzes, covering a range of topics to challenge and expand your mind. But that's not all - we believe in your expertise, too. With the ability to create, edit, and delete your quizzes, you can share your knowledge with the community or fine-tune your on customized learning experiences. What's more, each time you complete a quiz, a study session is geneated, allowing you to track your progress and celebrate your growth. It's not just about questions and answers; it's about the journey of discovery and development, and our "Trivia" page is your portal to endless possibilities.</p>

### Create & Study Flash Cards
<img src="https://i.ibb.co/cFbXJ3S/Screenshot-2023-10-31-at-6-08-46-PM.png" alt="Screenshot-2023-10-31-at-6-08-46-PM" />
<p>Unleash the power of flash cards with our dedicated "Flash Cards" page, your gateway to efficient and effective learning. Explore a wide array of flash card sets with ease, designed to cater to various subjects and topics. But what sets us apart is your role as the creator. Craft, refine, and personalize your own flash card sets to suit your unique learning needs. The learning journey doesn't stop at creation; each time you dive into practicing your flash cards, a study session is generated, enabling you to monitor your progress and celebrate your accomplishments. With the "Flash Cards" page, learning becomes an interactive and rewarding experience, where knowledge sticks with you long after the cards are put away.</p>

### Practice Coding In Your Browser
<img src="https://i.ibb.co/YdZk91p/Screenshot-2023-10-31-at-6-08-02-PM.png" alt="Screenshot-2023-10-31-at-6-08-02-PM" />
<p>At our "Practice" page, we empower you to sharpen your coding skills in the programming language or framework of your choice. With a rich selection of options, including C#, C++, JavaScript, Java, React.js, Next.js, Angular, Python, Svelte, TypeScript, and Rust, we put the control in your hands. Once you've selected your preferred language or framework, an embedded REPL (Read-Eval-Print Loop) appears, allowing you to dive into hands-on coding right in your browser. This interactive practice space ensures that you can experiment, make mistakes, and refine your coding abilities without any barriers. Whether you're a seasoned developer or just starting, our "Practice" page is your playground for growth and mastery, all within a few clicks.</p>

### Hundreds of Comprehensive Resources
<img src="https://i.ibb.co/r3Vh7Pk/Screenshot-2023-10-31-at-6-08-36-PM.png" alt="Screenshot-2023-10-31-at-6-08-36-PM" />
<p>Our "Resources" page is your ultimate gateway to a world of knowledge. With an extensive collection of tools, guides, tutorials, courses, and documentation, we've curated an extensive library covering a wide range of programming languages, frameworks, and topics. Whether you're venturing into web development, game development, or exploring the depths of machine learning, you'll find invaluable resources to guide your journey. With hundreds of materials at your fingertips, we've made it easy for you to access the information you need to excel in your chosen field. Dive into the "Resources" page, where boundless learning opportunities await, and where your aspirations meet the wealth of expertise within your reach.</p>

### Programming News Articles
<img src="https://i.ibb.co/xJhkL9b/Screenshot-2023-10-31-at-6-08-25-PM.png" alt="Screenshot-2023-10-31-at-6-08-25-PM" />
<p>Our "News" page is your go-to source for staying up-to-date with the latest programming-related developments. By harnessing the power of the News API, we bring you real-time programming news articles that keep you informed about industry trends, innovations, and insights. Whether you're a seasoned developer, a tech enthusiast, or a curious learner, this page offers a valuable resource to broaden your knowledge and awareness. With the "News" page, you can be at the forefront of the ever-evolving tech world, ensuring you're well-informed and ready to tackle the challenges and opportunities that come your way.</p>

_For more examples, please refer to the [Documentation](https://github.com/AstonMartinez/project-blockr)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] <strong>User Dashboard:</strong> Stay organized and in control of your day with a dynamic schedule, and keep track of your recent study sessions.
- [x] <strong>Tasks:</strong> Stay organized and in control of your day with a dynamic schedule, and keep track of your recent study sessions. Full CRUD functionality.
- [x] <strong>Quizzes:</strong> Challenge your knowledge by creating and taking trivia quizzes on a wide range of topics. Full CRUD functionality.
- [x] <strong>Flash Cards:</strong> Sharpen your programming knowledge with custom flash cards. Full CRUD functionality.
- [x] <strong>Study Sessions:</strong> Track and analyze your progress with study sessions that are generated each time you study flash cards or take a quiz.
- [x] <strong>Practice Repls:</strong> Practice coding skills in your chosen programming language or framework with an embedded REPL in your browser.
- [x] <strong>Resources:</strong> Access a comprehensive library of tools, guides, tutorials, courses, and documentation on a wide array of programming languages, frameworks, and topics.
- [x] <strong>News:</strong> Stay informed with the latest programming-related news articles, powered by the News API.
- [ ] <strong>Job Listings:</strong> Search and save job listings during your job search.
- [ ] <strong>User Applications:</strong> Organize and track submitted job applications to simplify your job search.
- [ ] <strong>More Languages & Frameworks:</strong> Increased list of languages and frameworks you can study and practice.

See the [open issues](https://github.com/AstonMartinez/project-blockr/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Aston Martinez - [LinkedIn](https://github.com/AstonMartinez/project-blockr) - astonmartinezengineering@gmail.com

Project Link: [https://github.com/AstonMartinez/project-blockr](https://github.com/AstonMartinez/project-blockr)

Aston's Portfolio: [https://astons-portfolio.netlify.app/](https://astons-portfolio.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [MaterialUI](https://mui.com/material-ui/)
* [News API](https://newsapi.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## API Endpoints


|Request                |Purpose                          |Return Value                         |
|----------------|-------------------------------|-----------------------------|
|GET<br>/api/auth|Authenticates a user.            |{<br>&nbsp;“id”: INT,<br>&nbsp;“email”: STRING,<br>&nbsp;“firstName”: STRING,<br>&nbsp;“lastName”: STRING,<br>&nbsp;“bio”: STRING<br>}           |
|POST<br>/api/auth/login          |Logs a user in.            |{<br>&nbsp;“id”: INT,<br>&nbsp;“email”: STRING,<br>&nbsp;“firstName”: STRING,<br>&nbsp;“lastName”: STRING,<br>&nbsp;“bio”: STRING<br>}            |
|GET<br>/api/auth/logout          |Logs out a user.|{<br>&nbsp;"message": "User logged out"<br>}|
|POST<br>/api/auth/signup|Creates a new user and logs them in.|{<br>&nbsp;“id”: INT,<br>&nbsp;“email”: STRING,<br>&nbsp;“firstName”: STRING,<br>&nbsp;“lastName”: STRING,<br>&nbsp;“bio”: STRING<br>}|
|GET<br>/api/auth/unauthorized|Returns unauthorized JSON when flask-login authentication fails|{<br>&nbsp;"errors": ["Unauthorized"]<br>}|
|GET<br>/api/cards/:id|Retrieves the title, description, category, status, and cards for a flash card set.|{<br>&nbsp;"id": INT,<br>&nbsp;"creator_id": INT,<br>&nbsp;"title": STRING,<br>&nbsp;"description": STRING,<br>&nbsp;"status": STRING,<br>&nbsp;"category": STRING<br>}|
|GET<br>/api/cards/sets/:category|Retrieves all flash card sets with a category that matches the indicated category.|{<br>&nbsp; 0: {<br>&nbsp; &nbsp;"id": INT,<br>&nbsp; &nbsp; "creator_id": INT, <br>&nbsp; &nbsp; "title": STRING, <br>&nbsp; &nbsp; "description": STRING,<br>&nbsp; &nbsp; "status": STRING<br>&nbsp; &nbsp; "category": STRING,<br>&nbsp;},<br>}|
|POST<br>/api/cards/sets/:setId/add|Adds new flash cards to an existing set.|{<br>&nbsp; "id": INT,<br>&nbsp; "set_id": INT,<br>&nbsp; "front": STRING,<br>&nbsp; "back": STRING<br>}|
|PUT <br>/api/cards/sets/:setId/update|Updates the details of an existing flash card set.|{<br>&nbsp;"id": INT,<br>&nbsp;"creator_id": INT,<br>&nbsp;"title": STRING,<br>&nbsp;"description": STRING,<br>&nbsp;"status": STRING,<br>&nbsp;"category": STRING<br>}|
|GET <br>/api/cards/sets/all|Retrieves all flash card sets with a status of "Public", as well as the current user's custom flash card sets.|{<br>&nbsp; 0: {<br>&nbsp; &nbsp;"id": INT,<br>&nbsp; &nbsp; "creator_id": INT, <br>&nbsp; &nbsp; "title": STRING, <br>&nbsp; &nbsp; "description": STRING,<br>&nbsp; &nbsp; "status": STRING<br>&nbsp; &nbsp; "category": STRING,<br>&nbsp;},<br>}|
|DELETE <br>/api/cards/sets/cards/:cardId/delete|Deletes an individual flash card from an existing set.|{<br>&nbsp;"id": INT,<br>&nbsp;"creator_id": INT,<br>&nbsp;"title": STRING,<br>&nbsp;"description": STRING,<br>&nbsp;"status": STRING,<br>&nbsp;"category": STRING<br>}|
|PUT <br>/api/cards/sets/cards/:cardId|Updates an individual flash card from an existing set.|{<br>&nbsp;"id": INT,<br>&nbsp;"creator_id": INT,<br>&nbsp;"title": STRING,<br>&nbsp;"description": STRING,<br>&nbsp;"status": STRING,<br>&nbsp;"category": STRING<br>}|
|POST <br>/api/cards/sets/new|Creates a new set of flash cards.|{<br>&nbsp;"id": INT,<br>&nbsp;"creator_id": INT,<br>&nbsp;"title": STRING,<br>&nbsp;"description": STRING,<br>&nbsp;"status": STRING,<br>&nbsp;"category": STRING<br>}|
|GET <br>/api/cards/sets/public|Retrieves all existing flash card sets with a status of "Public".|{<br>&nbsp; 0: {<br>&nbsp; &nbsp;"id": INT,<br>&nbsp; &nbsp; "creator_id": INT, <br>&nbsp; &nbsp; "title": STRING, <br>&nbsp; &nbsp; "description": STRING,<br>&nbsp; &nbsp; "status": STRING<br>&nbsp; &nbsp; "category": STRING,<br>&nbsp;},<br>}|
|GET <br>/api/cards/sets/user-sets|Retrieves only the flash card sets that the current user has created.|{<br>&nbsp; 0: {<br>&nbsp; &nbsp;"id": INT,<br>&nbsp; &nbsp; "creator_id": INT, <br>&nbsp; &nbsp; "title": STRING, <br>&nbsp; &nbsp; "description": STRING,<br>&nbsp; &nbsp; "status": STRING<br>&nbsp; &nbsp; "category": STRING,<br>&nbsp;},<br>}|
|GET <br>/api/docs|Returns all API routes and their doc strings.|{<br>&nbsp; ":route": [<br>&nbsp; &nbsp; [<br>&nbsp; &nbsp; &nbsp; ":method" <br> &nbsp; &nbsp;]<br> &nbsp; ":purpose"<br> &nbsp;].<br>}|
|GET <br>/api/flashCards/:id|Retrieves a single flash card.|{<br>&nbsp; "id": INT,<br>&nbsp; "set_id": INT,<br>&nbsp; "front": STRING,<br>&nbsp; "back": STRING<br>}|
|DELETE <br>/api/flashCards/:id/delete|Deletes an individual flash card.|{<br>&nbsp; "id": INT,<br>&nbsp; "set_id": INT,<br>&nbsp; "front": STRING,<br>&nbsp; "back": STRING<br>}|
|PUT <br>/api/flashCards/:id/update|Updates an individual flash card.|{<br>&nbsp; "id": INT,<br>&nbsp; "set_id": INT,<br>&nbsp; "front": STRING,<br>&nbsp; "back": STRING<br>}|
|GET <br>/api/flashCards/sets/:setId/cards|Retrieves all flash cards belonging to the indicated set.|{<br>&nbsp; 0: {<br>&nbsp; &nbsp; "id": INT,<br>&nbsp; &nbsp; "set_id": INT,<br> &nbsp; &nbsp; "front": STRING, <br>&nbsp; &nbsp; "back": STRING <br>&nbsp;}<br>}|
|POST <br>/api/quizzes/:quizId/add|Creates a new question for an existing quiz.|{<br>&nbsp; "id": INT, <br>&nbsp; "quiz_id": INT, <br>&nbsp; "question": STRING, <br>&nbsp; "answer_one": STRING, <br> &nbsp; "answer_two": STRING, <br> &nbsp; "answer_three": STRING, <br> &nbsp; "answer_four": STRING, <br> &nbsp; "category": STRING, <br> &nbsp; "solution": STRING, <br> &nbsp; "status": STRING<br>}|
|GET <br>/api/quizzes/:quizId/all|Retrieves all questions that belong to a particular quiz.|{<br> &nbsp; 0: {<br>&nbsp; &nbsp; "id": INT, <br>&nbsp; &nbsp; "quiz_id": INT, <br>&nbsp; &nbsp; "question": STRING, <br>&nbsp; &nbsp; "answer_one": STRING, <br> &nbsp; &nbsp; "answer_two": STRING, <br> &nbsp; &nbsp; "answer_three": STRING, <br> &nbsp; &nbsp; "answer_four": STRING, <br> &nbsp; &nbsp; "category": STRING, <br> &nbsp; &nbsp; "solution": STRING, <br> &nbsp; &nbsp; "status": STRING<br>&nbsp;}<br>}|
|DELETE <br>/api/quizzes/:questionId/delete|Deletes a question from an existing quiz.|{<br>&nbsp; "id": INT, <br>&nbsp; "quiz_id": INT, <br>&nbsp; "question": STRING, <br>&nbsp; "answer_one": STRING, <br> &nbsp; "answer_two": STRING, <br> &nbsp; "answer_three": STRING, <br> &nbsp; "answer_four": STRING, <br> &nbsp; "category": STRING, <br> &nbsp; "solution": STRING, <br> &nbsp; "status": STRING<br>}|
|PUT <br>/api/quizzes/:questionId/update|Updates a question from an existing quiz.|{<br>&nbsp; "id": INT, <br>&nbsp; "quiz_id": INT, <br>&nbsp; "question": STRING, <br>&nbsp; "answer_one": STRING, <br> &nbsp; "answer_two": STRING, <br> &nbsp; "answer_three": STRING, <br> &nbsp; "answer_four": STRING, <br> &nbsp; "category": STRING, <br> &nbsp; "solution": STRING, <br> &nbsp; "status": STRING<br>}|
|GET <br>/api/study/current/:category|Retrieves all study sessions matching the indicated category.|{<br> &nbsp; 0: {<br> &nbsp; &nbsp; "id": INT, <br>&nbsp; &nbsp; "user_id": INT, <br> &nbsp; &nbsp; "correct": INT, <br> &nbsp; &nbsp; "incorrect": INT, <br> &nbsp; &nbsp; "out_of": INT, <br> &nbsp; &nbsp; "time_spent": STRING, <br>&nbsp; &nbsp; "date": DATE, <br>&nbsp; &nbsp; "type": STRING, <br> &nbsp; &nbsp; "category": STRING <br> &nbsp; &nbsp;}<br>}|
|GET <br>/api/study/current/all|Retrieves all study sessions belonging to the current user.|{<br> &nbsp; 0: {<br> &nbsp; "id": INT, <br>&nbsp; &nbsp;"user_id": INT, <br> &nbsp; "correct": INT, <br> &nbsp; "incorrect": INT, <br> &nbsp; "out_of": INT, <br> &nbsp; "time_spent": STRING, <br>&nbsp; "date": DATE, <br>&nbsp; "type": STRING, <br> &nbsp; "category": STRING <br> &nbsp;}<br>}|
|GET <br>/api/study/current/recent|Retrieves the current user's 10 most recent study sessions.|{<br> &nbsp; 0: {<br> &nbsp; &nbsp; "id": INT, <br>&nbsp; &nbsp; "user_id": INT, <br> &nbsp; &nbsp; "correct": INT, <br> &nbsp; &nbsp; "incorrect": INT, <br> &nbsp; &nbsp; "out_of": INT, <br> &nbsp; &nbsp; "time_spent": STRING, <br>&nbsp; &nbsp; "date": DATE, <br>&nbsp; &nbsp; "type": STRING, <br> &nbsp; &nbsp; "category": STRING <br> &nbsp;}<br>}|
|POST <br>/api/study/new|Creates a new study session.|{<br> &nbsp; "id": INT, <br>&nbsp; &nbsp; "user_id": INT, <br> &nbsp; "correct": INT, <br> &nbsp; "incorrect": INT, <br> &nbsp; "out_of": INT, <br> &nbsp; "time_spent": STRING, <br>&nbsp; "date": DATE, <br>&nbsp; "type": STRING, <br> &nbsp; "category": STRING <br>}|
|GET <br>/api/tasks/day|Retrieves all tasks for a specified day of the week.|{<br> &nbsp; 0: {<br> &nbsp; &nbsp; "id": INT, <br> & nbsp; &nbsp; "user_id": INT, <br> &nbsp; &nbsp; "title": STRING, <br> &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; "day": STRING, <br> &nbsp; &nbsp; "start_time": STRING, <br> &nbsp; &nbsp; "end_time": STRING, <br> &nbsp; &nbsp; "icon": STRING, <br> &nbsp; &nbsp; "color": STRING <br> &nbsp;} <br>}|
|DELETE <br>/api/tasks/:taskId/delete|Deletes an existing task.|{<br> &nbsp; "id": INT, <br> & nbsp; "user_id": INT, <br> &nbsp; "title": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "day": STRING, <br> &nbsp; "start_time": STRING, <br> &nbsp; "end_time": STRING, <br> &nbsp; "icon": STRING, <br> &nbsp; "color": STRING <br>}|
|PUT <br>/api/tasks/:taskId/update|Updates an existing task.|{<br> &nbsp; "id": INT, <br> & nbsp; "user_id": INT, <br> &nbsp; "title": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "day": STRING, <br> &nbsp; "start_time": STRING, <br> &nbsp; "end_time": STRING, <br> &nbsp; "icon": STRING, <br> &nbsp; "color": STRING <br>}|
|POST <br>/api/tasks/new|Creates a new task.|{<br> &nbsp; "id": INT, <br> & nbsp; "user_id": INT, <br> &nbsp; "title": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "day": STRING, <br> &nbsp; "start_time": STRING, <br> &nbsp; "end_time": STRING, <br> &nbsp; "icon": STRING, <br> &nbsp; "color": STRING <br>}|
|GET <br>/api/trivia/quizzes/:category|Retrieves all quizzes with a category that matches the indicated category.|{<br> &nbsp; 0: {<br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "user_id": INT, <br> &nbsp; &nbsp; "title": STRING, <br> &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; "category": STRING, <br> &nbsp; &nbsp; "status": STRING <br> &nbsp; } <br>}|
|GET <br>/api/trivia/quizzes/:quizId|Retrieves an individual quiz.|{<br> &nbsp; "id": INT, <br> &nbsp; "user_id": INT, <br> &nbsp; "title": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "category": STRING, <br> &nbsp; "status": STRING <br>}|
|DELETE <br>/api/trivia/quizzes/:quizId/delete|Deletes an existing quiz.|{<br> &nbsp; "id": INT, <br> &nbsp; "user_id": INT, <br> &nbsp; "title": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "category": STRING, <br> &nbsp; "status": STRING <br>}|
|PUT <br>/api/trivia/quizzes/:quizId/update|Updates an existing quiz.|{<br> &nbsp; "id": INT, <br> &nbsp; "user_id": INT, <br> &nbsp; "title": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "category": STRING, <br> &nbsp; "status": STRING <br>}|
|GET <br>/api/trivia/quizzes/all|Retrives all quizzes with a status of "Public", as well as the current user's custom quizzes.|{<br> &nbsp; 0: {<br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "user_id": INT, <br> &nbsp; &nbsp; "title": STRING, <br> &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; "category": STRING, <br> &nbsp; &nbsp; "status": STRING <br> &nbsp; } <br>}|
|POST <br>/api/trivia/quizzes/new|Creates a new quiz.|{<br> &nbsp; "id": INT, <br> &nbsp; "user_id": INT, <br> &nbsp; "title": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "category": STRING, <br> &nbsp; "status": STRING <br>}|
|GET <br>/api/trivia/quizzes/public|Retrieves all quizzes with a status of "Public".|{<br> &nbsp; 0: {<br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "user_id": INT, <br> &nbsp; &nbsp; "title": STRING, <br> &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; "category": STRING, <br> &nbsp; &nbsp; "status": STRING <br> &nbsp; } <br>}|
|GET <br>/api/trivia/quizzes/user-quizzes|Retrieves all custom quizzes belonging to the current user.|{<br> &nbsp; 0: {<br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "user_id": INT, <br> &nbsp; &nbsp; "title": STRING, <br> &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; "category": STRING, <br> &nbsp; &nbsp; "status": STRING <br> &nbsp; } <br>}|
|GET <br>/api/users/|Query for all users and returns them in a list of user dictionaries.|[<br> &nbsp; { <br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "email": STRING, <br> &nbsp; &nbsp; "firstName": STRING, <br> &nbsp; &nbsp; "lastName": STRING, <br> &nbsp; &nbsp; "bio" <br> &nbsp; } <br>]|
|GET <br>/api/users/:userId|Query for a user by id and returns that user in a dictionary.|{<br> &nbsp; "id": INT, <br> &nbsp; "email": STRING, <br> &nbsp; "firstName": STRING, <br> &nbsp; "lastName": STRING, <br> &nbsp; "bio": STRING <br>}|
|GET <br>/api/users/materials|Retrieves all quizzes and flash cards created by the current user.|{<br> &nbsp; "cards": { <br> &nbsp; &nbsp;  0: {<br> &nbsp;  &nbsp;  &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; "creator_id": INT, <br> &nbsp; &nbsp; &nbsp; "title": STRING, <br> &nbsp; &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; &nbsp; "status": STRING, <br> &nbsp; &nbsp; &nbsp; "category": STRING <br> &nbsp; &nbsp; } <br> &nbsp;} <br> &nbsp; "quizzes": {<br> &nbsp; &nbsp; 0: { <br> &nbsp; &nbsp; &nbsp; "id": INT, <br>&nbsp; &nbsp; &nbsp; user_id": INT, <br> &nbsp; &nbsp; &nbsp; "title": STRING, <br> &nbsp; &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; &nbsp; "status": STRING, <br> &nbsp; &nbsp; &nbsp; "category": STRING <br> &nbsp;  &nbsp; }<br>}|

```
