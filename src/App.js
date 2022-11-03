import './App.css';
import { Counter } from './components/Counter';
import List from './components/List';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App" id="container">
        <h2>Hello World</h2>
      <Counter/>
      <List/>
      <SearchBox/>

    </div>
  );
}

export default App;
