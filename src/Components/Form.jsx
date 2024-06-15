import React from 'react'
import { useContext } from 'react'
import Context from './Context';
const Form = () => {
    const { inputValue, setInputValue, lists, setLists, editMode, setEditMode, editList } = useContext(Context);
    function submitHandler(e) {
        e.preventDefault();
        setLists([...lists, {
            id: Math.random().toString(), item: inputValue
        }])
        setInputValue("");
    }
    function editSubmitHandler(e) {
        e.preventDefault();
        setLists(lists.map((list) => {
            if (list.id == editList) {
                return { id: editList, item: inputValue }
            }
            return list;
        }))
        setEditMode(false);
        setInputValue("");
    }
    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 p-0 ">
                    {editMode ? <form action="" className='' onSubmit={editSubmitHandler} >
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="form-control mb-4" />
                        <button className='btn btn-sm btn-primary float-end'>Update</button>
                    </form>
                        :
                        <form action="" className='' onSubmit={submitHandler} >
                            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="form-control mb-4" />
                            <button className='btn btn-sm btn-primary float-end'>Add+</button>
                        </form>}

                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Form