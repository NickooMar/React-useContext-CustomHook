import "./App.css";

import { useExampleContext } from "./Context/ExampleContextProvider";


function App() {
  const { useActive } = useExampleContext();

  const [active, { handleToggle, handleTrue, handleFalse }] = useActive(false);

  return (
    <div className="App">
      <button onClick={() => handleToggle()}>Toggle</button>
      <button onClick={() => handleTrue()}>True</button>
      <button onClick={() => handleFalse()}>False</button>
      <h3>{active.toString()}</h3>

    </div>
  );
}

export default App;
