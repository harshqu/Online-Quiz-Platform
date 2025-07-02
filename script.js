const quizzes = {
    HTML: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Which HTML element is used to specify a header for a document or section?", options: [" < header > ", " < head > ", "< top >", "< section-header >"], answer: "< header >" },
        { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", options: ["alt", "src", "title", "href"], answer: "alt" },
        { question: "Which HTML element is used to define a table row?", options: ["< tr >", "< td >", "< table >", "< th >"], answer: "< tr >" },
        { question: "What is the correct HTML element for inserting a line break?", options: ["< br >", "< lb >", "< break >", "< newline >"], answer: "< br >" },
        { question: "Which HTML tag is used to define an unordered list?", options: ["< ul >", "< ol >", "< li >", "< list >"], answer: "< ul >" },
        { question: "In HTML, which attribute is used to specify that an input field must be filled out?", options: ["required", "placeholder", "validate", "mandatory"], answer: "required" },
        { question: "Which HTML element defines navigation links?", options: ["< nav >", "< navigate >", "< navigation >", "< links >"], answer: "< nav >" },
        { question: "What is the correct HTML for creating a hyperlink?", options: ["< a href='url' >Link Text</a>", "<link src='url'>Link Text</link>", "<hyperlink>url</hyperlink>", "<a>url</a>"], answer: "<a href='url'>Link Text</a>" },
        { question: "Which doctype is correct for HTML5?", options: ["< !DOCTYPE html >", "< !DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN'>", "< !DOCTYPE HTML5 >", "< !DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' >"], answer: "< !DOCTYPE html >" }
    ],
    CSS: [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
        { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "styles", "font"], answer: "style" },
        { question: "Which is the correct CSS syntax?", options: ["body {color: black;}", "{body;color:black;}", "body:color=black;", "body {color=black;}"], answer: "body {color: black;}" },
        { question: "How do you insert a comment in a CSS file?", options: ["/* this is a comment */", "// this is a comment", "<!-- this is a comment -->", "' this is a comment"], answer: "/* this is a comment */" },
        { question: "Which property is used to change the background color?", options: ["background-color", "color", "bgcolor", "background"], answer: "background-color" },
        { question: "Which CSS property controls the text size?", options: ["font-size", "text-style", "text-size", "font-style"], answer: "font-size" },
        { question: "What is the default value of the position property?", options: ["static", "relative", "fixed", "absolute"], answer: "static" },
        { question: "How do you make each word in a text start with a capital letter?", options: ["text-transform: capitalize;", "text-style: capitalize;", "transform: capitalize;", "You can't do that with CSS"], answer: "text-transform: capitalize;" },
        { question: "Which property is used to change the font of an element?", options: ["font-family", "font-weight", "font-style", "font-variant"], answer: "font-family" },
        { question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], answer: "#demo" }
    ],
    Javascript: [
        { question: "Inside which HTML element do we put the JavaScript?", options: ["< script >", "< javascript >", "< js >", "< scripting >"], answer: "< script >" },
        { question: "What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["< script src='xxx.js' >", "< script href='xxx.js' >", "< script name='xxx.js' >", "< script file='xxx.js' >"], answer: "< script src='xxx.js' >" },
        { question: "How do you write 'Hello World' in an alert box?", options: ["alert('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');"], answer: "alert('Hello World');" },
        { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "def myFunction()"], answer: "function myFunction()" },
        { question: "How do you call a function named 'myFunction'?", options: ["myFunction()", "call myFunction()", "call function myFunction()", "execute myFunction()"], answer: "myFunction()" },
        { question: "How to write an IF statement in JavaScript?", options: ["if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then"], answer: "if (i == 5)" },
        { question: "How does a WHILE loop start?", options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while i <= 10"], answer: "while (i <= 10)" },
        { question: "How can you add a comment in a JavaScript?", options: ["//This is a comment", " <!--This is a comment-->  ", "'This is a comment", "/* This is a comment */"], answer: "//This is a comment" },
        { question: "What is the correct way to write a JavaScript array?", options: ["var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"], answer: "var colors = ['red', 'green', 'blue']" },
        { question: "How do you round the number 7.25, to the nearest integer?", options: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"], answer: "Math.round(7.25)" }
    ],
    Accessibility: [
        { question: "What does WCAG stand for?", options: ["Web Content Accessibility Guidelines", "World Wide Web Consortium Accessibility Guidelines", "Web Compliance Accessibility Guidelines", "Website Content Accessibility Group"], answer: "Web Content Accessibility Guidelines" },
        { question: "Which of these is a key principle of accessibility?", options: ["Perceivable", "Popular", "Pretty", "Priced-low"], answer: "Perceivable" },
        { question: "What is the purpose of 'alt' text for images?", options: ["To describe the image for visually impaired users", "To provide a caption for the image", "To improve SEO", "To set the image size"], answer: "To describe the image for visually impaired users" },
        { question: "Semantic HTML tags (e.g., <nav>, <article>) primarily help with:", options: ["Screen readers and assistive technologies", "Search engine optimization", "Styling the page with CSS", "Making the page load faster"], answer: "Screen readers and assistive technologies" },
        { question: "What is an ARIA attribute?", options: ["An attribute to make web content more accessible", "An attribute for styling elements", "An attribute for animations", "An attribute for responsive design"], answer: "An attribute to make web content more accessible" },
        { question: "Which color contrast ratio is generally considered the minimum for normal text (AA level)?", options: ["4.5:1", "3:1", "7:1", "2:1"], answer: "4.5:1" },
        { question: "Why is keyboard navigation important for accessibility?", options: ["Users with motor disabilities may rely on it", "It makes websites look more professional", "It's faster than using a mouse", "It helps with website caching"], answer: "Users with motor disabilities may rely on it" },
        { question: "Which of the following helps users understand the purpose of a form input field?", options: ["A clear <label> element associated with the input", "Using placeholder text only", "Making the input field very large", "Using a bright border color"], answer: "A clear <label> element associated with the input" },
        { question: "For video content, what is essential for users who are deaf or hard of hearing?", options: ["Captions", "High resolution video", "Autoplay functionality", "Background music"], answer: "Captions" },
        { question: "Focus indicators (e.g., outlines around focused elements) are important for:", options: ["Keyboard users to know where they are on the page", "Mouse users to click accurately", "Improving the visual design", "Mobile responsiveness"], answer: "Keyboard users to know where they are on the page" }
    ]
};
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let currentSubject = '';
let answerSubmitted = false;

const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const resultsScreen = document.getElementById('results-screen');
const questionNumberText = document.getElementById('question-number-text');
const questionTextElement = document.getElementById('question-text-element');
const answerOptionsContainer = document.getElementById('answer-options-container');
const submitAnswerButton = document.getElementById('submit-answer-button');
const progressBarFill = document.getElementById('progress-bar-fill');
const errorMessage = document.getElementById('error-message');
const resultsTopicInfo = document.getElementById('results-topic-info');
const resultsScore = document.getElementById('results-score');
const resultsOutOf = document.getElementById('results-outof');
const playAgainButton = document.getElementById('play-again-button');
const themeToggle = document.getElementById('theme-toggle');
const themeIconSun = document.getElementById('theme-icon-sun');
const themeIconMoon = document.getElementById('theme-icon-moon');
const backButton = document.getElementById('back-button');

document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => {
        currentSubject = option.dataset.subject;
        startQuiz(currentSubject);
    });
});

submitAnswerButton.addEventListener('click', handleSubmit);
playAgainButton.addEventListener('click', resetQuiz);
themeToggle.addEventListener('click', toggleTheme);
backButton.addEventListener('click', () => {
    questionScreen.style.display = 'none';
    welcomeScreen.style.display = 'grid';
});

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('light-mode');
    updateThemeIcons();
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

function updateThemeIcons() {
    if (document.body.classList.contains('light-mode')) {
        themeIconSun.style.color = '#A729F5';
        themeIconMoon.style.color = '#626C7F';
    } else {
        themeIconSun.style.color = '#ABC1E1';
        themeIconMoon.style.color = '#A729F5';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        themeToggle.classList.add('light-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeToggle.classList.remove('light-mode');
    }
    updateThemeIcons();
}

function startQuiz(subject) {
    currentQuiz = quizzes[subject];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    answerSubmitted = false;
    welcomeScreen.style.display = 'none';
    resultsScreen.style.display = 'none';
    questionScreen.style.display = 'grid';
    loadQuestion();
}

function loadQuestion() {
    answerSubmitted = false;
    selectedAnswer = null;
    submitAnswerButton.disabled = true;
    submitAnswerButton.textContent = 'Submit Answer';
    errorMessage.style.display = 'none';
    const currentQuestion = currentQuiz[currentQuestionIndex];
    questionNumberText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
    questionTextElement.textContent = currentQuestion.question;
    answerOptionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('quiz-option', 'answer-option');
        optionElement.innerHTML = `
            <div class="quiz-option-icon ${getIconClass(currentSubject)}">
                <span>${String.fromCharCode(65 + index)}</span>
            </div>
            <span class="quiz-title">${option}</span>
            <span class="material-icons answer-icon"></span>
        `;
        optionElement.addEventListener('click', () => selectAnswer(optionElement, option));
        answerOptionsContainer.appendChild(optionElement);
    });
    
    updateProgressBar();
}

function getIconClass(subject) {
    switch(subject) {
        case 'HTML': return 'icon-html';
        case 'CSS': return 'icon-css';
        case 'Javascript': return 'icon-js';
        case 'Accessibility': return 'icon-accessibility';
        default: return 'icon-html';
    }
}

function selectAnswer(optionElement, answer) {
    if (answerSubmitted) return;
    document.querySelectorAll('.answer-option').forEach(el => el.classList.remove('selected'));
    optionElement.classList.add('selected');
    selectedAnswer = answer;
    submitAnswerButton.disabled = false;
    errorMessage.style.display = 'none';
}

function handleSubmit() {
    if (!selectedAnswer) {
        errorMessage.style.display = 'block';
        return;
    }
    if (answerSubmitted) {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
            loadQuestion();
        } else {
            showResults();
        }
        return;
    }
    
    answerSubmitted = true;
    const currentQuestion = currentQuiz[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    document.querySelectorAll('.answer-option').forEach(el => {
        const optionText = el.querySelector('.quiz-title').textContent;
        const iconSpan = el.querySelector('.answer-icon');
        if (optionText === currentQuestion.answer) {
            el.classList.add('correct');
            iconSpan.textContent = 'check_circle';
        }
        if (el.classList.contains('selected')) {
            if (isCorrect) {
                el.classList.add('correct');
                iconSpan.textContent = 'check_circle';
                score++;
            } else {
                el.classList.add('incorrect');
                iconSpan.textContent = 'cancel';
            }
        }
    });
    
    submitAnswerButton.textContent = currentQuestionIndex < currentQuiz.length - 1 ? 'Next Question' : 'Show Results';
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

function showResults() {
    questionScreen.style.display = 'none';
    resultsScreen.style.display = 'grid';
    const subjectIconInfo = {
        HTML: { icon: 'code', class: 'icon-html' },
        CSS: { icon: 'palette', class: 'icon-css' },
        Javascript: { icon: 'integration_instructions', class: 'icon-js' },
        Accessibility: { icon: 'accessibility_new', class: 'icon-accessibility' }
    };
    const iconInfo = subjectIconInfo[currentSubject];
    resultsTopicInfo.innerHTML = `
        <div class="quiz-option-icon ${iconInfo.class}">
            <span class="material-icons">${iconInfo.icon}</span>
        </div>
        <span>${currentSubject}</span>
    `;
    resultsScore.textContent = score;
    resultsOutOf.textContent = `out of ${currentQuiz.length}`;
}

function resetQuiz() {
    resultsScreen.style.display = 'none';
    welcomeScreen.style.display = 'grid';
    currentSubject = '';
    progressBarFill.style.width = `0%`;
}

loadTheme();