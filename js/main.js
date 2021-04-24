{
  const addBtn = document.getElementById('add');
  const todoTask = document.getElementById('txt');
  const tbody = document.querySelector('tbody');
  
  const todos = [];
  
  function displayTodos() {
    todos.forEach((todo, index) =>{
      const tr = document.createElement('tr');
      const idTd = document.createElement('td');
      const taskTd = document.createElement('td');
      const statusTd = document.createElement('td');
      const input = document.createElement('input');
      
      idTd.textContent = index;
      tr.appendChild(idTd);
      
      taskTd.textContent =  todo.task;
      tr.appendChild(taskTd);
      
      input.type = 'button';
      input.value = todo.status;
      statusTd.appendChild(input);
      tr.appendChild(statusTd);
      
      createTrashBtn(tr, index);
      
      tbody.appendChild(tr);
    });
  }
    
  function createTrashBtn(tr, index) {
    const trashTd = document.createElement('td');
    const trash = document.createElement('input');
    trash.type = 'button';
    trash.value = '削除';
    trashTd.appendChild(trash);
    
    removeTodo(trashTd, index);
    
    tr.appendChild(trashTd);
  }

  function removeTodo(trashTd, index) {
    trashTd.addEventListener('click', () => {
      console.log(index);
      todos.splice(index, 1);
      
      while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
      
      displayTodos();
    });
  }
    
  addBtn.addEventListener('click', () => {
    const todo = {
      task: todoTask.value,
      status: '作業中',    
    };

    if (!todoTask.value) {
      alert('入力してください');
      return;
    }
    
    todos.push(todo);
    
    while(tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    
    displayTodos();
    
    todoTask.value = "";
  });
}