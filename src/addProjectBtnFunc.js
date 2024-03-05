import differentprojects from ".";
import { addTodoBtnFunc } from "./AddTodoBtnFunc"; 
import { todoSubmitBtnFunc } from "./todoSubmitBtnFunc";
import { displaytodos } from "./displaytodos";
import { createdProject } from "./projectSubmitButtonFunc";
import { closeModal } from "./closeModal";
import { deleteProjectFunc } from "./deleteProjectFunc";
import { openModal } from "./openModal";



export function addProjectBtnFunc() {
    let projectbuttons = document.getElementsByClassName("projectbuttons");
    let functionsAdded = false; // Initialize the flag
    for (let i = 0; i < projectbuttons.length; i++) {
        if (!projectbuttons[i].hasAttribute("data-clicked")) {
            projectbuttons[i].setAttribute("data-clicked", "true");
            projectbuttons[i].setAttribute("data-project-button", createdProject.data)
            console.log("great succes")
            
            projectbuttons[i].addEventListener('click', function() {
                let projectName = this.innerHTML;   
                let showprojectmodal = document.getElementById("visibleprojectmodal");

                if (!showprojectmodal) {
                    showprojectmodal = document.createElement("div");
                    showprojectmodal.setAttribute("id", "visibleprojectmodal");

                    let projectmodalclosebtn = document.createElement("button");
                    projectmodalclosebtn.classList.add("projectmodalclosebtn");
                    projectmodalclosebtn.innerText = "X";
                    projectmodalclosebtn.addEventListener("click", closeModal);

                    let projectmodaladdtodobtn = document.createElement("button");
                    projectmodaladdtodobtn.setAttribute("id", "projectmodaladdtodobtn")
                    projectmodaladdtodobtn.innerText = "add todo"
                    
                    let projectmodalname = document.createElement("div");
                    projectmodalname.setAttribute("id", "projectmodalname");
                    projectmodalname.innerHTML = projectName; 

                    let projectmodaltodos = document.createElement("div")
                    projectmodaltodos.setAttribute("id", "projectmodaltodos")

                    let projectdeletebutton = document.createElement("button")
                    projectdeletebutton.setAttribute("id", "projectdeletebutton")
                    projectdeletebutton.innerHTML = "Delete project"

                    showprojectmodal.append(projectmodalclosebtn, projectmodaladdtodobtn, projectmodalname, projectmodaltodos, projectdeletebutton );
                    
                    let maincontent = document.getElementById("todos");
                    maincontent.appendChild(showprojectmodal);
                }
                
                // Check if functions have already been added
                if (!functionsAdded) {
                    addTodoBtnFunc();
                    todoSubmitBtnFunc();
                    functionsAdded = true; // Set the flag to true after adding functions
                }
                
                projectmodaltodos.innerHTML = ""
                openModal(projectName);
                deleteProjectFunc()
                
            });
        }
    }
}

