import { newProject } from "./SubmitBtnFunc";

export function displaytodos() {
    let projectmodaltododiv = document.getElementById("projectmodaltodos");
    projectmodaltododiv.innerHTML = ""; // Clear existing content before displaying todos

    // Iterate over todos in newProject.todos array
    for (let i = 0; i < newProject.todos.length; i++) {
        let tododiv = document.createElement("div");
        tododiv.classList.add("tododiv");
        tododiv.innerHTML = newProject.todos[i].title; // Access the title property of each todo
        projectmodaltododiv.appendChild(tododiv);
    }

    console.log("Ik log nu de todos!");
}
