import "./styles.css"
import { todo } from "./createTodo";
import { createProject } from "./createProject";
import { setPriorityToHigh, setPriorityToMedium, setPriorityToLow } from "./prioritySwitcher";
import { toggleCompletionStatus } from "./completionSwitcher";
import { displayProject } from "./displayProject";


let { project, defaultProject } = createProject();
let differentprojects = []
differentprojects.push(defaultProject)
console.log(differentprojects)

let project2 = new project("Gym")
console.log(project2)


let todo1 = new todo("Homework", "right now", "before I die", "high", "heel moeilijk");
let todo2 = new todo("Monkey", "rn", "before I die", "low", "niet zo moeilijk");
let todo3 = new todo("Get money", "always", "2024", "high", "best lastig", false)

defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
console.log(defaultProject);

setPriorityToLow(todo1)
console.log(todo1)

console.log(todo3)
setPriorityToMedium(todo3)
toggleCompletionStatus(todo3)
displayProject()






