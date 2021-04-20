{
  const addBtn = document.getElementById('add');
  const todoTask = document.getElementById('txt');
  
  let num = 0;

  function addTask() {
    const tr = document.createElement('tr');
    
    id(tr);
    comment(tr);
    workingBtn(tr);
    trashBtn(tr);
    
    document.querySelector('tbody').appendChild(tr);
  }
  
  function id(tr) {
    const td = document.createElement('td');
    td.textContent = num;
    tr.appendChild(td);
  } 

  function comment(tr) {
    const td = document.createElement('td');
    td.textContent = todoTask.value;
    tr.appendChild(td);
  }  

  function workingBtn(tr) {
    const td = document.createElement('td');
    const working = document.createElement('input');
    working.type = 'button';
    working.value = '作業中';
    td.appendChild(working);
    tr.appendChild(td);
  }
  
  function trashBtn(tr) {
    const td = document.createElement('td');
    const trash = document.createElement('input');
    trash.type = 'button';
    trash.value = '削除';
    td.appendChild(trash);
    tr.appendChild(td);
  }

  addBtn.addEventListener('click', () => {
    if (!todoTask.value) {
      alert('入力してください');
      return;
    }
    
    addTask();
    
    todoTask.value = "";
    num++;
  });
}