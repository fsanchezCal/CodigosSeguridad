import {UseState} from './UseState.js';
import {ClassState} from './ClassState.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="Uses State" />
      <ClassState name='Class State' />
    </div>
  );
}

export default App;
