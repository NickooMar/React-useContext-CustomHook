// import "./App.css";

// import { useExampleContext } from "./Context/ExampleContextProvider";

// function App() {
//   const { useActive } = useExampleContext();

//   const [active, { handleToggle, handleTrue, handleFalse }] = useActive(false);

//   return (
//     <div className="App">
//       <button onClick={() => handleToggle()}>Toggle</button>
//       <button onClick={() => handleTrue()}>True</button>
//       <button onClick={() => handleFalse()}>False</button>
//       <h3>{active.toString()}</h3>

//     </div>
//   );
// }

// export default App;

import "./App.css";
import Task from "./Components/Task";

import { useContextExample } from "./Context/ExampleContextProvider";

function App() {
  const { useActive } = useContextExample();

  const [active, { handleToggle, handleTrue, handleFalse }] = useActive(false);

  return (
    <div className="App">
      <button onClick={() => handleToggle()}>Toggle</button>
      <button onClick={() => handleTrue()}>True</button>
      <button onClick={() => handleFalse()}>False</button>
      <h1>{active.toString()}</h1>

      <Task />
    </div>
  );
}

export default App;
