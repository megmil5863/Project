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
   Featured Content
   Conditional Logic
   ========================= */

const projects =
    document.querySelectorAll(".project");

const universityResources =
    document.querySelector("#university-resources");

const personalProjects =
    document.querySelector("#personal-projects");


if (projects.length < 3) {

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

    statusMessage.id = "form-status";

    statusMessage.textContent =
        "Sending message...";

    statusMessage.style.color =
        "#4a6fa5";

    statusMessage.style.fontWeight =
        "bold";


    contactForm.appendChild(statusMessage);


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
