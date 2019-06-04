import React from 'react';
// import { ThemeProvider } from 'styled-components';
import Theme from 'components/MyContext';
import NavIcons from 'components/NavIcons';
function App() {
    return (React.createElement(Theme.Provider, { value: 'light' },
        React.createElement(NavIcons, { name: 'globe', color: 'red', width: '10rem', onClick: (e) => { alert(e.target); } })));
}
export default App;
