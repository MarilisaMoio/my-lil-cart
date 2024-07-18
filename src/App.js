import { useState } from "react"
import './index.css';
import Header from './Header'
import Add from './Add'
import List from './List'
import Stats from './Stats'

function App() {
  const [list, setList] = useState([]);

  function handleDeleteItem(id){
    setList((list) => list.filter((el) => el.id !== id))
  }

  function handleAddItem(item){
    setList([...list, item])
  }

  function handleCheckedItem(id){
    setList((list) => list.map((el) => el.id === id ? { ...el, inCart: !el.inCart } : el))
  }

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Add list={list} onAddItem={handleAddItem}></Add>
        <List list={list} onDeleteItem={handleDeleteItem} onToggleItem={handleCheckedItem}></List>
        <Stats list={list}></Stats>
      </main>
    </div>
  );
}

export default App;
