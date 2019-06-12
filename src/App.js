import React from 'react';
import Theme from 'components/MyContext';
import BackToTop from 'components/BackToTop';
function App() {
    return (React.createElement(Theme.Provider, { value: 'light' },
        React.createElement("div", { style: { width: '100%', height: '100vh', } }, "1"),
        React.createElement("div", { style: { width: '100%', height: '100vh', } }, "2"),
        React.createElement(BackToTop, null)));
}
export default App;
