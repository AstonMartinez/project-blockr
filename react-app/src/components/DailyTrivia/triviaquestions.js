const questionOne = {
    q: "A coder who can develop both client-side and server-side software is known as a full-___ developer?",
    a1: "Heap",
    a2: "Stack",
    a3: "Queue",
    a4: "Loop",
    s: "Stack"
}
const questionTwo = {
    q: "The “Big Four” in the tech industry are Google (Alphabet), Apple, Meta (Facebook), and Amazon. Which corporation known for computers, software, and Bill Gates, is sometimes added to form the “Big Five” (or GAMAF)?",
    a1: "Adobe",
    a2: "Unity",
    a3: "Microsoft",
    a4: "Sony",
    s: "Microsoft"
}
const questionThree = {
    q: "What are the differences between null and undefined?",
    a1: "Null is assigned a value, while undefined has no value",
    a2: "Undefined is assigned a value, while null has no value",
    a3: "Nothing - they're the same",
    s: "Null is assigned a value, while undefined has no value"
}
const questionFour = {
    q: "What are the differences between == and ===?",
    a1: "== is tolerant and will not check types and === will check whether both sides are of same type",
    a2: "=== is tolerant will not check types and == will check whether both sides are of same type",
    a3: "Nothing - they're the same",
    s: "== is tolerant and will not check types and === will check whether both sides are of same type"
}
const questionFive = {
    q: "What does 'typeof []' evaluate to?",
    a1: "Array",
    a2: "Object",
    a3: "String",
    a4: "Boolean",
    s: "Object"
}
const questionSix = {
    q: "Which of the following is NOT a lifecycle method in a React component?",
    a1: "componentDidMount",
    a2: "componentDidUpdate",
    a3: "componentWillUnmount",
    a4: "componentUnmounted",
    s: "componentUnmounted"
}
const questionSeven = {
    q: "What is Babel?",
    a1: "An npm package",
    a2: "A JavaScript compiler",
    a3: "A CSS framework",
    a4: "An environment variable",
    s: "A JavaScript compiler"
}
const questionEight = {
    q: "What is a higher order component in React?",
    a1: "A component that holds other components",
    a2: "A component held within another component",
    a3: "A nested HTML structure in the virtual DOM",
    a4: "A function that takes a component and returns a new component",
    s: "A function that takes a component and returns a new component"
}
const questionNine = {
    q: "What is ECMAScript?",
    a1: "A programming language standard",
    a2: "A programming language",
    a3: "An npm package",
    a4: "A framework",
    s: "A programming language standard"
}
const questionTen = {
    q: "What is the most popular implementation of ECMAScript?",
    a1: "Python",
    a2: "JavaScript",
    a3: "C++",
    a4: "Java",
    s: "JavaScript"
}

const questionEleven = {
    q: "Which of these is NOT an advantage of using ReactJS?",
    a1: "Easy to integrate with other frameworks(Angular, BackboneJS) since it is only a view library",
    a2: "Increases the application’s performance with Virtual DOM",
    a3: "It is only a view layer",
    a4: "JSX makes code is easy to read and write",
    s: "It is only a view layer"
}
const questionTwelve = {
    q: "Who created the Python programming language?",
    a1: "Bill Joy",
    a2: "Brian Kernighan",
    a3: "Larry Wall",
    a4: "Guido van Rossum",
    s: "Guido van Rossum"
}
const questionThirteen = {
    q: "Why did the creator of Python choose that name for the programming language?",
    a1: "The inventor's best friend suggested the name",
    a2: "The inventor is a fan of Monty Python's Flying Circus",
    a3: "The inventor was once attacked by a python in the Amazons",
    a4: "As a kid, the inventor liked to play the snakes-and-ladders game",
    s: "The inventor is a fan of Monty Python's Flying Circus"
}
const questionFourteen = {
    q: "Which of these languages does Python resemble in its class syntax?",
    a1: "Perl",
    a2: "Eiffel",
    a3: "Smalltalk",
    a4: "C++",
    s: "C++"
}
const questionFifteen = {
    q: "Which languages does Python owe its origin to?",
    a1: "ABC, Eiffel",
    a2: "Perl, Modula-3",
    a3: "ABC, Smalltalk",
    a4: "ABC, Modula-3",
    s: "ABC, Modula-3"
}
const questionSixteen = {
    q: "Which of these languages have strong support for regular expressions?",
    a1: "Python, Perl, HTML",
    a2: "Python, Perl, C",
    a3: "Python, Perl, Ruby",
    a4: "Python, Perl, Java",
    s: "Python, Perl, Ruby"
}
const questionSeventeen = {
    q: "Which of the following is NOT considered an advantage of the Python programming language?",
    a1: "Ideally suited for fast and memory intensive tasks like number crunching",
    a2: "Well suited for the novice as well as the expert",
    a3: "Object oriented, easily extendable, and highly scalable",
    a4: "Allows for rapid development reducing software production lifecycles",
    s: "Ideally suited for fast and memory intensive tasks like number crunching"
}
const questionEighteen = {
    q: "Which of these languages has Python NOT borrowed its features from?",
    a1: "CLISP (Common Lisp)",
    a2: "Fortran",
    a3: "C++",
    a4: "Java",
    s: "Fortran"
}
const questionNineteen = {
    q: "What is the Java implementation of Python popularly known as?",
    a1: "JavaPython",
    a2: "PyJava",
    a3: "Javathon",
    a4: "Jython",
    s: "Jython"
}
const questionTwenty = {
    q: "Which of the following data structures falls under the category of a 'dictionary'?",
    a1: "Hash table",
    a2: "Hash",
    a3: "Tree",
    a4: "Linked list",
    s: "Hash table"
}

const questionTwentyOne = {
    q: "When using a heap, which function will give you the parent of the entry with index i?",
    a1: "Decimal division, i / 2",
    a2: "Integer division, i / 2",
    a3: "Multiplication, i * 2",
    a4: "Multiplication, i * 2 + 1",
    s: "Integer division, i / 2"
}
const questionTwentyTwo = {
    q: "A vector (an indexed, growable list) would most likely be implemented on top of which of these structures?",
    a1: "Hash table",
    a2: "Stack",
    a3: "Tree",
    a4: "Linked list",
    s: "Linked list"
}
const questionTwentyThree = {
    q: "If you have an empty stack that can contain letters, and you push (in order) these letters onto it, what order will they be in when you pop them off? 't', 'a', 'p'",
    a1: "'p', 'a', 't'",
    a2: "'a', 'p', 't'",
    a3: "'t', 'a', 'p'",
    a4: "There is no way to tell",
    s: "'p', 'a', 't'"
}
const questionTwentyFour = {
    q: "If you have an empty queue that can contain letters, and you enqueue (in order), these letters into it, what order will they be in when you dequeue them? 'm', 'a', 'r'",
    a1: "'m', 'a', 'r'",
    a2: "'a', 'r', 'm'",
    a3: "'r', 'a', 'm'",
    a4: "There is no way to tell",
    s: "'m', 'a', 'r'"
}
const questionTwentyFive = {
    q: "Which of the following could best be described by the graph structure?",
    a1: "Given a word, finding its definition",
    a2: "Algebraic problems",
    a3: "Roads connecting cities",
    a4: "A GUI (Graphical User Interface)",
    s: "Roads connecting cities"
}
const questionTwentySix = {
    q: "If you have a sorted, balanced binary tree with 15 elements in it, how many steps, maximum, will it take you to decide whether an element is present in the tree?",
    a1: "Four",
    a2: "Fifteen",
    a3: "Three",
    a4: "Depends on the computer",
    s: "Four"
}
const questionTwentySeven = {
    q: "Which of these is true about a set?",
    a1: "The elements are kept in order",
    a2: "There are no duplicates",
    a3: "They can only hold numbers",
    a4: "All of these",
    s: "There are no duplicates"
}
const questionTwentyEight = {
    q: "Modern filesystems, like ReiserFS and XFS, use which structure to organize their data for efficient access?",
    a1: "B+Trees",
    a2: "Tables",
    a3: "B-Trees",
    a4: "Lists",
    s: "B+Trees"
}
const questionTwentyNine = {
    q: "Design is one step in the process of software development, in which the requirements for building the software are gathered and analyzed in order to create an architectural model.",
    a1: "True",
    a2: "False",
    s: "True"
}
const questionThirty = {
    q: "According to Pressman, what is design?",
    a1: "Information driven",
    a2: "Coding driven",
    a3: "Architecture driven",
    a4: "Testing driven",
    s: "Information driven"
}

const questionThirtyOne = {
    q: "Which of these are characteristics of a strong design?",
    a1: "Modular",
    a2: "High Cohesion",
    a3: "Low Coupling",
    a4: "All of these",
    s: "All of these"
}
const questionThirtyTwo = {
    q: "When we think about software architecture, we should think of it as the same thing as the end product - functioning software.",
    a1: "True",
    a2: "False",
    s: "False"
}
const questionThirtyThree = {
    q: "The two levels of design for software architecture are:",
    a1: "Coding design and architectural design",
    a2: "Architectural design and XP design",
    a3: "Pattern design and data design",
    a4: "Data design and architectural design",
    s: "Data design and architectural design"
}
const questionThirtyFour = {
    q: "In software engineering, what does KDD stand for?",
    a1: "Knowledge discovery in databases",
    a2: "Knowledge development in design",
    a3: "Knowledge distortion of design",
    a4: "Knowledge detection of databases",
    s: "Knowledge discovery in databases"
}
const questionThirtyFive = {
    q: "Which of these is an example of an archetype?",
    a1: "All of these",
    a2: "Actors",
    a3: "Architectural style",
    a4: "Node",
    s: "Node"
}
const questionThirtySix = {
    q: "In software engineering, what does ATAM stand for?",
    a1: "Architecture trade-off analysis method",
    a2: "Application texture architectural method",
    a3: "Architecture type analysis method",
    a4: "Architecture type analysis management",
    s: "Architecture trade-off analysis method"
}
const questionThirtySeven = {
    q: "To check the complexity of an architecture, what could a programmer use?",
    a1: "Coupling",
    a2: "Dependencies",
    a3: "Architecture testing",
    a4: "Beta testing",
    s: "Dependencies"
}
const questionThirtyEight = {
    q: "What is the use of an Architectural Description Language (ADL)?",
    a1: "Codes the architecture into desired programming language",
    a2: "Describes how to design the software in a specified language",
    a3: "Helps design the language in which the software should be built",
    a4: "Provides syntax for describing a software architecture",
    s: "Provides syntax for describing a software architecture"
}
const questionThirtyNine = {
    q: "Which SQL command would you use to retrieve a record or records from the database?",
    a1: "FIND",
    a2: "SELECT",
    a3: "SEARCH",
    a4: "RETRIEVE",
    s: "SELECT"
}
const questionForty = {
    q: "Which SQL command would you use to add a new record (row) to the database?",
    a1: "ADDROW",
    a2: "INSERT",
    a3: "NEWRECORD",
    a4: "UPDATE",
    s: "INSERT"
}

const questionFortyOne = {
    q: "Which SQL command would you use to modify the contents of an existing record (row) in the database?",
    a1: "INSERT",
    a2: "UPDATE",
    a3: "MERGE",
    a4: "MODIFY",
    s: "UPDATE"
}
const questionFortyTwo = {
    q: "What does the command: 'TRUNCATE TABLE Sample' do?",
    a1: "Deletes the table called Sample",
    a2: "Empties all data (rows) from the table called Sample",
    a3: "There is no command called Truncate",
    a4: "Reindexes the rows in the table called Sample",
    s: "Empties all data (rows) from the table called Sample"
}
const questionFortyThree = {
    q: "In the following SQL statement, what belongs in the blank?: INSERT INTO ____ VALUES (value1, value2)",
    a1: "The table name",
    a2: "The database name",
    a3: "The column(s) name",
    a4: "None of the above",
    s: "The table name"
}
const questionFortyFour = {
    q: "The ALTER tablename command would be used to...",
    a1: "Rename the database table",
    a2: "Add columns to or drop columns from an existing database table",
    a3: "Create a new table in the database",
    a4: "None of the above",
    s: "Add columns to or drop columns from an existing database table"
}
const questionFortyFive = {
    q: "This aggregate SQL function will return the number of rows in a database table:",
    a1: "SUM(column_name)",
    a2: "NUM(column_name)",
    a3: "MAX(column_name)",
    a4: "COUNT(column_name) or COUNT(*)",
    s: "COUNT(column_name) or COUNT(*)"
}
const questionFortySix = {
    q: "This is a column with a unique value for each row used to bind data together, across tables, without repeating all of the data in every table:",
    a1: "Primary Column",
    a2: "Primary Key",
    a3: "Index",
    a4: "None of the above",
    s: "Primary Key"
}
const questionFortySeven = {
    q: "This type of JOIN statement will return all the rows from the first table, even if there are no matches in the second table:",
    a1: "RIGHT JOIN",
    a2: "LEFT JOIN",
    a3: "INNER JOIN",
    a4: "OUTER JOIN",
    s: "LEFT JOIN"
}
const questionFortyEight = {
    q: "What rows will the following select statement return?: SELECT * FROM products WHERE ordernumber >= 1000",
    a1: "All rows in the products table whose order number is greater than 1000",
    a2: "The first 1000 rows of the product table.",
    a3: "All rows in the product table whose order number is greater than or equal to 1000",
    a4: "All rows in the products table whose order number is less than or equal to 1000",
    s: "All rows in the product table whose order number is greater than or equal to 1000"
}
const questionFortyNine = {
    q: "Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements.",
    a1: "True",
    a2: "False",
    s: "True"
}
const questionFifty = {
    q: "Which of these is NOT a common SDLC model?",
    a1: "Agile",
    a2: "Waterfall",
    a3: "DevOps",
    a4: "REST",
    s: "REST"
}

const questionFiftyOne = {
    q: "What does SDLC stand for?",
    a1: "Software Development Life Cycle",
    a2: "Single Development Line Citation",
    a3: "String Delineation Line Cycle",
    a4: "Several Deep Little Cuts",
    s: "Software Development Life Cycle"
}
const questionFiftyTwo = {
    q: "What does DRY stand for?",
    a1: "Don't Repeat Yourself",
    a2: "Don't Read Yourself",
    a3: "Don't Redesign Yourself",
    a4: "Don't Restrict Yourself",
    s: "Don't Repeat Yourself"
}
const questionFiftyThree = {
    q: "Which of these is NOT one of the five SOLID principles in object-oriented design?",
    a1: "Single Responsibility Principle",
    a2: "Interface Segregation",
    a3: "Liskov Substitution",
    a4: "Object Permanance",
    s: "Object Permanance"
}
const questionFiftyFour = {
    q: "What is the difference between polymorphism and inheritance?",
    a1: "Polymorphism is an 'is-a' relationship, while inheritance is a way to interact with objects of a different class using a common interface",
    a2: "Inheritance is an 'is-a' relationship, while polymorphism is a way to interact with objects of a different class using a common interface",
    a3: "Neither of the above",
    s: "Inheritance is an 'is-a' relationship, while polymorphism is a way to interact with objects of a different class using a common interface"
}
const questionFiftyFive = {
    q: "What does API stand for?",
    a1: "Advanced Programming Instruction",
    a2: "Application Process Integration",
    a3: "Application Programming Interface",
    a4: "Automated Programming Interface",
    s: "Application Programming Interface"
}
const questionFiftySix = {
    q: "What is the difference between authentication and authorization?",
    a1: "Authorization verifies the identity of a user, while authentication determines what actions they are allow to perform once authorized",
    a2: "Authentication verifies the identity of a user, while authorization determines what actions they are allow to perform once authenticated",
    a3: "Neither of the above",
    s: "Authentication verifies the identity of a user, while authorization determines what actions they are allow to perform once authenticated"
}
const questionFiftySeven = {
    q: "What is the purpose of the HTTP status code 404?",
    a1: "Indicates that the requested resource was not found on the server",
    a2: "Indicates an internal server error",
    a3: "Indicates a successful POST action",
    a4: "Indicates that the server is redirecting",
    s: "Indicates that the requested resource was not found on the server"
}
const questionFiftyEight = {
    q: "Which of these are NOT a characteristic of a RESTful API?",
    a1: "Stateless communication",
    a2: "Resource-based URLs",
    a3: "Use of HTTP methods",
    a4: "JavaScript based server",
    s: "JavaScript based server"
}
const questionFiftyNine = {
    q: "The CAP theorem states that in a distributed system, you can have at most two of the three following guarantees:",
    a1: "Capability, Architecture, Patterns",
    a2: "Consistency, Availability, and Partition Tolerance",
    a3: "Calibration, Applicability, and Pagination",
    a4: "None of the above",
    s: "Consistency, Availability, and Partition Tolerance"
}
const questionSixty = {
    q: "What is the difference between white-box and black-box testing?",
    a1: "White-box testing focuses on internal code structures, while black-box testing evaluates the functionality of a system without knowledge of its internal implementation",
    a2: "Black-box testing focuses on internal code structures, while white-box testing evaluates the functionality of a system without knowledge of its internal implementation",
    a3: "Neither of the above",
    s: "White-box testing focuses on internal code structures, while black-box testing evaluates the functionality of a system without knowledge of its internal implementation"
}

const questionSixtyOne = {
    q: "What is the difference between horizontal and vertical scaling?",
    a1: "Vertical scaling adds more machines or nodes to a system, while horizontal scaling involves adding more resources (CPU, RAM) to a single machine.",
    a2: "Horizontal scaling adds more machines or nodes to a system, while vertical scaling involves adding more resources (CPU, RAM) to a single machine.",
    s: "Horizontal scaling adds more machines or nodes to a system, while vertical scaling involves adding more resources (CPU, RAM) to a single machine."
}
const questionSixtyTwo = {
    q: "Which of these is a type of microservice?",
    a1: "External APIs",
    a2: "Websockets",
    a3: "AWS",
    a4: "All of the above",
    s: "All of the above"
}
const questionSixtyThree = {
    q: "What is the purpose of a load balancer in a distributed system?",
    a1: "To add complexity to the system",
    a2: "To centralize all incoming traffic",
    a3: "To distribute incoming network traffic across multiple servers",
    a4: "To secure the network",
    s: "To distribute incoming network traffic across multiple servers"
}
const questionSixtyFour = {
    q: "Which of the following accurately describes the difference between a 'shallow copy' and a 'deep copy'?",
    a1: "A deep copy of an object copies references to its elements, while a shallow copy creates a new object with copies of all its elements, including nested objects.",
    a2: "A shallow copy of an object copies references to its elements, while a deep copy creates a new object with copies of all its elements, including nested objects.",
    a3: "Neither - they're essentially the same",
    s: "A shallow copy of an object copies references to its elements, while a deep copy creates a new object with copies of all its elements, including nested objects."
}
const questionSixtyFive = {
    q: "Which of these is NOT a popular package manager?",
    a1: "Npm",
    a2: "Babel",
    a3: "Pip",
    a4: "Maven",
    s: "Babel"
}
const questionSixtySix = {
    q: "What is the primary goal of software testing?",
    a1: "To eliminate all bugs from the software",
    a2: "To ensure the software meets the requirements",
    a3: "To speed up the software development process",
    a4: "To reduce the cost of software development",
    s: "To ensure the software meets the requirements"
}
const questionSixtySeven = {
    q: "Which of the following is NOT a software development methodology?",
    a1: "Waterfall",
    a2: "Scrum",
    a3: "Agile",
    a4: "Spiral",
    s: "Agile"
}
const questionSixtyEight = {
    q: "What does 'CI' stand for in the context of software development?",
    a1: "Continuous Integration",
    a2: "Complete Integration",
    a3: "Continuous Improvement",
    a4: "Central Integration",
    s: "Continuous Integration"
}
const questionSixtyNine = {
    q: "Which of the following is NOT a version control system?",
    a1: "Git",
    a2: "Subversion (SVN)",
    a3: "Mercurial",
    a4: "Java",
    s: "Java"
}
const questionSeventy = {
    q: "What is the purpose of a code review?",
    a1: "To write new code",
    a2: "To find and fix bugs",
    a3: "To provide project management",
    a4: "To document the code",
    s: "To find and fix bugs"
}

const questionSeventyOne = {
    q: "What is the main advantage of using dependency injection in software design?",
    a1: "It reduces code complexity",
    a2: "It improves performance",
    a3: "It makes code easier to test and maintain",
    a4: "It eliminates the need for unit testing",
    s: "It makes code easier to test and maintain"
}
const questionSeventyTwo = {
    q: "What is the purpose of a CDN in web development?",
    a1: "To manage customer data",
    a2: "To improve code readability",
    a3: "To optimize web page loading speed",
    a4: "To encrypt network traffic",
    s: "To optimize web page loading speed"
}
const questionSeventyThree = {
    q: "Which HTTP status code indicates a successful response in most cases?",
    a1: "200",
    a2: "404",
    a3: "500",
    a4: "302",
    s: "200"
}
const questionSeventyFour = {
    q: "What is the primary advantage of using a NoSQL database over a traditional relational database?",
    a1: "Better support for complex queries",
    a2: "Strong ACID compliance",
    a3: "Horizontal scalability",
    a4: "Simplicity of schema design",
    s: "Horizontal scalability"
}
const questionSeventyFive = {
    q: "What is a mutex in multi-threaded programming?",
    a1: "A data structure for caching",
    a2: "A mechanism for avoiding deadlocks",
    a3: "A synchronization primitive for controlling access to shared resources",
    a4: "A lightweight thread",
    s: "A synchronization primitive for controlling access to shared resources"
}
const questionSeventySix = {
    q: "What does SQL stand for in the context of databases?",
    a1: "Structured Query Language",
    a2: "Simple Query Language",
    a3: "Scripted Query Language",
    a4: "Structured Query Logic",
    s: "Structured Query Language"
}
const questionSeventySeven = {
    q: "Which of the following is NOT an advantage of using containers like Docker?",
    a1: "Portability",
    a2: "Isolation",
    a3: "High resource utilization",
    a4: "Scalability",
    s: "High resource utilization"
}
const questionSeventyEight = {
    q: "What is the primary goal of A/B testing in web development?",
    a1: "To find and fix security vulnerabilities",
    a2: "To compare two versions of a webpage or application to determine which performs better",
    a3: "To automate testing of user interfaces",
    a4: "To test the compatibility of an application with multiple browsers",
    s: "To compare two versions of a webpage or application to determine which performs better"
}
const questionSeventyNine = {
    q: "What is the purpose of a memory profiler in software development?",
    a1: "To optimize network traffic",
    a2: "To track memory usage and identify memory leaks",
    a3: "To monitor CPU performance",
    a4: "To generate code documentation",
    s: "To track memory usage and identify memory leaks"
}
const questionEighty = {
    q: "Which of the following statements about the Single Responsibility Principle in SOLID is true?",
    a1: "It encourages a class to have multiple reasons to change",
    a2: "It suggests that a class should have only one method",
    a3: "It advises against writing code that performs multiple tasks",
    a4: "It is not related to object-oriented programming",
    s: "It advises against writing code that performs multiple tasks"
}

const questionEightyOne = {
    q: "What is 'Big O' notation used for in algorithm analysis?",
    a1: "To represent large datasets",
    a2: "To describe the physical size of objects",
    a3: "To analyze an algorithm's time or space complexity in relation to input size",
    a4: "To measure the amount of memory used by an algorithm",
    s: "To analyze an algorithm's time or space complexity in relation to input size"
}
const questionEightyTwo = {
    q: "Which of the following is an Integrated Development Environment (IDE)?",
    a1: "Python",
    a2: "Visual Studio Code",
    a3: "Git",
    a4: "HTML",
    s: "Visual Studio Code"
}
const questionEightyThree = {
    q: "What is the key difference between a library and a framework in software development?",
    a1: "Frameworks provide pre-written functions, while libraries offer a structured project template",
    a2: "Libraries are used for web development, while frameworks are used for mobile app development",
    a3: "Frameworks provide a structured project template, while libraries offer pre-written functions",
    a4: "There is no difference - the terms are interchangeable",
    s: "Frameworks provide pre-written functions, while libraries offer a structured project template"
}
const questionEightyFour = {
    q: "What is the primary purpose of a shallow copy in programming?",
    a1: "To create a new object with copies of all its elements, including nested objects",
    a2: "To copy references to elements in an existing object",
    a3: "To ensure that an object is not modified by mistake",
    a4: "To reduce the memory footprint of an object",
    s: "To copy references to elements in an existing object"
}
const questionEightyFive = {
    q: "What is a race condition in multi-threaded programming?",
    a1: "A condition where two or more threads cannot execute concurrently",
    a2: "A condition where two or more threads compete for resources",
    a3: "A condition where two or more threads share no resources",
    a4: "A condition where a thread is forced to wait indefinitely",
    s: "A condition where two or more threads compete for resources"
}
const questionEightySix = {
    q: "What is the primary purpose of a package manager in software development?",
    a1: "To manage project deadlines",
    a2: "To write code documentation",
    a3: "To install, update, and manage software dependencies",
    a4: "To enforce coding standards",
    s: "To install, update, and manage software dependencies"
}
const questionEightySeven = {
    q: "What is the primary goal of continuous integration (CI) in software development?",
    a1: "To eliminate the need for testing",
    a2: "To ensure code is never changed",
    a3: "To automatically build, test, and integrate code changes into a shared repository",
    a4: "To slow down the software development process",
    s: "To automatically build, test, and integrate code changes into a shared repository"
}
const questionEightyEight = {
    q: "In the context of software development, what does 'DevOps' refer to?",
    a1: "A programming language",
    a2: "A software development methodology",
    a3: "A cultural and technical approach that emphasizes collaboration between development and operations teams",
    a4: "A code review tool",
    s: "A cultural and technical approach that emphasizes collaboration between development and operations teams"
}
const questionEightyNine = {
    q: "What is the purpose of a design sprint in the software development process?",
    a1: "To write code",
    a2: "To find and fix bugs",
    a3: "To solve complex problems and validate ideas quickly",
    a4: "To document the code",
    s: "To solve complex problems and validate ideas quickly"
}
const questionNinety = {
    q: "What is the primary goal of the 'Open-Closed Principle' in SOLID?",
    a1: "To encourage code modification",
    a2: "To prevent code extensions",
    a3: "To make software entities open for modification",
    a4: "To make software entities closed for extension",
    s: "To make software entities closed for extension"
}

const questionNinetyOne = {
    q: "What does REST stand for in the context of web services?",
    a1: "Reliable Service Technology",
    a2: "Remote Execution and Service Transmission",
    a3: "Representational State Transfer",
    a4: "Responsive and Efficient Service Transfer",
    s: "Representational State Transfer"
}
const questionNinetyTwo = {
    q: "What is the primary purpose of a NoSQL database?",
    a1: "To ensure strong data consistency",
    a2: "To provide a fixed schema for data storage",
    a3: "To handle large volumes of unstructured or semi-structured data",
    a4: "To ensure data integrity",
    s: "To handle large volumes of unstructured or semi-structured data"
}
const questionNinetyThree = {
    q: "In web development, what does it mean for an application to be stateless?",
    a1: "The application is always running",
    a2: "The application retains user data between requests",
    a3: "Each request from a user contains all necessary information and the server does not retain previous interactions",
    a4: "The application uses a single server",
    s: "Each request from a user contains all necessary information and the server does not retain previous interactions"
}
const questionNinetyFour = {
    q: "What is the primary purpose of a code profiler in software development?",
    a1: "To optimize network communication",
    a2: "To track code execution time and identify performance bottlenecks",
    a3: "To manage code repositories",
    a4: "To generate code documentation",
    s: "To track code execution time and identify performance bottlenecks"
}
const questionNinetyFive = {
    q: "In the context of software development, what is a 'fail-fast' design principles?",
    a1: "A design approach that aims to create software that never fails",
    a2: "A design approach that avoids error detection",
    a3: "A design approach that detects and reports errors as early as possible to minimize their impact",
    a4: "A design approach that encourages slow and cautious development",
    s: "A design approach that detects and reports errors as early as possible to minimize their impact"
}
const questionNinetySix = {
    q: "Which of the following is an example of a hashing algorithm used for password storage?",
    a1: "SHA-256",
    a2: "RSA",
    a3: "AES",
    a4: "MD5",
    s: "SHA-256"
}
const questionNinetySeven = {
    q: "What is the primary goal of the Liskov Substitution Principle in SOLID?",
    a1: "To ensure that objects of derived classes can be subsituted for objects of their base classes without affecting program correctness",
    a2: "To restrict inheritance in object-oriented programming",
    a3: "To promote tight coupling between classes",
    a4: "To discourage code reuse",
    s: "To ensure that objects of derived classes can be subsituted for objects of their base classes without affecting program correctness"
}
const questionNinetyEight = {
    q: "Which of the following HTTP methods is typically used for safe and idempotent operations?",
    a1: "POST",
    a2: "GET",
    a3: "PUT",
    a4: "DELETE",
    s: "GET"
}
const questionNinetyNine = {
    q: "What does ORM stand for in software development?",
    a1: "Object Relational Mapping",
    a2: "Object Resource Modeling",
    a3: "Object Reference Management",
    a4: "Object Relocation Mechanism",
    s: "Object Relational Mapping"
}
const questionOneHundred = {
    q: "Which of the following is an example of a SQL database management system (DBMS)?",
    a1: "MongoDB",
    a2: "PostgreSQL",
    a3: "Redis",
    a4: "Cassandra",
    s: "PostgreSQL"
}

const question101 = {
    q: "What does 'JWT' stand for in the context of authentication and authorization?",
    a1: "JavaScript Web Token",
    a2: "JSON Web Token",
    a3: "Java Web Token",
    a4: "JavaScript Web Transfer",
    s: "JSON Web Token"
}
const question102 = {
    q: "Which of the following is NOT a commonly used HTTP status code?",
    a1: "403",
    a2: "206",
    a3: "303",
    a4: "801",
    s: "801"
}
const question103 = {
    q: "What is the primary purpose of a firewall in network security?",
    a1: "To block all incoming network traffic",
    a2: "To monitor network performance",
    a3: "To filter and control network traffic based on a set of security rules",
    a4: "To encrypt all network communication",
    s: "To filter and control network traffic based on a set of security rules"
}
const question104 = {
    q: "In the context of databases, what is an index?",
    a1: "A list of all tables in a database",
    a2: "A data structure that improves the speed of data retrieval operations on a database table",
    a3: "A separate database used for data archiving",
    a4: "A unique identifier for a database record",
    s: "A data structure that improves the speed of data retrieval operations on a database table"
}
const question105 = {
    q: "What is the primary purpose of a web server in the context of web development?",
    a1: "To design web pages",
    a2: "To provide a user interface for web applications",
    a3: "To manage databases",
    a4: "To serve web content to clients",
    s: "To serve web content to clients"
}
const question106 = {
    q: "What is the primary goal of continuous deployment (CD) in software development?",
    a1: "To automatically deploy code to production without any testing",
    a2: "To deploy code changes to production as quickly as possible",
    a3: "To eliminate code reviews",
    a4: "To delay code deployment to ensure stability",
    s: "To deploy code changes to production as quickly as possible"
}
const question107 = {
    q: "What is the primary advantage of using a virtual machine (VM) over containerization in server deployment?",
    a1: "VMs are more lightweight",
    a2: "VMs provider stronger isolation between applications",
    a3: "VMs offer faster startup times",
    a4: "VMs require less memory",
    s: "VMs provider stronger isolation between applications"
}
const question108 = {
    q: "What is a thread pool in multi-threaded programming?",
    a1: "A data structure used to organize threads in a hierarchy",
    a2: "A mechanism for preventing race conditions",
    a3: "A pool of pre-created threads that can be reused to perform tasks",
    a4: "A thread that is assigned a higher priority in the operating system",
    s: "A pool of pre-created threads that can be reused to perform tasks"
}
const question109 = {
    q: "What does CI/CD stand for in the context of software deployment?",
    a1: "Continuous Integration / Continuous Delivery",
    a2: "Continuous Improvement / Continuous Documentation",
    a3: "Code Inspection / Code Deployment",
    a4: "Collaborative Integration / Coordinated Deployment",
    s: "Continuous Integration / Continuous Delivery"
}
const question110 = {
    q: "What is the primary advantage of using a reverse proxy in a web server configuration?",
    a1: "It improves code quality",
    a2: "It enhances network security",
    a3: "It reduces the load on the web server by caching content and handling requests",
    a4: "It simplifies database management",
    s: "It reduces the load on the web server by caching content and handling requests"
}
const question111 = {
    q: "What is the primary purpose of refactoring in software development?",
    a1: "To create new features",
    a2: "To rewrite code from scratch",
    a3: "To improve code quality and maintainability without changing its external behavior",
    a4: "To document code",
    s: "To improve code quality and maintainability without changing its external behavior"
}
const question112 = {
    q: "Which of the following is a commonly used archictural style for designing networked applications?",
    a1: "SOS (Service Oriented Systems)",
    a2: "REST (Representational State Transfer)",
    a3: "COS (Client Oriented Services)",
    a4: "WAS (Web Application Structure)",
    s: "REST (Representational State Transfer)"
}
const question113 = {
    q: "In software development, what is the purpose of the 'Facade' design pattern?",
    a1: "To create a simple interface to a complex subsystem",
    a2: "To restrict access to specific parts of an object",
    a3: "To manage the creation of objects",
    a4: "To provide a way to access elements in a collection sequentially",
    s: "To create a simple interface to a complex subsystem"
}
const question114 = {
    q: "What is the primary purpose of a Content Management System (CMS) in web development?",
    a1: "To test web applications",
    a2: "To manage and publish digital content on the web",
    a3: "To secure network traffic",
    a4: "To optimize database queries",
    s: "To manage and publish digital content on the web"
}
const question115 = {
    q: "What does DNS stand for in the context of networking and web development?",
    a1: "Dynamic Network System",
    a2: "Domain Name System",
    a3: "Data Networking Service",
    a4: "Distributed Network Server",
    s: "Domain Name System"
}
const question116 = {
    q: "What is the primary purpose of a proxy server in networking?",
    a1: "To intercept and modify network traffic for security purposes",
    a2: "To hide the identity of the client requesting a resource",
    a3: "To increase the speed of network communication",
    a4: "To block all incoming network traffic",
    s: "To intercept and modify network traffic for security purposes"
}
const question117 = {
    q: "Which of the following is a commonly used metric for measuring code complexity?",
    a1: "LOC (Lines of Code)",
    a2: "CTR (Click-Through Rate)",
    a3: "KPI (Key Performance Indicator)",
    a4: "ROI (Return on Investment)",
    s: "LOC (Lines of Code)"
}
const question118 = {
    q: "What is the primary purpose of a content delivery network (CDN) in web development?",
    a1: "To store user data",
    a2: "To improve code quality",
    a3: "To optimize the delivery of web content to users",
    a4: "To encrypt network traffic",
    s: "To optimize the delivery of web content to users"
}
const question119 = {
    q: "What is the primary goal of agile software development methodologies?",
    a1: "To maximize documentation efforts",
    a2: "To minimize collaboration between team members",
    a3: "To adapt to changing requirements and deliver working software quickly",
    a4: "To follow a strict and inflexible development process",
    s: "To adapt to changing requirements and deliver working software quickly"
}
const question120 = {
    q: "Which of the following is NOT a commonly used programming language for web development?",
    a1: "JavaScript",
    a2: "Ruby",
    a3: "Java",
    a4: "SQL",
    s: "SQL"
}
const question121 = {
    q: "What is the primary purpose of a bug tracker or issue tracker tool in software development?",
    a1: "To create user documentation",
    a2: "To manage and track software defects and tasks",
    a3: "To write code reviews",
    a4: "To optimize network communication",
    s: "To manage and track software defects and tasks"
}
const allTriviaQs = [questionOne, questionTwo, questionThree, questionFour, questionFive,
questionSix, questionSeven, questionEight, questionNine, questionTen,
questionEleven, questionTwelve, questionThirteen, questionFourteen, questionFifteen,
questionSixteen, questionSeventeen, questionEighteen, questionNineteen, questionTwenty,
questionTwentyOne, questionTwentyTwo, questionTwentyThree, questionTwentyFour, questionTwentyFive,
questionTwentySix, questionTwentySeven, questionTwentyEight, questionTwentyNine, questionThirty,
questionThirtyOne, questionThirtyTwo, questionThirtyThree, questionThirtyFour, questionThirtyFive,
questionThirtySix, questionThirtySeven, questionThirtyEight, questionThirtyNine, questionForty,
questionFortyOne, questionFortyTwo, questionFortyThree, questionFortyFour, questionFortyFive,
questionFortySix, questionFortySeven, questionFortyEight, questionFortyNine, questionFifty,
questionFiftyOne, questionFiftyTwo, questionFiftyThree, questionFiftyFour, questionFiftyFive,
questionFiftySix, questionFiftySeven, questionFiftyEight, questionFiftyNine, questionSixty,
questionSixtyOne, questionSixtyTwo, questionSixtyThree, questionSixtyFour, questionSixtyFive,
questionSixtySix, questionSixtySeven, questionSixtyEight, questionSixtyNine, questionSeventy,
questionSeventyOne, questionSeventyTwo, questionSeventyThree, questionSeventyFour, questionSeventyFive,
questionSeventySix, questionSeventySeven, questionSeventyEight, questionSeventyNine, questionEighty,
questionEightyOne, questionEightyTwo, questionEightyThree, questionEightyFour, questionEightyFive,
questionEightySix, questionEightySeven, questionEightyEight, questionEightyNine, questionNinety,
questionNinetyOne, questionNinetyTwo, questionNinetyThree, questionNinetyFour, questionNinetyFive,
questionNinetySix, questionNinetySeven, questionNinetyEight, questionNinetyNine, questionOneHundred,
question101, question102, question103, question104, question105, question106, question107, question108,
question109, question110, question111, question112, question113, question114, question115, question116,
question117, question118, question119, question120, question121]

export default allTriviaQs;
