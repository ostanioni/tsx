import React from 'react';
// import logo from './logo.svg';
import Fc from 'components/Fc';
import Fc2 from 'components/Fc';
import {StyledDiv, ClCom, FC_} from 'components/comp';

const RCE = React.createElement("div",null);

console.log('STYLED = ', StyledDiv);
console.log('FC = ',     FC_);
console.log('CLASS = ',  ClCom);
console.log('CRE = ',  RCE);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Fc />
        <Fc2 />
      </header>
    </div>
  );
}

export default App;
