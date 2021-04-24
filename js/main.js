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
      
      idTd.textContent = index;
      tr.appendChild(idTd);
      
      taskTd.textContent =  todo.task;
      tr.appendChild(taskTd);
      
      createStatusBtn(tr, todo);
      
      createTrashBtn(tr, index);
      
      tbody.appendChild(tr);
    });
  }
  
  function createStatusBtn(tr, todo) {
    const input = document.createElement('input');
    input.type = 'button';
    input.value = todo.status;
    
    const statusTd = document.createElement('td');
    statusTd.appendChild(input);
    
    statusTd.addEventListener('click', () => {
      if(todo.status === '作業中') {
        todo.status = '完了';
        input.value = todo.status;
      } else if (todo.status === '完了') {
        todo.status = '作業中';
        input.value = todo.status;
      }
    });
    tr.appendChild(statusTd);
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