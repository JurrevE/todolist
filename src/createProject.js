export function createProject() {
    class project {
        constructor (title) {
            this.title = title
            this.todos = []
        }
        addTodo(todo) {
            this.todos.push(todo);
        }
    }
    const defaultProject = new project("To-Do")
    return {project, defaultProject}
}

