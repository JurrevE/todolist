import differentprojects from ".";
import { deleteTodo } from "./deleteTodo";
import { addexpandbtnfunc } from "./expandtodobtnfunc";

export function displaytodos() {
    let projectmodaltododiv = document.getElementById("projectmodaltodos");
    projectmodaltododiv.innerHTML = ""; // Clear existing content before displaying todos

    let projectName = document.getElementById("projectmodalname").innerText;
    let project = differentprojects[projectName];
    let expandbuttoncounter = 0

    // Log project.todos for debugging
    console.log("Project Todos:", project.todos);

    for (let i = 0; i < project.todos.length; i++) {
        let tododiv = document.createElement("div");
        let tododivbutton = document.createElement("button");
        tododivbutton.innerHTML = "Expand todo";
        tododivbutton.classList.add("expand-todo-btn")
        tododivbutton.setAttribute("data-expand-button", expandbuttoncounter); // Add a class for styling or event handling
        expandbuttoncounter++
        tododiv.classList.add("tododiv");
        tododiv.appendChild(tododivbutton); // Append the delete button to tododiv

        // Check if the title property exists
        if (project.todos[i].title) {
            let titleElement = document.createElement("span");
            titleElement.innerText = project.todos[i].title;
            tododiv.appendChild(titleElement); // Append the title to tododiv
        } else {
            // Log error if title property is missing
            console.error("Title property is missing in todo object:", project.todos[i]);
        }

        projectmodaltododiv.appendChild(tododiv);
        deleteTodo()
        addexpandbtnfunc()
    }
}
