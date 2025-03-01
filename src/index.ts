import { v4 as uuidV4 } from 'uuid';

// Add type declaration for closeModal
declare global {
    interface Window {
        closeModal?: () => void;
    }
}

// Prevent external modal errors
(() => {
    // Override any existing closeModal function
    window.closeModal = () => {};
    
    // Create a dummy element to prevent errors
    const dummyModal = document.createElement('div');
    dummyModal.id = 'geniusmodal';
    document.body.appendChild(dummyModal);
    
    // Override remove method for this specific element
    dummyModal.remove = () => {};
})();

type Task = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
}

// console.log(uuidV4());

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector<HTMLUListElement>("#list");
    const form = document.querySelector<HTMLFormElement>("#new-task-form");
    const input = document.querySelector<HTMLInputElement>("#new-task-title");

    const tasks: Task[] = loadTasks();
    tasks.forEach(addListItem);

    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        if (input?.value == "" || input?.value == null) return;

        const newTask: Task = {
            id: uuidV4(),
            title: input.value,
            completed: false,
            createdAt: new Date()
        }
        tasks.push(newTask);

        addListItem(newTask);
        input.value = "";
    });

    function addListItem(task: Task) {
        if (!list) return;
        
        const item = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        const textSpan = document.createElement("span");
        const removeBtn = document.createElement("button");
        
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
        });
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        
        textSpan.textContent = task.title;
        
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.addEventListener("click", () => {
            const index = tasks.findIndex(t => t.id === task.id);
            if (index !== -1) {
                tasks.splice(index, 1);
                saveTasks();
                item.remove();
            }
        });
        
        label.append(checkbox, textSpan);
        item.append(label, removeBtn);
        list.append(item);
    }

    function saveTasks() {
        try {
            localStorage.setItem("TASKS", JSON.stringify(tasks));
        } catch (error) {
            console.error("Failed to save tasks:", error);
        }
    }

    function loadTasks(): Task[] {
        try {
            const taskJSON = localStorage.getItem("TASKS");
            if (taskJSON == null) return [];
            
            const parsedTasks = JSON.parse(taskJSON);
            if (!Array.isArray(parsedTasks)) return [];
            
            return parsedTasks.map((task: any) => ({
                id: task.id || uuidV4(),
                title: task.title || "",
                completed: Boolean(task.completed),
                createdAt: new Date(task.createdAt || Date.now())
            }));
        } catch (error) {
            console.error("Failed to load tasks:", error);
            return [];
        }
    }
});