
/* ==========================================
   ILD INTERNATIONAL CODING LEARNING
   Complete Learning System
========================================== */

const courses = {
  html: {
    title: "HTML for Beginners",
    lessons: [
      {
        title: "Introduction to HTML",
        body: `
          <h3>What is HTML?</h3>
          <p>HTML stands for HyperText Markup Language. It is the standard language used to create the structure of web pages.</p>
          <p>HTML tells a browser what content to display, such as headings, paragraphs, images and links.</p>
          <h3>Basic HTML Example</h3>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;p&gt;I am learning HTML.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          <h3>Explanation</h3>
          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code> declares an HTML document.</li>
            <li><code>&lt;html&gt;</code> contains the whole page.</li>
            <li><code>&lt;head&gt;</code> contains page information.</li>
            <li><code>&lt;title&gt;</code> sets the browser tab title.</li>
            <li><code>&lt;body&gt;</code> contains visible content.</li>
          </ul>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Write down the name of the language used to structure web pages.</p>
          </div>`
      },
      {
        title: "HTML Headings and Paragraphs",
        body: `
          <h3>Headings</h3>
          <p>HTML provides six heading levels, from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.</p>
          <pre><code>&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Second Heading&lt;/h2&gt;
&lt;h3&gt;Third Heading&lt;/h3&gt;</code></pre>
          <p><code>&lt;h1&gt;</code> is the largest and most important heading. <code>&lt;h6&gt;</code> is the smallest.</p>
          <h3>Paragraphs</h3>
          <p>The <code>&lt;p&gt;</code> tag creates a paragraph.</p>
          <pre><code>&lt;p&gt;This is my first paragraph.&lt;/p&gt;
&lt;p&gt;I enjoy learning web development.&lt;/p&gt;</code></pre>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Create one main heading and two paragraphs using HTML.</p>
          </div>`
      },
      {
        title: "HTML Links and Images",
        body: `
          <h3>Creating Links</h3>
          <p>The <code>&lt;a&gt;</code> tag creates a hyperlink. The <code>href</code> attribute specifies the destination.</p>
          <pre><code>&lt;a href="https://example.com"&gt;
  Visit Example
&lt;/a&gt;</code></pre>
          <h3>Adding Images</h3>
          <p>The <code>&lt;img&gt;</code> tag displays an image. It uses the <code>src</code> attribute for the image location and <code>alt</code> for alternative text.</p>
          <pre><code>&lt;img src="photo.jpg"
     alt="A beautiful landscape"&gt;</code></pre>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Write an HTML link and an image element.</p>
          </div>`
      },
      {
        title: "HTML Lists",
        body: `
          <h3>Types of Lists</h3>
          <p>HTML has ordered lists and unordered lists.</p>
          <h3>Unordered List</h3>
          <pre><code>&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</code></pre>
          <p>An unordered list displays bullet points.</p>
          <h3>Ordered List</h3>
          <pre><code>&lt;ol&gt;
  &lt;li&gt;Open your computer&lt;/li&gt;
  &lt;li&gt;Open a text editor&lt;/li&gt;
  &lt;li&gt;Write HTML&lt;/li&gt;
&lt;/ol&gt;</code></pre>
          <p>An ordered list displays numbered items.</p>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Create a list of three programming languages.</p>
          </div>`
      },
      {
        title: "HTML Forms",
        body: `
          <h3>What is an HTML Form?</h3>
          <p>A form collects information from users.</p>
          <pre><code>&lt;form&gt;
  &lt;label&gt;Your Name:&lt;/label&gt;
  &lt;input type="text"&gt;

  &lt;label&gt;Your Email:&lt;/label&gt;
  &lt;input type="email"&gt;

  &lt;button type="submit"&gt;
    Send
  &lt;/button&gt;
&lt;/form&gt;</code></pre>
          <h3>Common Input Types</h3>
          <ul>
            <li>text: for text.</li>
            <li>email: for an email address.</li>
            <li>password: for a password.</li>
            <li>number: for numbers.</li>
            <li>date: for dates.</li>
          </ul>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Create a form containing a name input and an email input.</p>
          </div>`
      }
    ],
    quiz: [
      {
        q: "What does HTML stand for?",
        a: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Main Link"],
        correct: 0
      },
      {
        q: "Which tag creates the largest heading?",
        a: ["h6", "h1", "p"],
        correct: 1
      },
      {
        q: "Which tag creates a paragraph?",
        a: ["img", "a", "p"],
        correct: 2
      },
      {
        q: "Which attribute specifies a link destination?",
        a: ["src", "href", "alt"],
        correct: 1
      },
      {
        q: "Which tag creates an unordered list?",
        a: ["ul", "ol", "li"],
        correct: 0
      }
    ]
  },

  css: {
    title: "CSS for Beginners",
    lessons: [
      {
        title: "Introduction to CSS",
        body: `
          <h3>What is CSS?</h3>
          <p>CSS stands for Cascading Style Sheets. It controls the appearance and layout of HTML documents.</p>
          <p>CSS can change colors, fonts, spacing, borders and page layouts.</p>
          <h3>CSS Example</h3>
          <pre><code>h1 {
  color: blue;
  font-size: 32px;
}</code></pre>
          <h3>CSS Rule Structure</h3>
          <ul>
            <li>h1 is the selector.</li>
            <li>color is a property.</li>
            <li>blue is a value.</li>
          </ul>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Write a CSS rule that changes paragraph text to green.</p>
          </div>`
      },
      {
        title: "CSS Colors and Backgrounds",
        body: `
          <h3>Text Color</h3>
          <p>The <code>color</code> property changes text color.</p>
          <pre><code>p {
  color: red;
}</code></pre>
          <h3>Background Color</h3>
          <p>The <code>background-color</code> property changes an element's background.</p>
          <pre><code>body {
  background-color: lightblue;
}</code></pre>
          <p>You can use color names, HEX values and RGB values.</p>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Give a heading a yellow color and a blue background.</p>
          </div>`
      },
      {
        title: "CSS Fonts and Text",
        body: `
          <h3>Font Properties</h3>
          <p>CSS allows you to control text appearance.</p>
          <pre><code>p {
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}</code></pre>
          <ul>
            <li><code>font-family</code> changes the font.</li>
            <li><code>font-size</code> changes text size.</li>
            <li><code>font-weight</code> controls thickness.</li>
            <li><code>text-align</code> controls alignment.</li>
          </ul>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Make a paragraph 20 pixels in size and center aligned.</p>
          </div>`
      },
      {
        title: "CSS Box Model",
        body: `
          <h3>Understanding the Box Model</h3>
          <p>Every HTML element can be understood as a rectangular box.</p>
          <ul>
            <li>Content: the actual text or image.</li>
            <li>Padding: space around the content.</li>
            <li>Border: the edge around the padding.</li>
            <li>Margin: space outside the border.</li>
          </ul>
          <pre><code>.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}</code></pre>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Create a box with 15px padding and a 2px solid border.</p>
          </div>`
      },
      {
        title: "CSS Flexbox",
        body: `
          <h3>What is Flexbox?</h3>
          <p>Flexbox is a CSS layout system that helps arrange elements in rows or columns.</p>
          <pre><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}</code></pre>
          <ul>
            <li><code>display: flex</code> activates Flexbox.</li>
            <li><code>justify-content</code> controls main-axis alignment.</li>
            <li><code>align-items</code> controls cross-axis alignment.</li>
            <li><code>gap</code> adds space between items.</li>
          </ul>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Use Flexbox to place two boxes next to each other.</p>
          </div>`
      }
    ],
    quiz: [
      {
        q: "What does CSS stand for?",
        a: ["Computer Style System", "Cascading Style Sheets", "Creative Simple Sheets"],
        correct: 1
      },
      {
        q: "Which property changes text color?",
        a: ["background", "font-size", "color"],
        correct: 2
      },
      {
        q: "Which property changes background color?",
        a: ["background-color", "text-align", "margin"],
        correct: 0
      },
      {
        q: "Which property adds space inside an element's border?",
        a: ["margin", "padding", "gap"],
        correct: 1
      },
      {
        q: "Which CSS value activates Flexbox?",
        a: ["display: flex", "position: flex", "flex: display"],
        correct: 0
      }
    ]
  },

  javascript: {
    title: "JavaScript for Beginners",
    lessons: [
      {
        title: "Introduction to JavaScript",
        body: `
          <h3>What is JavaScript?</h3>
          <p>JavaScript is a programming language that makes web pages interactive.</p>
          <p>It can respond to clicks, update content and perform calculations.</p>
          <h3>Your First JavaScript</h3>
          <pre><code>console.log("Hello World!");</code></pre>
          <p>This command prints a message in the browser's developer console.</p>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Write a JavaScript command that prints your name in the console.</p>
          </div>`
      },
      {
        title: "JavaScript Variables",
        body: `
          <h3>What is a Variable?</h3>
          <p>A variable stores information that a program can use.</p>
          <pre><code>let name = "Alex";
const age = 20;
var city = "Addis Ababa";</code></pre>
          <ul>
            <li><code>let</code> declares a variable whose value can change.</li>
            <li><code>const</code> declares a variable that cannot be reassigned.</li>
            <li><code>var</code> is an older way to declare variables.</li>
          </ul>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Create a variable called studentName and give it a text value.</p>
          </div>`
      },
      {
        title: "JavaScript Data Types",
        body: `
          <h3>Common Data Types</h3>
          <p>JavaScript values have different data types.</p>
          <pre><code>let name = "Sara";       // String
let age = 18;            // Number
let isStudent = true;    // Boolean
let result = null;       // Null</code></pre>
          <ul>
            <li>String: text.</li>
            <li>Number: numeric values.</li>
            <li>Boolean: true or false.</li>
            <li>Null: an intentional empty value.</li>
          </ul>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Create one String, one Number and one Boolean variable.</p>
          </div>`
      },
      {
        title: "JavaScript Conditions",
        body: `
          <h3>Making Decisions</h3>
          <p>Conditional statements allow a program to make decisions.</p>
          <pre><code>let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Not an adult");
}</code></pre>
          <p>The <code>if</code> block runs when its condition is true. Otherwise, the <code>else</code> block runs.</p>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Write an if/else statement that checks whether a number is greater than 10.</p>
          </div>`
      },
      {
        title: "JavaScript Functions",
        body: `
          <h3>What is a Function?</h3>
          <p>A function is a reusable block of code that performs a task.</p>
          <pre><code>function greet() {
  console.log("Welcome to ILD!");
}

greet();</code></pre>
          <h3>Functions with Parameters</h3>
          <pre><code>function add(a, b) {
  return a + b;
}

let answer = add(5, 3);
console.log(answer);</code></pre>
          <p>Parameters allow information to be passed into a function. The return statement sends a result back.</p>
          <div class="practice-box">
            <h4>Practice</h4>
            <p>Create a function that multiplies two numbers.</p>
          </div>`
      }
    ],
    quiz: [
      {
        q: "What is JavaScript mainly used for on web pages?",
        a: ["Making pages interactive", "Creating image files", "Replacing the internet"],
        correct: 0
      },
      {
        q: "Which command prints a message in the console?",
        a: ["show()", "console.log()", "print.page()"],
        correct: 1
      },
      {
        q: "Which keyword declares a variable that cannot be reassigned?",
        a: ["let", "var", "const"],
        correct: 2
      },
      {
        q: "Which value is a Boolean?",
        a: ["Hello", "true", "25"],
        correct: 1
      },
      {
        q: "Which statement is used to make a decision?",
        a: ["if", "repeat", "style"],
        correct: 0
      }
    ]
  }
};

/* ==========================================
   ELEMENTS AND SAVED PROGRESS
========================================== */

const $ = id => document.getElementById(id);

let currentCourse = null;
let currentLesson = 0;
let currentQuiz = [];
let quizIndex = 0;
let quizScore = 0;
let selectedOption = null;

let examQuestions = [];
let examIndex = 0;
let examAnswers = [];
let examSelected = null;

function saveProgress() {
  try {
    localStorage.setItem("ildProgress", JSON.stringify(progress));
  } catch (error) {
    console.warn("Progress could not be saved.", error);
  }
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("ildProgress") || "{}");
    return {
      completedLessons: saved.completedLessons || {},
      completedQuizzes: saved.completedQuizzes || {},
      examPassed: saved.examPassed || false,
      examScore: saved.examScore || 0
    };
  } catch (error) {
    return {
      completedLessons: {},
      completedQuizzes: {},
      examPassed: false,
      examScore: 0
    };
  }
}

let progress = loadProgress();

/* ==========================================
   COURSE NAVIGATION
========================================== */

document.querySelectorAll(".start-course").forEach(button => {
  button.addEventListener("click", () => {
    openCourse(button.dataset.course);
  });
});

function openCourse(courseId) {
  if (!courses[courseId]) return;

  currentCourse = courseId;
  currentLesson = 0;

  $("course-title").textContent = courses[courseId].title;

  $("learning").hidden = false;
  $("quiz").hidden = true;
  $("final-exam").hidden = true;

  renderLessonList();
  showLesson(0);

  $("learning").scrollIntoView({ behavior: "smooth" });
}

function renderLessonList() {
  const course = courses[currentCourse];
  const list = $("lesson-list");

  list.innerHTML = "";

  course.lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.className = "lesson-item";
    button.textContent = `${index + 1}. ${lesson.title}`;

    button.addEventListener("click", () => {
      showLesson(index);
    });

    list.appendChild(button);
  });
}

function showLesson(index) {
  const course = courses[currentCourse];

  if (!course || index < 0 || index >= course.lessons.length) {
    return;
  }

  currentLesson = index;

  const lesson = course.lessons[index];

  $("lesson-number").textContent =
    `LESSON ${index + 1} OF ${course.lessons.length}`;

  $("lesson-title").textContent = lesson.title;
  $("lesson-body").innerHTML = lesson.body;

  document.querySelectorAll(".lesson-item").forEach((button, i) => {
    button.classList.toggle("active", i === index);
  });

  $("previous-lesson").disabled = index === 0;

  $("next-lesson").textContent =
    index === course.lessons.length - 1
      ? "Finish Lessons"
      : "Next Lesson";

  window.scrollTo({
    top: $("learning").offsetTop,
    behavior: "smooth"
  });
}

$("previous-lesson").addEventListener("click", () => {
  if (currentLesson > 0) {
    showLesson(currentLesson - 1);
  }
});

$("next-lesson").addEventListener("click", () => {
  const course = courses[currentCourse];

  progress.completedLessons[currentCourse] =
    progress.completedLessons[currentCourse] || [];

  if (!progress.completedLessons[currentCourse].includes(currentLesson)) {
    progress.completedLessons[currentCourse].push(currentLesson);
  }

  saveProgress();

  if (currentLesson < course.lessons.length - 1) {
    showLesson(currentLesson + 1);
  } else {
    alert("You have reached the end of this course. Take the course quiz!");
    $("course-quiz-button").scrollIntoView({ behavior: "smooth" });
  }
});

/* ==========================================
   COURSE QUIZ
========================================== */

$("course-quiz-button").addEventListener("click", startCourseQuiz);

function startCourseQuiz() {
  if (!currentCourse) return;

  currentQuiz = courses[currentCourse].quiz;
  quizIndex = 0;
  quizScore = 0;
  selectedOption = null;

  $("learning").hidden = true;
  $("quiz").hidden = false;
  $("final-exam").hidden = true;

  $("quiz-title").textContent =
    courses[currentCourse].title + " Quiz";

  $("quiz-result").innerHTML = "";
  showQuizQuestion();

  $("quiz").scrollIntoView({ behavior: "smooth" });
}

function showQuizQuestion() {
  const question = currentQuiz[quizIndex];

  selectedOption = null;

  $("quiz-progress").textContent =
    `Question ${quizIndex + 1} of ${currentQuiz.length}`;

  $("quiz-question").textContent = question.q;
  $("quiz-feedback").textContent = "";
  $("next-question").hidden = true;
  $("submit-answer").hidden = false;

  const options = $("quiz-options");
  options.innerHTML = "";

  question.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent = answer;

    button.addEventListener("click", () => {
      selectedOption = index;

      document.querySelectorAll("#quiz-options .quiz-option")
        .forEach(option => option.classList.remove("selected"));

      button.classList.add("selected");
    });

    options.appendChild(button);
  });
}

$("submit-answer").addEventListener("click", () => {
  if (selectedOption === null) {
    $("quiz-feedback").textContent = "Please select an answer first.";
    return;
  }

  const question = currentQuiz[quizIndex];
  const buttons = document.querySelectorAll("#quiz-options .quiz-option");

  if (selectedOption === question.correct) {
    quizScore++;
    $("quiz-feedback").textContent = "Correct! Well done.";
  } else {
    $("quiz-feedback").textContent =
      "Incorrect. Correct answer: " + question.a[question.correct];
  }

  buttons.forEach(button => button.disabled = true);

  $("submit-answer").hidden = true;
  $("next-question").hidden = false;

  $("next-question").textContent =
    quizIndex === currentQuiz.length - 1
      ? "See Results"
      : "Next Question";
});

$("next-question").addEventListener("click", () => {
  quizIndex++;

  if (quizIndex < currentQuiz.length) {
    showQuizQuestion();
  } else {
    finishCourseQuiz();
  }
});

function finishCourseQuiz() {
  const percentage = Math.round(
    (quizScore / currentQuiz.length) * 100
  );

  progress.completedQuizzes[currentCourse] = percentage;
  saveProgress();

  $("quiz-question").textContent = "Quiz Completed!";
  $("quiz-options").innerHTML = "";
  $("quiz-feedback").textContent = "";

  $("quiz-progress").textContent = "Your Result";

  $("submit-answer").hidden = true;
  $("next-question").hidden = true;

  $("quiz-result").innerHTML = `
    <h3>Your Score: ${quizScore}/${currentQuiz.length}</h3>
    <p>Percentage: ${percentage}%</p>
    <p>${percentage >= 60
      ? "Good work! You passed this course quiz."
      : "Keep studying and try again."}</p>
    <button class="primary-btn" id="back-to-course">
      Return to Course
    </button>
  `;

  $("back-to-course").addEventListener("click", () => {
    $("quiz").hidden = true;
    $("learning").hidden = false;
    $("learning").scrollIntoView({ behavior: "smooth" });
  });
}

/* ==========================================
   FINAL EXAM - 20 QUESTIONS
========================================== */

const examBank = [
  { q: "What does HTML stand for?", a: ["HyperText Markup Language", "HighText Machine Language", "Home Tool Markup Language"], c: 0 },
  { q: "Which tag creates a paragraph?", a: ["<h1>", "<p>", "<img>"], c: 1 },
  { q: "Which tag creates a link?", a: ["<a>", "<div>", "<br>"], c: 0 },
  { q: "Which tag displays an image?", a: ["<picture-text>", "<image-link>", "<img>"], c: 2 },
  { q: "Which tag creates an ordered list?", a: ["<ul>", "<ol>", "<li>"], c: 1 },
  { q: "What does CSS stand for?", a: ["Cascading Style Sheets", "Computer Style System", "Creative Sheet Structure"], c: 0 },
  { q: "Which property changes text color?", a: ["font-size", "color", "padding"], c: 1 },
  { q: "Which property changes background color?", a: ["background-color", "margin", "border"], c: 0 },
  { q: "Which property changes font size?", a: ["text-align", "font-size", "display"], c: 1 },
  { q: "What does padding control?", a: ["Space inside the border", "Space outside the border", "Text color"], c: 0 },
  { q: "What does JavaScript add to websites?", a: ["Interactivity", "Only images", "Only page titles"], c: 0 },
  { q: "Which command prints a message in the console?", a: ["console.log()", "write.color()", "show.html()"], c: 0 },
  { q: "Which keyword declares a variable that cannot be reassigned?", a: ["let", "var", "const"], c: 2 },
  { q: "Which is a Boolean value?", a: ["Hello", "true", "100"], c: 1 },
  { q: "Which statement checks a condition?", a: ["if", "style", "link"], c: 0 },
  { q: "Which symbol is used for addition in JavaScript?", a: ["+", "*", "/"], c: 0 },
  { q: "What is a function?", a: ["A reusable block of code", "An HTML image", "A CSS color"], c: 0 },
  { q: "Which method selects an element by its ID?", a: ["getElementById()", "getStyleByName()", "selectHTML()"], c: 0 },
  { q: "Which HTML attribute provides alternative image text?", a: ["href", "alt", "class"], c: 1 },
  { q: "Which CSS layout system arranges items flexibly?", a: ["Flexbox", "HTML", "console"], c: 0 }
];

function startFinalExam() {
  examQuestions = [...examBank];
  examIndex = 0;
  examAnswers = [];
  examSelected = null;

  $("learning").hidden = true;
  $("quiz").hidden = true;
  $("final-exam").hidden = false;

  $("exam-result").innerHTML = "";

  showExamQuestion();

  $("final-exam").scrollIntoView({ behavior: "smooth" });
}

function showExamQuestion() {
  const question = examQuestions[examIndex];

  examSelected = null;

  $("exam-progress").textContent =
    `Question ${examIndex + 1} of ${examQuestions.length}`;

  $("exam-question").textContent = question.q;

  const options = $("exam-options");
  options.innerHTML = "";

  question.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent = answer;

    button.addEventListener("click", () => {
      examSelected = index;

      options.querySelectorAll("button").forEach(option => {
        option.classList.remove("selected");
      });

      button.classList.add("selected");
    });

    options.appendChild(button);
  });

  $("exam-next").textContent =
    examIndex === examQuestions.length - 1
      ? "Submit Final Exam"
      : "Next Question";
}

$("exam-next").addEventListener("click", () => {
  if (examSelected === null) {
    alert("Please select an answer.");
    return;
  }

  examAnswers[examIndex] = examSelected;
  examIndex++;

  if (examIndex < examQuestions.length) {
    showExamQuestion();
  } else {
    finishFinalExam();
  }
});

function finishFinalExam() {
  let score = 0;

  examQuestions.forEach((question, index) => {
    if (examAnswers[index] === question.c) {
      score++;
    }
  });

  const percentage = Math.round(
    (score / examQuestions.length) * 100
  );

  progress.examScore = percentage;
  progress.examPassed = percentage >= 95;

  saveProgress();

  $("exam-progress").textContent = "Examination Completed";
  $("exam-question").textContent = "Your Final Result";
  $("exam-options").innerHTML = "";
  $("exam-next").hidden = true;

  $("exam-result").innerHTML = `
    <h2>${score} / ${examQuestions.length}</h2>
    <h3>${percentage}%</h3>
    <p>${percentage >= 95
      ? "Congratulations! You passed the final examination."
      : "You did not reach 95%. Review your lessons and try again."}</p>
    <button class="primary-btn" id="certificate-link">
      View Certificate
    </button>
  `;

  $("certificate-link").addEventListener("click", () => {
    $("final-exam").hidden = true;
    $("certificate").scrollIntoView({ behavior: "smooth" });
    updateCertificate();
  });

  updateCertificate();
}

/* ==========================================
   CERTIFICATE
========================================== */

function updateCertificate() {
  if (progress.examPassed) {
    $("certificate-status").textContent =
      "Congratulations! You have unlocked your certificate.";

    $("certificate-details").innerHTML = `
      <p><strong>Certificate Awarded To:</strong> Successful Learner</p>
      <p><strong>Final Exam Score:</strong> ${progress.examScore}%</p>
      <p><strong>Institution:</strong> ILD International Coding Learning</p>
      <p><strong>Achievement:</strong> Web Development Beginner Program</p>
    `;

    $("print-certificate").hidden = false;
  } else {
    $("certificate-status").textContent =
      "Complete the final examination with at least 95% to unlock your certificate.";

    $("certificate-details").innerHTML = `
      <p>Current final exam score: ${progress.examScore}%</p>
      <p>Required score: 95%</p>
    `;

    $("print-certificate").hidden = true;
  }
}

$("print-certificate").addEventListener("click", () => {
  if (progress.examPassed) {
    window.print();
  }
});

/* ==========================================
   START EXAM BUTTON
========================================== */

const examButton = document.createElement("button");

examButton.textContent = "Start Final Exam";
examButton.className = "primary-btn";
examButton.style.display = "block";
examButton.style.margin = "25px auto";

$("certificate").appendChild(examButton);

examButton.addEventListener("click", startFinalExam);

/* ==========================================
   INITIALIZE WEBSITE
========================================== */

updateCertificate();

console.log("ILD Learning System is ready!");
