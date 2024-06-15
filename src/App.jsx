import React from 'react'
import Form from './Components/Form'
import { useContext, useState } from 'react';
import Context from "./Components/Context"
import List from './Components/List';
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const [editList, setEditList] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <Context.Provider value={{ done, setDone, inputValue, setInputValue, lists, setLists, editList, setEditList, editMode, setEditMode }}>
      <Form />
      <List />
    </Context.Provider>

  )
}

export default App