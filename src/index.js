import { createTodo } from "./createTodo"
import { createProject } from "./createProject"

let project = createProject()
let todo = createTodo()

const defaultProject = new project("To-Do")
const gymproject = new project("Gym")





let todo1 = new todo("Homework", "right now", "before I die", "high", "heel moeilijk")
let todo2 = new todo("Gym", "Tonight", "11-01-2024", "high", "heerlijk")

gymproject.addTodo(todo2)
console.log(gymproject)
defaultProject.addTodo(todo1)
console.log(defaultProject)




