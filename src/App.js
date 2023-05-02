import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';


function App() {
  const [value, setValue] = useState('Text input')

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
    </div>
  );
}

export default App;
