import React from 'react';
// import logo from './logo.svg';
import Fc from 'components/Fc';
import Fc2 from 'components/Fc';
import { StyledDiv, ClCom, FC_ } from 'components/comp';
const RCE = React.createElement("div", null);
console.log('STYLED = ', StyledDiv);
console.log('FC = ', FC_);
console.log('CLASS = ', ClCom);
console.log('CRE = ', RCE);
const App = () => {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"),
            React.createElement(Fc, null),
            React.createElement(Fc2, null))));
};
export default App;
