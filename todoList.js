// let todoRootE1 = document.getElementById('todoRoot');
// let userinputE1 = document.getElementById('user-input');

// let todoList = [
//     {
//         title: 'HTML',
//         id: 1
//     },

//     {
//         title: 'CSS',
//         id: 2
//     },

//     {
//         title: 'Bootstrap',
//         id: 3
//     }
// ]

// function createAppendToDo(todo) {
//     // Use the todo's unique ID to create a specific ID for the checkbox
//     let checkboxID = 'checkbox' + todo.id;
//     console.log(checkboxID);

//     // Create the list item for the todo and add a CSS class for styling
//     let todoListE1 = document.createElement('li');
//     todoListE1.classList.add('todo-list-item');
//     todoRootE1.appendChild(todoListE1); // Append the new list item to the todo list root

//     // Create a checkbox input, assign the unique ID, and append it to the list item
//     let checkBoxE1 = document.createElement('input');
//     checkBoxE1.type = 'checkbox';
//     checkBoxE1.id = checkboxID; // Assigning the dynamic ID correctly
//     todoListE1.appendChild(checkBoxE1);

//     // Create a label, set it to reference the checkbox, and append it to the list item
//     let labelE1 = document.createElement('label');
//     labelE1.classList.add('label-cont');
//     labelE1.htmlFor = checkboxID; // Ensuring the 'for' attribute matches the checkbox's ID
//     todoListE1.appendChild(labelE1);

//     // Create a title element, set its text, and append it to the label
//     let titleE1 = document.createElement('h5');
//     titleE1.textContent = todo.title; // Set the todo title
//     labelE1.appendChild(titleE1);

//     // Create a delete button, add a CSS class, and append it to the label
//     let deleteBtn = document.createElement('button');
//     deleteBtn.classList.add('delete-btn');
//     labelE1.appendChild(deleteBtn);

//      // Add event listener for the delete button
//     deleteBtn.addEventListener('click', function() {
//         // Remove the todoListE1 from the parent
//         todoRootE1.removeChild(todoListE1);
//         // Additional logic can be added here, such as updating a database or handling state changes
//     }); 

//     // Create an icon for the delete button and append it
//     let deleteElement = document.createElement('i');
//     deleteElement.classList.add('fa-solid', 'fa-trash'); // Using Font Awesome classes
//     deleteBtn.appendChild(deleteElement);

//     // Finally append the entire list item to the todoRootE1
//     todoRootE1.appendChild(todoListE1);
// }

// for(each of todoList){
//         createAppendToDo(each)
// }

// function onAddNewToDo(){
//     const newToDo = {
//         title: userinputE1.value,
//         id: todoList.length + 1,
//         ischecked : false
//     }

//     createAppendToDo(newToDo);
//     todoList.push(newToDo);
//     console.log(todoList);
//     userinputE1.value = " ";
// }

// function onSave(){
//     const todoListJSON = JSON.stringify(todoList);
//     localStorage.setItem('todoList', todoListJSON);
// }

let todoRootE1 = document.getElementById('todoRoot');
let userinputE1 = document.getElementById('user-input');

let todoList = [
    { 
        title: 'HTML', id: 1 
    },
    { 
        title: 'CSS', id: 2 
    },
    {
        title: 'Bootstrap', id: 3
    }
];

function createAppendToDo({ title, id }) {
    let todoListE1 = document.createElement('li');
    todoListE1.classList.add('todo-list-item');

    // Create checkbox, label, and title in one go
    todoListE1.innerHTML = `
        <input type="checkbox" id="checkbox${id}">
        <label for="checkbox${id}" class="label-cont">
            <h5>${title}</h5>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </label>
    `;
    todoRootE1.appendChild(todoListE1);

    // Add event listener to the delete button
    todoListE1.querySelector('.delete-btn').addEventListener('click', () => {
        todoRootE1.removeChild(todoListE1);
    });
}

todoList.forEach(createAppendToDo);

function onAddNewToDo() {
    const newToDo = { 
        title: userinputE1.value, 
        id: todoList.length + 1 
    };
    createAppendToDo(newToDo);
    todoList.push(newToDo);
    userinputE1.value = '';
}

function onSave() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
