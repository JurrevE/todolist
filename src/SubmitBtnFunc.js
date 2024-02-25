import { addProjectBtnFunc } from "./projectBtnFunc";
import differentprojects from ".";
import { createProject } from "./createProject";
import { displayProject } from "./displayProject";

let newProject; // Define newProject in the outer scope of the module

export function SubmitBtnFunc() {
    let submitButton = document.getElementById("submitbutton");
    let projectTitle = document.getElementById("projectTitle");
    let createProjectResult = createProject();

    submitButton.addEventListener("click", handleClick);

    function handleClick(event) {
        event.preventDefault();

        let titleNameInputValue = projectTitle.value;
        console.log(titleNameInputValue);

        projectdialog.close();
        projectTitle.value = "";

        newProject = new createProjectResult.project(titleNameInputValue);
        differentprojects.push(newProject);
        console.log(newProject);
        console.log(differentprojects);
     
        displayProject(titleNameInputValue);

        addProjectBtnFunc();

    }
}

export { newProject }; 
