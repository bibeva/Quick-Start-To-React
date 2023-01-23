import { useState } from "react"

import './App.css';

import CreateAndUseComponent from './components/createAndUseComponent';
import ConditionalRendering from './components/conditionalRendering';
import RenderingLists from './components/renderingLists';
import RespondToEvent from './components/respondToEvent';
import UseState from './components/useState';

function App() {
  const [count, setCount] = useState(10);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <div className="App">
      <CreateAndUseComponent />
      <ConditionalRendering />
      <RenderingLists />
      <RespondToEvent />
      <UseState count={count} onClick={handleClick} />
      <UseState count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
