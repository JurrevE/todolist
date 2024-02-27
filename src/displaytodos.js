import { newProject } from "./SubmitBtnFunc";

export function displaytodos() {
    let projectmodaltododiv = document.getElementById("projectmodaltodos");
    projectmodaltododiv.innerHTML = ""; // Clearing content before adding new todos

    for (let i = 0; i < newProject.todos.length; i++) {
        let tododiv = document.createElement("div");
        tododiv.classList.add("tododiv");
        tododiv.innerHTML = newProject.todos[i].title; // Accessing todo title from the newProject.todos array
        projectmodaltododiv.append(tododiv);
    }
    console.log("Ik log nu de todos!");
}
