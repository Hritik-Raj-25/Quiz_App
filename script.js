const questions = [
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        answer: "Oxygen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
        answer: "Mitochondria"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "500,000 km/s"],
        answer: "300,000 km/s"
    },
    {
        question: "What is the boiling point of water?",
        options: ["100°C", "90°C", "80°C", "120°C"],
        answer: "100°C"
    },
    {
        question: "Who was the first president of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        answer: "1912"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Emily Brontë", "Jane Austen", "Mark Twain", "Charles Dickens"],
        answer: "Jane Austen"
    },
    {
        question: "What is the name of the wizarding school in Harry Potter?",
        options: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"],
        answer: "Hogwarts"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        answer: "Japan"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');
const scoreElement = document.getElementById('score');

