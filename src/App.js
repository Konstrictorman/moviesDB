import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';

import { Layout } from './components/Layout/Layout';
import { Main } from './components/Main';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App" id="container">
      <ErrorBoundary>
        <Layout className="">
         <Menu className="border"/>
         <div className='layout_hr'/>
         <Main className="border"/>
         
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
