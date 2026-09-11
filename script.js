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

const skillsList = document.querySelector("#skills-list");

skills.forEach(function(skill) {

    const listItem = document.createElement("li");

    listItem.textContent = skill;

    skillsList.appendChild(listItem);
});


/* =========================
   Featured Content
   Conditional Logic
   ========================= */

const projects = document.querySelectorAll(".project");

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
   Dark Mode
   ========================= */

const darkModeToggle =
    document.querySelector("#dark-mode-toggle");


darkModeToggle.addEventListener("change", function() {

    if (darkModeToggle.checked) {

        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }

});


/* =========================
   Contact Form
   ========================= */

const submitButton =
    document.querySelector("#submit-button");


submitButton.addEventListener("click", function(event) {

    event.preventDefault();

    const name =
        document.querySelector("#name").value;


    alert(
        "Thank you, " +
        name +
        ", your message has been sent!"
    );

});
