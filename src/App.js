import './App.css';
import {Counter} from './components/Counter';
import SearchBox from './components/SearchBox';
import List from './components/List';

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
