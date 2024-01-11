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
    return project
}