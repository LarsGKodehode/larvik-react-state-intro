import React, { useState } from 'react'
import './App.css'

function App() {
  // const [state, setState] = React.useState(10);
  const [count, setCount] = useState(8);
  // You can have multiple state inside each components
  const [state, setState] = useState(false);

  function updateCount(addThis) {
    setCount(
      (oldCount) => {
        return oldCount + addThis
      }
    )
  }

  return (
    <div className="App">

      {/* Displaying state here */}
      <div>{count}</div>

      {/* Set the state to excplicit value */}
      <button onClick={() => setCount(3)}
      >
        Click Me set state to 3!
      </button>

      {/* Set new state based on old state */}
      <button onClick={() => setCount((oldCount) => oldCount + 2)}
      >
        Click Me to add 2!
      </button>

      {/* External function for handling state change */}
      <button onClick={() => updateCount(10)}
      >
        Click Me to add 10!
      </button>
    </div>
  )
}

export default App
