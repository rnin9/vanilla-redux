import { createStore } from 'redux'

const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const add = document.getElementById('add')
const ADD_TODOS = "ADD_TODOS"
const DELETE_TODOS = "DELETE_TODOS"

const addAction = (text) =>{
  return { type: ADD_TODOS, data: text, date: Date.now() }
}

const delAction = (id) =>{
  return { type: DELETE_TODOS, id: id}
}

const reducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODOS:
      //삽입하기
      return [ { text: action.data, date: action.date },...state]
    case DELETE_TODOS:
      return  state.filter(toDos=> toDos.date !== action.id)
    default:
      return []
  }
}


const store = createStore(reducer)

const addToDo = (text) => {
  store.dispatch(addAction(text))
}

const delToDo = (e) => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(delAction(id))
}

const paintTodos = () => {
  const toDos = store.getState()
  ul.innerHTML = ""
  toDos.forEach(todo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener("click", delToDo)

    btn.innerText = 'X';
    li.id = todo.date;
    li.innerText = todo.text;
    li.appendChild(btn)
    ul.appendChild(li)
  });

}

store.subscribe(paintTodos)

const handleSubmit = e => {
  e.preventDefault();
  const toDos = input.value;
  input.value = '';
  addToDo(toDos)
}


form.addEventListener('submit', handleSubmit)