export function addProjectBtnFunc() {
    let projectbuttons = document.getElementsByClassName("projectbuttons");
    //Helper function to open the modal
    function openModal() {
        let showprojectmodal = document.getElementById("visibleprojectmodal");
        if (showprojectmodal) {
            showprojectmodal.style.display = "block";
        }
    }
    //helperfunction to close the modal
    function closeModal() {
        let showprojectmodal = document.getElementById("visibleprojectmodal");
        showprojectmodal.style.display = "none"
    }
    //func that loops through the created buttons, adds a single eventlistener,
    //that when clicked will open the modal and when the red btn is clicked closes.
    for (let i = 0; i < projectbuttons.length; i++) {
        if (!projectbuttons[i].hasAttribute("data-clicked")) {
            projectbuttons[i].setAttribute("data-clicked", "true");
            
            projectbuttons[i].addEventListener('click', function() {
                let showprojectmodal = document.getElementById("visibleprojectmodal");
                if (!showprojectmodal) {
                    showprojectmodal = document.createElement("div");
                    showprojectmodal.setAttribute("id", "visibleprojectmodal");
                   let projectmodalclosebtn = document.createElement("button")
                    projectmodalclosebtn.classList.add("projectmodalclosebtn")
                    projectmodalclosebtn.innerText = "X"
                    projectmodalclosebtn.addEventListener("click", closeModal)
                    showprojectmodal.append(projectmodalclosebtn)
                    let maincontent = document.getElementById("todos");
                    maincontent.appendChild(showprojectmodal);
                }
                openModal();
            });
        }
    }
}
