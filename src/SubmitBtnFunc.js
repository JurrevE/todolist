import { createProject } from "./createProject"; 
import { addProjectBtnFunc } from "./projectBtnFunc";
import { displayProject } from "./displayProject";
import differentprojects from ".";
import { Project } from "./createProject";

let newProject; 

export function SubmitBtnFunc() {
    let submitButton = document.getElementById("submitbutton");
    let projectTitle = document.getElementById("projectTitle");
    
    submitButton.addEventListener("click", handleClick);

    function handleClick(event) {
        event.preventDefault();

        let titleNameInputValue = projectTitle.value;

        projectdialog.close();
        projectTitle.value = "";
        
        newProject = new Project(titleNameInputValue);
        differentprojects[newProject.title] = newProject; // Use project title as the key

        displayProject(titleNameInputValue);

        addProjectBtnFunc();
        console.log(differentprojects);
    }
}
export { newProject }