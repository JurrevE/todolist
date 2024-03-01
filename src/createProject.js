export function createProject() {
    let projectcounter = 0
    class project {
        constructor (title) {
            this.title = title
            this.todos = []
            this.id = "proj" + projectcounter
            projectcounter++
        }
        addTodo(todo) {
            this.todos.push(todo);
        }
        
    }
    
    return {project}
}

 