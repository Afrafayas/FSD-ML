
 const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let currentFilter = "all";

    const saveTask = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const renderTasks = () => {
      taskList.innerHTML = "";

      const filteredTasks = tasks.filter((task) => {
        if (currentFilter === "all") return true;
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
      });

      filteredTasks.forEach((filteredTask) => {
        const li = document.createElement("li");
        li.className =
          "list-group-item d-flex justify-content-between align-items-center";
        if (filteredTask.completed) li.classList.add("completed");

        li.innerHTML = `
        <span class="task-text">${filteredTask.text}</span>
        ${
        filteredTask.completed
        ? `<button class="btn btn-success btn-sm complete-btn" title="Mark as Active">
        <i class="bi bi-check-lg"></i>
        </button>`
        : `<button class="btn btn-danger btn-sm delete-btn" title="Mark as Completed">
        <i class="bi bi-x-lg"></i>
        </button>`
        }
        `;

        const index = tasks.indexOf(filteredTask);

        // Toggle completion by clicking on task text
        li.querySelector(".task-text").addEventListener("click", () => {
          tasks[index].completed = !tasks[index].completed;
          saveTask();
          renderTasks();
        });

        if (filteredTask.completed) {
          // If completed, green tick toggles back to active (incomplete)
          li.querySelector(".complete-btn").addEventListener("click", () => {
            tasks[index].completed = false;
            saveTask();
            renderTasks();
          });
        } else {
          // If active, red X marks completed
          li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks[index].completed = true;
            saveTask();
            renderTasks();
          });
        }

        taskList.appendChild(li);
      });
    };

    const addTask = () => {
      const text = taskInput.value.trim();
      if (!text) return;

      tasks.push({ text: text, completed: false });
      saveTask();
      renderTasks();
      taskInput.value = "";
      taskInput.focus();
    };

    document.getElementById("taskForm").addEventListener("submit", (e) => {
      e.preventDefault();
      addTask();
    });

    document.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        currentFilter = button.getAttribute("data-filter");
        renderTasks();
      });
    });

    renderTasks();
  