import React from 'react'
import { useContext } from 'react'
import Context from './Context'

const List = () => {
    const { inputValue, setInputValue, lists, setLists, editList, setEditList, editMode, setEditMode, done, setDone } = useContext(Context);
    function editItem(list) {
        setEditMode(true);
        setEditList(list.id)
        setInputValue(list.item)
    }
    function deleteItem(id) {
        setLists(lists.filter((list) => list.id !== id));
    }
    function doneHandler(e) {
        if (e.target.className === "list-group-item mb-1 text-decoration-line-through") {
            e.target.className = "list-group-item mb-1"
        } else {
            e.target.className = "list-group-item mb-1 text-decoration-line-through"
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <ul class="list-group">
                        {lists.map((list) => {
                            return <li onClick={(e) => doneHandler(e)} key={list.id} className="list-group-item mb-1 " >{list.item}
                                <span className='float-end d-flex gap-2'>
                                    <button onClick={() => editItem(list)} className='btn btn-info btn-sm'>Edit</button>
                                    <button onClick={() => deleteItem(list.id)} className='btn btn-sm btn-warning'>Delete</button>
                                </span>
                            </li>
                        })}

                    </ul>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default List