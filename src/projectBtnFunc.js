import differentprojects from ".";
import { addTodoBtnFunc } from "./AddTodoBtnFunc"; 
import { todoSubmitBtnFunc } from "./todoSubmitBtnFunc";
import { displaytodos } from "./displaytodos";
import { newProject } from "./SubmitBtnFunc";

let projectName;
export function addProjectBtnFunc() {
    let projectbuttons = document.getElementsByClassName("projectbuttons");
    let functionsAdded = false; // Initialize the flag
    
    function openModal(projectName) {
        let showprojectmodal = document.getElementById("visibleprojectmodal");
        if (showprojectmodal) {
            showprojectmodal.style.display = "inline-flex";
            let projectmodalname = document.getElementById("projectmodalname");
            projectmodalname.innerHTML = projectName; 
            displaytodos()
        }
    }
    
    function closeModal() {
        let showprojectmodal = document.getElementById("visibleprojectmodal");
        showprojectmodal.style.display = "none";
        let projectmodalname = document.getElementById("projectmodalname");
        projectmodalname.innerHTML = "";
        let projectmodals = document.getElementById("projectmodaltodos")
        projectmodals.innerHTML = ""
        
    }

    function deleteProject() {
        let projectName = document.getElementById("projectmodalname").innerText;
    
        let projectindex = differentprojects.indexOf(projectName);
        if (projectindex !== -1) {
            differentprojects.splice(projectindex, 1);
        }
    
        let projectbuttons = document.getElementsByClassName("projectbuttons");
        for (let i = 0; i < projectbuttons.length; i++) {
            if (projectbuttons[i].innerText === projectName) {
                projectbuttons[i].parentNode.removeChild(projectbuttons[i]);
                break; 
            }
        }
    
        closeModal();
        console.log(differentprojects);
    }
    
    for (let i = 0; i < projectbuttons.length; i++) {
        if (!projectbuttons[i].hasAttribute("data-clicked")) {
            projectbuttons[i].setAttribute("data-clicked", "true");
            projectbuttons[i].setAttribute("data-project-button", newProject.data)
            
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

                    let deleteprojectbtn = document.createElement("button");
                    deleteprojectbtn.setAttribute("id", "deleteprojectbtn");
                    deleteprojectbtn.innerText = "Delete project";
                    deleteprojectbtn.addEventListener("click", deleteProject);

                    showprojectmodal.append(projectmodalclosebtn, projectmodaladdtodobtn, projectmodalname, projectmodaltodos, deleteprojectbtn);
                    
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
                
            });
        }
    }
}
export { projectName } 
