import React, { useEffect, useState } from 'react';
import ConditionalDisplay from './ConditionalDisplay';
import Sum from './math-utils';


const App = () => {

  const [visibleState, setVisibleState] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => { setVisibleState(!visibleState); console.log(visibleState); }, 2000);
    return () => clearTimeout(timerId);
  }, [visibleState]);


  return (
    <div className="App">
      <ConditionalDisplay isVisible={visibleState}>
        <h1>A <span>Sum</span></h1>
        <Sum a={4} b={2} />
      </ConditionalDisplay>
    </div>
  );
}

export default App;