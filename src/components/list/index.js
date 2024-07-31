import "./style.css"

const List = ({ list, handle, handleComplete }) => {
    
    return (
        <div id="list">
            <ul>
                {
                    list.map( (item) => (
                        <li key={item.id}>
                            <span className={[item.checked ? 'complete' : '']} onClick={() => handleComplete (item.id)}>{item.name}</span> 
                            <span onClick={() => handle(item.id)} className="material-symbols-outlined">delete</span> 
                        </li>
                    ) )
                }
            </ul>
        </div>
    )
}

export default List;