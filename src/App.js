import logo from './logo.svg';
import './App.css';
import menus from './components/data';
import TreeView from './components';

function App() {
  return (
    <div className="App">
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
