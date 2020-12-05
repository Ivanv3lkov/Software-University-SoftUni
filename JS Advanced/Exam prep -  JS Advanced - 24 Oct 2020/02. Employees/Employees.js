function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0
        }

        addTask(id, taskName, priority) {
            const newTask = {
                id,
                taskName,
                priority
            }

            if (priority === 'high') {
                this.tasks.unshift(newTask);
            } else {
                this.tasks.push(newTask);
            }

            return `Task id ${id}, with ${priority} priority, has been added.`
        }

        doTask() {
            if (this.tasks.length === 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            const nameOfTask = this.tasks[0].taskName;
            this.tasks.shift();
            return `${nameOfTask}`
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {
            let output = ['Tasks, that need to be completed:'];

            for (let task of this.tasks) {
                output.push(`${task.id}: ${task.taskName} - ${task.priority}`);
            }

            return output.join('\n');
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + Number(bonus);
            this.tasks = [];
            this.experience = Number(experience);
        }

        learn(years) {
            this.experience += Number(years);
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + Number(bonus);
            this.tasks = [];
            this.experience = Number(experience) + 5;
        }

        changeTaskPriority(taskId) {
            let task = this.tasks.find(task => task.id === taskId);
            let indexOfTask = this.tasks.indexOf(task);

            if (task.priority === 'high') {
                task.priority = 'low';
                this.tasks.splice(indexOfTask, 1);
                this.task.push(task);
            } else if (task.priority === 'low') {
                task.priority = 'high';
                this.tasks.splice(indexOfTask, 1);
                this.tasks.unshift(task);
            }

            return task;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);

