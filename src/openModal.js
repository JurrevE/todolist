import { displaytodos } from "./displaytodos";

export function openModal(projectName) {
    let showprojectmodal = document.getElementById("visibleprojectmodal");
    if (showprojectmodal) {
        showprojectmodal.style.display = "inline-flex";
        let projectmodalname = document.getElementById("projectmodalname");
        projectmodalname.innerHTML = projectName; 
        displaytodos()
    }
}