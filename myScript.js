//  Add event listener to the Add button
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') addTask();
    });

     // Add, complete, and remove task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');
      li.textContent = taskText;

      //  Toggle complete
      li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });

      //  Remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'X';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
      });

      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    }
