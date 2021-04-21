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
      const workingTd = document.createElement('td');
      const input = document.createElement('input');
      
      idTd.textContent = index;
      tr.appendChild(idTd);
      
      taskTd.textContent =  todo.task;
      tr.appendChild(taskTd);
      console.log(todo.task);
      
      input.type = 'button';
      input.value = todo.status;
      workingTd.appendChild(input);
      tr.appendChild(workingTd);
      
      createDeleteBtn(tr);
      
      tbody.appendChild(tr);
    });
  }
    
  function createDeleteBtn(tr) {
    const td = document.createElement('td');
    const trash = document.createElement('input');
    trash.type = 'button';
    trash.value = '削除';
    td.appendChild(trash);
    tr.appendChild(td);
  }
    
  addBtn.addEventListener('click', () => {
    let todo = {
      task: todoTask.value,
      status: '作業中',    
    }
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