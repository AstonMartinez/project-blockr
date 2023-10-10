from app.models import db, User, environment, SCHEMA
from app.models.trivia_questions import TriviaQuestion
from app.models.card_sets import CardSets
from app.models.card_questions import CardQuestion
from app.models.user_stats import UserStats
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstName='Demo',
        lastName='Lition',
        email='demo@aa.io',
        password='password'
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

    questionOne = TriviaQuestion(
        question="A coder who can develop both client-side and server-side software is known as a full-___ developer?",
        answer_one="Heap",
        answer_two="Stack",
        answer_three="Queue",
        answer_four="Loop",
        solution="Stack",
        category="General",
        status="public"
    )

    questionTwo = TriviaQuestion(
        question="The “Big Four” in the tech industry are Google (Alphabet), Apple, Meta (Facebook), and Amazon. Which corporation known for computers, software, and Bill Gates, is sometimes added to form the “Big Five” (or GAMAF)?",
        answer_one="Adobe",
        answer_two="Unity",
        answer_three="Microsoft",
        answer_four="Sony",
        solution="Microsoft",
        category="General",
        status="public"
    )
    questionThree = TriviaQuestion(
        question="What are the differences between null and undefined?",
        answer_one="Null is assigned a value, while undefined has no value",
        answer_two="Undefined is assigned a value, while null has no value",
        answer_three="Nothing - they're the same",
        solution="Null is assigned a value, while undefined has no value",
        category="JavaScript",
        status="public"
    )
    questionFour = TriviaQuestion(
        question="What are the differences between == and ===?",
        answer_one="== is tolerant and will not check types and === will check whether both sides are of same type",
        answer_two="=== is tolerant will not check types and == will check whether both sides are of same type",
        answer_three="Nothing - they're the same",
        solution="== is tolerant and will not check types and === will check whether both sides are of same type",
        category="JavaScript",
        status="public"
    )
    questionFive = TriviaQuestion(
        question="What does 'typeof []' evaluate to?",
        answer_one="Array",
        answer_two="Object",
        answer_three="String",
        answer_four="Boolean",
        solution="Object",
        category="JavaScript",
        status="public"
    )

    questionSix = TriviaQuestion(
        question="Which of the following is NOT a lifecycle method in a React component?",
        answer_one="componentDidMount",
        answer_two="componentDidUpdate",
        answer_three="componentWillUnmount",
        answer_four="componentUnmounted",
        solution="componentUnmounted",
        category="React",
        status="public"
    )

    questionSeven = TriviaQuestion(
        question="What is Babel?",
        answer_one="An npm package",
        answer_two="A JavaScript compiler",
        answer_three="A CSS framework",
        answer_four="An environment variable",
        solution="A JavaScript compiler",
        category="JavaScript",
        status="public"
    )

    questionEight = TriviaQuestion(
        question="What is a higher order component in React?",
        answer_one="A component that holds other components",
        answer_two="A component held within another component",
        answer_three="A nested HTML structure in the virtual DOM",
        answer_four="A function that takes a component and returns a new component",
        solution="A function that takes a component and returns a new component",
        category="React",
        status="public"
    )

    questionNine = TriviaQuestion(
        question="What is ECMAScript?",
        answer_one="A programming language standard",
        answer_two="A programming language",
        answer_three="An npm package",
        answer_four="A framework",
        solution="A programming language standard",
        category="General",
        status="public"
    )

    questionTen = TriviaQuestion(
        question="What is the most popular implementation of ECMAScript?",
        answer_one="Python",
        answer_two="JavaScript",
        answer_three="C++",
        answer_four="Java",
        solution="JavaScript",
        category="General",
        status="public"
    )

    questionEleven = TriviaQuestion(
        question="Which of these is NOT an advantage of using ReactJS?",
        answer_one="Easy to integrate with other frameworks(Angular, BackboneJS) since it is only a view library",
        answer_two="Increases the application’s performance with Virtual DOM",
        answer_three="It is only a view layer",
        answer_four="JSX makes code is easy to read and write",
        solution="It is only a view layer",
        category="React",
        status="public"
    )

    questionTwelve = TriviaQuestion(
        question="Who created the Python programming language?",
        answer_one="Bill Joy",
        answer_two="Brian Kernighan",
        answer_three="Larry Wall",
        answer_four="Guido van Rossum",
        solution="Guido van Rossum",
        category="Python",
        status="public"
    )

    questionThirteen = TriviaQuestion(
        question="Why did the creator of Python choose that name for the programming language?",
        answer_one="The inventor's best friend suggested the name",
        answer_two="The inventor is a fan of Monty Python's Flying Circus",
        answer_three="The inventor was once attacked by a python in the Amazons",
        answer_four="As a kid, the inventor liked to play the snakes-and-ladders game",
        solution="The inventor is a fan of Monty Python's Flying Circus",
        category="Python",
        status="public"
    )

    questionFourteen = TriviaQuestion(
        question="Which of these languages does Python resemble in its class syntax?",
        answer_one="Perl",
        answer_two="Eiffel",
        answer_three="Smalltalk",
        answer_four="C++",
        solution="C++",
        category="Python",
        status="public"
    )

    questionFifteen = TriviaQuestion(
        question="Which languages does Python owe its origin to?",
        answer_one="ABC, Eiffel",
        answer_two="Perl, Modula-3",
        answer_three="ABC, Smalltalk",
        answer_four="ABC, Modula-3",
        solution="ABC, Modula-3",
        category="Python",
        status="public"
    )

    questionSixteen = TriviaQuestion(
        question="Which of these languages have strong support for regular expressions?",
        answer_one="Python, Perl, HTML",
        answer_two="Python, Perl, C",
        answer_three="Python, Perl, Ruby",
        answer_four="Python, Perl, Java",
        solution="Python, Perl, Ruby",
        category="General",
        status="public"
    )

    questionSeventeen = TriviaQuestion(
        question="Which of the following is NOT considered an advantage of the Python programming language?",
        answer_one="Ideally suited for fast and memory intensive tasks like number crunching",
        answer_two="Well suited for the novice as well as the expert",
        answer_three="Object oriented, easily extendable, and highly scalable",
        answer_four="Allows for rapid development reducing software production lifecycles",
        solution="Ideally suited for fast and memory intensive tasks like number crunching",
        category="Python",
        status="public"
    )

    questionEighteen = TriviaQuestion(
        question="Which of these languages has Python NOT borrowed its features from?",
        answer_one="CLISP (Common Lisp)",
        answer_two="Fortran",
        answer_three="C++",
        answer_four="Java",
        solution="Fortran",
        category="Python",
        status="public"
    )

    questionNineteen = TriviaQuestion(
        question="What is the Java implementation of Python popularly known as?",
        answer_one="JavaPython",
        answer_two="PyJava",
        answer_three="Javathon",
        answer_four="Jython",
        solution="Jython",
        category="Java",
        status="public"
    )

    questionTwenty = TriviaQuestion(
        question="Which of the following data structures falls under the category of a 'dictionary'?",
        answer_one="Hash table",
        answer_two="Hash",
        answer_three="Tree",
        answer_four="Linked list",
        solution="Hash table",
        category="General",
        status="public"
    )

    questionTwentyOne = TriviaQuestion(
        question="When using a heap, which function will give you the parent of the entry with index i?",
        answer_one="Decimal division, i / 2",
        answer_two="Integer division, i / 2",
        answer_three="Multiplication, i * 2",
        answer_four="Multiplication, i * 2 + 1",
        solution="Integer division, i / 2",
        category="General",
        status="public"
    )

    questionTwentyTwo = TriviaQuestion(
        question="A vector (an indexed, growable list) would most likely be implemented on top of which of these structures?",
        answer_one="Hash table",
        answer_two="Stack",
        answer_three="Tree",
        answer_four="Linked list",
        solution="Linked list",
        category="General",
        status="public"
    )

    questionTwentyThree = TriviaQuestion(
        question="If you have an empty stack that can contain letters, and you push (in order) these letters onto it, what order will they be in when you pop them off? 't', 'a', 'p'",
        answer_one="'p', 'a', 't'",
        answer_two="'a', 'p', 't'",
        answer_three="'t', 'a', 'p'",
        answer_four="There is no way to tell",
        solution="'p', 'a', 't'",
        category="JavaScript",
        status="public"
    )

    questionTwentyFour = TriviaQuestion(
        question="If you have an empty queue that can contain letters, and you enqueue (in order), these letters into it, what order will they be in when you dequeue them? 'm', 'a', 'r'",
        answer_one="'m', 'a', 'r'",
        answer_two="'a', 'r', 'm'",
        answer_three="'r', 'a', 'm'",
        answer_four="There is no way to tell",
        solution="'m', 'a', 'r'",
        category="General",
        status="public"
    )

    questionTwentyFive = TriviaQuestion(
        question="Which of the following could best be described by the graph structure?",
        answer_one="Given a word, finding its definition",
        answer_two="Algebraic problems",
        answer_three="Roads connecting cities",
        answer_four="A GUI (Graphical User Interface)",
        solution="Roads connecting cities",
        category="General",
        status="public"
    )

    questionTwentySix = TriviaQuestion(
        question="If you have a sorted, balanced binary tree with 15 elements in it, how many steps, maximum, will it take you to decide whether an element is present in the tree?",
        answer_one="Four",
        answer_two="Fifteen",
        answer_three="Three",
        answer_four="Depends on the computer",
        solution="Four",
        category="General",
        status="public"
    )

    questionTwentySeven = TriviaQuestion(
        question="Which of these is true about a set?",
        answer_one="The elements are kept in order",
        answer_two="There are no duplicates",
        answer_three="They can only hold numbers",
        answer_four="All of these",
        solution="There are no duplicates",
        category="JavaScript",
        status="public"
    )

    questionTwentyEight = TriviaQuestion(
        question="Modern filesystems, like ReiserFS and XFS, use which structure to organize their data for efficient access?",
        answer_one="B+Trees",
        answer_two="Tables",
        answer_three="B-Trees",
        answer_four="Lists",
        solution="B+Trees",
        category="General",
        status="public"
    )

    questionTwentyNine = TriviaQuestion(
        question="Design is one step in the process of software development, in which the requirements for building the software are gathered and analyzed in order to create an architectural model.",
        answer_one="True",
        answer_two="False",
        solution="True",
        category="General",
        status="public"
    )

    questionThirty = TriviaQuestion(
        question="According to Pressman, what is design?",
        answer_one="Information driven",
        answer_two="Coding driven",
        answer_three="Architecture driven",
        answer_four="Testing driven",
        solution="Information driven",
        category="General",
        status="public"
    )

    questionThirtyOne = TriviaQuestion(
        question="Which of these are characteristics of a strong design?",
        answer_one="Modular",
        answer_two="High Cohesion",
        answer_three="Low Coupling",
        answer_four="All of these",
        solution="All of these",
        category="General",
        status="public"
    )

    questionThirtyTwo = TriviaQuestion(
        question="When we think about software architecture, we should think of it as the same thing as the end product - functioning software.",
        answer_one="True",
        answer_two="False",
        solution="False",
        category="General",
        status="public"
    )

    questionThirtyThree = TriviaQuestion(
        question="The two levels of design for software architecture are:",
        answer_one="Coding design and architectural design",
        answer_two="Architectural design and XP design",
        answer_three="Pattern design and data design",
        answer_four="Data design and architectural design",
        solution="Data design and architectural design",
        category="General",
        status="public"
    )

    questionThirtyFour = TriviaQuestion(
        question="In software engineering, what does KDD stand for?",
        answer_one="Knowledge discovery in databases",
        answer_two="Knowledge development in design",
        answer_three="Knowledge distortion of design",
        answer_four="Knowledge detection of databases",
        solution="Knowledge discovery in databases",
        category="General",
        status="public"
    )

    questionThirtyFive = TriviaQuestion(
        question="Which of these is an example of an archetype?",
        answer_one="All of these",
        answer_two="Actors",
        answer_three="Architectural style",
        answer_four="Node",
        solution="Node",
        category="General",
        status="public"
    )

    questionThirtySix = TriviaQuestion(
        question="In software engineering, what does ATAM stand for?",
        answer_one="Architecture trade-off analysis method",
        answer_two="Application texture architectural method",
        answer_three="Architecture type analysis method",
        answer_four="Architecture type analysis management",
        solution="Architecture trade-off analysis method",
        category="General",
        status="public"
    )

    questionThirtySeven = TriviaQuestion(
        question="To check the complexity of an architecture, what could a programmer use?",
        answer_one="Coupling",
        answer_two="Dependencies",
        answer_three="Architecture testing",
        answer_four="Beta testing",
        solution="Dependencies",
        category="General",
        status="public"
    )

    questionThirtyEight = TriviaQuestion(
        question="What is the use of an Architectural Description Language (ADL)?",
        answer_one="Codes the architecture into desired programming language",
        answer_two="Describes how to design the software in a specified language",
        answer_three="Helps design the language in which the software should be built",
        answer_four="Provides syntax for describing a software architecture",
        solution="Provides syntax for describing a software architecture",
        category="General",
        status="public"
    )

    questionThirtyNine = TriviaQuestion(
        question="Which SQL command would you use to retrieve a record or records from the database?",
        answer_one="FIND",
        answer_two="SELECT",
        answer_three="SEARCH",
        answer_four="RETRIEVE",
        solution="SELECT",
        category="SQL",
        status="public"
    )

    questionForty = TriviaQuestion(
        question="Which SQL command would you use to add a new record (row) to the database?",
        answer_one="ADDROW",
        answer_two="INSERT",
        answer_three="NEWRECORD",
        answer_four="UPDATE",
        solution="INSERT",
        category="SQL",
        status="public"
    )

    questionFortyOne = TriviaQuestion(
        question="Which SQL command would you use to modify the contents of an existing record (row) in the database?",
        answer_one="INSERT",
        answer_two="UPDATE",
        answer_three="MERGE",
        answer_four="MODIFY",
        solution="UPDATE",
        category="SQL",
        status="public"
    )

    questionFortyTwo = TriviaQuestion(
        question="What does the command: 'TRUNCATE TABLE Sample' do?",
        answer_one="Deletes the table called Sample",
        answer_two="Empties all data (rows) from the table called Sample",
        answer_three="There is no command called Truncate",
        answer_four="Reindexes the rows in the table called Sample",
        solution="Empties all data (rows) from the table called Sample",
        category="SQL",
        status="public"
    )

    questionFortyThree = TriviaQuestion(
        question="In the following SQL statement, what belongs in the blank?: INSERT INTO ____ VALUES (value1, value2)",
        answer_one="The table name",
        answer_two="The database name",
        answer_three="The column(s) name",
        answer_four="None of the above",
        solution="The table name",
        category="SQL",
        status="public"
    )

    questionFortyFour = TriviaQuestion(
        question="The ALTER tablename command would be used to...",
        answer_one="Rename the database table",
        answer_two="Add columns to or drop columns from an existing database table",
        answer_three="Create a new table in the database",
        answer_four="None of the above",
        solution="Add columns to or drop columns from an existing database table",
        category="SQL",
        status="public"
    )

    questionFortyFive = TriviaQuestion(
        question="This aggregate SQL function will return the number of rows in a database table:",
        answer_one="SUM(column_name)",
        answer_two="NUM(column_name)",
        answer_three="MAX(column_name)",
        answer_four="COUNT(column_name) or COUNT(*)",
        solution="COUNT(column_name) or COUNT(*)",
        category="SQL",
        status="public"
    )

    questionFortySix = TriviaQuestion(
        question="This is a column with a unique value for each row used to bind data together, across tables, without repeating all of the data in every table:",
        answer_one="Primary Column",
        answer_two="Primary Key",
        answer_three="Index",
        answer_four="None of the above",
        solution="Primary Key",
        category="SQL",
        status="public"
    )

    questionFortySeven = TriviaQuestion(
        question="This type of JOIN statement will return all the rows from the first table, even if there are no matches in the second table:",
        answer_one="RIGHT JOIN",
        answer_two="LEFT JOIN",
        answer_three="INNER JOIN",
        answer_four="OUTER JOIN",
        solution="LEFT JOIN",
        category="SQL",
        status="public"
    )

    questionFortyEight = TriviaQuestion(
        question="What rows will the following select statement return?: SELECT * FROM products WHERE ordernumber >= 1000",
        answer_one="All rows in the products table whose order number is greater than 1000",
        answer_two="The first 1000 rows of the product table.",
        answer_three="All rows in the product table whose order number is greater than or equal to 1000",
        answer_four="All rows in the products table whose order number is less than or equal to 1000",
        solution="All rows in the product table whose order number is greater than or equal to 1000",
        category="SQL",
        status="public"
    )

    questionFortyNine = TriviaQuestion(
        question="Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements.",
        answer_one="True",
        answer_two="False",
        solution="True",
        category="JavaScript",
        status="public"
    )

    questionFifty = TriviaQuestion(
        question="Which of these is NOT a common SDLC model?",
        answer_one="Agile",
        answer_two="Waterfall",
        answer_three="DevOps",
        answer_four="REST",
        solution="REST",
        category="General",
        status="public"
    )

    questionFiftyOne = TriviaQuestion(
        question="What does SDLC stand for?",
        answer_one="Software Development Life Cycle",
        answer_two="Single Development Line Citation",
        answer_three="String Delineation Line Cycle",
        answer_four="Several Deep Little Cuts",
        solution="Software Development Life Cycle",
        category="General",
        status="public"
    )

    questionFiftyTwo = TriviaQuestion(
        question="What does DRY stand for?",
        answer_one="Don't Repeat Yourself",
        answer_two="Don't Read Yourself",
        answer_three="Don't Redesign Yourself",
        answer_four="Don't Restrict Yourself",
        solution="Don't Repeat Yourself",
        category="General",
        status="public"
    )

    questionFiftyThree = TriviaQuestion(
        question="Which of these is NOT one of the five SOLID principles in object-oriented design?",
        answer_one="Single Responsibility Principle",
        answer_two="Interface Segregation",
        answer_three="Liskov Substitution",
        answer_four="Object Permanance",
        solution="Object Permanance",
        category="General",
        status="public"
    )

    questionFiftyFour = TriviaQuestion(
        question="What is the difference between polymorphism and inheritance?",
        answer_one="Polymorphism is an 'is-a' relationship, while inheritance is a way to interact with objects of a different class using a common interface",
        answer_two="Inheritance is an 'is-a' relationship, while polymorphism is a way to interact with objects of a different class using a common interface",
        answer_three="Neither of the above",
        solution="Inheritance is an 'is-a' relationship, while polymorphism is a way to interact with objects of a different class using a common interface",
        category="General",
        status="public"
    )

    questionFiftyFive = TriviaQuestion(
        question="What does API stand for?",
        answer_one="Advanced Programming Instruction",
        answer_two="Application Process Integration",
        answer_three="Application Programming Interface",
        answer_four="Automated Programming Interface",
        solution="Application Programming Interface",
        category="General",
        status="public"
    )

    questionFiftySix = TriviaQuestion(
        question="What is the difference between authentication and authorization?",
        answer_one="Authorization verifies the identity of a user, while authentication determines what actions they are allow to perform once authorized",
        answer_two="Authentication verifies the identity of a user, while authorization determines what actions they are allow to perform once authenticated",
        answer_three="Neither of the above",
        solution="Authentication verifies the identity of a user, while authorization determines what actions they are allow to perform once authenticated",
        category="General",
        status="public"
    )

    questionFiftySeven = TriviaQuestion(
        question="What is the purpose of the HTTP status code 404?",
        answer_one="Indicates that the requested resource was not found on the server",
        answer_two="Indicates an internal server error",
        answer_three="Indicates a successful POST action",
        answer_four="Indicates that the server is redirecting",
        solution="Indicates that the requested resource was not found on the server",
        category="General",
        status="public"
    )

    questionFiftyEight = TriviaQuestion(
        question="Which of these are NOT a characteristic of a RESTful API?",
        answer_one="Stateless communication",
        answer_two="Resource-based URLs",
        answer_three="Use of HTTP methods",
        answer_four="JavaScript based server",
        solution="JavaScript based server",
        category="General",
        status="public"
    )

    questionFiftyNine = TriviaQuestion(
        question="The CAP theorem states that in a distributed system, you can have at most two of the three following guarantees:",
        answer_one="Capability, Architecture, Patterns",
        answer_two="Consistency, Availability, and Partition Tolerance",
        answer_three="Calibration, Applicability, and Pagination",
        answer_four="None of the above",
        solution="Consistency, Availability, and Partition Tolerance",
        category="General",
        status="public"
    )

    questionSixty = TriviaQuestion(
        question="What is the difference between white-box and black-box testing?",
        answer_one="White-box testing focuses on internal code structures, while black-box testing evaluates the functionality of a system without knowledge of its internal implementation",
        answer_two="Black-box testing focuses on internal code structures, while white-box testing evaluates the functionality of a system without knowledge of its internal implementation",
        answer_three="Neither of the above",
        solution="White-box testing focuses on internal code structures, while black-box testing evaluates the functionality of a system without knowledge of its internal implementation",
        category="General",
        status="public"
    )

    questionSixtyOne = TriviaQuestion(
        question="What is the difference between horizontal and vertical scaling?",
        answer_one="Vertical scaling adds more machines or nodes to a system, while horizontal scaling involves adding more resources (CPU, RAM) to a single machine.",
        answer_two="Horizontal scaling adds more machines or nodes to a system, while vertical scaling involves adding more resources (CPU, RAM) to a single machine.",
        solution="Horizontal scaling adds more machines or nodes to a system, while vertical scaling involves adding more resources (CPU, RAM) to a single machine.",
        category="General",
        status="public"
    )

    questionSixtyTwo = TriviaQuestion(
        question="Which of these is a type of microservice?",
        answer_one="External APIs",
        answer_two="Websockets",
        answer_three="AWS",
        answer_four="All of the above",
        solution="All of the above",
        category="General",
        status="public"
    )

    questionSixtyThree = TriviaQuestion(
        question="What is the purpose of a load balancer in a distributed system?",
        answer_one="To add complexity to the system",
        answer_two="To centralize all incoming traffic",
        answer_three="To distribute incoming network traffic across multiple servers",
        answer_four="To secure the network",
        solution="To distribute incoming network traffic across multiple servers",
        category="General",
        status="public"
    )

    questionSixtyFour = TriviaQuestion(
        question="Which of the following accurately describes the difference between a 'shallow copy' and a 'deep copy'?",
        answer_one="A deep copy of an object copies references to its elements, while a shallow copy creates a new object with copies of all its elements, including nested objects.",
        answer_two="A shallow copy of an object copies references to its elements, while a deep copy creates a new object with copies of all its elements, including nested objects.",
        answer_three="Neither - they're essentially the same",
        solution="A shallow copy of an object copies references to its elements, while a deep copy creates a new object with copies of all its elements, including nested objects.",
        category="General",
        status="public"
    )

    questionSixtyFive = TriviaQuestion(
        question="Which of these is NOT a popular package manager?",
        answer_one="Npm",
        answer_two="Babel",
        answer_three="Pip",
        answer_four="Maven",
        solution="Babel",
        category="General",
        status="public"
    )

    questionSixtySix = TriviaQuestion(
        question="What is the primary goal of software testing?",
        answer_one="To eliminate all bugs from the software",
        answer_two="To ensure the software meets the requirements",
        answer_three="To speed up the software development process",
        answer_four="To reduce the cost of software development",
        solution="To ensure the software meets the requirements",
        category="General",
        status="public"
    )

    questionSixtySeven = TriviaQuestion(
        question="Which of the following is NOT a software development methodology?",
        answer_one="Waterfall",
        answer_two="Scrum",
        answer_three="Agile",
        answer_four="Spiral",
        solution="Agile",
        category="General",
        status="public"
    )

    questionSixtyEight = TriviaQuestion(
        question="What does 'CI' stand for in the context of software development?",
        answer_one="Continuous Integration",
        answer_two="Complete Integration",
        answer_three="Continuous Improvement",
        answer_four="Central Integration",
        solution="Continuous Integration",
        category="General",
        status="public"
    )

    questionSixtyNine = TriviaQuestion(
        question="Which of the following is NOT a version control system?",
        answer_one="Git",
        answer_two="Subversion (SVN)",
        answer_three="Mercurial",
        answer_four="Java",
        solution="Java",
        category="General",
        status="public"
    )

    questionSeventy = TriviaQuestion(
        question="What is the purpose of a code review?",
        answer_one="To write new code",
        answer_two="To find and fix bugs",
        answer_three="To provide project management",
        answer_four="To document the code",
        solution="To find and fix bugs",
        category="General",
        status="public"
    )

    questionSeventyOne = TriviaQuestion(
        question="What is the main advantage of using dependency injection in software design?",
        answer_one="It reduces code complexity",
        answer_two="It improves performance",
        answer_three="It makes code easier to test and maintain",
        answer_four="It eliminates the need for unit testing",
        solution="It makes code easier to test and maintain",
        category="General",
        status="public"
    )

    questionSeventyTwo = TriviaQuestion(
        question="What is the purpose of a CDN in web development?",
        answer_one="To manage customer data",
        answer_two="To improve code readability",
        answer_three="To optimize web page loading speed",
        answer_four="To encrypt network traffic",
        solution="To optimize web page loading speed",
        category="General",
        status="public"
    )

    questionSeventyThree = TriviaQuestion(
        question="Which HTTP status code indicates a successful response in most cases?",
        answer_one="200",
        answer_two="404",
        answer_three="500",
        answer_four="302",
        solution="200",
        category="General",
        status="public"
    )

    questionSeventyFour = TriviaQuestion(
        question="What is the primary advantage of using a NoSQL database over a traditional relational database?",
        answer_one="Better support for complex queries",
        answer_two="Strong ACID compliance",
        answer_three="Horizontal scalability",
        answer_four="Simplicity of schema design",
        solution="Horizontal scalability",
        category="General",
        status="public"
    )

    questionSeventyFive = TriviaQuestion(
        question="What is a mutex in multi-threaded programming?",
        answer_one="A data structure for caching",
        answer_two="A mechanism for avoiding deadlocks",
        answer_three="A synchronization primitive for controlling access to shared resources",
        answer_four="A lightweight thread",
        solution="A synchronization primitive for controlling access to shared resources",
        category="General",
        status="public"
    )

    questionSeventySix = TriviaQuestion(
        question="What does SQL stand for in the context of databases?",
        answer_one="Structured Query Language",
        answer_two="Simple Query Language",
        answer_three="Scripted Query Language",
        answer_four="Structured Query Logic",
        solution="Structured Query Language",
        category="SQL",
        status="public"
    )

    questionSeventySeven = TriviaQuestion(
        question="Which of the following is NOT an advantage of using containers like Docker?",
        answer_one="Portability",
        answer_two="Isolation",
        answer_three="High resource utilization",
        answer_four="Scalability",
        solution="High resource utilization",
        category="General",
        status="public"
    )

    questionSeventyEight = TriviaQuestion(
        question="What is the primary goal of A/B testing in web development?",
        answer_one="To find and fix security vulnerabilities",
        answer_two="To compare two versions of a webpage or application to determine which performs better",
        answer_three="To automate testing of user interfaces",
        answer_four="To test the compatibility of an application with multiple browsers",
        solution="To compare two versions of a webpage or application to determine which performs better",
        category="General",
        status="public"
    )

    questionSeventyNine = TriviaQuestion(
        question="What is the purpose of a memory profiler in software development?",
        answer_one="To optimize network traffic",
        answer_two="To track memory usage and identify memory leaks",
        answer_three="To monitor CPU performance",
        answer_four="To generate code documentation",
        solution="To track memory usage and identify memory leaks",
        category="General",
        status="public"
    )

    questionEighty = TriviaQuestion(
        question="Which of the following statements about the Single Responsibility Principle in SOLID is true?",
        answer_one="It encourages a class to have multiple reasons to change",
        answer_two="It suggests that a class should have only one method",
        answer_three="It advises against writing code that performs multiple tasks",
        answer_four="It is not related to object-oriented programming",
        solution="It advises against writing code that performs multiple tasks",
        category="General",
        status="public"
    )

    questionEightyOne = TriviaQuestion(
        question="What is 'Big O' notation used for in algorithm analysis?",
        answer_one="To represent large datasets",
        answer_two="To describe the physical size of objects",
        answer_three="To analyze an algorithm's time or space complexity in relation to input size",
        answer_four="To measure the amount of memory used by an algorithm",
        solution="To analyze an algorithm's time or space complexity in relation to input size",
        category="General",
        status="public"
    )

    questionEightyTwo = TriviaQuestion(
        question="Which of the following is an Integrated Development Environment (IDE)?",
        answer_one="Python",
        answer_two="Visual Studio Code",
        answer_three="Git",
        answer_four="HTML",
        solution="Visual Studio Code",
        category="General",
        status="public"
    )

    questionEightyThree = TriviaQuestion(
        question="What is the key difference between a library and a framework in software development?",
        answer_one="Frameworks provide pre-written functions, while libraries offer a structured project template",
        answer_two="Libraries are used for web development, while frameworks are used for mobile app development",
        answer_three="Frameworks provide a structured project template, while libraries offer pre-written functions",
        answer_four="There is no difference - the terms are interchangeable",
        solution="Frameworks provide pre-written functions, while libraries offer a structured project template",
        category="General",
        status="public"
    )

    questionEightyFour = TriviaQuestion(
        question="What is the primary purpose of a shallow copy in programming?",
        answer_one="To create a new object with copies of all its elements, including nested objects",
        answer_two="To copy references to elements in an existing object",
        answer_three="To ensure that an object is not modified by mistake",
        answer_four="To reduce the memory footprint of an object",
        solution="To copy references to elements in an existing object",
        category="General",
        status="public"
    )

    questionEightyFive = TriviaQuestion(
        question="What is a race condition in multi-threaded programming?",
        answer_one="A condition where two or more threads cannot execute concurrently",
        answer_two="A condition where two or more threads compete for resources",
        answer_three="A condition where two or more threads share no resources",
        answer_four="A condition where a thread is forced to wait indefinitely",
        solution="A condition where two or more threads compete for resources",
        category="General",
        status="public"
    )

    questionEightySix = TriviaQuestion(
        question="What is the primary purpose of a package manager in software development?",
        answer_one="To manage project deadlines",
        answer_two="To write code documentation",
        answer_three="To install, update, and manage software dependencies",
        answer_four="To enforce coding standards",
        solution="To install, update, and manage software dependencies",
        category="General",
        status="public"
    )

    questionEightySeven = TriviaQuestion(
        question="What is the primary goal of continuous integration (CI) in software development?",
        answer_one="To eliminate the need for testing",
        answer_two="To ensure code is never changed",
        answer_three="To automatically build, test, and integrate code changes into a shared repository",
        answer_four="To slow down the software development process",
        solution="To automatically build, test, and integrate code changes into a shared repository",
        category="General",
        status="public"
    )

    questionEightyEight = TriviaQuestion(
        question="In the context of software development, what does 'DevOps' refer to?",
        answer_one="A programming language",
        answer_two="A software development methodology",
        answer_three="A cultural and technical approach that emphasizes collaboration between development and operations teams",
        answer_four="A code review tool",
        solution="A cultural and technical approach that emphasizes collaboration between development and operations teams",
        category="General",
        status="public"
    )

    questionEightyNine = TriviaQuestion(
        question="What is the purpose of a design sprint in the software development process?",
        answer_one="To write code",
        answer_two="To find and fix bugs",
        answer_three="To solve complex problems and validate ideas quickly",
        answer_four="To document the code",
        solution="To solve complex problems and validate ideas quickly",
        category="General",
        status="public"
    )

    questionNinety = TriviaQuestion(
        question="What is the primary goal of the 'Open-Closed Principle' in SOLID?",
        answer_one="To encourage code modification",
        answer_two="To prevent code extensions",
        answer_three="To make software entities open for modification",
        answer_four="To make software entities closed for extension",
        solution="To make software entities closed for extension",
        category="General",
        status="public"
    )

    questionNinetyOne = TriviaQuestion(
        question="What does REST stand for in the context of web services?",
        answer_one="Reliable Service Technology",
        answer_two="Remote Execution and Service Transmission",
        answer_three="Representational State Transfer",
        answer_four="Responsive and Efficient Service Transfer",
        solution="Representational State Transfer",
        category="General",
        status="public"
    )

    questionNinetyTwo = TriviaQuestion(
        question="What is the primary purpose of a NoSQL database?",
        answer_one="To ensure strong data consistency",
        answer_two="To provide a fixed schema for data storage",
        answer_three="To handle large volumes of unstructured or semi-structured data",
        answer_four="To ensure data integrity",
        solution="To handle large volumes of unstructured or semi-structured data",
        category="General",
        status="public"
    )

    questionNinetyThree = TriviaQuestion(
        question="In web development, what does it mean for an application to be stateless?",
        answer_one="The application is always running",
        answer_two="The application retains user data between requests",
        answer_three="Each request from a user contains all necessary information and the server does not retain previous interactions",
        answer_four="The application uses a single server",
        solution="Each request from a user contains all necessary information and the server does not retain previous interactions",
        category="General",
        status="public"
    )

    questionNinetyFour = TriviaQuestion(
        question="What is the primary purpose of a code profiler in software development?",
        answer_one="To optimize network communication",
        answer_two="To track code execution time and identify performance bottlenecks",
        answer_three="To manage code repositories",
        answer_four="To generate code documentation",
        solution="To track code execution time and identify performance bottlenecks",
        category="General",
        status="public"
    )

    questionNinetyFive = TriviaQuestion(
        question="In the context of software development, what is a 'fail-fast' design principles?",
        answer_one="A design approach that aims to create software that never fails",
        answer_two="A design approach that avoids error detection",
        answer_three="A design approach that detects and reports errors as early as possible to minimize their impact",
        answer_four="A design approach that encourages slow and cautious development",
        solution="A design approach that detects and reports errors as early as possible to minimize their impact",
        category="General",
        status="public"
    )

    questionNinetySix = TriviaQuestion(
        question="Which of the following is an example of a hashing algorithm used for password storage?",
        answer_one="SHA-256",
        answer_two="RSA",
        answer_three="AES",
        answer_four="MD5",
        solution="SHA-256",
        category="General",
        status="public"
    )

    questionNinetySeven = TriviaQuestion(
        question="What is the primary goal of the Liskov Substitution Principle in SOLID?",
        answer_one="To ensure that objects of derived classes can be subsituted for objects of their base classes without affecting program correctness",
        answer_two="To restrict inheritance in object-oriented programming",
        answer_three="To promote tight coupling between classes",
        answer_four="To discourage code reuse",
        solution="To ensure that objects of derived classes can be subsituted for objects of their base classes without affecting program correctness",
        category="General",
        status="public"
    )

    questionNinetyEight = TriviaQuestion(
        question="Which of the following HTTP methods is typically used for safe and idempotent operations?",
        answer_one="POST",
        answer_two="GET",
        answer_three="PUT",
        answer_four="DELETE",
        solution="GET",
        category="General",
        status="public"
    )

    questionNinetyNine = TriviaQuestion(
        question="What does ORM stand for in software development?",
        answer_one="Object Relational Mapping",
        answer_two="Object Resource Modeling",
        answer_three="Object Reference Management",
        answer_four="Object Relocation Mechanism",
        solution="Object Relational Mapping",
        category="General",
        status="public"
    )

    questionOneHundred = TriviaQuestion(
        question="Which of the following is an example of a SQL database management system (DBMS)?",
        answer_one="MongoDB",
        answer_two="PostgreSQL",
        answer_three="Redis",
        answer_four="Cassandra",
        solution="PostgreSQL",
        category="SQL",
        status="public"
    )

    question101 = TriviaQuestion(
        question="What does 'JWT' stand for in the context of authentication and authorization?",
        answer_one="JavaScript Web Token",
        answer_two="JSON Web Token",
        answer_three="Java Web Token",
        answer_four="JavaScript Web Transfer",
        solution="JSON Web Token",
        category="General",
        status="public"
    )

    question102 = TriviaQuestion(
        question="Which of the following is NOT a commonly used HTTP status code?",
        answer_one="403",
        answer_two="206",
        answer_three="303",
        answer_four="801",
        solution="801",
        category="General",
        status="public"
    )

    question103 = TriviaQuestion(
        question="What is the primary purpose of a firewall in network security?",
        answer_one="To block all incoming network traffic",
        answer_two="To monitor network performance",
        answer_three="To filter and control network traffic based on a set of security rules",
        answer_four="To encrypt all network communication",
        solution="To filter and control network traffic based on a set of security rules",
        category="General",
        status="public"
    )

    question104 = TriviaQuestion(
        question="In the context of databases, what is an index?",
        answer_one="A list of all tables in a database",
        answer_two="A data structure that improves the speed of data retrieval operations on a database table",
        answer_three="A separate database used for data archiving",
        answer_four="A unique identifier for a database record",
        solution="A data structure that improves the speed of data retrieval operations on a database table",
        category="General",
        status="public"
    )

    question105 = TriviaQuestion(
        question="What is the primary purpose of a web server in the context of web development?",
        answer_one="To design web pages",
        answer_two="To provide a user interface for web applications",
        answer_three="To manage databases",
        answer_four="To serve web content to clients",
        solution="To serve web content to clients",
        category="General",
        status="public"
    )

    question106 = TriviaQuestion(
        question="What is the primary goal of continuous deployment (CD) in software development?",
        answer_one="To automatically deploy code to production without any testing",
        answer_two="To deploy code changes to production as quickly as possible",
        answer_three="To eliminate code reviews",
        answer_four="To delay code deployment to ensure stability",
        solution="To deploy code changes to production as quickly as possible",
        category="General",
        status="public"
    )

    question107 = TriviaQuestion(
        question="What is the primary advantage of using a virtual machine (VM) over containerization in server deployment?",
        answer_one="VMs are more lightweight",
        answer_two="VMs provider stronger isolation between applications",
        answer_three="VMs offer faster startup times",
        answer_four="VMs require less memory",
        solution="VMs provider stronger isolation between applications",
        category="General",
        status="public"
    )

    question108 = TriviaQuestion(
        question="What is a thread pool in multi-threaded programming?",
        answer_one="A data structure used to organize threads in a hierarchy",
        answer_two="A mechanism for preventing race conditions",
        answer_three="A pool of pre-created threads that can be reused to perform tasks",
        answer_four="A thread that is assigned a higher priority in the operating system",
        solution="A pool of pre-created threads that can be reused to perform tasks",
        category="General",
        status="public"
    )

    question109 = TriviaQuestion(
        question="What does CI/CD stand for in the context of software deployment?",
        answer_one="Continuous Integration / Continuous Delivery",
        answer_two="Continuous Improvement / Continuous Documentation",
        answer_three="Code Inspection / Code Deployment",
        answer_four="Collaborative Integration / Coordinated Deployment",
        solution="Continuous Integration / Continuous Delivery",
        category="General",
        status="public"
    )

    question110 = TriviaQuestion(
        question="What is the primary advantage of using a reverse proxy in a web server configuration?",
        answer_one="It improves code quality",
        answer_two="It enhances network security",
        answer_three="It reduces the load on the web server by caching content and handling requests",
        answer_four="It simplifies database management",
        solution="It reduces the load on the web server by caching content and handling requests",
        category="General",
        status="public"
    )

    question111 = TriviaQuestion(
        question="What is the primary purpose of refactoring in software development?",
        answer_one="To create new features",
        answer_two="To rewrite code from scratch",
        answer_three="To improve code quality and maintainability without changing its external behavior",
        answer_four="To document code",
        solution="To improve code quality and maintainability without changing its external behavior",
        category="General",
        status="public"
    )

    question112 = TriviaQuestion(
        question="Which of the following is a commonly used archictural style for designing networked applications?",
        answer_one="SOS (Service Oriented Systems)",
        answer_two="REST (Representational State Transfer)",
        answer_three="COS (Client Oriented Services)",
        answer_four="WAS (Web Application Structure)",
        solution="REST (Representational State Transfer)",
        category="General",
        status="public"
    )

    question113 = TriviaQuestion(
        question="In software development, what is the purpose of the 'Facade' design pattern?",
        answer_one="To create a simple interface to a complex subsystem",
        answer_two="To restrict access to specific parts of an object",
        answer_three="To manage the creation of objects",
        answer_four="To provide a way to access elements in a collection sequentially",
        solution="To create a simple interface to a complex subsystem",
        category="General",
        status="public"
    )

    question114 = TriviaQuestion(
        question="What is the primary purpose of a Content Management System (CMS) in web development?",
        answer_one="To test web applications",
        answer_two="To manage and publish digital content on the web",
        answer_three="To secure network traffic",
        answer_four="To optimize database queries",
        solution="To manage and publish digital content on the web",
        category="General",
        status="public"
    )

    question115 = TriviaQuestion(
        question="What does DNS stand for in the context of networking and web development?",
        answer_one="Dynamic Network System",
        answer_two="Domain Name System",
        answer_three="Data Networking Service",
        answer_four="Distributed Network Server",
        solution="Domain Name System",
        category="General",
        status="public"
    )

    question116 = TriviaQuestion(
        question="What is the primary purpose of a proxy server in networking?",
        answer_one="To intercept and modify network traffic for security purposes",
        answer_two="To hide the identity of the client requesting a resource",
        answer_three="To increase the speed of network communication",
        answer_four="To block all incoming network traffic",
        solution="To intercept and modify network traffic for security purposes",
        category="General",
        status="public"
    )

    question117 = TriviaQuestion(
        question="Which of the following is a commonly used metric for measuring code complexity?",
        answer_one="LOC (Lines of Code)",
        answer_two="CTR (Click-Through Rate)",
        answer_three="KPI (Key Performance Indicator)",
        answer_four="ROI (Return on Investment)",
        solution="LOC (Lines of Code)",
        category="General",
        status="public"
    )

    question118 = TriviaQuestion(
        question="What is the primary purpose of a content delivery network (CDN) in web development?",
        answer_one="To store user data",
        answer_two="To improve code quality",
        answer_three="To optimize the delivery of web content to users",
        answer_four="To encrypt network traffic",
        solution="To optimize the delivery of web content to users",
        category="General",
        status="public"
    )

    question119 = TriviaQuestion(
        question="What is the primary goal of agile software development methodologies?",
        answer_one="To maximize documentation efforts",
        answer_two="To minimize collaboration between team members",
        answer_three="To adapt to changing requirements and deliver working software quickly",
        answer_four="To follow a strict and inflexible development process",
        solution="To adapt to changing requirements and deliver working software quickly",
        category="General",
        status="public"
    )

    question120 = TriviaQuestion(
        question="Which of the following is NOT a commonly used programming language for web development?",
        answer_one="JavaScript",
        answer_two="Ruby",
        answer_three="Java",
        answer_four="SQL",
        solution="SQL",
        category="General",
        status="public"
    )

    question121 = TriviaQuestion(
        question="What is the primary purpose of a bug tracker or issue tracker tool in software development?",
        answer_one="To create user documentation",
        answer_two="To manage and track software defects and tasks",
        answer_three="To write code reviews",
        answer_four="To optimize network communication",
        solution="To manage and track software defects and tasks",
        category="General",
        status="public"
    )

    javaScriptCards = CardSets(
        creator_id=1,
        title="Basic JavaScript",
        description="Sharpen your JavaScript knowledge",
        status="public"
    )

    pythonCards = CardSets(
        creator_id=1,
        title="Basic Python",
        description="Sharpen your Python knowledge",
        status="public"
    )

    reactCards = CardSets(
        creator_id=1,
        title="Basic React",
        description="Sharpen your React knowledge",
        status="public"
    )

    cSharpCards = CardSets(
        creator_id=1,
        title="Basic C#",
        description="Sharpen your C# knowledge",
        status="public"
    )

    javaCards = CardSets(
        creator_id=1,
        title="Basic Java",
        description="Sharpen your Java knowledge",
        status="public"
    )

    cPlusPlusCards = CardSets(
        creator_id=1,
        title="Basic C++",
        description="Sharpen your C++ knowledge",
        status="public"
    )

    angularCards = CardSets(
        creator_id=1,
        title="Basic Angular",
        description="Sharpen your Angular knowledge",
        status="public"
    )

    nextJSCards = CardSets(
        creator_id=1,
        title="Basic NextJS",
        description="Sharpen your NextJS knowledge",
        status="public",
    )

    rustCards = CardSets(
        creator_id=1,
        title="Basic Rust",
        description="Sharpen your Rust knowledge",
        status="public",
    )

    svelteCards = CardSets(
        creator_id=1,
        title="Basic Svelte",
        description="Sharpen your Svelte knowledge",
        status="public"
    )

    typeScriptCards = CardSets(
        creator_id=1,
        title="Basic TypeScript",
        description="Sharpen your TypeScript knowledge",
        status="public"
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
        back="By using the 'public', 'private', or 'protected' access modifiers, followed by the method's return type, name, and parameters"
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

    db.session.add_all([demo, marnie, bobbie])
    db.session.add_all([questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen,
                        questionEleven, questionTwelve, questionThirteen, questionFourteen, questionFifteen, questionSixteen, questionSeventeen, questionEighteen, questionNineteen, questionTwenty,
                        questionTwentyOne, questionTwentyTwo, questionTwentyThree, questionTwentyFour, questionTwentyFive, questionTwentySix, questionTwentySeven, questionTwentyEight, questionTwentyNine, questionThirty,
                        questionThirtyOne, questionThirtyTwo, questionThirtyThree, questionThirtyFour, questionThirtyFive, questionThirtySix, questionThirtySeven, questionThirtyEight, questionThirtyNine, questionForty,
                        questionFortyOne, questionFortyTwo, questionFortyThree, questionFortyFour, questionFortyFive, questionFortySix, questionFortySeven, questionFortyEight, questionFortyNine, questionFifty,
                        questionFiftyOne, questionFiftyTwo, questionFiftyThree, questionFiftyFour, questionFiftyFive, questionFiftySix, questionFiftySeven, questionFiftyEight, questionFiftyNine, questionSixty,
                        questionSixtyOne, questionSixtyTwo, questionSixtyThree, questionSixtyFour, questionSixtyFive, questionSixtySix, questionSixtySeven, questionSixtyEight, questionSixtyNine, questionSeventy,
                        questionSeventyOne, questionSeventyTwo, questionSeventyThree, questionSeventyFour, questionSeventyFive, questionSeventySix, questionSeventySeven, questionSeventyEight, questionSeventyNine, questionEighty,
                        questionEightyOne, questionEightyTwo, questionEightyThree, questionEightyFour, questionEightyFive, questionEightySix, questionEightySeven, questionEightyEight, questionEightyNine, questionNinety,
                        questionNinetyOne, questionNinetyTwo, questionNinetyThree, questionNinetyFour, questionNinetyFive, questionNinetySix, questionNinetySeven, questionNinetyEight, questionNinetyNine, questionOneHundred,
                        question101, question102, question103, question104, question105, question106, question107, question108, question109, question110,
                        question111, question112, question113, question114, question115, question116, question117, question118, question119, question120, question121])
    db.session.add_all([javaScriptCards, pythonCards, reactCards, cSharpCards, javaCards, cPlusPlusCards, angularCards, nextJSCards, rustCards, typeScriptCards, svelteCards])
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
                        ts1, ts2, ts3, ts4, ts5, ts6, ts7, ts8, ts9, ts10, ts11, ts12, ts13, ts14, ts15])


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
