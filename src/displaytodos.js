import differentprojects from ".";

import { deleteTodoButtonFunc } from "./deleteTodoButtonFunc";

let project;

export function displaytodos() {
    let projectmodaltododiv = document.getElementById("projectmodaltodos");
    projectmodaltododiv.innerHTML = ""; // Clear existing content before displaying todos

    let projectName = document.getElementById("projectmodalname").innerText;
    project = differentprojects[projectName]; // Assign the project variable

    let deletecounter = 0;

    for (let i = 0; i < project.todos.length; i++) {
        let tododiv = document.createElement("div");
        let tododivdeletebutton = document.createElement("button");
        tododivdeletebutton.innerHTML = "Delete todo";
        tododivdeletebutton.classList.add("delete-todo-btn")
        tododivdeletebutton.setAttribute("data-delete-button", deletecounter); // Add a class for styling or event handling
        deletecounter++
        tododiv.classList.add("tododiv");
        tododiv.appendChild(tododivdeletebutton); // Append the delete button to tododiv

        if (project.todos[i].title) {
            let titleElement = document.createElement("span");
            titleElement.innerText = project.todos[i].title;
            tododiv.appendChild(titleElement); // Append the title to tododiv
        } else {
            console.error("Title property is missing in todo object:", project.todos[i]);
        }

        projectmodaltododiv.appendChild(tododiv);
    }
    deleteTodoButtonFunc()
}

export { project };
