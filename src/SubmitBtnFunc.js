import { createProject } from "./createProject"; // Import createProject function
import { addProjectBtnFunc } from "./projectBtnFunc";
import { displayProject } from "./displayProject";
import differentprojects from ".";
import { Project } from "./createProject";


let newProject; // Define newProject in the outer scope of the module

export function SubmitBtnFunc() {
    let submitButton = document.getElementById("submitbutton");
    let projectTitle = document.getElementById("projectTitle");
    
    submitButton.addEventListener("click", handleClick);

    function handleClick(event) {
        event.preventDefault();

        let titleNameInputValue = projectTitle.value;
        console.log(titleNameInputValue);

        projectdialog.close();
        projectTitle.value = "";
        
        newProject = new Project(titleNameInputValue); // Fix typo here
        differentprojects.project1 = newProject.title
        console.log(newProject);
        console.log(differentprojects);
     
        displayProject(titleNameInputValue);

        addProjectBtnFunc();
    }
}
export { newProject }

