{
  const addBtn = document.getElementById('add');
  const todoTask = document.getElementById('txt');
  const tbody = document.querySelector('tbody');
  const allRadio = document.getElementById('all');
  const workingRadio = document.getElementById('work');
  const doneRadio = document.getElementById('done');
  
  const todos = [];
  
  function createTodos(todo, index) {
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
  }
  
  function displayTodos() {
    if(allRadio.checked) {
      todos.forEach((todo, index) =>{
        createTodos(todo, index);
      });
    }
    else if(workingRadio.checked) {
      todos.forEach((todo, index) =>{
        if (todo.status === '作業中') {
          createTodos(todo, index);
        } 
      });
    }
    else if(doneRadio.checked) {
      todos.forEach((todo, index) =>{
        if (todo.status === "完了") {
          createTodos(todo, index);
        }
      });
    }
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
        if(workingRadio.checked) {
          tr.style.display = 'none';
        }
      } else if (todo.status === '完了') {
        todo.status = '作業中';
        input.value = todo.status;
        if(doneRadio.checked) {
          tr.style.display = 'none';
        }
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
      todos.splice(index, 1);
      
      renewalTodos();
    });
  }

  function renewalTodos() {
    while(tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    displayTodos();
  }
  
  const checkStatus = document.getElementsByName('status');
  for(let element of checkStatus) {
    element.addEventListener('change', () => {
      for(let allCheck of checkStatus) {
        allCheck.checked = false;
      }
      element.checked = true;
      
      renewalTodos();
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
  
    renewalTodos();
    
    todoTask.value = "";
  });
}