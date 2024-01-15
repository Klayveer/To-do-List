function addTask () {
    var taskInput = document.getElementById('newTask');
    var taskList = document.getElementById('taskList');

    if(taskInput.value.trim() != '') {
        var newTask = document.createElement('li')
        newTask.className = "group flex items-center justify-between p-2 border-b w-[500px]"
        newTask.innerHTML = "<span>" + taskInput.value.trim() + "</span>"
         + "<button class='text-red-500 hidden group-hover:block' onclick='removeTask(this)'>excluir</button>"

        taskList.appendChild(newTask)
        taskInput.value = ''

        Toastify({
            text: "Tarefa concluída com sucesso!",
            style: {
                background: 'green'
            }
        }).showToast()

    } else {
        Toastify({
            text: "Erro: Escreva sua tarefa!",
            style: {
                background: 'red'
            }
        }).showToast()
    }
}
function removeTask(button){
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem)

    Toastify({
        text: "Tarefa excluída com sucesso!",
        style: {
            background: 'black'
        }
    }).showToast()
}