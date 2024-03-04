export function closeModal() {
    let showprojectmodal = document.getElementById("visibleprojectmodal");
    showprojectmodal.style.display = "none";
    let projectmodalname = document.getElementById("projectmodalname");
    projectmodalname.innerHTML = "";
    let projectmodals = document.getElementById("projectmodaltodos")
    projectmodals.innerHTML = ""
    
}