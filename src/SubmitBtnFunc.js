import { displayProject } from "./displayProject";
import { createProject } from "./createProject";
import { addProjectBtnFunc } from "./projectBtnFunc";
import differentprojects from ".";

export function SubmitBtnFunc() {
    let submitButton = document.getElementById("submitbutton");
    let projectTitle = document.getElementById("projectTitle");
    let createProjectResult = createProject();
    let newProject;

    submitButton.addEventListener("click", handleClick);

    function handleClick(event) {
        event.preventDefault();

        let titleNameInputValue = projectTitle.value;
        console.log(titleNameInputValue);

        projectdialog.close();
        projectTitle.value = "";

        newProject = new createProjectResult.project(titleNameInputValue);
        differentprojects.push(newProject)
        console.log(newProject);
        console.log(differentprojects)

        displayProject(titleNameInputValue);

        addProjectBtnFunc()

    }
}
