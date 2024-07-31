import "./style.css"
import { useState } from "react";
import List from '../list';


const Search = () => {
    const [todoItem, setTodoItem] = useState('');
    const [list, setList] = useState([]);

    const handler = (e) => {
        e.preventDefault()
        setTodoItem(e.target.value)
    }

    const handleList = () => {
        setList([{id: list.length+1, name: todoItem, checked: false}, ...list])
        setTodoItem('');
    }

    const handleDelete = (id) => {
        const newList = list.filter( (item) => item.id !== id )
        setList(newList)
    }

    const handleComplete = (id) => {
        const newList = list.map( (item) => item.id === id ? {...item, checked: !item.checked} : item )
        setList(newList)
    }

    return (
        <>
            <div id="groupInput">
                <input onChange={ (e) => (handler(e)) } value={todoItem} type="text" id="searching" placeholder="Qual a próxima?"/>
                <button onClick={handleList}><span className="material-symbols-outlined">add</span></button>
            </div>
            <List list={list} handle={handleDelete} handleComplete={handleComplete}/>
        </>
    );
}

export default Search;