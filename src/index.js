import "./styles.css"
import { todo } from "./createTodo";
import { createProject } from "./createProject";
import { setPriorityToHigh, setPriorityToMedium, setPriorityToLow } from "./prioritySwitcher";
import { toggleCompletionStatus } from "./completionSwitcher";
import { displayProject } from "./displayProject";
import { addBtnFunc } from "./addBtnFunc";
import { SubmitBtnFunc } from "./SubmitBtnFunc.js";
import { addProjectBtnFunc } from "./projectBtnFunc.js";
import { displaytodos } from "./displaytodos.js";


addBtnFunc()
SubmitBtnFunc()

let { project } = createProject();
let differentprojects = []
console.log(differentprojects, "kanker")

let todo1 = new todo("Homework", "right now", "before I die", "high", "heel moeilijk");
let todo2 = new todo("Monkey", "rn", "before I die", "low", "niet zo moeilijk");
let todo3 = new todo("Get money", "always", "2024", "high", "best lastig", false)


setPriorityToLow(todo1)
console.log(todo1)

console.log(todo3)
setPriorityToMedium(todo3)
toggleCompletionStatus(todo3)











