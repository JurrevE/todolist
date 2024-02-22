import differentprojects from ".";

export function addProjectBtnFunc() {
    let projectbuttons = document.getElementsByClassName("projectbuttons");
    
    // Helper function to open the modal
    function openModal(projectName) {
        let showprojectmodal = document.getElementById("visibleprojectmodal");
        if (showprojectmodal) {
            showprojectmodal.style.display = "inline-flex";
            let projectmodalname = document.getElementById("projectmodalname");
            projectmodalname.innerHTML = projectName; // Update project name
        }
    }
    
    // Helper function to close the modal
    function closeModal() {
        let showprojectmodal = document.getElementById("visibleprojectmodal");
        showprojectmodal.style.display = "none";
        let projectmodalname = document.getElementById("projectmodalname");
        projectmodalname.innerHTML = "";
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
                break; // Assuming each project name is unique, no need to continue loop once removed
            }
        }
    
        closeModal();
        console.log(differentprojects);
    }
    
    
    // Loop through the created buttons, add event listeners
    for (let i = 0; i < projectbuttons.length; i++) {
        if (!projectbuttons[i].hasAttribute("data-clicked")) {
            projectbuttons[i].setAttribute("data-clicked", "true");
            
            projectbuttons[i].addEventListener('click', function() {
                let projectName = this.innerHTML; // Get project name from clicked button
                let showprojectmodal = document.getElementById("visibleprojectmodal");

                if (!showprojectmodal) {
                    showprojectmodal = document.createElement("div");
                    showprojectmodal.setAttribute("id", "visibleprojectmodal");

                    let projectmodalclosebtn = document.createElement("button");
                    projectmodalclosebtn.classList.add("projectmodalclosebtn");
                    projectmodalclosebtn.innerText = "X";
                    projectmodalclosebtn.addEventListener("click", closeModal);

                    let projectmodalname = document.createElement("div");
                    projectmodalname.setAttribute("id", "projectmodalname");
                    projectmodalname.innerHTML = projectName; // Set project name

                    let projectmodaltodos = document.createElement("div")
                    projectmodaltodos.setAttribute("id", "projectmodaltodos")

                    let deleteprojectbtn = document.createElement("button");
                    deleteprojectbtn.setAttribute("id", "deleteprojectbtn");
                    deleteprojectbtn.innerText = "Delete project";
                    deleteprojectbtn.addEventListener("click", deleteProject);


                    showprojectmodal.append(projectmodalclosebtn, projectmodalname, projectmodaltodos, deleteprojectbtn);
                    
                    let maincontent = document.getElementById("todos");
                    maincontent.appendChild(showprojectmodal);
                }
                openModal(projectName); // Open modal with correct project name
            });
        }
    }
}
