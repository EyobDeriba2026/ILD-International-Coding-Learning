
// ILD International Coding Learning
// Main JavaScript File

// Update the copyright year automatically
const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `
        <p>© ${year} ILD International Coding Learning</p>
        <p>Independent Educational Project</p>
    `;
}

// Highlight the active navigation link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => {
            item.style.color = "white";
        });

        this.style.color = "#48d6c5";
    });
});

// Select a course when clicked
const courses = document.querySelectorAll(".course");

courses.forEach(course => {
    course.style.cursor = "pointer";

    course.addEventListener("click", function () {
        courses.forEach(item => {
            item.style.border = "none";
        });

        this.style.border = "3px solid #087eaa";

        let message = document.getElementById("course-message");

        if (!message) {
            message = document.createElement("p");
            message.id = "course-message";
            message.style.margin = "20px";
            message.style.fontWeight = "bold";

            document.querySelector("#courses").appendChild(message);
        }

        const courseName = this.querySelector("h3").textContent;

        message.textContent =
            "You selected " + courseName + ". Happy Learning!";
    });
});

console.log("ILD International Coding Learning is ready!");
