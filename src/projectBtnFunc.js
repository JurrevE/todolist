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
                    showprojectmodal.append(projectmodalclosebtn, projectmodalname);
                    let maincontent = document.getElementById("todos");
                    maincontent.appendChild(showprojectmodal);
                }
                openModal(projectName); // Open modal with correct project name
            });
        }
    }
}
