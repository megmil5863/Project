/* =========================
   Skills Array and Loop
   ========================= */

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"
];

const skillsList =
    document.querySelector("#skills-list");

skills.forEach(function(skill) {

    const listItem =
        document.createElement("li");

    listItem.textContent = skill;

    skillsList.appendChild(listItem);

});


/* =========================
   Custom Project Objects
   ========================= */

const projectOne = {
    title: "Portfolio Website",
    summary: "A personal portfolio website created to showcase my skills, coursework, and web development projects.",
    image: "images/github-project.png",
    repository: "https://github.com/megmil5863/Project/tree/main"
};


const projectTwo = {
    title: "Interactive JavaScript Project",
    summary: "An interactive web project created to practice JavaScript, DOM manipulation, and event handling.",
    image: "images/github-project.png",
    repository: "https://github.com/megmil5863/Project/tree/main"
};


const projectThree = {
    title: "HTML and CSS Practice Project",
    summary: "A web development project created to practice HTML structure, CSS styling, page layout, and responsive design.",
    image: "images/github-project.png",
    repository: "https://github.com/megmil5863/Project/tree/main"
};


/* =========================
   Project Array
   ========================= */

const projectArray = [
    projectOne,
    projectTwo,
    projectThree
];


/* =========================
   Session Storage
   Store and Parse Projects
   ========================= */

const storedProjects =
    sessionStorage.getItem("projects");

let projects;


if (storedProjects === null) {

    /* Convert the project array to a string */

    const projectString =
        JSON.stringify(projectArray);


    /* Store the project string */

    sessionStorage.setItem(
        "projects",
        projectString
    );


    /* Use the original project array */

    projects = projectArray;

} else {

    /* Retrieve and parse the stored projects */

    projects =
        JSON.parse(storedProjects);

}


/* =========================
   Render Projects Dynamically
   ========================= */

const projectsSection =
    document.querySelector("#projects");

const projectsContainer =
    document.querySelector("#projects-container");


projects.forEach(function(project) {

    /* Create the project container */

    const projectElement =
        document.createElement("div");

    projectElement.classList.add("project");


    /* Create project title */

    const projectTitle =
        document.createElement("h3");

    projectTitle.textContent =
        project.title;


    /* Create project summary */

    const projectSummary =
        document.createElement("p");

    projectSummary.textContent =
        project.summary;


    /* Create project image */

    const projectImage =
        document.createElement("img");

    projectImage.src =
        project.image;

    projectImage.alt =
        project.title;


    /* Create repository paragraph */

    const repositoryParagraph =
        document.createElement("p");


    /* Create repository link */

    const repositoryLink =
        document.createElement("a");

    repositoryLink.href =
        project.repository;

    repositoryLink.textContent =
        "View Project on GitHub";

    repositoryLink.target =
        "_blank";

    repositoryLink.rel =
        "noopener noreferrer";


    /* Add link to paragraph */

    repositoryParagraph.appendChild(
        repositoryLink
    );


    /* Add project information */

    projectElement.appendChild(
        projectTitle
    );

    projectElement.appendChild(
        projectSummary
    );

    projectElement.appendChild(
        projectImage
    );

    projectElement.appendChild(
        repositoryParagraph
    );


    /* Add project to the page */

    projectsContainer.appendChild(
        projectElement
    );

});


/* =========================
   Featured Content
   Conditional Logic
   ========================= */

const projectElements =
    document.querySelectorAll(".project");

const universityResources =
    document.querySelector("#university-resources");

const personalProjects =
    document.querySelector("#personal-projects");


if (projectElements.length < 3) {

    universityResources.style.display = "block";
    personalProjects.style.display = "block";

} else {

    universityResources.style.display = "none";
    personalProjects.style.display = "block";

}


/* =========================
   Welcome Modal
   ========================= */

const welcomeModal =
    document.querySelector("#welcome-modal");

const closeModal =
    document.querySelector("#close-modal");


closeModal.addEventListener("click", function() {

    welcomeModal.style.display = "none";

});


/* =========================
   Dark Mode with localStorage
   ========================= */

const darkModeToggle =
    document.querySelector("#dark-mode-toggle");


/* Check for saved Dark Mode preference */

const savedDarkMode =
    localStorage.getItem("darkMode");


/* Apply the saved preference */

if (savedDarkMode === "enabled") {

    document.body.classList.add("dark-mode");

    darkModeToggle.checked = true;

} else {

    document.body.classList.remove("dark-mode");

    darkModeToggle.checked = false;

}


/* Save the preference when the checkbox changes */

darkModeToggle.addEventListener("change", function() {

    if (darkModeToggle.checked) {

        document.body.classList.add("dark-mode");

        localStorage.setItem(
            "darkMode",
            "enabled"
        );

    } else {

        document.body.classList.remove("dark-mode");

        localStorage.setItem(
            "darkMode",
            "disabled"
        );

    }

});


/* =========================
   Contact Form
   ========================= */

const contactForm =
    document.querySelector("#contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    /* Remove an existing status message */

    const oldStatus =
        document.querySelector("#form-status");

    if (oldStatus) {

        oldStatus.remove();

    }


    /* Create a sending message */

    const statusMessage =
        document.createElement("p");

    statusMessage.id =
        "form-status";

    statusMessage.textContent =
        "Sending message...";

    statusMessage.style.color =
        "#4a6fa5";

    statusMessage.style.fontWeight =
        "bold";


    contactForm.appendChild(
        statusMessage
    );


    /* Show confirmation after 3 seconds */

    setTimeout(function() {

        statusMessage.textContent =
            "Message sent successfully!";

        statusMessage.style.color =
            "green";


        /* Clear the form */

        contactForm.reset();

    }, 3000);

});
