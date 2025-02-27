// Save task to localStorage
function saveTask(hour) {
    const taskInput = document.getElementById('task-' + hour);
    const task = taskInput.value;
  
    if (task) {
      localStorage.setItem('task-' + hour, task);
      alert('Task saved!');
    } else {
      alert('Please enter a task!');
    }
  }
  
  // Load saved tasks from localStorage
  function loadTasks() {
    for (let hour = 9; hour <= 12; hour++) {
      const task = localStorage.getItem('task-' + hour);
      if (task) {
        document.getElementById('task-' + hour).value = task;
      }
    }
  }
  
  // Load tasks when the page loads
  window.onload = loadTasks;
  
