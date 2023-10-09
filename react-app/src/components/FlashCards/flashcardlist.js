export const javaScriptCards = [
    {
        front: "To access an HTML element from JavaScript, you can use this method",
        back: "getElementById"
    },
    {
        front: "Write a statement that tells the browser to write 'Hello Dolly' inside an HTML element with id='demo'",
        back: "document.getElementById('demo').innerHTML = 'Hello Dolly'"
    },
    {
        front: "JavaScript elements are executed in what order?",
        back: "In the sequence they are written"
    },
    {
        front: "Can be used to break up a line within a text string",
        back: "backslash"
    },
    {
        front: "Three words used to declare JavaScript variables",
        back: "var, let, const"
    },
    {
        front: "What does IIFE stand for",
        back: "Immediately Invoked Function Expression"
    },
    {
        front: "List 3 or more primitive data types",
        back: "Boolean, Null, Undefined, Number, String, Symbol, BigInt"
    },
    {
        front: "What is the only reference data type?",
        back: "Objects (including arrays, since arrays are a type of object)"
    },
    {
        front: "According to good programming practice, where should all variables be declared?",
        back: "In one place at the beginning of your code"
    },
    {
        front: "If you declare a variable without assigning a value, would the value of the variable be null or undefine?",
        back: "Undefined"
    },
    {
        front: "True or false: if you redeclare a variable without a value, it will lose its current value",
        back: "False"
    },
    {
        front: "What is a JavaScript data type that represents true or false values?",
        back: "Boolean"
    },
    {
        front: "What does DOM stand for in web development?",
        back: "Document Object Model"
    },
    {
        front: "What JavaScript construct is used to handle asynchronous operations more efficiently?",
        back: "Promises"
    },
    {
        front: "What is the purpose of 'try...catch' in JavaScript?",
        back: "To handle runtime errors without stopping code execution entirely"
    },
    {
        front: "What is 'event delegation' in JavaScript?",
        back: "A technique where you add a single event listener to a parent element to handle events for multiple child elements"
    },
    {
        front: "What is the difference between null and undefined in JavaScript?",
        back: "'null' is an intentional absence of value, while 'undefined' represents a variable that has been declared but not assigned a value"
    },
    {
        front: "Explain the concept of 'hoisting' in JavaScript",
        back: "Hoisting is when variable and function declarations are moved to the top of their containing scope during compilation"
    },
    {
        front: "How can you include an external JavaScript file in an HTML document?",
        back: "By using the '<script></script>' tag with the 'src' attribute pointing to the file's location"
    },
    {
        front: "What does the 'typeof' operator do in JavaScript?",
        back: "It returns a string indicating the data type of a given variable or expression"
    },
    {
        front: "What is the purpose of the 'this' keyword in JavaScript",
        back: "It refers to the current context, often used in object oriented programming"
    },
    {
        front: "What does JSON stand for, and how is it related to JavaScript?",
        back: "JSON stands for JavaScript Object Notation and is a lightweight data interchange format often used in JavaScript"
    }
]

export const pythonCards = [
    {
        front: "What type of programming language is Python?",
        back: "Python is a high-level, interpreted, and general-purpose programming language"
    },
    {
        front: "True of false: you need to use 'var', 'let', or 'const' to declare variables in Python",
        back: "False"
    },
    {
        front: "What is the purpose of indentation in Python?",
        back: "Indentation is used to define code blocks and determine the scope of statements"
    },
    {
        front: "Name two numeric data types in Python",
        back: "Int (integer) and float (floating-point number)"
    },
    {
        front: "What keyword is used to define a function in Python?",
        back: "def"
    },
    {
        front: "What is a 'list' in Python?",
        back: "An ordered collection of items, which can contain different data types within opening and closing square brackets ([]) - similar to an array"
    },
    {
        front: "What is a 'dictionary' in Python?",
        back: "An unordered collection of key-value pairs, defined using curly braces ({}) - similar to an object in JavaScript"
    },
    {
        front: "How do you open and read a file in Python?",
        back: "You can open a file using the 'open()' function, and read a file using the 'read()' function"
    },
    {
        front: "What is 'inheritance' in object-oriented programming (OOP)?",
        back: "A mechanism where a new class inherits properties and behaviors from an existing class"
    },
    {
        front: "What does 'PEP 8' refer to in Python?",
        back: "The Python Enhancement Proposal that defines the style guide for writing Python code"
    },
    {
        front: "What is a 'tuple' in Python?",
        back: "An ordered collection of items that is immutable, meaning its elements cannot be changed after creation"
    },
    {
        front: "What is the 'None' keyword in Python?",
        back: "Represents the absence of a value or a null value"
    }
]

export const reactCards = [
    {
        front: "What is React?",
        back: "React is a JavaScript library for building user interfaces, particularly for single-page applications"
    },
    {
        front: "What is JSX in React?",
        back: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code in React"
    },
    {
        front: "Explain the purpose of 'props' in React",
        back: "Used for passing data from parent components to child components in React"
    },
    {
        front: "What is a 'state' in React?",
        back: "An object that represents the internal data of a component, and when it changes, the component re-renders"
    },
    {
        front: "What is a React component?",
        back: "A reusable and self-contained piece of UI that can be composed to build complex interfaces"
    },
    {
        front: "How do you create a functional component in React?",
        back: "You create a functional component using a JavaScript function that returns JSX"
    },
    {
        front: "What is a 'class component' in React?",
        back: "A 'class component' in React is a component created as a class, extending the 'ReactComponent' class"
    },
    {
        front: "What is the 'useState' hook used for in React?",
        back: "The 'useState' hook is used to add state to functional components in React"
    },
    {
        front: "Explain the concept of 'component lifecycle' in React",
        back: "The component lifecycle represents the various stages a React component goes through, including mounting, updating, and unmounting"
    },
    {
        front: "What is 'prop drilling' in React?",
        back: "'Prop drilling' occurs when you need to pass props through multiple levels of nested components"
    },
    {
        front: "What is the 'useEffect' hook used for in React?",
        back: "Performing side effects in functional components, such as data fetching or DOM manipulation"
    },
    {
        front: "What is React Router?",
        back: "A popular library for adding client-side routing to React applications"
    },
    {
        front: "What is a 'higher-order component' (HOC) in React?",
        back: "A pattern in React where a component wraps another component to provide additional functionality"
    },
    {
        front: "What is 'context' in React?",
        back: "A feature in React that allows you to share state data among components without explicitly passing props"
    }
]

export const cSharpCards = [
    {
        front: "What is C#?",
        back: "A high-level, object-oriented programming language developed by Microsoft"
    },
    {
        front: "Which development platform is commonly associated with C#?",
        back: "The Microsoft .NET platform"
    },
    {
        front: "How do you declare a variable in C#?",
        back: "Using the 'var', 'int', 'string', or other data type keywords, followed by a variable  name"
    },
    {
        front: "Explain the 'class' keyword in C#",
        back: "It defines a blueprint for creating objects"
    },
    {
        front: "What is an 'interface' in C#?",
        back: "An interface defines a contract for a set of methods that a class must implement"
    },
    {
        front: "How do you create a method in C#?",
        back: "By using the 'public', 'private', or 'protected' access modifiers, followed by the method's return type, name, parameters"
    },
    {
        front: "What is 'inheritance' in C#?",
        back: "Inheritance is a mechanism where a class can inherit properties and methods from another class"
    },
    {
        front: "Explain 'polymorphism' in C#?",
        back: "The ability of objects of different classes to be treated as objects of a common base class"
    },
    {
        front: "What is 'encapsulation' in C#?",
        back: "The concept of bundling data and methods that operate on that data into a single unit, known as a class"
    },
    {
        front: "What is 'namespace' in C#?",
        back: "A namespace is a way to organize and group related classes and types in C#"
    },
    {
        front: "How do you handle exceptions in C#?",
        back: "Exceptions in C# are handled using 'try', 'catch', 'finally', and 'throw' keywords"
    },
    {
        front: "What is a 'delegate' in C#?",
        back: "A type that represents a method with a specific signature and can be used to create method pointers"
    },
    {
        front: "What is 'LINQ' in C#?",
        back: "LINQ (Language Integrated Query) is a feature in C# for querying and manipulating collections and data"
    },
    {
        front: "Explain the 'async' and 'await' keywords in C#",
        back: "'Async' is used to define an asynchronous method, and 'await' is used to pause execution until the awaited task completes"
    },
    {
        front: "What is 'generics' in C#?",
        back: "Generics allow you to create classes, methods, and interfaces that work with different data types while maintaining type safety"
    },
]

export const javaCards = [
    {
        front: "What is Java?",
        back: "A high-level, object-oriented programming language known for its platform independence"
    },
    {
        front: "What is the difference between 'JRE' and 'JDK' in Java?",
        back: "JRE (Java Runtime Environment) is required to run Java applications, while JDK (Java Development Kit) is used for Java application development"
    },
    {
        front: "How do you declare a variable in Java?",
        back: "You declare a variable by specifying the data type, followed by the variable name"
    },
    {
        front: "What is an 'object' in Java?",
        back: "An instance of a class; represents a real-world entity"
    },
    {
        front: "Explain the 'class' keyword in Java",
        back: "The 'class' keyword is used to define a blueprint for creating objects in Java"
    },
    {
        front: "What is 'inheritance' in Java?",
        back: "Inheritance is a mechanism where a class can inherit properties and methods from another class"
    },
    {
        front: "What is a 'method' in Java?",
        back: "A method is a block of code within a class that can be executed"
    },
    {
        front: "What is 'polymorphism' in Java?",
        back: "The ability of objects of different classes to be treated as objects of a common base class"
    },
    {
        front: "How do you create and use an interface in Java?",
        back: "You create an interface using the 'interface' keyword and classes implement it using the 'implements' keyword"
    },
    {
        front: "Explain 'exception handling' in Java",
        back: "Exception handling is a way to deal with unexpected events or errors during program execution"
    },
    {
        front: "What is 'encapsulation' in Java?",
        back: "Encapsulation is the concept of bundling data and methods that operate on that data into a single unit, known as a class"
    },
    {
        front: "What is the 'main' method in Java?",
        back: "The entry point for Java applications; where program execution begins"
    },
    {
        front: "What is 'static' in Java?",
        back: "A keyword used to create class-level variables and methods that can be accessed without creating an instance of the class"
    },
    {
        front: "Explain 'multi-threading' in Java",
        back: "Multi-threading is the ability of a program to execute multiple threads (smaller units of a process) concurrently"
    },
    {
        front: "What is 'JavaFX' in Java?",
        back: "A framework for building rich client applications and graphical user interfaces in Java"
    },
]

export const cPlusPlusCards = [
    {
        front: "What is C++?",
        back: "A high-level, general purpose programming language known for its performance and flexibility"
    },
    {
        front: "What does C++ signify in its name?",
        back: "An incremental improvement over the C programming language"
    },
    {
        front: "What is the 'iostream' library used for in C++?",
        back: "Input and output operations in C++, including 'cin' for input and 'cout' for output"
    },
    {
        front: "How do you declare a variable in C++?",
        back: "By specifying the data type, followed by the variable name"
    },
    {
        front: "What is an object in C++?",
        back: "An instance of a class - C++ follows an object-oriented programming"
    },
    {
        front: "Explain the 'class' keyword in C++",
        back: "Used to define a blueprint for creating objects and organizing data and functions in C++"
    },
    {
        front: "What is 'inheritance' in C++?",
        back: "A mechanism where a class can inherit properties and methods from another class"
    },
    {
        front: "What is a 'constructor' in C++?",
        back: "A special member function used to initialize objects of a class"
    },
    {
        front: "What is 'polymorphism' in C++?",
        back: "Polymorphism is the ability of objects of different classes to be treated as objects of a common base class"
    },
    {
        front: "How do you define a function in C++?",
        back: "Using the 'function type' followed by the function name, parameters, and the function body"
    },
    {
        front: "Explain 'exception handling' in C++",
        back: "Exception handling is a way to deal with unexpected events or errors during program execution"
    },
    {
        front: "What is 'operator overloading' in C++?",
        back: "Allows you to define how operators behave with user-defined data types"
    },
    {
        front: "What is 'STL' in C++?",
        back: "STL (Standard Template Libray) is a collection of template classes and functions for common data structures and algorithms in C++"
    },
    {
        front: "What is a 'pointer' in C++?",
        back: "A pointer is a variable that stores the memory address of another variable"
    },
    {
        front: "Explain 'template' in C++",
        back: "Templates allow you to create generic classes and functions that work with various data types"
    },
]

export const angularCards = [
    {
        front: "What is Angular?",
        back: "Angular is a popular front-end framework for building dynamic web applications"
    },
    {
        front: "What is the key difference AngularJS and Angular?",
        back: "Angular is a complete rewrite of AngularJS and is often referred to as Angular 2+ or simply Angular"
    },
    {
        front: "What is an 'Angular component'?",
        back: "A building block of an Angular application, consisting of HTML, TypeScript, and CSS"
    },
    {
        front: "What is 'Angular CLI' used for?",
        back: "Angular CLI (Command Line Interface) is a tool for creating, building, and managin Angular projects"
    },
    {
        front: "What is an 'Angular module'?",
        back: "An Angular module is a logical container for organizing and configuring related components, services, and other features"
    },
    {
        front: "What is an 'Angular template'?",
        back: "An HTML file that defines the view of an Angular component"
    },
    {
        front: "What is 'two-way data binding' in Angular?",
        back: "A feature that allows automatic synchronization of data between the component and the view"
    },
    {
        front: "Explain 'dependency injection' in Angular",
        back: "Dependency injection is a design pattern used in Angular to provide instancees of services to components"
    },
    {
        front: "What is the purpose of 'ngFor' in Angular?",
        back: "ngFor is a directive in Angular used for rendering lists of items in the template"
    },
    {
        front: "What is 'routing' in Angular?",
        back: "Routing allows you to navigate between different views or components while maintaing a single-page application"
    },
    {
        front: "What are 'Angular services'?",
        back: "Reusable, injectable classes that provide functionality to multiple parts of an application"
    },
    {
        front: "What is an 'Angular directive'?",
        back: "A custom HTML attribute or element that extends the behavior of the DOM"
    },
    {
        front: "Explain 'Angular pipes'",
        back: "Used to transform and format data in the template, such as date formatting or text manipulation"
    },
    {
        front: "What is 'Angular HttpClient' used for?",
        back: "A module for making HTTP requests to APIs or servers from Angular applications"
    },
    {
        front: "What is 'Angular interpolation'?",
        back: "A way to display component data in the template using double curly braces, like '{{data}}'"
    },
]

export const nextJSCards = [
    {
        front: "What is Next.js?",
        back: "A popular React framework for building server-rendered React applications"
    },
    {
        front: "What problem does Next.js solve in React development?",
        back: "Next.js simplifies server-side rendering, routing, and other aspects of building React applications"
    },
    {
        front: "How do you create a new Next.js application?",
        back: "You can create a new Next.js application using the 'create-next-app' command"
    },
    {
        front: "What is 'server-side rendering' (SSR) in Next.js?",
        back: "Server-side rendering in Next.js means that pages are pre-rendered on the server before being sent to the client"
    },
    {
        front: "What is 'static site generation' (SSG) in Next.js?",
        back: "Generates HTML files at build time, allowing for fast loading"
    },
    {
        front: "What is 'client-side rendering' (CSR) in Next.js?",
        back: "Client-side rendering in Next.js means that pages are rendered on the client's side using JavaScript"
    },
    {
        front: "How do you define a new page in a Next.js application?",
        back: "You create a new page by creating a React component in the 'pages' directory with the file name as the route"
    },
    {
        front: "What is the purpose of 'getServerSideProps' in Next.js?",
        back: "A function used for server-side rendering that fetches data and passes it to a page component as props"
    },
    {
        front: "What is the 'Link' component used for in Next.js?",
        back: "A component used for client-side navigation between pages in a Next.js application"
    },
    {
        front: "What is the 'Head' component used for in Next.js?",
        back: "A component used to modify the HTML 'head' element for SEO and metadata purposes"
    },
    {
        front: "Explain API Routes in Next.js",
        back: "API Routes are serverless functions in Next.js used for building API endpoints within your application"
    },
    {
        front: "What is 'dynamic routing' in Next.js?",
        back: "Dynamic routing allows you to create pages with dynamic segments in the URL"
    },
    {
        front: "What is the purpose of 'useEffect' in Next.js?",
        back: "useEffect performs side effects and runs code after the component has rendered on the client side"
    },
    {
        front: "What is the Next.js Image used for?",
        back: "A component for optimizing and loading images in a Next.js application"
    },
    {
        front: "What is 'Vercel' in the context of Next.js?",
        back: "A popular deployment platform for hosting Next.js applications"
    },
]

export const rustCards = [
    {
        front: "What is Rust?",
        back: "A systems programming language known for its focus on safety, performance, and memory management"
    },
    {
        front: "What is 'ownership' in Rust?",
        back: "A central concept in Rust that governs how memory is managed and allocated"
    },
    {
        front: "Explain 'borrowing' and 'lifetimes' in Rust",
        back: "Borrowing is a way to pass references to data without transferring ownership, and lifetimes ensure the safety of references"
    },
    {
        front: "What is the purpose of 'mutability' in Rust?",
        back: "Mutability allows you to change the value of a variable after it has been declared"
    },
    {
        front: "What is a 'struct' in Rust?",
        back: "A custom data type that allows you to group together related data fields"
    },
    {
        front: "What is 'match' used for in Rust?",
        back: "A control flow construct in Rust used for pattern matching and making decisions based on values"
    },
    {
        front: "Explain 'enums' in Rust",
        back: "Enums are custom data types that allow you to define a type with a fixed set of named values"
    },
    {
        front: "What is the 'Option' type in Rust?",
        back: "Option is an enum in Rust used to represent values that may be present or absent, helping to handle errors and null values"
    },
    {
        front: "What is Rust's ownership model and how does it work?",
        back: "Rust's ownership model ensures memory safety by tracking how data is used and enforcing strict rules on borrowing and ownership"
    },
    {
        front: "What is Rust's borrow checker?",
        back: "A component of the Rust compiler that enforces borrowing rules to prevent data races and memory issues"
    },
    {
        front: "Explain Rust's ownership concepts: move, borrow, and clone",
        back: "Move transfers ownership of a value, borrow allows temporary access without transferring ownership, and clone creates a deep copy"
    },
    {
        front: "What is RAII in Rust?",
        back: "RAII (Resource Acquisition Is Initialization) is a programming idiom used in Rust for automatic resource management"
    },
    {
        front: "What is 'Cargo' in Rust?",
        back: "Cargo is Rust's package manager and build tool, used for managing dependencies and building Rust projects"
    },
    {
        front: "What are 'unsafe blocks' in Rust?",
        back: "Unsafe blocks in Rust allow you to bypass some of the language's safety checks, but they require careful handling"
    },
    {
        front: "Explain Rust's fearless concurrency",
        back: "Rust provides tools like ownership, lifetimes, and the 'std::thread' module to enable safe and efficient concurrent programming"
    },
]

export const svelteCards = [
    {
        front: "What is SvelteKit?",
        back: "A framework for building web applications and sites using the Svelte framework"
    },
    {
        front: "What is the key difference between Svelte and SvelteKit?",
        back: "Svelte is a compiler for building components, while SvelteKit is a framework for building entire web applications"
    },
    {
        front: "What is 'routing' in SvelteKit?",
        back: "Routing in SvelteKit refers to the management of different views or pages within a web application"
    },
    {
        front: "How do you define a new page in SvelteKit?",
        back: "By creating a '.svelte' file in the 'src/routes' directory with a matching URL path"
    },
    {
        front: "What is 'layout' in SvelteKit?",
        back: "A reusable component that wraps around the main content of a page, providing a consistent structure"
    },
    {
        front: "What is the purpose of 'stores' in SvelteKit?",
        back: "Stores in SvelteKit are used for managing and sharing global state across components"
    },
    {
        front: "What is 'load' in SvelteKit?",
        back: "A lifecycle function in SvelteKit used to fetch data asynchronously before rendering a page"
    },
    {
        front: "Explain 'svelte:head' in SvelteKit",
        back: "'svelte:head' is a special element in SvelteKit used to manipulate the HTML '<head>' section of a page</head>"
    },
    {
        front: "What is 'actions' in SvelteKit?",
        back: "Actions in SvelteKit are custom behaviors that can be applied to HTML elements, allowing for interactivity"
    },
    {
        front: "What is 'SvelteKit adapter'?",
        back: "SvelteKit adapters are used for deploying SvelteKit applications to different hosting environments, such as Node.js or Vercel"
    },
    {
        front: "How do you create a custom API endpoint in SvelteKit?",
        back: "You create a custom API endpoint by adding a '.js' file in the 'src/routes' directory, which defines the endpoint's logic"
    },
    {
        front: "What is 'page layout' in SvelteKit?",
        back: "Refers to how the content of a page is structured and styled"
    },
    {
        front: "What is 'preload' in SvelteKit?",
        back: "A function used to fetch data required for rendering a page"
    },
    {
        front: "What is a 'serverless' deployment in SvelteKit?",
        back: "Allows you to deploy your application as a set of stateless functions"
    },
    {
        front: "What is 'stores' in SvelteKit?",
        back: "Allows you to manage and share reactive data across components"
    },
]

export const typeScriptCards = [
    {
        front: "What is TypeScript?",
        back: "A statically typed superset of JavaScript that adds type annotations and other features to enhance code quality"
    },
    {
        front: "What is the main benefit of using TypeScript?",
        back: "Improved code quality and developer productivity through static typing"
    },
    {
        front: "How do you declare a variable with a specific type in TypeScript?",
        back: "You declare a variable with a specific type using the colon syntax (i.e., 'let x: number = 5;'"
    },
    {
        front: "What are type annotations in TypeScript?",
        back: "Used to specify the expected types of variables, function parameters, and return values"
    },
    {
        front: "Explain the 'any' type in TypeScript",
        back: "The 'any' type in TypeScript represents a variable with a dynamic or unknown type"
    },
    {
        front: "What is type inference in TypeScript?",
        back: "A feature that automatically determines the type or variables based on their initialization values"
    },
    {
        front: "What are interfaces in TypeScript used for?",
        back: "Interfaces define the structure of objects and classes, specifying the properties and methods they should have"
    },
    {
        front: "What is a 'generic' in TypeScript?",
        back: "Generics in TypeScript allow you to create reusable code components that work with different data types"
    },
    {
        front: "Explain enums in TypeScript",
        back: "Enums in TypeScript define a set of named numeric constants for improved code readability"
    },
    {
        front: "What is the purpose of 'type assertions' in TypeScript?",
        back: "Type assertions allow you to tell the compiler that you know more about the type of a value than it does"
    },
    {
        front: "How do you define a function with type annotations in TypeScript",
        back: "You define a function with type annotations by specifying the expected types of its parameters and return value"
    },
    {
        front: "What is TypeScript compiler and how does it work?",
        back: "The TypeScript compiler (TSC) translates TypeScript code into JavaScript, performing type checking and generating source maps"
    },
    {
        front: "What is 'type alias' in TypeScript?",
        back: "Type aliases in TypeScript allow you to create custom names for complex types, making code more readable"
    },
    {
        front: "What is 'readonly' in TypeScript?",
        back: "Used to indicate that a property or array should not be modified once it's set"
    },
    {
        front: "What is 'namespace' in TypeScript?",
        back: "Namespaces in TypeScript provide a way to organize code into logical groups and prevent naming conflicts"
    },
]

const flashCardSets = [javaScriptCards, pythonCards, reactCards, cSharpCards, javaCards, cPlusPlusCards, angularCards, nextJSCards, rustCards, typeScriptCards, svelteCards]

export default flashCardSets;
