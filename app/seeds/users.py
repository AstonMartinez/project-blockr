from app.models import db, User, environment, SCHEMA
from app.models.trivia_questions import TriviaQuestion
from app.models.card_sets import CardSets
from app.models.card_questions import CardQuestion
from app.models.user_stats import UserStats
from app.models.trivia_quiz import TriviaQuiz
from app.models.task import Task
from sqlalchemy.sql import text
from datetime import time


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstName='Demo',
        lastName='Lition',
        email='demo@aa.io',
        password='password',
        bio="Your friendly neighborhood coder on a never-ending quest to unravel the mysteries of software development. Whether I'm weaving spells in Python or conjuring web wonders with JavaScript, I'm always exploring the enchanting world of code. My trusty wand? The keyboard! My incantations? Lines of code! My magic potions? Coffee and Stack Overflow!"
    )

    marnie = User(
        firstName='Marnie',
        lastName='Lee',
        email='marnie@aa.io',
        password='password'
    )

    bobbie = User(
        firstName='Bobbie',
        lastName='Bratcher',
        email='bobbie@aa.io',
        password='password'
    )

    quiz1 = TriviaQuiz(
        user_id=1,
        title="General I",
        description="General programming trivia",
        category="General",
        status="Public"
    )

    quiz2 = TriviaQuiz(
        user_id=1,
        title="General II",
        description="General programming trivia",
        category="General",
        status="Public"
    )

    quiz3 = TriviaQuiz(
        user_id=1,
        title="General III",
        description="General programming trivia",
        category="General",
        status="Public"
    )

    quiz4 = TriviaQuiz(
        user_id=1,
        title="General IV",
        description="General programming trivia",
        category="General",
        status="Public"
    )

    quiz5 = TriviaQuiz(
        user_id=1,
        title="Angular I",
        description="Angular trivia",
        category="Angular",
        status="Public"
    )

    quiz6 = TriviaQuiz(
        user_id=1,
        title="C++ I",
        description="C++ trivia",
        category="C++",
        status="Public"
    )

    quiz7 = TriviaQuiz(
        user_id=1,
        title="C# I",
        description="C# trivia",
        category="CSharp",
        status="Public"
    )

    quiz8 = TriviaQuiz(
        user_id=1,
        title="JavaScript I",
        description="JavaScript trivia",
        category="JavaScript",
        status="Public"
    )

    quiz9 = TriviaQuiz(
        user_id=1,
        title="Java I",
        description="Java trivia",
        category="Java",
        status="Public"
    )

    quiz10 = TriviaQuiz(
        user_id=1,
        title="Next.js I",
        description="Next.js trivia",
        category="Next.js",
        status="Public"
    )

    quiz11 = TriviaQuiz(
        user_id=1,
        title="Python I",
        description="Python trivia",
        category="Python",
        status="Public"
    )

    quiz12 = TriviaQuiz(
        user_id=1,
        title="React I",
        description="React trivia",
        category="React",
        status="Public"
    )

    quiz13 = TriviaQuiz(
        user_id=1,
        title="Rust I",
        description="Rust trivia",
        category="Rust",
        status="Public"
    )

    quiz14 = TriviaQuiz(
        user_id=1,
        title="Svelte I",
        description="Svelte trivia",
        category="Svelte",
        status="Public"
    )

    quiz15 = TriviaQuiz(
        user_id=1,
        title="TypeScript I",
        description="TypeScript trivia",
        category="TypeScript",
        status="Public"
    )

    quiz16 = TriviaQuiz(
        user_id=1,
        title="SQL I",
        description="SQL trivia",
        category="SQL",
        status="Public"
    )

    quiz17 = TriviaQuiz(
        user_id=2,
        title="Web Development Fundamentals",
        description="See how well you know the basics of web development",
        category="General",
        status="Public"
    )

    quiz18 = TriviaQuiz(
        user_id=2,
        title="Game Development Fundamentals",
        description="See how well you know the basics of game development",
        category="General",
        status="Public"
    )

    quiz19 = TriviaQuiz(
        user_id=3,
        title="Machine Learning Fundamentals",
        description="See how well you know the basics of machine learning",
        category="General",
        status="Public"
    )

    quiz19q1 = TriviaQuestion(
        quiz_id=19,
        question="What is the main goal of supervised learning in machine learning?",
        answer_one="To train a model on labeled data and make predictions on new, unseen data",
        answer_two="To create self-learning, unsupervised AI systems",
        answer_three="To optimize algorithms for maximum speed",
        answer_four="To generate random data for testing purposes",
        solution="To train a model on labeled data and make predictions on new, unseen data",
        category="General",
        status="Public"
    )

    quiz19q2 = TriviaQuestion(
        quiz_id=19,
        question="Which machine learning algorithm is often used for classification tasks and based on probability theory?",
        answer_one="k-Nearest Neighbors (k-NN)",
        answer_two="Support Vector Machine(SVM)",
        answer_three="Decision Tree",
        answer_four="Naive Bayes",
        solution="Naive Bayes",
        category="General",
        status="Public"
    )

    quiz19q3 = TriviaQuestion(
        quiz_id=19,
        question="In unsupervised learning, what is the primary objective of clustering algorithms?",
        answer_one="To predict future values",
        answer_two="To reduce the dimensionality of data",
        answer_three="To group similar data points together",
        answer_four="To optimize model hyperparameters",
        solution="To group similar data points together",
        category="General",
        status="Public"
    )

    quiz19q4 = TriviaQuestion(
        quiz_id=19,
        question="What is the role of a loss function in training a machine learning model?",
        answer_one="To ensure the accuracy of the model's predictions",
        answer_two="To control the learning rate of the model",
        answer_three="To prevent overfitting by reducing model complexity",
        answer_four="To calculate the gradient of the loss for gradient descent",
        solution="To calculate the gradient of the loss for gradient descent",
        category="General",
        status="Public"
    )

    quiz19q5 = TriviaQuestion(
        quiz_id=19,
        question="Which library is widely used for implementing deep learning models and neural networks?",
        answer_one="NumPy",
        answer_two="Matplotlib",
        answer_three="TensorFlow",
        answer_four="SciKit-learn",
        solution="TensorFlow",
        category="General",
        status="Public"
    )

    quiz18q1 = TriviaQuestion(
        quiz_id=18,
        question='What is the primary purpose of a game engine in game development?',
        answer_one='Creating 3D models',
        answer_two='Managing player input',
        answer_three='Handling game physics and rendering',
        answer_four='Writing game storylines',
        solution='Handling game physics and rendering',
        category='General',
        status="Public"
    )

    quiz18q2 = TriviaQuestion(
        quiz_id=18,
        question='In game development, what is a "sprite"?',
        answer_one='A type of character class',
        answer_two='A type of projectile weapon',
        answer_three='A 2D image or animation used in games',
        answer_four='A special power-up',
        solution='A 2D image or animation used in games',
        category='General',
        status="Public"
    )

    quiz18q3 = TriviaQuestion(
        quiz_id=18,
        question='Which programming language is commonly used for game development with the Unity game engine?',
        answer_one='Java',
        answer_two='C#',
        answer_three='Python',
        answer_four='Ruby',
        solution='C#',
        category='General',
        status="Public"
    )

    quiz18q4 = TriviaQuestion(
        quiz_id=18,
        question='What is a "hitbox" in the context of game development?',
        answer_one='A box of ammunition',
        answer_two='The main menu of a game',
        answer_three='An invisible area that registers collisions and interactions',
        answer_four='A power-up that grants extra lives',
        solution='An invisible area that registers collisions and interactions',
        category='General',
        status="Public"
    )

    quiz18q5 = TriviaQuestion(
        quiz_id=18,
        question='What is the purpose of a game design document (GDD) in game development?',
        answer_one='To describe the technical details of the game\'s code',
        answer_two='To outline the marketing strategy for the game',
        answer_three='To document the game\'s concept, mechanics and development plan',
        answer_four='To provide a list of potential bugs and glitches',
        solution='To document the game\'s concept, mechanics and development plan',
        category='General',
        status="Public"
    )

    quiz17q1 = TriviaQuestion(
        quiz_id=17,
        question="What does HTTP stand for in web development?",
        answer_one="HyperText Transfer Protocol",
        answer_two="Highly Technical Transfer Process",
        answer_three="Hypertext Transfer Page",
        answer_four="Hyperlink Text Transmission",
        solution="HyperText Transfer Protocol",
        category="General",
        status="Public"
    )

    quiz17q2 = TriviaQuestion(
        quiz_id=17,
        question="What does HTML stand for in the context of web development?",
        answer_one="HyperText Markup Language",
        answer_two="High-Level Text Language",
        answer_three="Hyperlink and Text Markup Language",
        answer_four="HyperText Markup Language",
        solution="HyperText Markup Language",
        category="General",
        status="Public"
    )

    quiz17q3 = TriviaQuestion(
        quiz_id=17,
        question="Which programming language is commonly used for client-side scripting in web development?",
        answer_one="Python",
        answer_two="JavaScript",
        answer_three="Ruby",
        answer_four="C++",
        solution="JavaScript",
        category="General",
        status="Public"
    )

    quiz17q4 = TriviaQuestion(
        quiz_id=17,
        question="What is the purpose of CSS (Cascading Style Sheets) in web development?",
        answer_one="To define the structure and content of a webpage",
        answer_two="To manage the server-side logic of a website",
        answer_three="To style and format the visual presentation of a webpage",
        answer_four="To create and manage databases for a website",
        solution="To style and format the visual presentation of a webpage",
        category="General",
        status="Public"
    )

    quiz17q5 = TriviaQuestion(
        quiz_id=17,
        question="Which HTTP status code indicates a successful request in web development?",
        answer_one="200 OK",
        answer_two="404 Not Found",
        answer_three="500 Internal Server Error",
        answer_four="302 Found",
        solution="200 OK",
        category="General",
        status="Public"
    )

    quiz17q6 = TriviaQuestion(
        quiz_id=17,
        question="What is the purpose of a responsive web design?",
        answer_one="To make the website load faster",
        answer_two="To ensure compatibility with Internet Explorer",
        answer_three="To adapt the layout and content to different screen sizes and devices",
        answer_four="To encrypt user data for security",
        solution="To adapt the layout and content to different screen sizes and devices",
        category="General",
        status="Public"
    )

    antq1 = TriviaQuestion(
        quiz_id=5,
        question="What is Angular primarily used for?",
        answer_one="Mobile app development",
        answer_two="Building web applications",
        answer_three="Game development ",
        answer_four="Database management",
        solution="Building web applications",
        category="Angular",
        status="Public"
    )

    antq2 = TriviaQuestion(
        quiz_id=5,
        question="Which version of Angular introduced the Component-Based Architecture?",
        answer_one="Angular 1",
        answer_two="Angular 2",
        answer_three="Angular 4",
        answer_four="Angular 4",
        solution="Angular 2",
        category="Angular",
        status="Public"
    )

    antq3 = TriviaQuestion(
        quiz_id=5,
        question="What does the 'ng' prefix stand for in Angular?",
        answer_one="Next-Generation",
        answer_two="Node.js Group",
        answer_three="New Generation",
        answer_four="Not Given",
        solution="Next-Generation",
        category="Angular",
        status="Public"
    )

    antq4 = TriviaQuestion(
        quiz_id=5,
        question="In Angular, which file is used to define the configuration of the application?",
        answer_one="`index.html`",
        answer_two="`app.module.ts`",
        answer_three="`main.js`",
        answer_four="`style.css`",
        solution="`app.module.ts`",
        category="Angular",
        status="Public"
    )

    antq5 = TriviaQuestion(
        quiz_id=5,
        question="What is the purpose of the Angular CLI (Command Line Interface)?",
        answer_one="To create and manage Angular applications",
        answer_two="To configure web servers",
        answer_three="To develop mobile apps",
        answer_four="To test JavaScript code",
        solution="To create and manage Angular applications",
        category="Angular",
        status="Public"
    )

    antq6 = TriviaQuestion(
        quiz_id=5,
        question="In Angular, what is the primary unit of an application's structure and functionality?",
        answer_one="Directive",
        answer_two="Component",
        answer_three="Module",
        answer_four="Service",
        solution="Component",
        category="Angular",
        status="Public"
    )

    antq7 = TriviaQuestion(
        quiz_id=5,
        question="What is the Angular router used for?",
        answer_one="To manage HTTP requests",
        answer_two="To configure the application's authentication",
        answer_three="To navigate between views and display components",
        answer_four="To create animations",
        solution="To navigate between views and display components",
        category="Angular",
        status="Public"
    )

    antq8 = TriviaQuestion(
        quiz_id=5,
        question="Which of the following is not a valid Angular binding syntax?",
        answer_one="`[property]='expression'`",
        answer_two="`(event)='handler'`",
        answer_three="`{{expression}}`",
        answer_four="`@expression`",
        solution="`@expression`",
        category="Angular",
        status="Public"
    )

    antq9 = TriviaQuestion(
        quiz_id=5,
        question="In Angular, what is the purpose of the `@Input` and `@Output` decorators?",
        answer_one="To define class methods",
        answer_two="To style components",
        answer_three="To create custom directives",
        answer_four="To communicate between parent and child components",
        solution="To communicate between parent and child components",
        category="Angular",
        status="Public"
    )

    antq10 = TriviaQuestion(
        quiz_id=5,
        question="Which file in an Angular project is used for defining routes and configuring navigation?",
        answer_one="`app.routes.js`",
        answer_two="`routes.config`",
        answer_three="`app.module.ts`",
        answer_four="`app-routing.module.ts`",
        solution="`app-routing.module.ts`",
        category="Angular",
        status="Public"
    )

    antq11 = TriviaQuestion(
        quiz_id=5,
        question="What is the purpose of Angular services?",
        answer_one="To manage routing",
        answer_two="To define the layout of the application",
        answer_three="To centralize code and data that can be shared across components",
        answer_four="To create animations",
        solution="To centralize code and data that can be shared across components",
        category="Angular",
        status="Public"
    )

    antq12 = TriviaQuestion(
        quiz_id=5,
        question="What is the command to generate a new component in Angular using the Angular CLI?",
        answer_one="`ng add component`",
        answer_two="`ng new component`",
        answer_three="`ng generate component`",
        answer_four="`ng create component`",
        solution="`ng generate component`",
        category="Angular",
        status="Public"
    )

    antq13 = TriviaQuestion(
        quiz_id=5,
        question="In Angular, what is a module?",
        answer_one=" A component that defines the application layout",
        answer_two="A routing configuration",
        answer_three="A central unit for organizing and packaging code",
        answer_four="An Angular directive",
        solution="A central unit for organizing and packaging code",
        category="Angular",
        status="Public"
    )

    antq14 = TriviaQuestion(
        quiz_id=5,
        question="What does AOT stand for in the context of Angular?",
        answer_one="Ahead-of-Time",
        answer_two="Angular Object Type",
        answer_three="All-of-the-Time",
        answer_four="Angular On Target",
        solution="Ahead-of-Time",
        category="Angular",
        status="Public"
    )

    antq15 = TriviaQuestion(
        quiz_id=5,
        question=" In Angular, what is the purpose of the `ngModel` directive?",
        answer_one="To manage routes and navigation",
        answer_two="To define the layout of a page",
        answer_three="To enable two-way data binding for form elements",
        answer_four="To create custom animations",
        solution="To enable two-way data binding for form elements",
        category="Angular",
        status="Public"
    )

    antq16 = TriviaQuestion(
        quiz_id=5,
        question="Which command is used to create a new Angular project using the Angular CLI?",
        answer_one="`ng generate`",
        answer_two="`npm create-angular`",
        answer_three="`ng new`",
        answer_four="`angular create`",
        solution="`ng new`",
        category="Angular",
        status="Public"
    )

    antq17 = TriviaQuestion(
        quiz_id=5,
        question="In Angular, what is the purpose of the `ngFor` directive?",
        answer_one="To handle form submissions",
        answer_two="To define route parameters",
        answer_three="To iterate over elements in an array and create a template for each element",
        answer_four="To define the layout of a component",
        solution="To iterate over elements in an array and create a template for each element",
        category="Angular",
        status="Public"
    )

    antq18 = TriviaQuestion(
        quiz_id=5,
        question="What is the purpose of Angular's Dependency Injection (DI) system?",
        answer_one="To inject external CSS styles into components",
        answer_two="To handle user authentication",
        answer_three="To manage and provide instances of services and other objects to components",
        answer_four="To validate form inputs",
        solution="To manage and provide instances of services and other objects to components",
        category="Angular",
        status="Public"
    )

    antq19 = TriviaQuestion(
        quiz_id=5,
        question="Which language is used for building Angular applications?",
        answer_one="TypeScript",
        answer_two="Python",
        answer_three="Ruby",
        answer_four="Java",
        solution="TypeScript",
        category="Angular",
        status="Public"
    )

    antq20 = TriviaQuestion(
        quiz_id=5,
        question="What is Angular's mechanism for two-way data binding, allowing the synchronization of data between a component class and its template?",
        answer_one="Interpolation",
        answer_two="Property binding",
        answer_three="Event binding",
        answer_four="ngModel",
        solution="ngModel",
        category="Angular",
        status="Public"
    )

    cpptq1 = TriviaQuestion(
        quiz_id=6,
        question="Which of the following data structures falls under the category of a 'dictionary'?",
        answer_one="Hash table",
        answer_two="Hash",
        answer_three="Tree",
        answer_four="Linked list",
        solution="Hash table",
        category="General",
        status="Public"
    )

    cpptq2 = TriviaQuestion(
        quiz_id=6,
        question="What does C++ stand for?",
        answer_one="Common Computer Programming Language",
        answer_two="Centralized Computer Program",
        answer_three="C Plus Plus",
        answer_four="C Plus More",
        solution="C Plus Plus",
        category="C++",
        status="Public"
    )

    cpptq3 = TriviaQuestion(
        quiz_id=6,
        question="In C++, what is the purpose of the `cin` object?",
        answer_one="To write to the console",
        answer_two="To read from the console",
        answer_three="To perform arithmetic  operations",
        answer_four="To declare variables",
        solution="To read from the console",
        category="C++",
        status="Public"
    )

    cpptq4 = TriviaQuestion(
        quiz_id=6,
        question="Which C++ keyword is used to define a class?",
        answer_one="`type`",
        answer_two="`class`",
        answer_three="`define`",
        answer_four="`struct`",
        solution="`class`",
        category="C++",
        status="Public"
    )

    cpptq5 = TriviaQuestion(
        quiz_id=6,
        question="What is the extension of C++ source files?",
        answer_one=".cc",
        answer_two=".cp",
        answer_three=".cpp",
        answer_four=".cplus",
        solution=".cpp",
        category="C++",
        status="Public"
    )

    cpptq6 = TriviaQuestion(
        quiz_id=6,
        question="What is the purpose of the C++ `new` operator?",
        answer_one="To create a new variable",
        answer_two="To allocate memory for a new object",
        answer_three="To increment a variable's value",
        answer_four="To delete an object",
        solution="To allocate memory for a new object",
        category="C++",
        status="Public"
    )

    cpptq7 = TriviaQuestion(
        quiz_id=6,
        question="Which C++ keyword is used to define a constant?",
        answer_one="`static`",
        answer_two="`const`",
        answer_three="`immutable`",
        answer_four="`const`",
        solution="`const`",
        category="C++",
        status="Public"
    )

    cpptq8 = TriviaQuestion(
        quiz_id=6,
        question="In C++, what is operator overloading used for?",
        answer_one="To create custom operators",
        answer_two="To overload memory allocation",
        answer_three="To define multiple functions with the same name",
        answer_four="To overload the computer's CPU”",
        solution="To create custom operators",
        category="C++",
        status="Public"
    )

    cpptq9 = TriviaQuestion(
        quiz_id=6,
        question="What is the C++ standard library container used to store elements in a sorted order?",
        answer_one="`set`",
        answer_two="`list`",
        answer_three="`vector`",
        answer_four="`array`",
        solution="`set`",
        category="C++",
        status="Public"
    )

    cpptq10 = TriviaQuestion(
        quiz_id=6,
        question="What is the process of converting a class object to a data type that can be transmitted or stored called in C++?",
        answer_one="Serialization",
        answer_two="Deserialization",
        answer_three="Typification",
        answer_four="Objectification",
        solution="Serialization",
        category="C++",
        status="Public"
    )

    cpptq11 = TriviaQuestion(
        quiz_id=6,
        question="Which C++ keyword is used to create an instance of a class?",
        answer_one="`new`",
        answer_two="`instance`",
        answer_three="`create`",
        answer_four="`class`",
        solution="`new`",
        category="C++",
        status="Public"
    )

    cpptq12 = TriviaQuestion(
        quiz_id=6,
        question="In C++, what is the purpose of the `static` keyword when applied to a class member?",
        answer_one="It makes the member accessible only within the class",
        answer_two="It indicates the member is constant and unchangeable",
        answer_three="It makes the member a global variable",
        answer_four="It shares the member among all instances of the class",
        solution="It shares the member among all instances of the class",
        category="C++",
        status="Public"
    )

    cpptq13 = TriviaQuestion(
        quiz_id=6,
        question="Which C++ feature allows a function to call itself?",
        answer_one="Inheritance",
        answer_two="Overloading",
        answer_three="Polymorphism",
        answer_four="Recursion",
        solution="Recursion",
        category="C++",
        status="Public"
    )

    cpptq14 = TriviaQuestion(
        quiz_id=6,
        question="What does the C++ `sizeof` operator return?",
        answer_one="The number of elements in an array",
        answer_two="The size of a data type in bytes",
        answer_three="The sum of two numbers",
        answer_four="The current date and time",
        solution="The size of a data type in bytes",
        category="C++",
        status="Public"
    )

    cpptq15 = TriviaQuestion(
        quiz_id=6,
        question="Which header file should you include to perform file input and output operations in C++?",
        answer_one="`<io.h>`",
        answer_two="`<fileio.h>`",
        answer_three="`inputoutput.h`",
        answer_four="`<fstream>`",
        solution="`<fstream>`",
        category="C++",
        status="Public"
    )

    cpptq16 = TriviaQuestion(
        quiz_id=6,
        question="What is the purpose of the C++ `delete` operator?",
        answer_one="To remove a file from the filesystem",
        answer_two="“To deallocate memory for an object created with `new`",
        answer_three="To delete a class definition",
        answer_four="To delete a line of code from a program",
        solution="“To deallocate memory for an object created with `new`",
        category="C++",
        status="Public"
    )

    cpptq17 = TriviaQuestion(
        quiz_id=6,
        question="What does CI/CD stand for in the context of software deployment?",
        answer_one="Continuous Integration / Continuous Delivery",
        answer_two="Continuous Improvement / Continuous Documentation",
        answer_three="Code Inspection / Code Deployment",
        answer_four="Collaborative Integration / Coordinated Deployment",
        solution="Continuous Integration / Continuous Delivery",
        category="General",
        status="Public"
    )

    cpptq18 = TriviaQuestion(
        quiz_id=6,
        question="Which of the following is not a valid C++ data type?",
        answer_one="`int`",
        answer_two="`float`",
        answer_three="`decimal`",
        answer_four="`double`",
        solution="`decimal`",
        category="C++",
        status="Public"
    )

    cpptq19 = TriviaQuestion(
        quiz_id=6,
        question="In C++, what is the scope resolution operator used for?",
        answer_one="To define classes",
        answer_two="To access static class members",
        answer_three="To declare variables",
        answer_four="To create loops",
        solution="To access static class members",
        category="C++",
        status="Public"
    )

    cpptq20 = TriviaQuestion(
        quiz_id=6,
        question="What is a function template in C++?",
        answer_one="A template used for creating objects",
        answer_two="A template used for defining classes",
        answer_three="A template used for generating random numbers",
        answer_four="A template used for defining functions that work with multiple data types",
        solution="A template used for defining functions that work with multiple data types",
        category="C++",
        status="Public"
    )

    cshtq1 = TriviaQuestion(
        quiz_id=7,
        question="What is the primary goal of continuous integration (CI) in software development?",
        answer_one="To eliminate the need for testing",
        answer_two="To ensure code is never changed",
        answer_three="To automatically build, test, and integrate code changes into a shared repository",
        answer_four="To slow down the software development process",
        solution="To automatically build, test, and integrate code changes into a shared repository",
        category="General",
        status="Public"
    )

    cshtq2 = TriviaQuestion(
        quiz_id=7,
        question="What does C# stand for?",
        answer_one="Common Sense",
        answer_two="Computer Software",
        answer_three="C Sharp",
        answer_four="Coding Style",
        solution="C Sharp",
        category="CSharp",
        status="Public"
    )

    cshtq3 = TriviaQuestion(
        quiz_id=7,
        question="In C#, which keyword is used to declare a variable that won't change after initialization?",
        answer_one="`readonly`",
        answer_two="`constant`",
        answer_three="`var`",
        answer_four="`static`",
        solution="`readonly`",
        category="CSharp",
        status="Public"
    )

    cshtq4 = TriviaQuestion(
        quiz_id=7,
        question="What is the purpose of the C# `using` directive?",
        answer_one="To include namespaces in your C# code",
        answer_two="To create custom exceptions",
        answer_three="To define class properties",
        answer_four="To declare variables",
        solution=" To include namespaces in your C# code",
        category="CSharp",
        status="Public"
    )

    cshtq5 = TriviaQuestion(
        quiz_id=7,
        question="What is the extension for C# source files?",
        answer_one=".cs",
        answer_two=".csharp",
        answer_three=".csfile",
        answer_four=".csharpcode",
        solution=".cs",
        category="CSharp",
        status="Public"
    )

    cshtq6 = TriviaQuestion(
        quiz_id=7,
        question="Which C# data type is used to store whole numbers?",
        answer_one="`float`",
        answer_two="`double`",
        answer_three="`int`",
        answer_four="`char`",
        solution="`int`",
        category="CSharp",
        status="Public"
    )

    cshtq7 = TriviaQuestion(
        quiz_id=7,
        question="In C#, what does the `var` keyword represent?",
        answer_one="A constant value",
        answer_two="A variable with an unknown data type",
        answer_three="A variable that cannot be changed",
        answer_four="A static variable",
        solution="A variable with an unknown data type",
        category="CSharp",
        status="Public"
    )

    cshtq8 = TriviaQuestion(
        quiz_id=7,
        question="Which C# access modifier makes a class member or class accessible from any other assembly?”",
        answer_one="`public`",
        answer_two="`private`",
        answer_three="`protected`",
        answer_four="`internal`",
        solution="`public`",
        category="CSharp",
        status="Public"
    )

    cshtq9 = TriviaQuestion(
        quiz_id=7,
        question="What is the C# language feature that allows you to define a class based on an existing class but with additional or modified functionality?",
        answer_one="Polymorphism",
        answer_two="Inheritance",
        answer_three="Encapsulation",
        answer_four="Abstraction",
        solution="Inheritance",
        category="CSharp",
        status="Public"
    )

    cshtq10 = TriviaQuestion(
        quiz_id=7,
        question="In C#, what is the purpose of the `static` keyword when applied to a class member?",
        answer_one="It prevents the member from being accessed outside the class",
        answer_two="It makes the member a constant value",
        answer_three="It allows the member to be accessed without creating an instance of the class",
        answer_four="It enforces thread safety for the member",
        solution="It allows the member to be accessed without creating an instance of the class",
        category="CSharp",
        status="Public"
    )

    cshtq11 = TriviaQuestion(
        quiz_id=7,
        question="Which C# data type is used to represent a single character?",
        answer_one="`string`",
        answer_two="`char`",
        answer_three="`int`",
        answer_four="`bool`",
        solution="`char`",
        category="CSharp",
        status="Public"
    )

    cshtq12 = TriviaQuestion(
        quiz_id=7,
        question="In C#, which operator is used to test if two values are equal and of the same data type?",
        answer_one="`==`",
        answer_two="`=`",
        answer_three="`!=`",
        answer_four="`equals()`",
        solution="`==`",
        category="CSharp",
        status="Public"
    )

    cshtq13 = TriviaQuestion(
        quiz_id=7,
        question="What does the C# `finally` block in a try-catch-finally statement do?",
        answer_one="It contains the code to be executed when an exception is thrown",
        answer_two="It always gets executed, whether an exception is thrown or not",
        answer_three="It defines the try part of the statement”",
        answer_four="It specifies the data type of the catch block",
        solution="It always gets executed, whether an exception is thrown or not",
        category="CSharp",
        status="Public"
    )

    cshtq14 = TriviaQuestion(
        quiz_id=7,
        question="Which C# collection type allows you to store key-value pairs?",
        answer_one="`List`",
        answer_two="`Dictionary`",
        answer_three="`Array`",
        answer_four="`Queue`",
        solution="`Dictionary`",
        category="CSharp",
        status="Public"
    )

    cshtq15 = TriviaQuestion(
        quiz_id=7,
        question="What is the purpose of the C# `async` and `await` keywords?”",
        answer_one="To define classes and objects",
        answer_two="To handle exceptions",
        answer_three="To create background threads",
        answer_four="To write asynchronous code and manage asynchronous operations",
        solution="To write asynchronous code and manage asynchronous operations",
        category="CSharp",
        status="Public"
    )

    cshtq16 = TriviaQuestion(
        quiz_id=7,
        question="In C#, what is the purpose of the `get` and `set` keywords in a property declaration?",
        answer_one="To specify the data type of the property",
        answer_two="To define methods that get and set the property value",
        answer_three="To declare a constant property",
        answer_four="To indicate a read-only property",
        solution="To define methods that get and set the property value",
        category="CSharp",
        status="Public"
    )

    cshtq17 = TriviaQuestion(
        quiz_id=7,
        question="In C#, what is the purpose of an interface?",
        answer_one="To define a blueprint for a class, specifying its fields and methods",
        answer_two="To create an instance of a class",
        answer_three="To store and manipulate data",
        answer_four="To declare properties and events",
        solution="To define a blueprint for a class, specifying its fields and methods",
        category="CSharp",
        status="Public"
    )

    cshtq18 = TriviaQuestion(
        quiz_id=7,
        question="Which of the following access modifiers in C# restricts access to the current assembly?",
        answer_one="`public`",
        answer_two="`private`",
        answer_three="`protected`",
        answer_four="`internal`",
        solution="`internal`",
        category="CSharp",
        status="Public"
    )

    cshtq19 = TriviaQuestion(
        quiz_id=7,
        question="In C#, which type of loop is used for iterating over elements in a collection or array?",
        answer_one="`for` loop",
        answer_two="`while` loop",
        answer_three="`do-while` loop",
        answer_four="`foreach` loop",
        solution="`foreach` loop",
        category="CSharp",
        status="Public"
    )

    cshtq20 = TriviaQuestion(
        quiz_id=7,
        question="What is the primary purpose of the C# try-catch block?",
        answer_one="To execute code repeatedly",
        answer_two="To define classes",
        answer_three="To handle exceptions and prevent program crashes",
        answer_four="To create asynchronous methods",
        solution="To handle exceptions and prevent program crashes",
        category="CSharp",
        status="Public"
    )

    gk1tq1 = TriviaQuestion(
        quiz_id=1,
        question="Design is one step in the process of software development, in which the requirements for building the software are gathered and analyzed in order to create an architectural model.",
        answer_one="True",
        answer_two="False",
        solution="True",
        category="General",
        status="Public"
    )

    gk1tq2 = TriviaQuestion(
        quiz_id=1,
        question="According to Pressman, what is design?",
        answer_one="Information driven",
        answer_two="Coding driven",
        answer_three="Architecture driven",
        answer_four="Testing driven",
        solution="Information driven",
        category="General",
        status="Public"
    )

    gk1tq3 = TriviaQuestion(
        quiz_id=1,
        question="Which of these are characteristics of a strong design?",
        answer_one="Modular",
        answer_two="High Cohesion",
        answer_three="Low Coupling",
        answer_four="All of these",
        solution="All of these",
        category="General",
        status="Public"
    )

    gk1tq4 = TriviaQuestion(
        quiz_id=1,
        question="When we think about software architecture, we should think of it as the same thing as the end product - functioning software.",
        answer_one="True",
        answer_two="False",
        solution="False",
        category="General",
        status="Public"
    )

    gk1tq5 = TriviaQuestion(
        quiz_id=1,
        question="The two levels of design for software architecture are:",
        answer_one="Coding design and architectural design",
        answer_two="Architectural design and XP design",
        answer_three="Pattern design and data design",
        answer_four="Data design and architectural design",
        solution="Data design and architectural design",
        category="General",
        status="Public"
    )

    gk1tq6 = TriviaQuestion(
        quiz_id=1,
        question="In software engineering, what does KDD stand for?",
        answer_one="Knowledge discovery in databases",
        answer_two="Knowledge development in design",
        answer_three="Knowledge distortion of design",
        answer_four="Knowledge detection of databases",
        solution="Knowledge discovery in databases",
        category="General",
        status="Public"
    )

    gk1tq7 = TriviaQuestion(
        quiz_id=1,
        question="Which of these is an example of an archetype?",
        answer_one="All of these",
        answer_two="Actors",
        answer_three="Architectural style",
        answer_four="Node",
        solution="Node",
        category="General",
        status="Public"
    )

    gk1tq8 = TriviaQuestion(
        quiz_id=1,
        question="In software engineering, what does ATAM stand for?",
        answer_one="Architecture trade-off analysis method",
        answer_two="Application texture architectural method",
        answer_three="Architecture type analysis method",
        answer_four="Architecture type analysis management",
        solution="Architecture trade-off analysis method",
        category="General",
        status="Public"
    )

    gk1tq9 = TriviaQuestion(
        quiz_id=1,
        question="To check the complexity of an architecture, what could a programmer use?",
        answer_one="Coupling",
        answer_two="Dependencies",
        answer_three="Architecture testing",
        answer_four="Beta testing",
        solution="Dependencies",
        category="General",
        status="Public"
    )

    gk1tq10 = TriviaQuestion(
        quiz_id=1,
        question="What is the use of an Architectural Description Language (ADL)?",
        answer_one="Codes the architecture into desired programming language",
        answer_two="Describes how to design the software in a specified language",
        answer_three="Helps design the language in which the software should be built",
        answer_four="Provides syntax for describing a software architecture",
        solution="Provides syntax for describing a software architecture",
        category="General",
        status="Public"
    )

    gk1tq11 = TriviaQuestion(
        quiz_id=1,
        question="Which of these is NOT a common SDLC model?",
        answer_one="Agile",
        answer_two="Waterfall",
        answer_three="DevOps",
        answer_four="REST",
        solution="REST",
        category="General",
        status="Public"
    )

    gk1tq12 = TriviaQuestion(
        quiz_id=1,
        question="What does SDLC stand for?",
        answer_one="Software Development Life Cycle",
        answer_two="Single Development Line Citation",
        answer_three="String Delineation Line Cycle",
        answer_four="Several Deep Little Cuts",
        solution="Software Development Life Cycle",
        category="General",
        status="Public"
    )

    gk1tq13 = TriviaQuestion(
        quiz_id=1,
        question="What does DRY stand for?",
        answer_one="Don't Repeat Yourself",
        answer_two="Don't Read Yourself",
        answer_three="Don't Redesign Yourself",
        answer_four="Don't Restrict Yourself",
        solution="Don't Repeat Yourself",
        category="General",
        status="Public"
    )

    gk1tq14 = TriviaQuestion(
        quiz_id=1,
        question="Which of these is NOT one of the five SOLID principles in object-oriented design?",
        answer_one="Single Responsibility Principle",
        answer_two="Interface Segregation",
        answer_three="Liskov Substitution",
        answer_four="Object Permanance",
        solution="Object Permanance",
        category="General",
        status="Public"
    )

    gk1tq15 = TriviaQuestion(
        quiz_id=1,
        question="What is the difference between polymorphism and inheritance?",
        answer_one="Polymorphism is an 'is-a' relationship, while inheritance is a way to interact with objects of a different class using a common interface",
        answer_two="Inheritance is an 'is-a' relationship, while polymorphism is a way to interact with objects of a different class using a common interface",
        answer_three="Neither of the above",
        solution="Inheritance is an 'is-a' relationship, while polymorphism is a way to interact with objects of a different class using a common interface",
        category="General",
        status="Public"
    )

    gk1tq16 = TriviaQuestion(
        quiz_id=1,
        question="What does API stand for?",
        answer_one="Advanced Programming Instruction",
        answer_two="Application Process Integration",
        answer_three="Application Programming Interface",
        answer_four="Automated Programming Interface",
        solution="Application Programming Interface",
        category="General",
        status="Public"
    )

    gk1tq17 = TriviaQuestion(
        quiz_id=1,
        question="What is the difference between authentication and authorization?",
        answer_one="Authorization verifies the identity of a user, while authentication determines what actions they are allow to perform once authorized",
        answer_two="Authentication verifies the identity of a user, while authorization determines what actions they are allow to perform once authenticated",
        answer_three="Neither of the above",
        solution="Authentication verifies the identity of a user, while authorization determines what actions they are allow to perform once authenticated",
        category="General",
        status="Public"
    )

    gk1tq18 = TriviaQuestion(
        quiz_id=1,
        question="What is the purpose of the HTTP status code 404?",
        answer_one="Indicates that the requested resource was not found on the server",
        answer_two="Indicates an internal server error",
        answer_three="Indicates a successful POST action",
        answer_four="Indicates that the server is redirecting",
        solution="Indicates that the requested resource was not found on the server",
        category="General",
        status="Public"
    )

    gk1tq19 = TriviaQuestion(
        quiz_id=1,
        question="Which of these are NOT a characteristic of a RESTful API?",
        answer_one="Stateless communication",
        answer_two="Resource-based URLs",
        answer_three="Use of HTTP methods",
        answer_four="JavaScript based server",
        solution="JavaScript based server",
        category="General",
        status="Public"
    )

    gk1tq20 = TriviaQuestion(
        quiz_id=1,
        question="The CAP theorem states that in a distributed system, you can have at most two of the three following guarantees:",
        answer_one="Capability, Architecture, Patterns",
        answer_two="Consistency, Availability, and Partition Tolerance",
        answer_three="Calibration, Applicability, and Pagination",
        answer_four="None of the above",
        solution="Consistency, Availability, and Partition Tolerance",
        category="General",
        status="Public"
    )

    gk2tq1 = TriviaQuestion(
        quiz_id=2,
        question="A coder who can develop both client-side and server-side software is known as a full-___ developer?",
        answer_one="Heap",
        answer_two="Stack",
        answer_three="Queue",
        answer_four="Loop",
        solution="Stack",
        category="General",
        status="Public"
    )

    gk2tq2 = TriviaQuestion(
        quiz_id=2,
        question="The “Big Four” in the tech industry are Google (Alphabet), Apple, Meta (Facebook), and Amazon. Which corporation known for computers, software, and Bill Gates, is sometimes added to form the “Big Five” (or GAMAF)?",
        answer_one="Adobe",
        answer_two="Unity",
        answer_three="Microsoft",
        answer_four="Sony",
        solution="Microsoft",
        category="General",
        status="Public"
    )

    gk2tq3 = TriviaQuestion(
        quiz_id=2,
        question="A vector (an indexed, growable list) would most likely be implemented on top of which of these structures?",
        answer_one="Hash table",
        answer_two="Stack",
        answer_three="Tree",
        answer_four="Linked list",
        solution="Linked list",
        category="General",
        status="Public"
    )

    gk2tq4 = TriviaQuestion(
        quiz_id=2,
        question="If you have an empty queue that can contain letters, and you enqueue (in order), these letters into it, what order will they be in when you dequeue them? 'm', 'a', 'r'",
        answer_one="'m', 'a', 'r'",
        answer_two="'a', 'r', 'm'",
        answer_three="'r', 'a', 'm'",
        answer_four="There is no way to tell",
        solution="'m', 'a', 'r'",
        category="General",
        status="Public"
    )

    gk2tq5 = TriviaQuestion(
        quiz_id=2,
        question="Which of the following could best be described by the graph structure?",
        answer_one="Given a word, finding its definition",
        answer_two="Algebraic problems",
        answer_three="Roads connecting cities",
        answer_four="A GUI (Graphical User Interface)",
        solution="Roads connecting cities",
        category="General",
        status="Public"
    )

    gk2tq6 = TriviaQuestion(
        quiz_id=2,
        question="If you have a sorted, balanced binary tree with 15 elements in it, how many steps, maximum, will it take you to decide whether an element is present in the tree?",
        answer_one="Four",
        answer_two="Fifteen",
        answer_three="Three",
        answer_four="Depends on the computer",
        solution="Four",
        category="General",
        status="Public"
    )

    gk2tq7 = TriviaQuestion(
        quiz_id=2,
        question="Modern filesystems, like ReiserFS and XFS, use which structure to organize their data for efficient access?",
        answer_one="B+Trees",
        answer_two="Tables",
        answer_three="B-Trees",
        answer_four="Lists",
        solution="B+Trees",
        category="General",
        status="Public"
    )

    gk2tq8 = TriviaQuestion(
        quiz_id=2,
        question="What is 'Big O' notation used for in algorithm analysis?",
        answer_one="To represent large datasets",
        answer_two="To describe the physical size of objects",
        answer_three="To analyze an algorithm's time or space complexity in relation to input size",
        answer_four="To measure the amount of memory used by an algorithm",
        solution="To analyze an algorithm's time or space complexity in relation to input size",
        category="General",
        status="Public"
    )

    gk2tq9 = TriviaQuestion(
        quiz_id=2,
        question="What is the primary purpose of a shallow copy in programming?",
        answer_one="To create a new object with copies of all its elements, including nested objects",
        answer_two="To copy references to elements in an existing object",
        answer_three="To ensure that an object is not modified by mistake",
        answer_four="To reduce the memory footprint of an object",
        solution="To copy references to elements in an existing object",
        category="General",
        status="Public"
    )

    gk2tq10 = TriviaQuestion(
        quiz_id=2,
        question="Which data structure follows the 'Last-In, First-Out' (LIFO) principle?",
        answer_one="Queue",
        answer_two="Stack",
        answer_three="Linked List",
        answer_four="Heap",
        solution="Stack",
        category="General",
        status="Public"
    )

    gk2tq11 = TriviaQuestion(
        quiz_id=2,
        question="What is the time complexity of searching for an element in a sorted array using binary search?",
        answer_one="O(1)",
        answer_two="O(n)",
        answer_three="O(log n)",
        answer_four="O(n log n)",
        solution="O(log n)",
        category="General",
        status="Public"
    )

    gk2tq12 = TriviaQuestion(
        quiz_id=2,
        question="Which sorting algorithm has the worst-case time complexity of O(n^2) but is often used for its simplicity?",
        answer_one="Quick Sort",
        answer_two="Merge Sort",
        answer_three="Bubble Sort",
        answer_four="Radix Sort",
        solution="Bubble Sort",
        category="General",
        status="Public"
    )

    gk2tq13 = TriviaQuestion(
        quiz_id=2,
        question="In a singly linked list, what is the time complexity to delete a node when its value is given?",
        answer_one="O(1)",
        answer_two="O(n)",
        answer_three="O(log n)",
        answer_four="O(n log n)",
        solution="O(n)",
        category="General",
        status="Public"
    )

    gk2tq14 = TriviaQuestion(
        quiz_id=2,
        question="Which data structure is based on the principle of 'First-In, First-Out' (FIFO)?",
        answer_one="Stack",
        answer_two="Queue",
        answer_three="Binary Tree",
        answer_four="Hash Table",
        solution="Queue",
        category="General",
        status="Public"
    )

    gk2tq15 = TriviaQuestion(
        quiz_id=2,
        question="What data structure is commonly used for implementing a priority queue?",
        answer_one="Linked List",
        answer_two="Queue",
        answer_three="Heap",
        answer_four="Hash Table",
        solution="Heap",
        category="General",
        status="Public"
    )

    gk2tq16 = TriviaQuestion(
        quiz_id=2,
        question="Which searching algorithm divides the search range into three parts and works by comparing the target value with elements at the boundaries of those parts?",
        answer_one="Binary Search",
        answer_two="Linear Search",
        answer_three="Ternary Search",
        answer_four="Depth-First Search",
        solution="Ternary Search",
        category="General",
        status="Public"
    )

    gk2tq17 = TriviaQuestion(
        quiz_id=2,
        question="In a binary tree, what is the maximum number of nodes at depth d (where the root is at depth 0)?",
        answer_one="2^d",
        answer_two="2^(d-1)",
        answer_three="2^(d+1)",
        answer_four="2d",
        solution="2^d",
        category="General",
        status="Public"
    )

    gk2tq18 = TriviaQuestion(
        quiz_id=2,
        question="Which algorithm is used to find the shortest path between nodes in a weighted graph?",
        answer_one="Breadth-First Search (BFS)",
        answer_two="Depth-First Search (DFS)",
        answer_three="Dijkstra's Algorithm",
        answer_four="A* Algorithm",
        solution="Dijkstra's Algorithm",
        category="General",
        status="Public"
    )

    gk2tq19 = TriviaQuestion(
        quiz_id=2,
        question="Which sorting algorithm has an average-case time complexity of O(n log n) and is often considered one of the most efficient general-purpose sorting algorithms?",
        answer_one="Bubble Sort",
        answer_two="Selection Sort",
        answer_three="Insertion Sort",
        answer_four="Merge Sort",
        solution="Merge Sort",
        category="General",
        status="Public"
    )

    gk2tq20 = TriviaQuestion(
        quiz_id=2,
        question="What data structure is used for implementing a typical stack data structure?",
        answer_one="Linked List",
        answer_two="Array",
        answer_three="Queue",
        answer_four="Tree",
        solution="Array",
        category="General",
        status="Public"
    )

    gk3tq1 = TriviaQuestion(
        quiz_id=3,
        question="What is the difference between horizontal and vertical scaling?",
        answer_one="Vertical scaling adds more machines or nodes to a system, while horizontal scaling involves adding more resources (CPU, RAM) to a single machine.",
        answer_two="Horizontal scaling adds more machines or nodes to a system, while vertical scaling involves adding more resources (CPU, RAM) to a single machine.",
        solution="Horizontal scaling adds more machines or nodes to a system, while vertical scaling involves adding more resources (CPU, RAM) to a single machine.",
        category="General",
        status="Public"
    )

    gk3tq2 = TriviaQuestion(
        quiz_id=3,
        question="What is the purpose of a load balancer in a distributed system?",
        answer_one="To add complexity to the system",
        answer_two="To centralize all incoming traffic",
        answer_three="To distribute incoming network traffic across multiple servers",
        answer_four="To secure the network",
        solution="To distribute incoming network traffic across multiple servers",
        category="General",
        status="Public"
    )

    gk3tq3 = TriviaQuestion(
        quiz_id=3,
        question="Which of the following accurately describes the difference between a 'shallow copy' and a 'deep copy'?",
        answer_one="A deep copy of an object copies references to its elements, while a shallow copy creates a new object with copies of all its elements, including nested objects.",
        answer_two="A shallow copy of an object copies references to its elements, while a deep copy creates a new object with copies of all its elements, including nested objects.",
        answer_three="Neither - they're essentially the same",
        solution="A shallow copy of an object copies references to its elements, while a deep copy creates a new object with copies of all its elements, including nested objects.",
        category="General",
        status="Public"
    )

    gk3tq4 = TriviaQuestion(
        quiz_id=3,
        question="Which of these is NOT a popular package manager?",
        answer_one="Npm",
        answer_two="Babel",
        answer_three="Pip",
        answer_four="Maven",
        solution="Babel",
        category="General",
        status="Public"
    )

    gk3tq5 = TriviaQuestion(
        quiz_id=3,
        question="What is the primary goal of software testing?",
        answer_one="To eliminate all bugs from the software",
        answer_two="To ensure the software meets the requirements",
        answer_three="To speed up the software development process",
        answer_four="To reduce the cost of software development",
        solution="To ensure the software meets the requirements",
        category="General",
        status="Public"
    )

    gk3tq6 = TriviaQuestion(
        quiz_id=3,
        question="What does 'CI' stand for in the context of software development?",
        answer_one="Continuous Integration",
        answer_two="Complete Integration",
        answer_three="Continuous Improvement",
        answer_four="Central Integration",
        solution="Continuous Integration",
        category="General",
        status="Public"
    )

    gk3tq7 = TriviaQuestion(
        quiz_id=3,
        question="Which of the following is NOT a version control system?",
        answer_one="Git",
        answer_two="Subversion (SVN)",
        answer_three="Mercurial",
        answer_four="Java",
        solution="Java",
        category="General",
        status="Public"
    )

    gk3tq8 = TriviaQuestion(
        quiz_id=3,
        question="What is the purpose of a code review?",
        answer_one="To write new code",
        answer_two="To find and fix bugs",
        answer_three="To provide project management",
        answer_four="To document the code",
        solution="To find and fix bugs",
        category="General",
        status="Public"
    )

    gk3tq9 = TriviaQuestion(
        quiz_id=3,
        question="What is the main advantage of using dependency injection in software design?",
        answer_one="It reduces code complexity",
        answer_two="It improves performance",
        answer_three="It makes code easier to test and maintain",
        answer_four="It eliminates the need for unit testing",
        solution="It makes code easier to test and maintain",
        category="General",
        status="Public"
    )

    gk3tq10 = TriviaQuestion(
        quiz_id=3,
        question="What is the purpose of a CDN in web development?",
        answer_one="To manage customer data",
        answer_two="To improve code readability",
        answer_three="To optimize web page loading speed",
        answer_four="To encrypt network traffic",
        solution="To optimize web page loading speed",
        category="General",
        status="Public"
    )

    gk3tq11 = TriviaQuestion(
        quiz_id=3,
        question="Which HTTP status code indicates a successful response in most cases?",
        answer_one="200",
        answer_two="404",
        answer_three="500",
        answer_four="302",
        solution="200",
        category="General",
        status="Public"
    )

    gk3tq12 = TriviaQuestion(
        quiz_id=3,
        question="Which of the following is NOT a software development methodology?",
        answer_one="Waterfall",
        answer_two="Scrum",
        answer_three="Agile",
        answer_four="Spiral",
        solution="Agile",
        category="General",
        status="Public"
    )

    gk3tq13 = TriviaQuestion(
        quiz_id=3,
        question="What is the primary advantage of using a NoSQL database over a traditional relational database?",
        answer_one="Better support for complex queries",
        answer_two="Strong ACID compliance",
        answer_three="Horizontal scalability",
        answer_four="Simplicity of schema design",
        solution="Horizontal scalability",
        category="General",
        status="Public"
    )

    gk3tq14 = TriviaQuestion(
        quiz_id=3,
        question="What is a mutex in multi-threaded programming?",
        answer_one="A data structure for caching",
        answer_two="A mechanism for avoiding deadlocks",
        answer_three="A synchronization primitive for controlling access to shared resources",
        answer_four="A lightweight thread",
        solution="A synchronization primitive for controlling access to shared resources",
        category="General",
        status="Public"
    )

    gk3tq15 = TriviaQuestion(
        quiz_id=3,
        question="Which of the following is NOT an advantage of using containers like Docker?",
        answer_one="Portability",
        answer_two="Isolation",
        answer_three="High resource utilization",
        answer_four="Scalability",
        solution="High resource utilization",
        category="General",
        status="Public"
    )

    gk3tq16 = TriviaQuestion(
        quiz_id=3,
        question="What is the primary goal of A/B testing in web development?",
        answer_one="To find and fix security vulnerabilities",
        answer_two="To compare two versions of a webpage or application to determine which performs better",
        answer_three="To automate testing of user interfaces",
        answer_four="To test the compatibility of an application with multiple browsers",
        solution="To compare two versions of a webpage or application to determine which performs better",
        category="General",
        status="Public"
    )


    gk3tq17 = TriviaQuestion(
        quiz_id=3,
        question="What is the purpose of a memory profiler in software development?",
        answer_one="To optimize network traffic",
        answer_two="To track memory usage and identify memory leaks",
        answer_three="To monitor CPU performance",
        answer_four="To generate code documentation",
        solution="To track memory usage and identify memory leaks",
        category="General",
        status="Public"
    )

    gk3tq18 = TriviaQuestion(
        quiz_id=3,
        question="Which of the following statements about the Single Responsibility Principle in SOLID is true?",
        answer_one="It encourages a class to have multiple reasons to change",
        answer_two="It suggests that a class should have only one method",
        answer_three="It advises against writing code that performs multiple tasks",
        answer_four="It is not related to object-oriented programming",
        solution="It advises against writing code that performs multiple tasks",
        category="General",
        status="Public"
    )

    gk3tq19 = TriviaQuestion(
        quiz_id=3,
        question="Which of the following is an Integrated Development Environment (IDE)?",
        answer_one="Python",
        answer_two="Visual Studio Code",
        answer_three="Git",
        answer_four="HTML",
        solution="Visual Studio Code",
        category="General",
        status="Public"
    )

    gk3tq20 = TriviaQuestion(
        quiz_id=3,
        question="What is the key difference between a library and a framework in software development?",
        answer_one="Frameworks provide pre-written functions, while libraries offer a structured project template",
        answer_two="Libraries are used for web development, while frameworks are used for mobile app development",
        answer_three="Frameworks provide a structured project template, while libraries offer pre-written functions",
        answer_four="There is no difference - the terms are interchangeable",
        solution="Frameworks provide pre-written functions, while libraries offer a structured project template",
        category="General",
        status="Public"
    )

    gk4tq1 = TriviaQuestion(
        quiz_id=4,
        question="What is a race condition in multi-threaded programming?",
        answer_one="A condition where two or more threads cannot execute concurrently",
        answer_two="A condition where two or more threads compete for resources",
        answer_three="A condition where two or more threads share no resources",
        answer_four="A condition where a thread is forced to wait indefinitely",
        solution="A condition where two or more threads compete for resources",
        category="General",
        status="Public"
    )

    gk4tq2 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary purpose of a package manager in software development?",
        answer_one="To manage project deadlines",
        answer_two="To write code documentation",
        answer_three="To install, update, and manage software dependencies",
        answer_four="To enforce coding standards",
        solution="To install, update, and manage software dependencies",
        category="General",
        status="Public"
    )

    gk4tq3 = TriviaQuestion(
        quiz_id=4,
        question="In the context of software development, what does 'DevOps' refer to?",
        answer_one="A programming language",
        answer_two="A software development methodology",
        answer_three="A cultural and technical approach that emphasizes collaboration between development and operations teams",
        answer_four="A code review tool",
        solution="A cultural and technical approach that emphasizes collaboration between development and operations teams",
        category="General",
        status="Public"
    )

    gk4tq4 = TriviaQuestion(
        quiz_id=4,
        question="What is the purpose of a design sprint in the software development process?",
        answer_one="To write code",
        answer_two="To find and fix bugs",
        answer_three="To solve complex problems and validate ideas quickly",
        answer_four="To document the code",
        solution="To solve complex problems and validate ideas quickly",
        category="General",
        status="Public"
    )

    gk4tq5 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary goal of the 'Open-Closed Principle' in SOLID?",
        answer_one="To encourage code modification",
        answer_two="To prevent code extensions",
        answer_three="To make software entities open for modification",
        answer_four="To make software entities closed for extension",
        solution="To make software entities closed for extension",
        category="General",
        status="Public"
    )

    gk4tq6 = TriviaQuestion(
        quiz_id=4,
        question="What does REST stand for in the context of web services?",
        answer_one="Reliable Service Technology",
        answer_two="Remote Execution and Service Transmission",
        answer_three="Representational State Transfer",
        answer_four="Responsive and Efficient Service Transfer",
        solution="Representational State Transfer",
        category="General",
        status="Public"
    )

    gk4tq7 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary purpose of a NoSQL database?",
        answer_one="To ensure strong data consistency",
        answer_two="To provide a fixed schema for data storage",
        answer_three="To handle large volumes of unstructured or semi-structured data",
        answer_four="To ensure data integrity",
        solution="To handle large volumes of unstructured or semi-structured data",
        category="General",
        status="Public"
    )

    gk4tq8 = TriviaQuestion(
        quiz_id=4,
        question="In web development, what does it mean for an application to be stateless?",
        answer_one="The application is always running",
        answer_two="The application retains user data between requests",
        answer_three="Each request from a user contains all necessary information and the server does not retain previous interactions",
        answer_four="The application uses a single server",
        solution="Each request from a user contains all necessary information and the server does not retain previous interactions",
        category="General",
        status="Public"
    )

    gk4tq9 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary purpose of a code profiler in software development?",
        answer_one="To optimize network communication",
        answer_two="To track code execution time and identify performance bottlenecks",
        answer_three="To manage code repositories",
        answer_four="To generate code documentation",
        solution="To track code execution time and identify performance bottlenecks",
        category="General",
        status="Public"
    )

    gk4tq10 = TriviaQuestion(
        quiz_id=4,
        question="In the context of software development, what is a 'fail-fast' design principles?",
        answer_one="A design approach that aims to create software that never fails",
        answer_two="A design approach that avoids error detection",
        answer_three="A design approach that detects and reports errors as early as possible to minimize their impact",
        answer_four="A design approach that encourages slow and cautious development",
        solution="A design approach that detects and reports errors as early as possible to minimize their impact",
        category="General",
        status="Public"
    )

    gk4tq11 = TriviaQuestion(
        quiz_id=4,
        question="Which of the following is an example of a hashing algorithm used for password storage?",
        answer_one="SHA-256",
        answer_two="RSA",
        answer_three="AES",
        answer_four="MD5",
        solution="SHA-256",
        category="General",
        status="Public"
    )

    gk4tq12 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary goal of the Liskov Substitution Principle in SOLID?",
        answer_one="To ensure that objects of derived classes can be subsituted for objects of their base classes without affecting program correctness",
        answer_two="To restrict inheritance in object-oriented programming",
        answer_three="To promote tight coupling between classes",
        answer_four="To discourage code reuse",
        solution="To ensure that objects of derived classes can be subsituted for objects of their base classes without affecting program correctness",
        category="General",
        status="Public"
    )

    gk4tq13 = TriviaQuestion(
        quiz_id=4,
        question="Which of the following HTTP methods is typically used for safe and idempotent operations?",
        answer_one="POST",
        answer_two="GET",
        answer_three="PUT",
        answer_four="DELETE",
        solution="GET",
        category="General",
        status="Public"
    )

    gk4tq14 = TriviaQuestion(
        quiz_id=4,
        question="What does ORM stand for in software development?",
        answer_one="Object Relational Mapping",
        answer_two="Object Resource Modeling",
        answer_three="Object Reference Management",
        answer_four="Object Relocation Mechanism",
        solution="Object Relational Mapping",
        category="General",
        status="Public"
    )

    gk4tq15 = TriviaQuestion(
        quiz_id=4,
        question="Which of the following is NOT a commonly used HTTP status code?",
        answer_one="403",
        answer_two="206",
        answer_three="303",
        answer_four="801",
        solution="801",
        category="General",
        status="Public"
    )

    gk4tq16 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary purpose of a firewall in network security?",
        answer_one="To block all incoming network traffic",
        answer_two="To monitor network performance",
        answer_three="To filter and control network traffic based on a set of security rules",
        answer_four="To encrypt all network communication",
        solution="To filter and control network traffic based on a set of security rules",
        category="General",
        status="Public"
    )

    gk4tq17 = TriviaQuestion(
        quiz_id=4,
        question="In the context of databases, what is an index?",
        answer_one="A list of all tables in a database",
        answer_two="A data structure that improves the speed of data retrieval operations on a database table",
        answer_three="A separate database used for data archiving",
        answer_four="A unique identifier for a database record",
        solution="A data structure that improves the speed of data retrieval operations on a database table",
        category="General",
        status="Public"
    )

    gk4tq18 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary purpose of a web server in the context of web development?",
        answer_one="To design web pages",
        answer_two="To provide a user interface for web applications",
        answer_three="To manage databases",
        answer_four="To serve web content to clients",
        solution="To serve web content to clients",
        category="General",
        status="Public"
    )

    gk4tq19 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary goal of continuous deployment (CD) in software development?",
        answer_one="To automatically deploy code to production without any testing",
        answer_two="To deploy code changes to production as quickly as possible",
        answer_three="To eliminate code reviews",
        answer_four="To delay code deployment to ensure stability",
        solution="To deploy code changes to production as quickly as possible",
        category="General",
        status="Public"
    )

    gk4tq20 = TriviaQuestion(
        quiz_id=4,
        question="What is the primary advantage of using a virtual machine (VM) over containerization in server deployment?",
        answer_one="VMs are more lightweight",
        answer_two="VMs provider stronger isolation between applications",
        answer_three="VMs offer faster startup times",
        answer_four="VMs require less memory",
        solution="VMs provider stronger isolation between applications",
        category="General",
        status="Public"
    )

    jstq1 = TriviaQuestion(
        quiz_id=8,
        question="What are the differences between null and undefined?",
        answer_one="Null is assigned a value, while undefined has no value",
        answer_two="Undefined is assigned a value, while null has no value",
        answer_three="Nothing - they're the same",
        solution="Null is assigned a value, while undefined has no value",
        category="JavaScript",
        status="Public"
    )

    jstq2 = TriviaQuestion(
        quiz_id=8,
        question="What are the differences between == and ===?",
        answer_one="== is tolerant and will not check types and === will check whether both sides are of same type",
        answer_two="=== is tolerant will not check types and == will check whether both sides are of same type",
        answer_three="Nothing - they're the same",
        solution="== is tolerant and will not check types and === will check whether both sides are of same type",
        category="JavaScript",
        status="Public"
    )

    jstq3 = TriviaQuestion(
        quiz_id=8,
        question="What does 'typeof []' evaluate to?",
        answer_one="Array",
        answer_two="Object",
        answer_three="String",
        answer_four="Boolean",
        solution="Object",
        category="JavaScript",
        status="Public"
    )

    jstq4 = TriviaQuestion(
        quiz_id=8,
        question="What is Babel?",
        answer_one="An npm package",
        answer_two="A JavaScript compiler",
        answer_three="A CSS framework",
        answer_four="An environment variable",
        solution="A JavaScript compiler",
        category="JavaScript",
        status="Public"
    )

    jstq5 = TriviaQuestion(
        quiz_id=8,
        question="What is ECMAScript?",
        answer_one="A programming language standard",
        answer_two="A programming language",
        answer_three="An npm package",
        answer_four="A framework",
        solution="A programming language standard",
        category="General",
        status="Public"
    )

    jstq6 = TriviaQuestion(
        quiz_id=8,
        question="What is the most popular implementation of ECMAScript?",
        answer_one="Python",
        answer_two="JavaScript",
        answer_three="C++",
        answer_four="Java",
        solution="JavaScript",
        category="General",
        status="Public"
    )

    jstq7 = TriviaQuestion(
        quiz_id=8,
        question="If you have an empty stack that can contain letters, and you push (in order) these letters onto it, what order will they be in when you pop them off? 't', 'a', 'p'",
        answer_one="'p', 'a', 't'",
        answer_two="'a', 'p', 't'",
        answer_three="'t', 'a', 'p'",
        answer_four="There is no way to tell",
        solution="'p', 'a', 't'",
        category="JavaScript",
        status="Public"
    )

    jstq8 = TriviaQuestion(
        quiz_id=8,
        question="Which of these is true about a set?",
        answer_one="The elements are kept in order",
        answer_two="There are no duplicates",
        answer_three="They can only hold numbers",
        answer_four="All of these",
        solution="There are no duplicates",
        category="JavaScript",
        status="Public"
    )

    jstq9 = TriviaQuestion(
        quiz_id=8,
        question="Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements.",
        answer_one="True",
        answer_two="False",
        solution="True",
        category="JavaScript",
        status="Public"
    )

    jstq10 = TriviaQuestion(
        quiz_id=8,
        question="What is the difference between white-box and black-box testing?",
        answer_one="White-box testing focuses on internal code structures, while black-box testing evaluates the functionality of a system without knowledge of its internal implementation",
        answer_two="Black-box testing focuses on internal code structures, while white-box testing evaluates the functionality of a system without knowledge of its internal implementation",
        answer_three="Neither of the above",
        solution="White-box testing focuses on internal code structures, while black-box testing evaluates the functionality of a system without knowledge of its internal implementation",
        category="General",
        status="Public"
    )

    jstq11 = TriviaQuestion(
        quiz_id=8,
        question="Which of these is a type of microservice?",
        answer_one="External APIs",
        answer_two="Websockets",
        answer_three="AWS",
        answer_four="All of the above",
        solution="All of the above",
        category="General",
        status="Public"
    )

    jstq12 = TriviaQuestion(
        quiz_id=8,
        question="What does 'JWT' stand for in the context of authentication and authorization?",
        answer_one="JavaScript Web Token",
        answer_two="JSON Web Token",
        answer_three="Java Web Token",
        answer_four="JavaScript Web Transfer",
        solution="JSON Web Token",
        category="General",
        status="Public"
    )

    jstq13 = TriviaQuestion(
        quiz_id=8,
        question="What is JavaScript primarily used for in web development?",
        answer_one="Styling web pages",
        answer_two="Server-side scripting",
        answer_three="Client-side scripting",
        answer_four="Database management",
        solution="Client-side scripting",
        category="JavaScript",
        status="Public"
    )

    jstq14 = TriviaQuestion(
        quiz_id=8,
        question="Which keyword is used to declare a variable in JavaScript?",
        answer_one="`v`",
        answer_two="`variable`",
        answer_three="`declare`",
        answer_four="`var`",
        solution="`var`",
        category="JavaScript",
        status="Public"
    )

    jstq15 = TriviaQuestion(
        quiz_id=8,
        question="What does the “DOM” stand for in the context of JavaScript?",
        answer_one="Document Object Model",
        answer_two="Data Object Model",
        answer_three="Design Object Model",
        answer_four="Dynamic Object Manipulation",
        solution="Document Object Model",
        category="JavaScript",
        status="Public"
    )

    jstq16 = TriviaQuestion(
        quiz_id=8,
        question="Which JavaScript function is used to add or append elements to an array?",
        answer_one="`addElement()`",
        answer_two="`appendElement()`",
        answer_three="`push()`",
        answer_four="`addToArray()`",
        solution="`push()`",
        category="JavaScript",
        status="Public"
    )

    jstq17 = TriviaQuestion(
        quiz_id=8,
        question="What will the following JavaScript code output: `console.log(5 + \”5\”)`?",
        answer_one="10",
        answer_two="55",
        answer_three="5 + 5",
        answer_four="Error",
        solution="55",
        category="JavaScript",
        status="Public"
    )

    jstq18 = TriviaQuestion(
        quiz_id=8,
        question="Which of the following is not a valid way to comment in JavaScript?",
        answer_one="`// This is a comment`",
        answer_two="`<!-- This is a comment -->`",
        answer_three="`/* This is a comment */`",
        answer_four="`# This is a comment`",
        solution="`# This is a comment`",
        category="JavaScript",
        status="Public"
    )

    jstq19 = TriviaQuestion(
        quiz_id=8,
        question="How do you check the type of a variable in JavaScript?",
        answer_one="`typeOf(variable)`",
        answer_two="`typeof(variable)`",
        answer_three="`variable.type()`",
        answer_four="`variable.getType()`",
        solution="`typeof(variable)`",
        category="JavaScript",
        status="Public"
    )

    jstq20 = TriviaQuestion(
        quiz_id=8,
        question="What is an example of a JavaScript framework or library for building user interfaces?",
        answer_one="JavaFX",
        answer_two="React",
        answer_three="Django",
        answer_four="Angular",
        solution="React",
        category="JavaScript",
        status="Public"
    )

    jatq1 = TriviaQuestion(
        quiz_id=9,
        question="What is the Java implementation of Python popularly known as?",
        answer_one="JavaPython",
        answer_two="PyJava",
        answer_three="Javathon",
        answer_four="Jython",
        solution="Jython",
        category="Java",
        status="Public"
    )

    jatq2 = TriviaQuestion(
        quiz_id=9,
        question="What is the primary platform for Java application development?",
        answer_one="Android",
        answer_two="Windows",
        answer_three="iOS",
        answer_four="JVM (Java Virtual Machine)",
        solution="JVM (Java Virtual Machine)",
        category="General",
        status="Public"
    )

    jatq3 = TriviaQuestion(
        quiz_id=9,
        question="Which keyword is used to define a constant in Java?",
        answer_one="`final`",
        answer_two="`const`",
        answer_three="`static`",
        answer_four="`var`",
        solution="`final`",
        category="Java",
        status="Public"
    )

    jatq4 = TriviaQuestion(
        quiz_id=9,
        question="What is the purpose of the `public` access modifier in Java?",
        answer_one="It restricts access to the class itself",
        answer_two="It makes a class or member accessible from anywhere",
        answer_three="It makes a class or member accessible within the same package",
        answer_four="It makes a class or member accessible only within the same class",
        solution="It makes a class or member accessible from anywhere",
        category="General",
        status="Public"
    )

    jatq5 = TriviaQuestion(
        quiz_id=9,
        question="What is the Java keyword used to create an instance of a class?",
        answer_one="`new`",
        answer_two="`create`",
        answer_three="`instanceof`",
        answer_four="`object`",
        solution="`new`",
        category="General",
        status="Public"
    )

    jatq6 = TriviaQuestion(
        quiz_id=9,
        question="Which Java data type is used to store single-precision floating-point numbers?",
        answer_one="`float`",
        answer_two="`double`",
        answer_three="`int`",
        answer_four="`char`",
        solution="`float`",
        category="Java",
        status="Public"
    )

    jatq7 = TriviaQuestion(
        quiz_id=9,
        question="In Java, what is the purpose of the `this` keyword?",
        answer_one="It represents the current class instance",
        answer_two="It creates a new object instance",
        answer_three="It points to the parent class",
        answer_four="It defines a constructor",
        solution="It represents the current class instance",
        category="General",
        status="Public"
    )

    jatq8 = TriviaQuestion(
        quiz_id=9,
        question="What is the Java keyword for defining a subclass?",
        answer_one="`superclass`",
        answer_two="`extends`",
        answer_three="`inherits`",
        answer_four="`subclass`",
        solution="`extends`",
        category="General",
        status="Public"
    )

    jatq9 = TriviaQuestion(
        quiz_id=9,
        question="In Java, which access modifier makes a class, method, or variable visible to all classes in the same package, but not outside of it?",
        answer_one="`public`",
        answer_two="`private`",
        answer_three="`protected`",
        answer_four="`default` (package-private)",
        solution="`default` (package-private)",
        category="Java",
        status="Public"
    )

    jatq10 = TriviaQuestion(
        quiz_id=9,
        question="Which collection type in Java does not allow duplicate elements?",
        answer_one="`ArrayList`",
        answer_two="`LinkedList`",
        answer_three="`HashSet`",
        answer_four="`HashMap`",
        solution="`HashSet`",
        category="General",
        status="Public"
    )

    jatq11 = TriviaQuestion(
        quiz_id=9,
        question="In Java, what is the process of converting an object into a byte stream called?",
        answer_one="Deserialization",
        answer_two="Serialization",
        answer_three="Objectification",
        answer_four="Bytecasting",
        solution="Serialization",
        category="General",
        status="Public"
    )

    jatq12 = TriviaQuestion(
        quiz_id=9,
        question="What is the Java keyword used to define a method that belongs to a class rather than to an instance of a class?",
        answer_one="`class`",
        answer_two="`method`",
        answer_three="`static`",
        answer_four="`nonstatic`",
        solution="`static`",
        category="General",
        status="Public"
    )

    jatq13 = TriviaQuestion(
        quiz_id=9,
        question="In Java, what is the purpose of the `NullPointerException`?",
        answer_one="To indicate that a method has been deprecated",
        answer_two="To handle arithmetic operations",
        answer_three="To indicate a situation where a program attempted to access an object or variable that is null",
        answer_four="To represent a generic exception in the Java language",
        solution="To indicate a situation where a program attempted to access an object or variable that is null",
        category="Java",
        status="Public"
    )

    jatq14 = TriviaQuestion(
        quiz_id=9,
        question="Which Java operator is used for string concatenation?",
        answer_one="`+`",
        answer_two="`-`",
        answer_three="`*`",
        answer_four="`/`",
        solution="`+`",
        category="General",
        status="Public"
    )

    jatq15 = TriviaQuestion(
        quiz_id=9,
        question="What is the purpose of the `default` case in a Java `switch` statement?",
        answer_one="It specifies the default value of the variable",
        answer_two="It is required in all `switch` statements",
        answer_three="It contains the code to execute when no case matches",
        answer_four="It defines the default value of a function parameter",
        solution="It contains the code to execute when no case matches",
        category="General",
        status="Public"
    )

    jatq16 = TriviaQuestion(
        quiz_id=9,
        question="Which Java interface allows multiple inheritance of type but not implementation?",
        answer_one="`class`",
        answer_two="`interface`",
        answer_three="`extends`",
        answer_four="`implements`",
        solution="`interface`",
        category="General",
        status="Public"
    )

    jatq17 = TriviaQuestion(
        quiz_id=9,
        question="What is the Java keyword used to create and throw an exception?",
        answer_one="`raise`",
        answer_two="`throw`",
        answer_three="`exception`",
        answer_four="`catch`",
        solution="`throw`",
        category="Java",
        status="Public"
    )

    jatq18 = TriviaQuestion(
        quiz_id=9,
        question="What is a thread pool in multi-threaded programming?",
        answer_one="A data structure used to organize threads in a hierarchy",
        answer_two="A mechanism for preventing race conditions",
        answer_three="A pool of pre-created threads that can be reused to perform tasks",
        answer_four="A thread that is assigned a higher priority in the operating system",
        solution="A pool of pre-created threads that can be reused to perform tasks",
        category="General",
        status="Public"
    )

    jatq19 = TriviaQuestion(
        quiz_id=9,
        question="What is the purpose of the break statement in a Java loop?",
        answer_one="To exit the loop and continue with the next iteration",
        answer_two="To terminate the program",
        answer_three="To skip the current loop iteration and continue with the next one",
        answer_four="To restart the loop from the beginning",
        solution="To exit the loop and continue with the next iteration",
        category="Java",
        status="Public"
    )

    jatq20 = TriviaQuestion(
        quiz_id=9,
        question="In Java, which keyword is used to define a class that cannot be instantiated and is typically used as a base class for other classes?",
        answer_one="`static`",
        answer_two="`final`",
        answer_three="`abstract`",
        answer_four="`sealed`",
        solution="`abstract`",
        category="General",
        status="Public"
    )

    netq1 = TriviaQuestion(
        quiz_id=10,
        question="What is Next.js primarily used for?",
        answer_one="Mobile app development",
        answer_two="Building web applications",
        answer_three="Game development",
        answer_four="Database management",
        solution="Building web applications",
        category="Next",
        status="Public"
    )

    netq2 = TriviaQuestion(
        quiz_id=10,
        question="What does SSR stand for in the context of Next.js?",
        answer_one="Server-Side Rendering",
        answer_two="Single-Page Routing",
        answer_three="Stateless Script Rendering",
        answer_four="Server-Side Routing",
        solution="Server-Side Rendering",
        category="Next",
        status="Public"
    )

    netq3 = TriviaQuestion(
        quiz_id=10,
        question="Which directory in a Next.js project contains the pages of the application?",
        answer_one="`/components`",
        answer_two="`/static`",
        answer_three="`/pages`",
        answer_four="`/src`",
        solution="`/pages`",
        category="Next",
        status="Public"
    )

    netq4 = TriviaQuestion(
        quiz_id=10,
        question="What is the purpose of the `getInitialProps` function in Next.js?",
        answer_one="To initialize the state of a component",
        answer_two="To fetch data and pass it to a component during server-side rendering",
        answer_three="To define the initial layout of a web page",
        answer_four="To create routes in the application",
        solution="To fetch data and pass it to a component during server-side rendering",
        category="Next",
        status="Public"
    )

    netq5 = TriviaQuestion(
        quiz_id=10,
        question="Which routing library is integrated by default in Next.js for handling client-side navigation?",
        answer_one="React Router",
        answer_two="Vue Router",
        answer_three="Reach Router",
        answer_four="Next.js Router",
        solution="React Router",
        category="Next",
        status="Public"
    )

    netq6 = TriviaQuestion(
        quiz_id=10,
        question="What command is used to start a Next.js development server?",
        answer_one="npm start",
        answer_two="node server.js",
        answer_three="next dev",
        answer_four="yarn run build",
        solution="next dev",
        category="Next",
        status="Public"
    )

    netq7 = TriviaQuestion(
        quiz_id=10,
        question="What is the purpose of the _app.js file in a Next.js project?",
        answer_one="To define the routing configuration",
        answer_two="To manage global CSS and layout",
        answer_three="To create API routes",
        answer_four="To specify environment variables",
        solution="To manage global CSS and layout",
        category="Next",
        status="Public"
    )

    netq8 = TriviaQuestion(
        quiz_id=10,
        question="What is the main advantage of using Next.js for server-side rendering?",
        answer_one="Improved client-side routing",
        answer_two="Faster load times for web applications",
        answer_three="Better support for mobile app development",
        answer_four="Enhanced database management",
        solution="Faster load times for web applications",
        category="Next",
        status="Public"
    )

    netq9 = TriviaQuestion(
        quiz_id=10,
        question="Which package manager can be used to manage Next.js projects?",
        answer_one="Bower",
        answer_two="npm",
        answer_three="Pip",
        answer_four="Composer",
        solution="npm",
        category="Next",
        status="Public"
    )

    netq10 = TriviaQuestion(
        quiz_id=10,
        question="What is the purpose of the `getStaticProps` function in Next.js?",
        answer_one="To fetch data at runtime for each request",
        answer_two="To fetch data at build time and pass it as props to a page",
        answer_three="To create dynamic routes for the application",
        answer_four="To define the initial state of a component",
        solution="To fetch data at build time and pass it as props to a page",
        category="Next",
        status="Public"
    )

    netq11 = TriviaQuestion(
        quiz_id=10,
        question="Which of the following is not a valid way to create a new Next.js project?",
        answer_one="npx create-next-app my-app",
        answer_two="next create my-app",
        answer_three="yarn create next-app my-app",
        answer_four="create-next-app my-app",
        solution="next create my-app",
        category="Next",
        status="Public"
    )

    netq12 = TriviaQuestion(
        quiz_id=10,
        question="In Next.js, what is the purpose of the Link component from next/link?",
        answer_one="To define the layout of a page",
        answer_two="To fetch data from an API",
        answer_three="To navigate between pages without a full page reload",
        answer_four="To create API routes",
        solution="To navigate between pages without a full page reload",
        category="Next",
        status="Public"
    )

    netq13 = TriviaQuestion(
        quiz_id=10,
        question="What is the command to build a Next.js application for production?",
        answer_one="next build",
        answer_two="npm build",
        answer_three="npm build",
        answer_four="npm run production",
        solution="next build",
        category="Next",
        status="Public"
    )

    netq14 = TriviaQuestion(
        quiz_id=10,
        question="What is the purpose of the `fallback` attribute in a Next.js dynamic route?",
        answer_one="To specify the background color of a page",
        answer_two="To control the behavior when a page is not found",
        answer_three="To create a route with a dynamic parameter",
        answer_four="To define the layout of a page",
        solution="To control the behavior when a page is not found",
        category="Next",
        status="Public"
    )

    netq15 = TriviaQuestion(
        quiz_id=10,
        question="What is the primary benefit of server-side rendering (SSR) in Next.js?",
        answer_one="Enhanced mobile app performance",
        answer_two="Improved search engine optimization (SEO)",
        answer_three="Better client-side routing",
        answer_four="Faster client-side rendering",
        solution="Improved search engine optimization (SEO)",
        category="Next",
        status="Public"
    )

    netq16 = TriviaQuestion(
        quiz_id=10,
        question="In Next.js, how can you create dynamic routes that match a pattern like `/products/:id`?",
        answer_one="Use a wildcard route like `/products/*`",
        answer_two="Define a separate route for each product ID",
        answer_three="Use regular expressions in the route definition",
        answer_four="Use brackets and a colon, such as `/products/[id]`",
        solution="Use brackets and a colon, such as `/products/[id]`",
        category="Next",
        status="Public"
    )

    netq17 = TriviaQuestion(
        quiz_id=10,
        question="What does 'SSG' stand for in the context of Next.js?",
        answer_one="Server-Side Gaming",
        answer_two="Static Site Generation",
        answer_three="Single Sign-On Gateway",
        answer_four="Server-Side Graphing",
        solution="Static Site Generation",
        category="Next",
        status="Public"
    )

    netq18 = TriviaQuestion(
        quiz_id=10,
        question="Which file is used to define dynamic routes in a Next.js project?",
        answer_one="`routes.js`",
        answer_two="`pages.json`",
        answer_three="`next.config.js`",
        answer_four="`[slug].js`",
        solution="`[slug].js`",
        category="Next",
        status="Public"
    )

    netq19 = TriviaQuestion(
        quiz_id=10,
        question="In Next.js, which hook is used to fetch data on the client side, after the initial page load?",
        answer_one="`useEffect`",
        answer_two="`getStaticProps`",
        answer_three="`getServerSideProps`",
        answer_four="`getInitialProps`",
        solution="`useEffect`",
        category="Next",
        status="Public"
    )

    netq20 = TriviaQuestion(
        quiz_id=10,
        question="How can you redirect users to another page in a Next.js application?",
        answer_one="Using JavaScript's window.location.href",
        answer_two="By defining routes in the `next.config.js` file",
        answer_three="Using the `useRouter` hook from next/router",
        answer_four="By modifying the `.htaccess` file",
        solution="Using the `useRouter` hook from next/router",
        category="Next",
        status="Public"
    )

    pytq1 = TriviaQuestion(
        quiz_id=11,
        question="Who created the Python programming language?",
        answer_one="Bill Joy",
        answer_two="Brian Kernighan",
        answer_three="Larry Wall",
        answer_four="Guido van Rossum",
        solution="Guido van Rossum",
        category="Python",
        status="Public"
    )

    pytq2 = TriviaQuestion(
        quiz_id=11,
        question="Why did the creator of Python choose that name for the programming language?",
        answer_one="The inventor's best friend suggested the name",
        answer_two="The inventor is a fan of Monty Python's Flying Circus",
        answer_three="The inventor was once attacked by a python in the Amazons",
        answer_four="As a kid, the inventor liked to play the snakes-and-ladders game",
        solution="The inventor is a fan of Monty Python's Flying Circus",
        category="Python",
        status="Public"
    )

    pytq3 = TriviaQuestion(
        quiz_id=11,
        question="Which of these languages does Python resemble in its class syntax?",
        answer_one="Perl",
        answer_two="Eiffel",
        answer_three="Smalltalk",
        answer_four="C++",
        solution="C++",
        category="Python",
        status="Public"
    )

    pytq4 = TriviaQuestion(
        quiz_id=11,
        question="Which languages does Python owe its origin to?",
        answer_one="ABC, Eiffel",
        answer_two="Perl, Modula-3",
        answer_three="ABC, Smalltalk",
        answer_four="ABC, Modula-3",
        solution="ABC, Modula-3",
        category="Python",
        status="Public"
    )

    pytq5 = TriviaQuestion(
        quiz_id=11,
        question="Which of these languages have strong support for regular expressions?",
        answer_one="Python, Perl, HTML",
        answer_two="Python, Perl, C",
        answer_three="Python, Perl, Ruby",
        answer_four="Python, Perl, Java",
        solution="Python, Perl, Ruby",
        category="General",
        status="Public"
    )

    pytq6 = TriviaQuestion(
        quiz_id=11,
        question="Which of the following is NOT considered an advantage of the Python programming language?",
        answer_one="Ideally suited for fast and memory intensive tasks like number crunching",
        answer_two="Well suited for the novice as well as the expert",
        answer_three="Object oriented, easily extendable, and highly scalable",
        answer_four="Allows for rapid development reducing software production lifecycles",
        solution="Ideally suited for fast and memory intensive tasks like number crunching",
        category="Python",
        status="Public"
    )

    pytq7 = TriviaQuestion(
        quiz_id=11,
        question="Which of these languages has Python NOT borrowed its features from?",
        answer_one="CLISP (Common Lisp)",
        answer_two="Fortran",
        answer_three="C++",
        answer_four="Java",
        solution="Fortran",
        category="Python",
        status="Public"
    )

    pytq8 = TriviaQuestion(
        quiz_id=11,
        question="When using a heap, which function will give you the parent of the entry with index i?",
        answer_one="Decimal division, i / 2",
        answer_two="Integer division, i / 2",
        answer_three="Multiplication, i * 2",
        answer_four="Multiplication, i * 2 + 1",
        solution="Integer division, i / 2",
        category="General",
        status="Public"
    )

    pytq9 = TriviaQuestion(
        quiz_id=11,
        question="Which of the following is not a Python data type?",
        answer_one="Integer",
        answer_two="Boolean",
        answer_three="Float",
        answer_four="Array",
        solution="Array",
        category="Python",
        status="Public"
    )

    pytq10 = TriviaQuestion(
        quiz_id=11,
        question="What is the purpose of the `if` statement in Python?",
        answer_one="To define a function",
        answer_two="To loop through a list",
        answer_three="To make decisions and execute code conditionally",
        answer_four="To import external libraries",
        solution="To make decisions and execute code conditionally",
        category="Python",
        status="Public"
    )

    pytq11 = TriviaQuestion(
        quiz_id=11,
        question="Which of the following is a valid way to comment a single line in Python?",
        answer_one="`// this is a comment`",
        answer_two="`# This is a comment`",
        answer_three="`<- - This is a comment - ->`",
        answer_four="`/* This is a comment */`",
        solution="`# This is a comment`",
        category="Python",
        status="Public"
    )

    pytq12 = TriviaQuestion(
        quiz_id=11,
        question="What is the primary purpose of a Python `list`?",
        answer_one="To store a single value",
        answer_two="To store key-value pairs",
        answer_three="To store a collection of values",
        answer_four="To store a sequence of characters",
        solution="To store a collection of values",
        category="Python",
        status="Public"
    )

    pytq13 = TriviaQuestion(
        quiz_id=11,
        question="How do you define a function in Python?",
        answer_one="`method myFunction()`",
        answer_two="`define myFunction()`",
        answer_three="`function function()`",
        answer_four="`def myFunction()`",
        solution="`def myFunction()`",
        category="Python",
        status="Public"
    )

    pytq14 = TriviaQuestion(
        quiz_id=11,
        question="What does the `len()` function in Python do?",
        answer_one="Returns the largest number in a list",
        answer_two="Returns the sum of a list",
        answer_three="Returns the length of a sequence or collection",
        answer_four="Return the square root of a number",
        solution="Returns the length of a sequence or collection",
        category="Python",
        status="Public"
    )

    pytq15 = TriviaQuestion(
        quiz_id=11,
        question="Which Python keyword is used to exit a loop prematurely?",
        answer_one="`break`",
        answer_two="`stop`",
        answer_three="`exit`",
        answer_four="`end`",
        solution="`break`",
        category="Python",
        status="Public"
    )

    pytq16 = TriviaQuestion(
        quiz_id=11,
        question="In Python, how can you open a file in read-only mode?",
        answer_one="`open('file.txt', 'r')`",
        answer_two="`open('file.txt', 'w')`",
        answer_three="`open('file.txt', 'a')`",
        answer_four="`open('file.txt', 'x')`",
        solution="`open('file.txt', 'r')`",
        category="Python",
        status="Public"
    )

    pytq17 = TriviaQuestion(
        quiz_id=11,
        question="What is the purpose of the `print()` function in Python?",
        answer_one="To format text",
        answer_two="To define variables",
        answer_three="To execute a function",
        answer_four="To display output to the console",
        solution="To display output to the console",
        category="Python",
        status="Public"
    )

    pytq18 = TriviaQuestion(
        quiz_id=11,
        question="""What is the output of the following Python list comprehension?
        numbers = [1, 2, 3, 4]
        squared = [x * x for x in numbers if x % 2 == 0]
        print(squared)
        """,
        answer_one="`[1, 9, 25]`",
        answer_two="`[4, 16]`",
        answer_three="`[1, 4, 9, 16, 25]`",
        answer_four="`[1, 2, 3, 4, 5]`",
        solution="`[4, 16]`",
        category="Python",
        status="Public"
    )

    pytq19 = TriviaQuestion(
        quiz_id=11,
        question="What does the `super()` function do in Python when used within a class?",
        answer_one="It returns the parent class of the current class",
        answer_two="It is used to call the constructor of the parent class",
        answer_three="It is used to create a new instance of the current class",
        answer_four="It is used to access global variables within the class",
        solution="It is used to call the constructor of the parent class",
        category="Python",
        status="Public"
    )

    pytq20 = TriviaQuestion(
        quiz_id=11,
        question="""Given the code snippet below, what will the `result` variable contain?
        def outer_function(x):
            def inner_function(y):
                return x + y
            return inner_function

        add_five = outer_function(5)
        result = add_five(3)
        """,
        answer_one="`result` will contain the value 8",
        answer_two="`result` will contain the function `inner_function`",
        answer_three="`result` will be undefined (NameError)",
        answer_four="`result` will contain the value 3",
        solution="`result` will contain the value 8",
        category="Python",
        status="Public"
    )

    retq1 = TriviaQuestion(
        quiz_id=12,
        question="Which of the following is used to manage global state in a React application?",
        answer_one="`useState`",
        answer_two="Context API",
        answer_three="Redux",
        answer_four="`useEffect`",
        solution="Context API",
        category="React",
        status="Public"
    )


    retq2 = TriviaQuestion(
        quiz_id=12,
        question="What is a higher order component in React?",
        answer_one="A component that holds other components",
        answer_two="A component held within another component",
        answer_three="A nested HTML structure in the virtual DOM",
        answer_four="A function that takes a component and returns a new component",
        solution="A function that takes a component and returns a new component",
        category="React",
        status="Public"
    )

    retq3 = TriviaQuestion(
        quiz_id=12,
        question="Which of these is NOT an advantage of using ReactJS?",
        answer_one="Easy to integrate with other frameworks(Angular, BackboneJS) since it is only a view library",
        answer_two="Increases the application's performance with Virtual DOM",
        answer_three="It is only a view layer",
        answer_four="JSX makes code is easy to read and write",
        solution="It is only a view layer",
        category="React",
        status="Public"
    )

    retq4 = TriviaQuestion(
        quiz_id=12,
        question="In React, what is the purpose of the `key` prop when rendering a list of elements?",
        answer_one="It defines the styling of each element",
        answer_two="It specifies the index of each element in the list",
        answer_three="It specifies the index of each element in the list",
        answer_four="It determines the order in the list",
        solution="It helps React identify and update the correct elements efficiently",
        category="React",
        status="Public"
    )

    retq5 = TriviaQuestion(
        quiz_id=12,
        question="What is React primarily used for in web development?",
        answer_one="Server-side scripting",
        answer_two="Styling web pages",
        answer_three="Client-side scripting",
        answer_four="Database management",
        solution="Client-side scripting",
        category="React",
        status="Public"
    )

    retq6 = TriviaQuestion(
        quiz_id=12,
        question="What does JSX stand for in React?",
        answer_one="JavaScript Extension",
        answer_two="JavaScript XML",
        answer_three="JavaScript Xcode Syntax",
        answer_four="JavaScript Excess",
        solution="JavaScript XML",
        category="React",
        status="Public"
    )

    retq7 = TriviaQuestion(
        quiz_id=12,
        question="Which lifecycle method is invoked immediately after a component is added to the DOM in React?",
        answer_one="`componentWillMount()`",
        answer_two="`componentDidMount()`",
        answer_three="`componentWillUpdate()`",
        answer_four="`componentDidUpdate()`",
        solution="`componentDidMount()`",
        category="React",
        status="Public"
    )

    retq8 = TriviaQuestion(
        quiz_id=12,
        question="In React, how can you pass data from a parent component to a child component?",
        answer_one="Using the `state` object",
        answer_two="Using the `props` object",
        answer_three="Using the `setState()` method",
        answer_four="Using the `render()` method",
        solution="Using the `props` object",
        category="React",
        status="Public"
    )

    retq9 = TriviaQuestion(
        quiz_id=12,
        question="What is the virtual DOM in React?",
        answer_one="A lightweight database",
        answer_two="A DOM element hidden from the user",
        answer_three="A data structure representing the actual DOM",
        answer_four="A special type of JavaScript object",
        solution="A data structure representing the actual DOM",
        category="React",
        status="Public"
    )

    retq10 = TriviaQuestion(
        quiz_id=12,
        question="Which of the following is NOT a valid way to create a React component?",
        answer_one="`class MyComponent extends React.Component {}`",
        answer_two="`function MyComponent() {}`",
        answer_three="`const MyComponent = React.createComponent()`",
        answer_four="`const MyComponent = () => {}`",
        solution="`const MyComponent = React.createComponent()`",
        category="React",
        status="Public"
    )

    retq11 = TriviaQuestion(
        quiz_id=12,
        question="What is the purpose of the `setState()` method in React?",
        answer_one="To update the component's state",
        answer_two="To render the component",
        answer_three="To retrieve data from an API",
        answer_four="To define component properties",
        solution="To update the component's state",
        category="React",
        status="Public"
    )

    retq12 = TriviaQuestion(
        quiz_id=12,
        question="What is the React Context API used for?",
        answer_one="Managing component styling",
        answer_two="Managing component state",
        answer_three="Handling routing a React application",
        answer_four="Authenticating users",
        solution="Managing component state",
        category="React",
        status="Public"
    )

    retq13 = TriviaQuestion(
        quiz_id=12,
        question="What is the term for a JavaScript object that provides data and behaviors to a React component?",
        answer_one="Function",
        answer_two="Class",
        answer_three="Component",
        answer_four="Module",
        solution="Component",
        category="React",
        status="Public"
    )

    retq14 = TriviaQuestion(
        quiz_id=12,
        question="Which command is used to create a new React application using Create React App (CRA)?",
        answer_one="`npm create-react-app my-app`",
        answer_two="`npx create-react-app my-app`",
        answer_three="`create-react my-app`",
        answer_four="`npm init react-app my-app`",
        solution="`npx create-react-app my-app`",
        category="React",
        status="Public"
    )

    retq15 = TriviaQuestion(
        quiz_id=12,
        question="What is the primary purpose of React's virtual DOM?",
        answer_one="To create animated components",
        answer_two="To optimize database queries",
        answer_three="To improve server-side rendering",
        answer_four="To enhance performance by minimizing DOM manipulation",
        solution="To enhance performance by minimizing DOM manipulation",
        category="React",
        status="Public"
    )

    retq16 = TriviaQuestion(
        quiz_id=12,
        question="In React, what is the role of a 'prop'?",
        answer_one="It's a mechanism for handling asynchronous operations",
        answer_two="It's a named slot for inserting child components",
        answer_three="It's a special function that triggers component updates",
        answer_four="It's a way to pass data from a parent to a child component",
        solution="It's a way to pass data from a parent to a child component",
        category="React",
        status="Public"
    )

    retq17 = TriviaQuestion(
        quiz_id=12,
        question="What is the term for a function that is passed as a prop to a child component in React?",
        answer_one="Prop function",
        answer_two="Callback function",
        answer_three="Event handler",
        answer_four="Ref function",
        solution="Callback function",
        category="React",
        status="Public"
    )

    retq18 = TriviaQuestion(
        quiz_id=12,
        question="In React, what is the purpose of the key prop when rendering a list of components?",
        answer_one="It specifies the text color of each item",
        answer_two="It provides a unique identifier for each list item",
        answer_three="It defines the width and height of each item",
        answer_four="It sets the font size for the list",
        solution="It provides a unique identifier for each list item",
        category="React",
        status="Public"
    )

    retq19 = TriviaQuestion(
        quiz_id=12,
        question="What is the core concept in React that enables the composition of components?",
        answer_one="Inheritance",
        answer_two="Encapsulation",
        answer_three="Reusability",
        answer_four="Component composition",
        solution="Reusability",
        category="React",
        status="Public"
    )

    retq20 = TriviaQuestion(
        quiz_id=12,
        question="In React, what does the componentDidUpdate lifecycle method allow you to do?",
        answer_one="Set the initial state of a component",
        answer_two="Handle asynchronous data fetching",
        answer_three="Perform side effects after a component's props or state change",
        answer_four="Define the component's render method",
        solution="Perform side effects after a component's props or state change",
        category="React",
        status="Public"
    )

    rutq1 = TriviaQuestion(
        quiz_id=13,
        question="What is Rust primarily designed for?",
        answer_one="Mobile app development",
        answer_two="Web development",
        answer_three="Systems programming",
        answer_four="Data analysis",
        solution="Systems programming",
        category="Rust",
        status="Public"
    )

    rutq2 = TriviaQuestion(
        quiz_id=13,
        question="Which company is responsible for developing Rust?",
        answer_one="Microsoft",
        answer_two="Google",
        answer_three="Mozilla",
        answer_four="Apple",
        solution="Mozilla",
        category="Rust",
        status="Public"
    )

    rutq3 = TriviaQuestion(
        quiz_id=13,
        question="What is the primary advantage of Rust's ownership system?",
        answer_one="Automatic memory management",
        answer_two="Manual memory management",
        answer_three="Reduced risk of null pointer errors",
        answer_four="Dynamic typing",
        solution="Reduced risk of null pointer errors",
        category="Rust",
        status="Public"
    )

    rutq4 = TriviaQuestion(
        quiz_id=13,
        question="In Rust, what is the term for a function that cannot be called directly and is only used to build other functions?",
        answer_one="Static function",
        answer_two="Constructor function",
        answer_three="Struct function",
        answer_four="Macro function",
        solution="Macro function",
        category="Rust",
        status="Public"
    )

    rutq5 = TriviaQuestion(
        quiz_id=13,
        question="Which of the following is not a valid Rust data type?",
        answer_one="i32",
        answer_two="bool",
        answer_three="char32",
        answer_four="f64",
        solution="char32",
        category="Rust",
        status="Public"
    )

    rutq6 = TriviaQuestion(
        quiz_id=13,
        question="In Rust, what does the `must` keyword indicate when used with a variable?",
        answer_one="The variable is constant and cannot be changed",
        answer_two="The variable is immutable",
        answer_three="The variable is mutable and can be changed",
        answer_four="The variable is used for loop iterations",
        solution="The variable is mutable and can be changed",
        category="Rust",
        status="Public"
    )

    rutq7 = TriviaQuestion(
        quiz_id=13,
        question="What is Rust's equivalent of a function in other programming languages that is used for error handling?",
        answer_one="Panic",
        answer_two="Option",
        answer_three="Maybe",
        answer_four="Result",
        solution="Result",
        category="Rust",
        status="Public"
    )

    rutq8 = TriviaQuestion(
        quiz_id=13,
        question="What is the primary purpose of a Rust crate?",
        answer_one="To store code comments and documentation",
        answer_two="To manage project dependencies",
        answer_three="To package and share code with others",
        answer_four="To define macros",
        solution="To package and share code with others",
        category="Rust",
        status="Public"
    )

    rutq9 = TriviaQuestion(
        quiz_id=13,
        question="In Rust, what does the `match` keyword do?",
        answer_one="It defines a new function",
        answer_two="It compares a value against a series of patterns and executes code based on the matching pattern",
        answer_three="It converts a value to a string",
        answer_four="It creates a loop",
        solution="It compares a value against a series of patterns and executes code based on the matching pattern",
        category="Rust",
        status="Public"
    )

    rutq10 = TriviaQuestion(
        quiz_id=13,
        question="Which keyword in Rust is used to define a new structure or record?",
        answer_one="`class`",
        answer_two="`struct`",
        answer_three="`type`",
        answer_four="`data`",
        solution="`struct`",
        category="Rust",
        status="Public"
    )

    rutq11 = TriviaQuestion(
        quiz_id=13,
        question="What is Rust's equivalent to a pointer in other programming languages?",
        answer_one="Link",
        answer_two="Address",
        answer_three="Reference",
        answer_four="Marker",
        solution="Reference",
        category="Rust",
        status="Public"
    )

    rutq12 = TriviaQuestion(
        quiz_id=13,
        question="What does RAII stand for in Rust?",
        answer_one="Resource Allocation Is Imminent",
        answer_two="Run As If Installed",
        answer_three="Retrieve After Initialization",
        answer_four="Resource Acquisition Is Initialization",
        solution="Resource Acquisition Is Initialization",
        category="Rust",
        status="Public"
    )

    rutq13 = TriviaQuestion(
        quiz_id=13,
        question=" In Rust, what is the purpose of the `if let` syntax?",
        answer_one="To define a new variable",
        answer_two="To compare two variables for equality",
        answer_three="To match and destructure an enum variant",
        answer_four="To loop through a collection",
        solution="To match and destructure an enum variant",
        category="Rust",
        status="Public"
    )

    rutq14 = TriviaQuestion(
        quiz_id=13,
        question="What is Rust's package manager called?",
        answer_one="Rusty",
        answer_two="Cargo",
        answer_three="Crate",
        answer_four="Cargo.toml",
        solution="Cargo",
        category="Rust",
        status="Public"
    )

    rutq15 = TriviaQuestion(
        quiz_id=13,
        question="What is Rust's primary model for concurrent programming?",
        answer_one="Multithreading",
        answer_two="Multiprocessing",
        answer_three="Green threads ",
        answer_four="Ownership and borrowing",
        solution="Ownership and borrowing",
        category="Rust",
        status="Public"
    )

    rutq16 = TriviaQuestion(
        quiz_id=13,
        question="In software development, what is the purpose of the 'Facade' design pattern?",
        answer_one="To create a simple interface to a complex subsystem",
        answer_two="To restrict access to specific parts of an object",
        answer_three="To manage the creation of objects",
        answer_four="To provide a way to access elements in a collection sequentially",
        solution="To create a simple interface to a complex subsystem",
        category="General",
        status="Public"
    )

    rutq17 = TriviaQuestion(
        quiz_id=13,
        question="What is Rust's memory management system that enforces strict rules about ownership, borrowing, and lifetimes?",
        answer_one="Lifelines",
        answer_two="Managed Memory",
        answer_three="Garbage Collection",
        answer_four="Ownership System",
        solution="Ownership System",
        category="Rust",
        status="Public"
    )

    rutq18 = TriviaQuestion(
        quiz_id=13,
        question="What is the primary purpose of Rust's 'borrowing' system?",
        answer_one="To lend code to other developers",
        answer_two="To allow functions to take ownership of variables",
        answer_three="To enable multiple references to data while maintaining safety",
        answer_four="To prevent any access to data by multiple references",
        solution="To enable multiple references to data while maintaining safety",
        category="Rust",
        status="Public"
    )

    rutq19 = TriviaQuestion(
        quiz_id=13,
        question="What is the role of Rust's ownership system in preventing data races?",
        answer_one="It doesn't prevent data races",
        answer_two=" It enforces strict locking mechanisms",
        answer_three="It ensures that variables are only accessed by one thread at a time",
        answer_four=" It enables data races but provides tools to detect them",
        solution="It ensures that variables are only accessed by one thread at a time",
        category="Rust",
        status="Public"
    )

    rutq20 = TriviaQuestion(
        quiz_id=13,
        question="What is the purpose of Rust's `Option` and `Result` types?",
        answer_one="To define custom data structures",
        answer_two="To handle errors and represent values that may be absent or erroneous",
        answer_three="To implement multithreading",
        answer_four="To declare variables",
        solution="To handle errors and represent values that may be absent or erroneous",
        category="Rust",
        status="Public"
    )


    sqltq1 = TriviaQuestion(
        quiz_id=16,
        question="Which SQL command would you use to retrieve a record or records from the database?",
        answer_one="FIND",
        answer_two="SELECT",
        answer_three="SEARCH",
        answer_four="RETRIEVE",
        solution="SELECT",
        category="SQL",
        status="Public"
    )

    sqltq2 = TriviaQuestion(
        quiz_id=16,
        question="Which SQL command would you use to add a new record (row) to the database?",
        answer_one="ADDROW",
        answer_two="INSERT",
        answer_three="NEWRECORD",
        answer_four="UPDATE",
        solution="INSERT",
        category="SQL",
        status="Public"
    )

    sqltq3 = TriviaQuestion(
        quiz_id=16,
        question="Which SQL command would you use to modify the contents of an existing record (row) in the database?",
        answer_one="INSERT",
        answer_two="UPDATE",
        answer_three="MERGE",
        answer_four="MODIFY",
        solution="UPDATE",
        category="SQL",
        status="Public"
    )

    sqltq4 = TriviaQuestion(
        quiz_id=16,
        question="What does the command: 'TRUNCATE TABLE Sample' do?",
        answer_one="Deletes the table called Sample",
        answer_two="Empties all data (rows) from the table called Sample",
        answer_three="There is no command called Truncate",
        answer_four="Reindexes the rows in the table called Sample",
        solution="Empties all data (rows) from the table called Sample",
        category="SQL",
        status="Public"
    )

    sqltq5 = TriviaQuestion(
        quiz_id=16,
        question="In the following SQL statement, what belongs in the blank?: INSERT INTO ____ VALUES (value1, value2)",
        answer_one="The table name",
        answer_two="The database name",
        answer_three="The column(s) name",
        answer_four="None of the above",
        solution="The table name",
        category="SQL",
        status="Public"
    )

    sqltq6 = TriviaQuestion(
        quiz_id=16,
        question="The ALTER tablename command would be used to...",
        answer_one="Rename the database table",
        answer_two="Add columns to or drop columns from an existing database table",
        answer_three="Create a new table in the database",
        answer_four="None of the above",
        solution="Add columns to or drop columns from an existing database table",
        category="SQL",
        status="Public"
    )

    sqltq7 = TriviaQuestion(
        quiz_id=16,
        question="This aggregate SQL function will return the number of rows in a database table:",
        answer_one="SUM(column_name)",
        answer_two="NUM(column_name)",
        answer_three="MAX(column_name)",
        answer_four="COUNT(column_name) or COUNT(*)",
        solution="COUNT(column_name) or COUNT(*)",
        category="SQL",
        status="Public"
    )

    sqltq8 = TriviaQuestion(
        quiz_id=16,
        question="This is a column with a unique value for each row used to bind data together, across tables, without repeating all of the data in every table:",
        answer_one="Primary Column",
        answer_two="Primary Key",
        answer_three="Index",
        answer_four="None of the above",
        solution="Primary Key",
        category="SQL",
        status="Public"
    )

    sqltq9 = TriviaQuestion(
        quiz_id=16,
        question="This type of JOIN statement will return all the rows from the first table, even if there are no matches in the second table:",
        answer_one="RIGHT JOIN",
        answer_two="LEFT JOIN",
        answer_three="INNER JOIN",
        answer_four="OUTER JOIN",
        solution="LEFT JOIN",
        category="SQL",
        status="Public"
    )

    sqltq10 = TriviaQuestion(
        quiz_id=16,
        question="What rows will the following select statement return?: SELECT * FROM products WHERE ordernumber >= 1000",
        answer_one="All rows in the products table whose order number is greater than 1000",
        answer_two="The first 1000 rows of the product table.",
        answer_three="All rows in the product table whose order number is greater than or equal to 1000",
        answer_four="All rows in the products table whose order number is less than or equal to 1000",
        solution="All rows in the product table whose order number is greater than or equal to 1000",
        category="SQL",
        status="Public"
    )

    sqltq11 = TriviaQuestion(
        quiz_id=16,
        question="What does SQL stand for in the context of databases?",
        answer_one="Structured Query Language",
        answer_two="Simple Query Language",
        answer_three="Scripted Query Language",
        answer_four="Structured Query Logic",
        solution="Structured Query Language",
        category="SQL",
        status="Public"
    )

    sqltq12 = TriviaQuestion(
        quiz_id=16,
        question="Which of the following is an example of a SQL database management system (DBMS)?",
        answer_one="MongoDB",
        answer_two="PostgreSQL",
        answer_three="Redis",
        answer_four="Cassandra",
        solution="PostgreSQL",
        category="SQL",
        status="Public"
    )

    sqltq13 = TriviaQuestion(
        quiz_id=16,
        question="Which SQL clause is used to filter the results of a SELECT statement by specifying a condition?",
        answer_one="GROUP BY",
        answer_two="ORDER BY",
        answer_three="HAVING",
        answer_four="WHERE",
        solution="WHERE",
        category="SQL",
        status="Public"
    )

    sqltq14 = TriviaQuestion(
        quiz_id=16,
        question="In SQL, what is the purpose of the HAVING clause?",
        answer_one="To filter rows based on a condition",
        answer_two="To sort the result set",
        answer_three="To group rows based on a condition after using GROUP BY",
        answer_four="To create new columns in the result set",
        solution="To group rows based on a condition after using GROUP BY",
        category="SQL",
        status="Public"
    )

    sqltq15 = TriviaQuestion(
        quiz_id=16,
        question="Which SQL operator is used to combine the result sets of two or more SELECT statements?",
        answer_one="UNION",
        answer_two="JOIN",
        answer_three="CONCAT",
        answer_four="COMBINE",
        solution="UNION",
        category="SQL",
        status="Public"
    )

    sqltq16 = TriviaQuestion(
        quiz_id=16,
        question="In SQL, which keyword is used to filter rows based on a specific condition in the WHERE clause?",
        answer_one="`FILTER`",
        answer_two="`LIMIT`",
        answer_three="`CONDITION`",
        answer_four="`AND` or `OR`",
        solution="`AND` or `OR`",
        category="SQL",
        status="Public"
    )

    sqltq17 = TriviaQuestion(
        quiz_id=16,
        question="What SQL clause is used to sort the result set in ascending or descending order?",
        answer_one="`ORDER BY`",
        answer_two="`SORT BY`",
        answer_three="`ARRANGE`",
        answer_four="`ASC` or `DESC`",
        solution="`ORDER BY`",
        category="SQL",
        status="Public"
    )

    sqltq18 = TriviaQuestion(
        quiz_id=16,
        question="What SQL statement is used to remove rows that meet a specified condition?",
        answer_one="`DELETE FROM`",
        answer_two="`REMOVE`",
        answer_three="`CLEAR`",
        answer_four="`ERASE`",
        solution="`DELETE FROM`",
        category="SQL",
        status="Public"
    )

    sqltq19 = TriviaQuestion(
        quiz_id=16,
        question="What is the purpose of SQL aggregate functions, such as `SUM`, `AVG`, and `COUNT`?",
        answer_one="To perform operations on individual rows of a table",
        answer_two="To group and summarize data across multiple rows, returning a single result",
        answer_three="To create new tables based on existing data",
        answer_four="To filter rows based on a condition",
        solution="To group and summarize data across multiple rows, returning a single result",
        category="SQL",
        status="Public"
    )

    sqltq20 = TriviaQuestion(
        quiz_id=16,
        question="Which SQL keyword is used to improve query performance by avoiding the processing of duplicate rows in a result set?",
        answer_one="`LIMIT`",
        answer_two="`DISTINCT`",
        answer_three="`GROUP BY`",
        answer_four="`FILTER`",
        solution="`DISTINCT`",
        category="SQL",
        status="Public"
    )

    svtq1 = TriviaQuestion(
        quiz_id=14,
        question="What is Svelte primarily used for?",
        answer_one="Server-side rendering",
        answer_two="Game development",
        answer_three="Building web applications",
        answer_four="Database management",
        solution="Building web applications",
        category="Svelte",
        status="Public"
    )

    svtq2 = TriviaQuestion(
        quiz_id=14,
        question="Which of the following is a core principle of Svelte?",
        answer_one="Virtual DOM",
        answer_two="Reactive programming",
        answer_three="Two-way data binding",
        answer_four="Compiler-based approach",
        solution=" Compiler-based approach",
        category="Svelte",
        status="Public"
    )

    svtq3 = TriviaQuestion(
        quiz_id=14,
        question="In Svelte, what is the primary file extension for Svelte components?",
        answer_one="`.jsx`",
        answer_two="`.vue`",
        answer_three="`.svelte`",
        answer_four="`.component`",
        solution="`.svelte`",
        category="Svelte",
        status="Public"
    )

    svtq4 = TriviaQuestion(
        quiz_id=14,
        question="What is the key advantage of Svelte's compiler-based approach?",
        answer_one="Faster runtime performance",
        answer_two="Wider browser support",
        answer_three="Easier integration with other frameworks",
        answer_four="Greater community support",
        solution="Faster runtime performance",
        category="Svelte",
        status="Public"
    )

    svtq5 = TriviaQuestion(
        quiz_id=14,
        question="What is the term for Svelte's feature that automatically updates the DOM when data changes?",
        answer_one="Data binding",
        answer_two="Reactive declarations",
        answer_three="Svelte actions",
        answer_four="Virtual DOM",
        solution="Reactive declarations",
        category="Svelte",
        status="Public"
    )

    svtq6 = TriviaQuestion(
        quiz_id=14,
        question="Which lifecycle function in Svelte is called when a component is created?",
        answer_one="`onLoad`",
        answer_two="`onCreate`",
        answer_three="`onMount`",
        answer_four="`onRender`",
        solution="`onCreate`",
        category="Svelte",
        status="Public"
    )

    svtq7 = TriviaQuestion(
        quiz_id=14,
        question="What is the purpose of Svelte's `each` block?",
        answer_one="To define CSS styles",
        answer_two="To iterate over a list of items and generate HTML elements",
        answer_three="To create a JavaScript function",
        answer_four="To create a JavaScript function",
        solution="To iterate over a list of items and generate HTML elements",
        category="Svelte",
        status="Public"
    )

    svtq8 = TriviaQuestion(
        quiz_id=14,
        question="In Svelte, how can you bind an element's value to a variable?",
        answer_one="`{{value}}`",
        answer_two="`bind:value`",
        answer_three="`on:value`",
        answer_four="`data-bind:value`",
        solution="`bind:value`",
        category="Svelte",
        status="Public"
    )

    svtq9 = TriviaQuestion(
        quiz_id=14,
        question="What is the Svelte syntax for handling user events, like a button click?",
        answer_one="`@click={handleClick}`",
        answer_two="`#onclick(handleClick)`",
        answer_three="`~click(handleClick)`",
        answer_four="`event-click(handleClick)`",
        solution="`@click={handleClick}`",
        category="Svelte",
        status="Public"
    )

    svtq10 = TriviaQuestion(
        quiz_id=14,
        question="What is Svelte's approach to styling components?",
        answer_one="Inline styles",
        answer_two="Global CSS",
        answer_three="Scoped CSS",
        answer_four="CSS-in-JS",
        solution="Scoped CSS",
        category="Svelte",
        status="Public"
    )

    svtq11 = TriviaQuestion(
        quiz_id=14,
        question="What does the Svelte `await` block enable?",
        answer_one="Asynchronous API requests",
        answer_two="Component inheritance",
        answer_three="Event handling",
        answer_four="Variable declarations",
        solution="Asynchronous API requests",
        category="Svelte",
        status="Public"
    )

    svtq12 = TriviaQuestion(
        quiz_id=14,
        question="In Svelte, what is the purpose of the transitions block?",
        answer_one="Defining transitions between different pages",
        answer_two="Creating animations for component elements",
        answer_three="Declaring variables and constants",
        answer_four="Handling routing",
        solution="Creating animations for component elements",
        category="Svelte",
        status="Public"
    )

    svtq13 = TriviaQuestion(
        quiz_id=14,
        question="What is the primary data binding mechanism in Svelte?",
        answer_one="Two-way data binding",
        answer_two="One-way data flow",
        answer_three="Virtual DOM",
        answer_four="Reactive declarations",
        solution="One-way data flow",
        category="Svelte",
        status="Public"
    )

    svtq14 = TriviaQuestion(
        quiz_id=14,
        question="Which command is used to start a development server for a Svelte project?",
        answer_one="`svelte build`",
        answer_two="`npm start`",
        answer_three="`svelte dev`",
        answer_four="`svelte create`",
        solution="`svelte dev`",
        category="Svelte",
        status="Public"
    )

    svtq15 = TriviaQuestion(
        quiz_id=14,
        question="What is the term for a reusable Svelte component that can be imported and used in other Svelte projects?",
        answer_one="Package",
        answer_two="Module",
        answer_three="Template",
        answer_four="Library",
        solution="Module",
        category="Svelte",
        status="Public"
    )

    svtq16 = TriviaQuestion(
        quiz_id=14,
        question="What is the primary purpose of refactoring in software development?",
        answer_one="To create new features",
        answer_two="To rewrite code from scratch",
        answer_three="To improve code quality and maintainability without changing its external behavior",
        answer_four="To document code",
        solution="To improve code quality and maintainability without changing its external behavior",
        category="General",
        status="Public"
    )

    svtq17 = TriviaQuestion(
        quiz_id=14,
        question="What is the primary goal of agile software development methodologies?",
        answer_one="To maximize documentation efforts",
        answer_two="To minimize collaboration between team members",
        answer_three="To adapt to changing requirements and deliver working software quickly",
        answer_four="To follow a strict and inflexible development process",
        solution="To adapt to changing requirements and deliver working software quickly",
        category="General",
        status="Public"
    )

    svtq18 = TriviaQuestion(
        quiz_id=14,
        question="What is the primary purpose of a bug tracker or issue tracker tool in software development?",
        answer_one="To create user documentation",
        answer_two="To manage and track software defects and tasks",
        answer_three="To write code reviews",
        answer_four="To optimize network communication",
        solution="To manage and track software defects and tasks",
        category="General",
        status="Public"
    )

    svtq19 = TriviaQuestion(
        quiz_id=14,
        question="What makes Svelte different from some other front-end frameworks like React or Vue?",
        answer_one="Svelte uses a virtual DOM for rendering",
        answer_two="Svelte is primarily a server-side rendering framework",
        answer_three="Svelte compiles components at build time to highly efficient JavaScript code",
        answer_four="Svelte uses a class-based component structure",
        solution="Svelte compiles components at build time to highly efficient JavaScript code",
        category="Svelte",
        status="Public"
    )

    svtq20 = TriviaQuestion(
        quiz_id=14,
        question="In Svelte, how do you define a variable that can trigger reactivity in your component?",
        answer_one="Using the `reactive` keyword",
        answer_two="By declaring it inside a `<script>` block",
        answer_three="Automatically, all variables are reactive by default",
        answer_four="By defining it in the HTML template",
        solution="By declaring it inside a `<script>` block",
        category="Svelte",
        status="Public"
    )

    tstq1 = TriviaQuestion(
        quiz_id=15,
        question="What is TypeScript primarily used for?",
        answer_one="Server-side scripting",
        answer_two="Mobile app development",
        answer_three="Building web applications",
        answer_four="Database management",
        solution="Building web applications",
        category="TypeScript",
        status="Public"
    )

    tstq2 = TriviaQuestion(
        quiz_id=15,
        question="Who developed TypeScript?",
        answer_one="Mozilla",
        answer_two="Google",
        answer_three="Microsoft",
        answer_four="Facebook",
        solution="Microsoft",
        category="TypeScript",
        status="Public"
    )

    tstq3 = TriviaQuestion(
        quiz_id=15,
        question="Which extension is commonly used for TypeScript files?",
        answer_one="`.js`",
        answer_two="`.ts`",
        answer_three="`.txt`",
        answer_four="`.html`",
        solution="`.ts`",
        category="TypeScript",
        status="Public"
    )

    tstq4 = TriviaQuestion(
        quiz_id=15,
        question="What is the purpose of a TypeScript definition file (with a .d.ts extension)?",
        answer_one="To store data for a TypeScript program",
        answer_two="To declare the types of variables and functions used in JavaScript libraries",
        answer_three="To define the structure of a database",
        answer_four="To create TypeScript classes",
        solution="To declare the types of variables and functions used in JavaScript libraries",
        category="TypeScript",
        status="Public"
    )

    tstq5 = TriviaQuestion(
        quiz_id=15,
        question=" In TypeScript, what keyword is used to declare a variable with a specific type?",
        answer_one="`type`",
        answer_two="`var`",
        answer_three="`let`",
        answer_four="`declare`",
        solution="`let`",
        category="TypeScript",
        status="Public"
    )

    tstq6 = TriviaQuestion(
        quiz_id=15,
        question="What is the purpose of TypeScript's 'compiler'?",
        answer_one="To execute JavaScript code",
        answer_two="To check TypeScript code for errors and transpile it to JavaScript",
        answer_three="To create databases",
        answer_four="To design user interfaces",
        solution="To check TypeScript code for errors and transpile it to JavaScript",
        category="TypeScript",
        status="Public"
    )

    tstq7 = TriviaQuestion(
        quiz_id=15,
        question="Which of the following is not a basic TypeScript type?",
        answer_one="number",
        answer_two="boolean",
        answer_three="object",
        answer_four="string",
        solution="object",
        category="TypeScript",
        status="Public"
    )

    tstq8 = TriviaQuestion(
        quiz_id=15,
        question="In TypeScript, what is a union type?",
        answer_one="A type that can only contain numbers",
        answer_two="A type that can contain multiple specified types",
        answer_three="A type for handling asynchronous operations",
        answer_four="A type for class-based inheritance",
        solution="A type that can contain multiple specified types",
        category="TypeScript",
        status="Public"
    )

    tstq9 = TriviaQuestion(
        quiz_id=15,
        question="What is the purpose of TypeScript's `interface` keyword?",
        answer_one="To create classes",
        answer_two="To define the structure of an object",
        answer_three="To write comments in TypeScript code",
        answer_four="To define a module",
        solution="To define the structure of an object",
        category="TypeScript",
        status="Public"
    )

    tstq10 = TriviaQuestion(
        quiz_id=15,
        question="What is the TypeScript feature that allows for the creation of custom data types by combining existing ones?",
        answer_one="Inheritance",
        answer_two="Polymorphism",
        answer_three="Generics",
        answer_four="Callbacks",
        solution="Generics",
        category="TypeScript",
        status="Public"
    )

    tstq11 = TriviaQuestion(
        quiz_id=15,
        question="Which command is used to initialize a new TypeScript project using the TypeScript CLI?",
        answer_one="`npm init`",
        answer_two="`tsc init`",
        answer_three="`ng new`",
        answer_four="`create-ts-app`",
        solution="`tsc init`",
        category="TypeScript",
        status="Public"
    )

    tstq12 = TriviaQuestion(
        quiz_id=15,
        question="In TypeScript, what is the purpose of a 'decorator'?",
        answer_one="To add styling to HTML elements",
        answer_two="To create event listeners",
        answer_three="To provide metadata and modify the behavior of classes and class members",
        answer_four="To define the structure of a database",
        solution="To provide metadata and modify the behavior of classes and class members",
        category="TypeScript",
        status="Public"
    )

    tstq13 = TriviaQuestion(
        quiz_id=15,
        question="What is the TypeScript equivalent of JavaScript's 'null' or 'undefined'?",
        answer_one="void",
        answer_two="empty",
        answer_three="null",
        answer_four="nil",
        solution="null",
        category="TypeScript",
        status="Public"
    )

    tstq14 = TriviaQuestion(
        quiz_id=15,
        question="What is the TypeScript feature that allows for strict checking of the shapes of objects during development?",
        answer_one="Type checking",
        answer_two="TSLint",
        answer_three="Structural typing",
        answer_four="Static analysis",
        solution="Structural typing",
        category="TypeScript",
        status="Public"
    )

    tstq15 = TriviaQuestion(
        quiz_id=15,
        question="How does TypeScript handle type-checking during development?",
        answer_one="It relies on runtime checks",
        answer_two="It performs static type-checking at compile time",
        answer_three="It requires developers to manually validate types",
        answer_four="It provides no type-checking capabilities",
        solution="It performs static type-checking at compile time",
        category="TypeScript",
        status="Public"
    )

    tstq16 = TriviaQuestion(
        quiz_id=15,
        question="What is the purpose of using TypeScript's `tsconfig.json` file?",
        answer_one="To configure a database connection",
        answer_two="To define custom type annotations",
        answer_three="To specify compiler options and project settings",
        answer_four="To create a new TypeScript project",
        solution="To specify compiler options and project settings",
        category="TypeScript",
        status="Public"
    )

    tstq17 = TriviaQuestion(
        quiz_id=15,
        question="In TypeScript, what is a generic type?",
        answer_one="A type that cannot be extended or modified",
        answer_two="A type that is only used for primitive data",
        answer_three="A type that can be parameterized to work with different data types",
        answer_four="A type that is not used in object-oriented programming",
        solution="A type that can be parameterized to work with different data types",
        category="TypeScript",
        status="Public"
    )

    tstq18 = TriviaQuestion(
        quiz_id=15,
        question="What is the TypeScript feature that allows you to use features from future versions of JavaScript?",
        answer_one="Babel",
        answer_two="Webpack",
        answer_three="TSLint",
        answer_four="TypeScript's downleveling and polyfills",
        solution="TypeScript's downleveling and polyfills",
        category="TypeScript",
        status="Public"
    )

    tstq19 = TriviaQuestion(
        quiz_id=15,
        question="In TypeScript, what is the purpose of the `as` keyword?",
        answer_one="To declare a new variable",
        answer_two="To create an alias for a type",
        answer_three="To define a class",
        answer_four="To import modules",
        solution="To create an alias for a type",
        category="TypeScript",
        status="Public"
    )

    tstq20 = TriviaQuestion(
        quiz_id=15,
        question="Which TypeScript feature helps catch common coding mistakes by identifying issues at compile-time?",
        answer_one="TSLint",
        answer_two="Webpack",
        answer_three="The TypeScript compiler's static type checking",
        answer_four="Babel",
        solution="The TypeScript compiler's static type checking",
        category="TypeScript",
        status="Public"
    )

    question114 = TriviaQuestion(
        question="What is the primary purpose of a Content Management System (CMS) in web development?",
        answer_one="To test web applications",
        answer_two="To manage and publish digital content on the web",
        answer_three="To secure network traffic",
        answer_four="To optimize database queries",
        solution="To manage and publish digital content on the web",
        category="General",
        status="Public"
    )

    question117 = TriviaQuestion(
        question="Which of the following is a commonly used metric for measuring code complexity?",
        answer_one="LOC (Lines of Code)",
        answer_two="CTR (Click-Through Rate)",
        answer_three="KPI (Key Performance Indicator)",
        answer_four="ROI (Return on Investment)",
        solution="LOC (Lines of Code)",
        category="General",
        status="Public"
    )

    question118 = TriviaQuestion(
        question="What is the primary purpose of a content delivery network (CDN) in web development?",
        answer_one="To store user data",
        answer_two="To improve code quality",
        answer_three="To optimize the delivery of web content to users",
        answer_four="To encrypt network traffic",
        solution="To optimize the delivery of web content to users",
        category="General",
        status="Public"
    )

    question120 = TriviaQuestion(
        question="Which of the following is NOT a commonly used programming language for web development?",
        answer_one="JavaScript",
        answer_two="Ruby",
        answer_three="Java",
        answer_four="SQL",
        solution="SQL",
        category="General",
        status="Public"
    )

    javaScriptCards = CardSets(
        creator_id=1,
        title="Basic JavaScript",
        description="Sharpen your JavaScript knowledge",
        status="Public",
        category="JavaScript"
    )

    pythonCards = CardSets(
        creator_id=1,
        title="Basic Python",
        description="Sharpen your Python knowledge",
        status="Public",
        category="Python"
    )

    reactCards = CardSets(
        creator_id=1,
        title="Basic React",
        description="Sharpen your React knowledge",
        status="Public",
        category="React"
    )

    cSharpCards = CardSets(
        creator_id=1,
        title="Basic C#",
        description="Sharpen your C# knowledge",
        status="Public",
        category="CSharp"
    )

    javaCards = CardSets(
        creator_id=1,
        title="Basic Java",
        description="Sharpen your Java knowledge",
        status="Public",
        category="Java"
    )

    cPlusPlusCards = CardSets(
        creator_id=1,
        title="Basic C++",
        description="Sharpen your C++ knowledge",
        status="Public",
        category="C++"
    )

    angularCards = CardSets(
        creator_id=1,
        title="Basic Angular",
        description="Sharpen your Angular knowledge",
        status="Public",
        category="Angular"
    )

    nextJSCards = CardSets(
        creator_id=1,
        title="Basic NextJS",
        description="Sharpen your NextJS knowledge",
        status="Public",
        category="NextJS"
    )

    rustCards = CardSets(
        creator_id=1,
        title="Basic Rust",
        description="Sharpen your Rust knowledge",
        status="Public",
        category="Rust"
    )

    svelteCards = CardSets(
        creator_id=1,
        title="Basic Svelte",
        description="Sharpen your Svelte knowledge",
        status="Public",
        category="Svelte"
    )

    typeScriptCards = CardSets(
        creator_id=1,
        title="Basic TypeScript",
        description="Sharpen your TypeScript knowledge",
        status="Public",
        category="TypeScript"
    )

    webDevCards = CardSets(
        creator_id=2,
        title="Basic Web Development",
        description="Sharpen your web development knowledge",
        status="Public",
        category="General"
    )

    gameDevCards = CardSets(
        creator_id=2,
        title="Basic Game Development",
        description="Sharpen your game development knowledge",
        status="Public",
        category="General"
    )

    machineLearningCards = CardSets(
        creator_id=3,
        title="Basic Machine Learning",
        description="Sharpen your machine learning knowledge",
        status="Public",
        category="General"
    )

    wd1 = CardQuestion(
        set_id=12,
        front="Explain the concept of 'HTML' in web development",
        back="HTML (Hypertext Markup Language) is the standard markup language used to create the structure of web pages. It defines the elements and their layout, such as headings, paragraphs, links, and images."
    )

    wd2 = CardQuestion(
        set_id=12,
        front="Describe the purpose of CSS in web development",
        back="CSS (Cascading Style Sheets) is used to control the visual presentation and layout of web pages. It specifies how HTML elements should be displayed, including colors, fonts, spacing, and more."
    )

    wd3 = CardQuestion(
        set_id=12,
        front="What is 'JavaScript' in web development, and what role does it play?",
        back="JavaScript is a programming language used to make web pages interactive. It enables dynamic behavior, such as handling user input, modifying the DOM, and interacting with web servers."
    )

    wd4 = CardQuestion(
        set_id=12,
        front="Explain the purpose HTTP in web development",
        back="HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the world wide web. It is used for requesting and transmitting web resources, such as HTML pages, images, and scripts"
    )

    wd5 = CardQuestion(
        set_id=12,
        front="Define the term 'Responsive Web Design'",
        back="Responsive Web Design is an approach that ensures web pages adapt to different screen sizes and devices. It aims to provide a consistent user experience on both desktop and mobile devices."
    )

    wd6 = CardQuestion(
        set_id=12,
        front="What is 'Web Hosting' in the context of web development?",
        back="Web hosting is the service of providing storage and access to websites on the internet. Hosting companies store website files on servers, making them accessible to users worldwide."
    )

    wd7 = CardQuestion(
        set_id=12,
        front="What is the purpose of a 'Content Management System (CMS)' in web development?",
        back="A CMS is software that allows users to create, manage, and publish digital content, such as websites and blogs, without requiring extensive technical knowledge."
    )

    wd8 = CardQuestion(
        set_id=12,
        front="Explain the concept of 'Search Engine Optimization (SEO)' in web development",
        back="SEO is the practice of optimizing a website's content and structure to improve its visibility in search engine results, ultimately increasing organic (non-paid) traffic"
    )

    wd9 = CardQuestion(
        set_id=12,
        front="What is 'Front-End Development'?",
        back="Front-end development involves creating the user interface and user experience of a website. It includes working with HTML, CSS, and JavaScript to build the client-side of web applications."
    )

    wd10 = CardQuestion(
        set_id=12,
        front="Describe 'Back-End Development' in web development",
        back="Back-end development focuses on the server-side of web applications. It involves handling data, databases, server logic, and ensuring the application's functionality."
    )

    gd1 = CardQuestion(
        set_id=13,
        front="What is a 'Game Engine' in game development?",
        back="A game engine is a software framework that provides the core functionality for game development, including rendering, physics, sound, and scripting"
    )

    gd2 = CardQuestion(
        set_id=13,
        front="Explain the concept of 'Game Mechanics' in game development",
        back="Game mechanics refer to the rules, interactions, and systems that define how a game is played, including player actions, objectives, and challenges"
    )

    gd3 = CardQuestion(
        set_id=13,
        front="What is a 'Level Design' in game development, and why is it important?",
        back="Level design involves creating game levels or environments, determining their layout, challenges, and pacing. It is crucial for providing engaging and enjoyable gameplay experiences"
    )

    gd4 = CardQuestion(
        set_id=13,
        front="Describe the role of 'AI' (Artificial Intelligence) in games",
        back="AI in games is responsible for creating intelligent and adaptive behavior for non-player characters (NPCs) and opponents, making the game world feel dynamic and challenging"
    )

    gd5 = CardQuestion(
        set_id=13,
        front="What is 'Game Testing', and why is it essential in game development?",
        back="Game testing involves identifying and fixing bugs, glitches, and playability issues in a game. It is crucial to ensure a smooth and enjoyable gaming experience"
    )

    gd6 = CardQuestion(
        set_id=13,
        front="What is 'Storyboarding' in the context of game development?",
        back="Storyboarding involves creating a visual outline or sequence of events in a game's narrative, helping to plan and visualize the game's story and progression"
    )

    gd7 = CardQuestion(
        set_id=13,
        front="Explain the concept of 'Shader' in game development",
        back="Shaders are programs used to control the visual appearance of objects in a game, including their colors, lighting, and special effects"
    )

    gd8 = CardQuestion(
        set_id=13,
        front="What is 'Texture Mapping' in 3D game development?",
        back="Texture mapping is the process of applying 2D images (textures) to 3D objects to give them a realistic appearance in games"
    )

    gd9 = CardQuestion(
        set_id=13,
        front="Describe the role of a 'Game Designer' in game development",
        back="A game designer is responsible for creating the game's concept, gameplay, and mechanics, as well as designing levels and defining the overall player experience"
    )

    gd10 = CardQuestion(
        set_id=13,
        front="What is 'Monetization' in mobile game development?",
        back="Monetization in mobile game development refers to the methods and strategies used to generate revenue from the game, such as in-app purchases, ads, or paid downloads"
    )

    ml1 = CardQuestion(
        set_id=14,
        front="What is 'Machine Learning'?",
        back="Machine Learning is a subfield of artificial intelligence that focuses on the development of algorithms and models that enable computers to learn from and make predictions or decisions based on data"
    )

    ml2 = CardQuestion(
        set_id=14,
        front="Explain the difference between 'Supervised Learning' and 'Unsupervised Learning' in machine learning",
        back="Supervised learning involves training a model on labeled data with known outcomes, while unsupervised learning deals with unlabeled data and discovering patterns or structures within the data"
    )

    ml3 = CardQuestion(
        set_id=14,
        front="What is 'Overfitting' in machine learning, and how can it be prevented?",
        back="Overfitting occurs when a model performs well on the training data but poorly on unseen data. It can be prevented by using techniques like cross-validation and regularization"
    )

    ml4 = CardQuestion(
        set_id=14,
        front="Describe the 'Bias-Variance Tradeoff' in machine learning",
        back="The bias-variance tradeoff represents the balance between a model's ability to fit the training data (low bias, high variance) and its ability to generalize to unseen data (low variance, high bias)"
    )

    ml5 = CardQuestion(
        set_id=14,
        front="What is the purpose of 'Feature Engineering' in machine learning?",
        back="Feature engineering involves selecting, transforming, or creating relevant features from the input data to improve a model's performance"
    )

    ml6 = CardQuestion(
        set_id=14,
        front="Explain 'Cross-Validation' in machine learning",
        back="Cross-validation is a technique used to assess a model's performance by splitting the data into multiple subsets, training and testing the model on different subsets to evaluate its generalization"
    )

    ml7 = CardQuestion(
        set_id=14,
        front="What is a 'Confusion Matrix' in the context of classification problems?",
        back="A confusion matrix is a table used to evaluate the performance of a classification model by comparing the predicted and actual class labels"
    )

    ml8 = CardQuestion(
        set_id=14,
        front="Describe the 'Gradient Descent' optimization algorithm in machine learning",
        back="Gradient descent is an iterative optimization algorithm used to minimize the loss function of a machine learning model by adjusting its parameters"
    )

    ml9 = CardQuestion(
        set_id=14,
        front="What is the purpose of 'Ensemble Learning' in machine learning?",
        back="Ensemble learning combines multiple machine learning models to improve overall predictive performance, reducing the risk of overfitting and increasing accuracy"
    )

    ml10 = CardQuestion(
        set_id=14,
        front="Explain the concept of 'Reinforcement Learning' in machine learning",
        back="Reinforcement learning is a subfield of machine learning where an agent learns to make a sequence of decisions by interacting with an environment and receiving rewards or penalties"
    )

    js1 = CardQuestion(
        set_id=1,
        front="To access an HTML element from JavaScript, you can use this method:",
        back="getElementById"
    )

    js2 = CardQuestion(
        set_id=1,
        front="Write a statement that tells the browser to write 'Hello Dolly' inside an HTML element with id='demo'",
        back="document.getElementById('demo').innerHTML = 'Hello Dolly'"
    )

    js3 = CardQuestion(
        set_id=1,
        front="JavaScript elements are executed in what order?",
        back="In the sequence they are written"
    )

    js4 = CardQuestion(
        set_id=1,
        front="Can be used to break up a line within a text string:",
        back="backslash"
    )

    js5 = CardQuestion(
        set_id=1,
        front="Three words used to declare JavaScript variables:",
        back="var, let, const"
    )

    js6 = CardQuestion(
        set_id=1,
        front="What does IIFE stand for?",
        back="Immediately Invoked Function Expression"
    )

    js7 = CardQuestion(
        set_id=1,
        front="List 3 or more primitive data types",
        back="Boolean, Null, Undefined, Number, String, Symbol, BigInt"
    )

    js8 = CardQuestion(
        set_id=1,
        front="What is the only reference data type?",
        back="Objects (including arrays, since arrays are a type of object)"
    )

    js9 = CardQuestion(
        set_id=1,
        front="According to good programming practice, where should all variables be declared?",
        back="In one place at the beginning of your code"
    )

    js10 = CardQuestion(
        set_id=1,
        front="If you declare a variable without assigning a value, would the value of the variable be null or undefined?",
        back="Undefined"
    )

    js11 = CardQuestion(
        set_id=1,
        front="True or false: if you redeclare a variable without a value, it will lose its current value",
        back="False"
    )

    js12 = CardQuestion(
        set_id=1,
        front="What is a JavaScript data type that represents true or false values?",
        back="Boolean"
    )

    js13 = CardQuestion(
        set_id=1,
        front="What does DOM stand for in Web Development?",
        back="Document Object Model"
    )

    js14 = CardQuestion(
        set_id=1,
        front="What JavaScript construct is used to handle asynchronous operations more efficiently?",
        back="Promises"
    )

    js15 = CardQuestion(
        set_id=1,
        front="What is the purpose of 'try...catch' in JavaScript?",
        back="To handle runtime errors without stopping code execution entirely"
    )

    js16 = CardQuestion(
        set_id=1,
        front="What is 'event delegation' in JavaScript?",
        back="A technique where you add a single event listener to a parent element to handle events for multiple child elements"
    )

    js17 = CardQuestion(
        set_id=1,
        front="What is the difference between null and undefined in JavaScript?",
        back="'null' is an intentional absence of value, while 'undefined' represents a variable that has been declared but not assigned a value"
    )

    js18 = CardQuestion(
        set_id=1,
        front="Explain the concept of 'hoisting' in JavaScript",
        back="Hoisting is when variable and function declarations are moved to the top of their containing scope during compilation"
    )

    js19 = CardQuestion(
        set_id=1,
        front="How can you include an external JavaScript file in an HTML document?",
        back="By using the '<script></script>' tag with the 'src' attribute pointing to the file's location"
    )

    js20 = CardQuestion(
        set_id=1,
        front="What does the 'typeof' operator do in JavaScript?",
        back="It returns a string indicating the data type of a given variable or expression"
    )

    js21 = CardQuestion(
        set_id=1,
        front="What is the purpose of the 'this' keyword in JavaScript?",
        back="It refers to the current context, often used in object-oriented programming"
    )

    js22 = CardQuestion(
        set_id=1,
        front="What does JSON stand for, and how is it related to JavaScript?",
        back="JSON stands for JavaScript Object Notation and is a lightweight data interchange format often used in JavaScript"
    )

    py1 = CardQuestion(
        set_id=2,
        front="What type of programming language is Python?",
        back="Python is a high-level, interpreted, and general-purpose programming language"
    )

    py2 = CardQuestion(
        set_id=2,
        front="True or false: you need to use 'var', 'let', or 'const' to declare variables in Python",
        back="False"
    )

    py3 = CardQuestion(
        set_id=2,
        front="What is the purpose of indentation in Python?",
        back="Indentation is used to define code blocks and determine the scope of statements"
    )

    py4 = CardQuestion(
        set_id=2,
        front="Name two numeric data types in Python",
        back="Int (integer) and float (floating-point number)"
    )

    py5 = CardQuestion(
        set_id=2,
        front="What keyword is used to define a function in Python?",
        back="def"
    )

    py6 = CardQuestion(
        set_id=2,
        front="What is a 'list' in Python?",
        back="An ordered collection of items, which can contain different data types within opening and closing square brackets ([]) - similar to an array"
    )

    py7 = CardQuestion(
        set_id=2,
        front="What is a 'dictionary' in Python?",
        back="An unordered collection of key-value pairs, defined using curly braces ({}) - similar to an object in JavaScript"
    )

    py8 = CardQuestion(
        set_id=2,
        front="How do you open and read a file in Python?",
        back="You can open a file using the 'open()' function, and read a file using the 'read()' function"
    )

    py9 = CardQuestion(
        set_id=2,
        front="What is 'inheritance' in object-oriented programming (OOP)",
        back="A mechanism where a new class inherits properties and behaviors from an existing class"
    )

    py10 = CardQuestion(
        set_id=2,
        front="What does 'PEP 8' refer to in Python?",
        back="The Python Enhancement Proposal that defines the style guide for writing Python code"
    )

    py11 = CardQuestion(
        set_id=2,
        front="What is a 'tuple' in Python?",
        back="An ordered collection of items that is immutable, meaning its elements cannot be changed after creation"
    )

    py12 = CardQuestion(
        set_id=2,
        front="What is the 'None' keyword in Python?",
        back="Represents the absence of a value or a null value"
    )

    re1 = CardQuestion(
        set_id=3,
        front="What is React?",
        back="React is a JavaScript library for building user interfaces, particularly for single-page applications"
    )

    re2 = CardQuestion(
        set_id=3,
        front="What is JSX in React?",
        back="JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code in React"
    )

    re3 = CardQuestion(
        set_id=3,
        front="Explain the purpose of 'props' in React",
        back="Used for passing data from parent components to child components in React"
    )

    re4 = CardQuestion(
        set_id=3,
        front="What is a 'state' in React?",
        back="An object that represents the internal data of a component, and when it changes, the component re-renders"
    )

    re5 = CardQuestion(
        set_id=3,
        front="What is a React component?",
        back="A reusable and self-contained piece of UI that can be composed to build complex interfaces"
    )

    re6 = CardQuestion(
        set_id=3,
        front="How do you create a functional component in React?",
        back="You create a functional component using a JavaScript function that returns JSX"
    )

    re7 = CardQuestion(
        set_id=3,
        front="What is a 'class component' in React?",
        back="The 'useState' hook is used to add state to functional components in React"
    )

    re8 = CardQuestion(
        set_id=3,
        front="Explain the concept of 'component lifecycle' in React",
        back="The component lifecycle represents the various stages a React component goes through, including mounting, updating, and unmounting"
    )

    re9 = CardQuestion(
        set_id=3,
        front="What is 'prop drilling' in React?",
        back="'Prop drilling' occurs when you need to pass props through multiple levels of nested components"
    )

    re10 = CardQuestion(
        set_id=3,
        front="What is the 'useEffect' hook used for in React?",
        back="Performing side effects in functional components, such as data fetching or DOM manipulation"
    )

    re11 = CardQuestion(
        set_id=3,
        front="What is React Router?",
        back="A popular library for adding client-side routing to React applications"
    )

    re12 = CardQuestion(
        set_id=3,
        front="What is a 'higher-order component' (HOC) in React?",
        back="A pattern in React where a component wraps another component to provide additional functionality"
    )

    re13 = CardQuestion(
        set_id=3,
        front="What is 'context' in React?",
        back="A feature in React that allows you to share state data among components without explicitly passing props"
    )

    cs1 = CardQuestion(
        set_id=4,
        front="What is C#",
        back="A high-level, object-oriented programming language developed by Microsoft"
    )

    cs2 = CardQuestion(
        set_id=4,
        front="Which development platform is commonly associated with C#",
        back="The Microsoft .NET platform"
    )

    cs3 = CardQuestion(
        set_id=4,
        front="How do you declare a variable in C#",
        back="Using the 'var', 'int', 'string', or other data type keywords, followed by a variable name"
    )

    cs4 = CardQuestion(
        set_id=4,
        front="Explain the 'class' keyword in C#",
        back="It defines a blueprint for creating objects"
    )

    cs5 = CardQuestion(
        set_id=4,
        front="What is an 'interface' in C#",
        back="An interface defines a contract for a set of methods that a class must implement"
    )

    cs6 = CardQuestion(
        set_id=4,
        front="How do you create a method in C#",
        back="By using the 'Public', 'private', or 'protected' access modifiers, followed by the method's return type, name, and parameters"
    )

    cs7 = CardQuestion(
        set_id=4,
        front="What is 'inheritance' in C#",
        back="Inheritance is a mechanism where a class can inherit properties and methods from another class"
    )

    cs8 = CardQuestion(
        set_id=4,
        front="Explain 'polymorphism' in C#",
        back="The ability of objects of different classes to be treated as objects of a common base class"
    )

    cs9 = CardQuestion(
        set_id=4,
        front="What is 'encapsulation' in C#",
        back="The concept of bundling data and methods that operate on that data into a single unit, known as a class"
    )

    cs10 = CardQuestion(
        set_id=4,
        front="What is 'namespace' in C#",
        back="A namespace is a way to organize and group related classes and types in C#"
    )

    cs11 = CardQuestion(
        set_id=4,
        front="How do you handle exceptions in C#",
        back="Exceptions in C# are handled using 'try', 'catch', 'finally', and 'throw' keywords"
    )

    cs12 = CardQuestion(
        set_id=4,
        front="What is a 'delegate' in C#",
        back="A type that represents a method with a specific signature and can be used to create method pointers"
    )

    cs13 = CardQuestion(
        set_id=4,
        front="What is 'LINQ' in C#",
        back="LINQ (Language Integrated Query) is a feature in C# for querying and manipulating collections and data"
    )

    cs14 = CardQuestion(
        set_id=4,
        front="Explain the 'async' and 'await' keywords in C#",
        back="'Async' is used to define an asynchronous method, and 'await' is used to pause execution until the awaited task completes"
    )

    cs15 = CardQuestion(
        set_id=4,
        front="What is 'generics' in C#",
        back="Generics allow you to create classes, methods, and interfaces that work with different data types while maintaining type safety"
    )

    ja1 = CardQuestion(
        set_id=5,
        front="What is Java?",
        back="A high-level, object-oriented programming language known for its platform independence"
    )

    ja2 = CardQuestion(
        set_id=5,
        front="What is the difference between 'JRE' and 'JDK' in Java?",
        back="JRE (Java Runtime Environment) is required to run Java applications, while JDK (Java Development Kit) is used for Java application development"
    )

    ja3 = CardQuestion(
        set_id=5,
        front="How do you declare a variable in Java?",
        back="You declare a variable by specifying the data type, followed by the variable name"
    )

    ja4 = CardQuestion(
        set_id=5,
        front="What is an 'object' in Java?",
        back="An instance of a class; represents a real-world entity"
    )

    ja5 = CardQuestion(
        set_id=5,
        front="Explain the 'class' keyword in Java",
        back="The 'class' keyword is used to define a blueprint for creating objects in Java"
    )

    ja6 = CardQuestion(
        set_id=5,
        front="What is 'inheritance' in Java?",
        back="Inheritance is a mechanism where a class can inherit properties and methods from another class"
    )

    ja7 = CardQuestion(
        set_id=5,
        front="What is a 'method' in Java?",
        back="A method is a block of code within a class that can be executed"
    )

    ja8 = CardQuestion(
        set_id=5,
        front="What is 'polymorphism' in Java?",
        back="The ability of objects of different classes to be treated as objects of a common base class"
    )

    ja9 = CardQuestion(
        set_id=5,
        front="How do you create and use an interface in Java?",
        back="You create an interface using the 'interface' keyword and classes implement it using the 'implements' keyword"
    )

    ja10 = CardQuestion(
        set_id=5,
        front="Explain 'exception handling' in Java",
        back="Exception handling is a way to deal with unexpected events or errors during program execution"
    )

    ja11 = CardQuestion(
        set_id=5,
        front="What is 'encapsulation' in Java?",
        back="Encapsulation is the concept of bundling data and methods that operate on that data into a single unit, known as a class"
    )

    ja12 = CardQuestion(
        set_id=5,
        front="What is the 'main' method in Java?",
        back="A keyword used to create class-level variables and methods that can be accessed without creating an instance of the class"
    )

    ja13 = CardQuestion(
        set_id=5,
        front="Explain 'multi-threading' in Java",
        back="Multi-threading is the ability of a program to execute multiple threads (smaller units of a process) concurrently"
    )

    ja14 = CardQuestion(
        set_id=5,
        front="What is 'JavaFX' in Java?",
        back="A framework for building rich client applications and graphical user interfaces in Java"
    )

    cp1 = CardQuestion(
        set_id=6,
        front="What is C++?",
        back="A high-level, general-purpose programming language known for its performance and flexibility"
    )

    cp2 = CardQuestion(
        set_id=6,
        front="What does C++ signify in its name?",
        back="An incremental improvement over the C programming language"
    )

    cp3 = CardQuestion(
        set_id=6,
        front="What is the 'iostream' library used for in C++?",
        back="Input and output operations in C++, including 'cin' for input and 'cout' for output"
    )

    cp4 = CardQuestion(
        set_id=6,
        front="How do you declare a variable in C++?",
        back="By specifying the data type, followed by the variable name"
    )

    cp5 = CardQuestion(
        set_id=6,
        front="What is an object in C++?",
        back="An instance of a class - C++ follows object-oriented programming"
    )

    cp6 = CardQuestion(
        set_id=6,
        front="Explain the 'class' keyword in C++",
        back="Used to define a blueprint for creating objects and organizing data and functions in C++"
    )

    cp7 = CardQuestion(
        set_id=6,
        front="What is 'inheritance' in C++?",
        back="A mechanism where a class can inherit properties and methods from another class"
    )

    cp8 = CardQuestion(
        set_id=6,
        front="What is a 'constructor' in C++?",
        back="A special member function used to initialize objects of a class?"
    )

    cp9 = CardQuestion(
        set_id=6,
        front="What is 'polymorphism' in C++?",
        back="Polymorphism is the ability of objects of different classes to be treated as objects of a common base class"
    )

    cp10 = CardQuestion(
        set_id=6,
        front="How do you define a function in C++?",
        back="Using the 'function type' followed by the function name, parameters, and the function body"
    )

    cp11 = CardQuestion(
        set_id=6,
        front="Explain 'exception handling' in C++",
        back="Exception handling is a way to deal with unexpected events or errors during program execution"
    )

    cp12 = CardQuestion(
        set_id=6,
        front="What is 'operator overloading' in C++?",
        back="Allows you to define how operators behave with user-defined data types"
    )

    cp13 = CardQuestion(
        set_id=6,
        front="What is 'STL' in C++?",
        back="STL (Standard Template Library) is a collection of template classes and functions for common data structures and algorithms in C++"
    )

    cp14 = CardQuestion(
        set_id=6,
        front="What is a 'pointer' in C++?",
        back="A pointer is a variable that stores the memory address of another variable"
    )

    cp15 = CardQuestion(
        set_id=6,
        front="Explain 'template' in C++?",
        back="Templates allow you to create generic classes and functions that work with various data types"
    )

    an1 = CardQuestion(
        set_id=7,
        front="What is Angular?",
        back="Angular is a popular front-end framework for building dynamic web applications"
    )

    an2 = CardQuestion(
        set_id=7,
        front="What is the key difference AngularJS and Angular?",
        back="Angular is a complete rewrite of AngularJS and is often referred to as Angular 2+ or simply Angular"
    )

    an3 = CardQuestion(
        set_id=7,
        front="What is an 'Angular component'?",
        back="A building block of an Angular application, consisting of HTML, TypeScript, and CSS"
    )

    an4 = CardQuestion(
        set_id=7,
        front="What is an 'Angular CLI' used for?",
        back="Angular CLI (Command Line Interface) is a tool for creating, building, and managing Angular projects"
    )

    an5 = CardQuestion(
        set_id=7,
        front="What is an 'Angular module'?",
        back="An Angular module is a logical container for organizing and configuring related components, services, and other features"
    )

    an6 = CardQuestion(
        set_id=7,
        front="What is an 'Angular template'?",
        back="An HTML file that defines the view of an Angular component"
    )

    an7 = CardQuestion(
        set_id=7,
        front="What is 'two-way data binding' in Angular?",
        back="A feature that allows automatic synchronization of data between the component and the view"
    )

    an8 = CardQuestion(
        set_id=7,
        front="Explain 'dependency injection' in Angular",
        back="Dependency injection is a design pattern used in Angular to provide instances of services to components"
    )

    an9 = CardQuestion(
        set_id=7,
        front="What is the purpose of 'ngFor' in Angular?",
        back="ngFor is a directive in Angular used for rendering lists of items in the template"
    )

    an10 = CardQuestion(
        set_id=7,
        front="What is 'routing' in Angular?",
        back="Routing allows you to navigate between different views or components while maintaining a single-page application"
    )

    an11 = CardQuestion(
        set_id=7,
        front="What are 'Angular services'?",
        back="Reusable, injectable classes that provide functionality to multiple parts of an application"
    )

    an12 = CardQuestion(
        set_id=7,
        front="What is an 'Angular directive'?",
        back="A custom HTML attribute or element that extends the behavior of the DOM"
    )

    an13 = CardQuestion(
        set_id=7,
        front="Explain 'Angular pipes'",
        back="Used to transform and format data in the template, such as date formatting or text manipulation"
    )

    an14 = CardQuestion(
        set_id=7,
        front="What is 'Angular HttpClient' used for?",
        back="A module for making HTTP requests to APIs or servers from Angular applications"
    )

    an15 = CardQuestion(
        set_id=7,
        front="What is 'Angular interpolation'?",
        back="A way to display component data in the template using double curly braces, like '{{data}}'"
    )

    ne1 = CardQuestion(
        set_id=8,
        front="What is Next.js?",
        back="A popular React framework for building server-rendered React applications"
    )

    ne2 = CardQuestion(
        set_id=8,
        front="What problem does Next.js solve in React development?",
        back="Next.js simplifies server-side rendering, routing, and other aspects of building React applications"
    )

    ne3 = CardQuestion(
        set_id=8,
        front="How do you create a new Next.js application?",
        back="You can create a new Next.js application using the 'create-next-app' CLI command"
    )

    ne4 = CardQuestion(
        set_id=8,
        front="What is 'server-side rendering' (SSR) in Next.js?",
        back="Server-side rendering in Next.js means that pages are pre-rendered on the server before being sent to the client"
    )

    ne5 = CardQuestion(
        set_id=8,
        front="What is 'static site generation' (SSG) in Next.js?",
        back="Generates HTML files at build time, allowing for fast loading"
    )

    ne6 = CardQuestion(
        set_id=8,
        front="What is 'client-side rendering' (CSR) in Next.js?",
        back="Client-side rendering in Next.js means that pages are rendered on the client's side using JavaScript"
    )

    ne7 = CardQuestion(
        set_id=8,
        front="How do you define a new page in a Next.js application?",
        back="You create a new page by creating a React component in the 'pages' directory with the file name as the route"
    )

    ne8 = CardQuestion(
        set_id=8,
        front="What is the purpose of 'getServerSideProps' in Next.js?",
        back="A function used for server-side rendering that fetches data and passes it to a page component as props"
    )

    ne9 = CardQuestion(
        set_id=8,
        front="What is the 'Link' component used for in Next.js?",
        back="A component used for client-side navigation between pages in a Next.js application"
    )

    ne10 = CardQuestion(
        set_id=8,
        front="What is the 'Head' component used for in Next.js?",
        back="A component used to modify the HTML 'head' element for SEO and metadata purposes"
    )

    ne11 = CardQuestion(
        set_id=8,
        front="Explain API Routes in Next.js",
        back="API Routes are serverless functions in Next.js used for building API endpoints within your application"
    )

    ne12 = CardQuestion(
        set_id=8,
        front="What is 'dynamic routing' in Next.js?",
        back="Dynamic routing allows you to create pages with dynamic segments in the URL"
    )

    ne13 = CardQuestion(
        set_id=8,
        front="What is the purpose of 'useEffect' in Next.js?",
        back="useEffect performs side effects and runs code after the component has rendered on the client side"
    )

    ne14 = CardQuestion(
        set_id=8,
        front="What is the Next.js Image used for?",
        back="A component for optimizing and loading images in a Next.js application"
    )

    ne15 = CardQuestion(
        set_id=8,
        front="What is 'Vercel' in the context of Next.js?",
        back="A popular deployment platform for hosting Next.js applications"
    )

    ru1 = CardQuestion(
        set_id=9,
        front="What is Rust?",
        back="A systems programming language known for its focus on safety, performance, and memory management"
    )

    ru2 = CardQuestion(
        set_id=9,
        front="What is 'ownership' in Rust?",
        back="A central concept in Rust that governs how memory is managed and allocated"
    )

    ru3 = CardQuestion(
        set_id=9,
        front="Explain 'borrowing' and 'lifetimes' in Rust",
        back="Borrowing is a way to pass references to data without transferring ownership, and lifetimes ensure the safety of references"
    )

    ru4 = CardQuestion(
        set_id=9,
        front="What is the purpose of 'mutability' in Rust?",
        back="Mutability allows you to change the value of a variable after it has been declared"
    )

    ru5 = CardQuestion(
        set_id=9,
        front="What is a 'struct' in Rust?",
        back="A custom data type that allows you to group together related data fields"
    )

    ru6 = CardQuestion(
        set_id=9,
        front="Explain 'enums' in Rust",
        back="Enums are custom data types that allow you to define a type with a fixed set of named values"
    )

    ru7 = CardQuestion(
        set_id=9,
        front="What is the 'Option' type in Rust?",
        back="Option is an enum in Rust used to represent values that may be present or absent, helping to handle errors and null values"
    )

    ru8 = CardQuestion(
        set_id=9,
        front="What is Rust's ownership model and how does it work?",
        back="Rust's ownership model ensures memory safety by tracking how data is used and enforcing strict rules on borrowing and ownership"
    )

    ru9 = CardQuestion(
        set_id=9,
        front="What is Rust's borrow checker?",
        back="A component of the Rust compiler that enforces borrowing rules to prevent data races and memory issues"
    )

    ru10 = CardQuestion(
        set_id=9,
        front="Explain Rust's ownership concepts: move, borrow, and clone",
        back="Move transfers ownership of a value, borrow allows temporary access without transferring ownership, and clone creates a deep copy"
    )

    ru11 = CardQuestion(
        set_id=9,
        front="What is RAII in Rust?",
        back="RAII (Resource Acquisition Is Initialization) is a programming idiom used in Rust for automatic resource management"
    )

    ru12 = CardQuestion(
        set_id=9,
        front="What is 'Cargo' in Rust?",
        back="Cargo is Rust's package manager and build tool, used for managing dependencies and building Rust projects"
    )

    ru13 = CardQuestion(
        set_id=9,
        front="What are 'unsafe blocks' in Rust?",
        back="Unsafe blocks in Rust allow you to bypass some of the language's safety checks, but they require careful handling"
    )

    ru14 = CardQuestion(
        set_id=9,
        front="Explain Rust's fearless concurrency",
        back="Rust provides tools like ownership, lifetimes, and the 'std::thread' module to enable safe and efficient concurrent programming"
    )

    ru15 = CardQuestion(
        set_id=9,
        front="What is 'match' used for in Rust?",
        back="A control flow construct in Rust used for pattern matching and making decisions based on values"
    )

    sv1 = CardQuestion(
        set_id=10,
        front="What is SvelteKit?",
        back="A framework for building web applications and sites using the Svelte framework"
    )

    sv2 = CardQuestion(
        set_id=10,
        front="What is the key difference between Svelte and SvelteKit?",
        back="Svelte is a compiler for building components, while SvelteKit is a framework for building entire web applications"
    )

    sv3 = CardQuestion(
        set_id=10,
        front="What is 'routing' in SvelteKit?",
        back="Routing in SvelteKit refers to the management of different views or pages within a web application"
    )

    sv4 = CardQuestion(
        set_id=10,
        front="How do you define a new page in SvelteKit?",
        back="By creating a '.svelte' file in the 'src/routes' directory with a matching URL path"
    )

    sv5 = CardQuestion(
        set_id=10,
        front="What is 'layout' in SvelteKit?",
        back="A reusable component that wraps around the main content of a page, providing a consistent structure"
    )

    sv6 = CardQuestion(
        set_id=10,
        front="What is the purpose of 'stores' in SvelteKit?",
        back="Stores in SvelteKit are used for managing and sharing global state across components"
    )

    sv7 = CardQuestion(
        set_id=10,
        front="What is 'load' in SvelteKit?",
        back="A lifecycle function in SvelteKit used to fetch data asynchronously before rendering a page"
    )

    sv8 = CardQuestion(
        set_id=10,
        front="Explain 'svelte:head' in SvelteKit?",
        back="'svelte:head' is a special element of SvelteKit used to manipulate the HTML '<head>' section of a page"
    )

    sv9 = CardQuestion(
        set_id=10,
        front="What is 'actions' in SvelteKit?",
        back="Actions in SvelteKit are custom behaviors that can be applied to HTML elements, allowing for interactivity"
    )

    sv10 = CardQuestion(
        set_id=10,
        front="What is 'SvelteKit adapter'?",
        back="SvelteKit adapters are used for deploying SvelteKit applications to different hosting environments, such as Node.js or Vercel"
    )

    sv11 = CardQuestion(
        set_id=10,
        front="How do you create a custom API endpoint in SvelteKit?",
        back="You create a custom API endpoint by adding a '.js' file in the 'src/routes' directory, which defines the endpoint's logic"
    )

    sv12 = CardQuestion(
        set_id=10,
        front="What is the 'page layout' in SvelteKit?",
        back="Refers to how the content of a page is structured and styled"
    )

    sv13 = CardQuestion(
        set_id=10,
        front="What is 'preload' in SvelteKit?",
        back="A function used to fetch data required for rendering a page"
    )

    sv14 = CardQuestion(
        set_id=10,
        front="What is a 'serverless' deployment in SvelteKit?",
        back="Allows you to deploy your application as a set of stateless functions"
    )

    sv15 = CardQuestion(
        set_id=10,
        front="What are 'stores' in SvelteKit?",
        back="Allows you to manage and share reactive data across components"
    )

    ts1 = CardQuestion(
        set_id=11,
        front="What is TypeScript?",
        back="A statically types superset of JavaScript that adds type annotations and other features to enhance code quality"
    )

    ts2 = CardQuestion(
        set_id=11,
        front="What is the main benefit of using TypeScript?",
        back="Improved code quality and developer productivity through static typing"
    )

    ts3 = CardQuestion(
        set_id=11,
        front="How do you declare a variable with a specific type in TypeScript?",
        back="You declare a variable with a specific type using the colon syntax (i.e., 'let x: number = 5;')"
    )

    ts4 = CardQuestion(
        set_id=11,
        front="What are type annotations in TypeScript?",
        back="Used to specify the expected types of variables, function parameters, and return values"
    )

    ts5 = CardQuestion(
        set_id=11,
        front="Explain the 'any' type in TypeScript",
        back="The 'any' type in TypeScript represents a variable with a dynamic or unknown type"
    )

    ts6 = CardQuestion(
        set_id=11,
        front="What is type inference in TypeScript?",
        back="A feature that automatically determines the type of variables based on their initialization values"
    )

    ts7 = CardQuestion(
        set_id=11,
        front="What are interfaces in TypeScript used for?",
        back="Interfaces define the structure of objects and classes, specifying the properties and methods they should have"
    )

    ts8 = CardQuestion(
        set_id=11,
        front="What is a 'generic' in TypeScript?",
        back="Generics in TypeScript allow you to create reusable code components that work with different data types"
    )

    ts9 = CardQuestion(
        set_id=11,
        front="Explain 'enums' in TypeScript",
        back="Enums in TypeScript define a set of named numeric constants for improved code readability"
    )

    ts10 = CardQuestion(
        set_id=11,
        front="How do you define a function with type annotations in TypeScript",
        back="You define a function with type annotations by specifying the expected types of its parameters and return value"
    )

    ts11 = CardQuestion(
        set_id=11,
        front="What is a TypeScript compiler and how does it work?",
        back="The TypeScript compiler (TSC) translates TypeScript code into JavaScript, performing type checking and generating source maps"
    )

    ts12 = CardQuestion(
        set_id=11,
        front="What is 'type alias' in TypeScript?",
        back="Type aliases in TypeScript allow you to create custom names for complex types, making code more readable"
    )

    ts13 = CardQuestion(
        set_id=11,
        front="What is 'readonly' in TypeScript?",
        back="Used to indicate that a property or array should not be modified once it's set"
    )

    ts14 = CardQuestion(
        set_id=11,
        front="What is 'namespace' in TypeScript?",
        back="Namespaces in TypeScript provide a way to organize code into logical groups and prevent naming conflicts"
    )

    ts15 = CardQuestion(
        set_id=11,
        front="What is the purpose of 'type assertions' in TypeScript?",
        back="Type assertions allow you to tell the compiler that you know more about the type of a value than it does"
    )

    task1 = Task(
        user_id=1,
        title="Sample task",
        description="testing, testing, 1 2 3...",
        icon="group",
        day="Monday",
        start_time="10:00",
        end_time="10:30",
        color="#ababab",

    )

    db.session.add_all([demo, marnie, bobbie])
    db.session.add_all([quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10, quiz11, quiz12, quiz13, quiz14, quiz15, quiz16, quiz17, quiz18, quiz19])
    db.session.add_all([gk1tq1, gk1tq2, gk1tq3, gk1tq4, gk1tq5, gk1tq6, gk1tq7, gk1tq8, gk1tq9, gk1tq10,
                        gk1tq11, gk1tq12, gk1tq13, gk1tq14, gk1tq15, gk1tq16, gk1tq17, gk1tq18, gk1tq19, gk1tq20,
                        gk2tq1, gk2tq2, gk2tq3, gk2tq4, gk2tq5, gk2tq6, gk2tq7, gk2tq8, gk2tq9, gk2tq10,
                        gk2tq11, gk2tq12, gk2tq13, gk2tq14, gk2tq15, gk2tq16, gk2tq17, gk2tq18, gk2tq19, gk2tq20,
                        gk3tq1, gk3tq2, gk3tq3, gk3tq4, gk3tq5, gk3tq6, gk3tq7, gk3tq8, gk3tq9, gk3tq10,
                        gk3tq11, gk3tq12, gk3tq13, gk3tq14, gk3tq15, gk3tq16, gk3tq17, gk3tq18, gk3tq19, gk3tq20,
                        gk4tq1, gk4tq2, gk4tq3, gk4tq4, gk4tq5, gk4tq6, gk4tq6, gk4tq7, gk4tq8, gk4tq9, gk4tq10,
                        gk4tq11, gk4tq12, gk4tq13, gk4tq14, gk4tq15, gk4tq16, gk4tq17, gk4tq18, gk4tq19, gk4tq20,
                        antq1, antq2, antq3, antq4, antq5, antq6, antq7, antq8, antq9, antq10,
                        antq11, antq12, antq13, antq14, antq15, antq16, antq17, antq18, antq19, antq20,
                        cpptq1, cpptq2, cpptq3, cpptq4, cpptq5, cpptq6, cpptq7, cpptq8, cpptq9, cpptq10,
                        cpptq1, cpptq12, cpptq13, cpptq14, cpptq15, cpptq16, cpptq17, cpptq18, cpptq19, cpptq20,
                        cshtq1, cshtq2, cshtq3, cshtq4, cshtq5, cshtq6, cshtq7, cshtq8, cshtq9, cshtq10,
                        cshtq11, cshtq12, cshtq13, cshtq14, cshtq15, cshtq16, cshtq17, cshtq18, cshtq19, cshtq20,
                        jstq1, jstq2, jstq3, jstq4, jstq5, jstq6, jstq7, jstq8, jstq9, jstq10,
                        jstq11, jstq12, jstq13, jstq14, jstq15, jstq16, jstq17, jstq18, jstq19, jstq20,
                        jatq1, jatq2, jatq3, jatq4, jatq5, jatq6, jatq7, jatq8, jatq9, jatq10,
                        jatq11, jatq12, jatq13, jatq14, jatq15, jatq16, jatq17, jatq18, jatq19, jatq20,
                        retq1, retq2, retq3, retq4, retq5, retq6, retq7, retq8, retq9, retq10,
                        retq11, retq12, retq13, retq14, retq15, retq16, retq17, retq18, retq19, retq20,
                        rutq1, rutq2, rutq3, rutq4, rutq5,rutq6, rutq7, rutq8, rutq9, rutq10,
                        rutq11, rutq12, rutq13, rutq14, rutq15, rutq16, rutq17, rutq18, rutq19, rutq20,
                        svtq1, svtq2, svtq3, svtq4, svtq5, svtq6, svtq7, svtq8, svtq9, svtq10,
                        svtq11, svtq12, svtq13, svtq14, svtq15, svtq16, svtq17, svtq18, svtq19, svtq20,
                        sqltq1, sqltq2, sqltq3, sqltq4, sqltq5, sqltq6, sqltq7, sqltq8, sqltq9, sqltq10,
                        sqltq11, sqltq12, sqltq13, sqltq14, sqltq15, sqltq16, sqltq17, sqltq18, sqltq19, sqltq20,
                        tstq1, tstq2, tstq3, tstq4, tstq5, tstq6, tstq7, tstq8, tstq9, tstq10,
                        tstq11, tstq12, tstq13, tstq14, tstq15, tstq16, tstq17, tstq18, tstq19, tstq20,
                        quiz17q1, quiz17q2, quiz17q3, quiz17q4, quiz17q5, quiz17q6,
                        quiz18q1, quiz18q2, quiz18q3, quiz18q4, quiz18q5,
                        quiz19q1, quiz19q2, quiz19q3, quiz19q4, quiz19q5])
    db.session.add_all([javaScriptCards, pythonCards, reactCards, cSharpCards, javaCards, cPlusPlusCards, angularCards, nextJSCards, rustCards, typeScriptCards, svelteCards, webDevCards, gameDevCards, machineLearningCards])
    db.session.add_all([js1, js2, js3, js4, js5, js6, js7, js8, js9, js10,
                        js11, js12, js13, js14, js15, js16, js17, js18, js19, js20, js21, js22,
                        py1, py2, py3, py4, py5, py6, py7, py8, py9, py10, py11, py12,
                        re1, re2, re3, re4, re5, re6, re7, re8, re9, re10, re11, re12, re13,
                        cs1, cs2, cs3, cs4, cs5, cs6, cs7, cs8, cs9, cs10, cs11, cs12, cs13, cs14, cs15,
                        ja1, ja2, ja3, ja4, ja5, ja6, ja7, ja8, ja9, ja10, ja11, ja12, ja13, ja14,
                        cp1, cp2, cp3, cp4, cp5, cp6, cp7, cp8, cp9, cp10, cp11, cp12, cp13, cp14, cp15,
                        an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15,
                        ne1, ne2, ne3, ne4, ne5, ne6, ne7, ne8, ne9, ne10, ne11, ne12, ne13, ne14, ne15,
                        ru1, ru2, ru3, ru4, ru5, ru6, ru7, ru8, ru9, ru10, ru11, ru12, ru13, ru14, ru15,
                        sv1, sv2, sv3, sv4, sv5, sv6, sv7, sv8, sv9, sv10, sv11, sv12, sv13, sv14, sv15,
                        ts1, ts2, ts3, ts4, ts5, ts6, ts7, ts8, ts9, ts10, ts11, ts12, ts13, ts14, ts15,
                        wd1, wd2, wd3, wd4, wd5, wd6, wd7, wd8, wd9, wd10,
                        gd1, gd2, gd3, gd4, gd5, gd6, gd7, gd8, gd9, gd10,
                        ml1, ml2, ml3, ml4, ml5, ml6, ml7, ml8, ml9, ml10])
    db.session.add(task1)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.trivia_questions RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.card_sets RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.card_questions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
