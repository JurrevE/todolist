import differentprojects from ".";
export function displaytodos() {
    let projectmodaltododiv = document.getElementById("projectmodaltodos");
    projectmodaltododiv.innerHTML = ""; // Clear existing content before displaying todos

    let projectName = document.getElementById("projectmodalname").innerText;
    let project = differentprojects[projectName];

    // Log project.todos for debugging
    console.log("Project Todos:", project.todos);

    for (let i = 0; i < project.todos.length; i++) {
        let tododiv = document.createElement("div");
        tododiv.classList.add("tododiv");

        // Check if the title property exists
        if (project.todos[i].title) {
            tododiv.innerHTML = project.todos[i].title;
        } else {
            // Log error if title property is missing
            console.error("Title property is missing in todo object:", project.todos[i]);
        }

        projectmodaltododiv.appendChild(tododiv);
    }
}
