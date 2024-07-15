// const BASE_URL = 'https://new-todo-json-server-vercel.vercel.app/todos/';
const BASE_URL = 'http://localhost:3000/todos';

const createForm = document.getElementById('create-form'); // grab our form for creating new todo
const createTitleInput = document.getElementById('create-title'); // input field for entering todo title
const updateForm = document.getElementById('update-form'); // grab our form for updating todo
const updateTitleInput = document.getElementById('update-title'); // input field for updating todo title
const todosSection = document.getElementById('todos-section'); // section for displaying all todos
const singleTodoSection = document.getElementById('single-todo-section'); // section for displaying single todo item


document.addEventListener('DOMContentLoaded', () => {
    async function fetchAndDisplayTodos() {
        const respnse = await fetch(BASE_URL, {
            method: 'GET',
            headers: {},
            
        })

        if(response.ok){
            //create a list of todos from uor API
            const result = response.json()
            console.log("data", result)
            let ul = document.createElement('ul')

            for(let i = 0; i < result.length; i++){
                const li = document.createElement('li')
                li.innerText = result[i].title
            }

        }
    }

    fetchAndDisplayTodos()
})