'use strict '
 // 1 Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el vector
let students = ["juan","jose","pedro","maria","alejandra"];
let pos = prompt('ingrese el nombre');
alert(students.includes(pos) ? "si se encuentra" : "no se encuntra");

// 2. Separar por palabras y mostrar cuantas palabras tiene la siguiente frase:
// 3. En base al resultado del ejercicio anterior agrupar en un array únicamente las
// palabras que tengan mas de 3 letras.

let phrase = 'La programación web es fundamental para el progreso'

let ph2 = phrase.split(' ');

alert(ph2.map(item => item.length));

let newphrase= ph2.filter(item => item.length > 3);
alert(newphrase);

// 4. De la siguiente lista de 50 libros de la biblioteca buscar si existe un titulo ingresado por prompt.

const programmingBooks = [
"JavaScript: The Good Parts",
"Clean Code: A Handbook of Agile Software Craftsmanship",
"Code Complete: A Practical Handbook of Software Constructi",
"Design Patterns: Elements of Reusable Object-Oriented Soft",
"The Pragmatic Programmer: Your Journey to Mastery",
"Eloquent JavaScript: A Modern Introduction to Programming",
"You Don't Know JS",
"Python Crash Course",
"Learning Python",
"Java: The Complete Reference",
"Head First Java",
"C# in Depth",
"The Go Programming Language",
"Programming in Scala",
"Effective Java",
"Ruby on Rails Tutorial: Learn Web Development with Rails",
"Node.js Design Patterns",
"Angular Up and Running",
"React: Up and Running",
"Vue.js: Up and Running",
"Django for Beginners",
"Flask Web Development",
"Full Stack Development with Spring Boot and React",
"Machine Learning Yearning",
"Data Science for Business",
"Artificial Intelligence: A Modern Approach",
"Introduction to Algorithms",
"Clean Architecture: A Craftsman's Guide to Software Struct",
"Domain-Driven Design: Tackling Complexity in the Heart of",
"Continuous Delivery: Reliable Software Releases through Bu",
"Refactoring: Improving the Design of Existing Code",
"The Mythical Man-Month: Essays on Software Engineering",
"DevOps Handbook",
"Git Pro",
"The Docker Book: Containerization is the New Virtualizatio",
"Site Reliability Engineering: How Google Runs Production S",
"The Phoenix Project: A Novel About IT, DevOps, and Helping",
"Accelerate: The Science of Lean Software and DevOps",
"Code: The Hidden Language of Computer Hardware and Softwar",
"The C Programming Language",
"Effective Python: 90 Specific Ways to Write Better Python",
"Programming Rust",
"Rust in Action",
"Go in Practice",
"Pro Git",
"Java Concurrency in Practice",
"The Rust Programming Language",
];

let buscarTitulo = prompt("Ingrese nombre del libro:");
let libroEncontrado = programmingBooks.includes(buscarTitulo);
alert(libroEncontrado ? `${buscarTitulo} si existe sete libro.` : `${buscarTitulo} no existe este libro.`);