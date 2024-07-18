import { useState } from "react"
import './index.css';
import Header from './Header'
import Add from './Add'
import List from './List'

function App() {
  let testList = [
    {
        id: 1,
        quantity: 1,
        name: "frutta",
        inCart: false
    },
    {
        id: 2,
        quantity: 1,
        name: "Pasta barilla",
        inCart: false
    },
    {
        id: 3,
        quantity: 1,
        name: "Pera",
        inCart: false
    },
]

  const [list, setList] = useState(testList);

  function handleDeleteItem(id){
    setList((list) => list.filter((el) => el.id !== id))
  }

  function handleAddItem(item){
    setList([...list, item])
  }

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Add list={list} onAddItem={handleAddItem}></Add>
        <List list={list} onDeleteItem={handleDeleteItem}></List>
      </main>
    </div>
  );
}

export default App;
