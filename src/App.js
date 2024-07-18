import './index.css';
import Header from './Header'
import Add from './Add'
import List from './List'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Add></Add>
        <List></List>
      </main>
    </div>
  );
}

export default App;
