import React from 'react';
// import { ThemeProvider } from 'styled-components';
import Theme from 'components/MyContext';
// import TrainingComponent from 'components/TrainingComponent';
// import BackToTop from 'components/BackToTop';
import NavIcons from 'components/NavIcons';
function App() {
    return (React.createElement(Theme.Provider, { value: 'light' },
        React.createElement(NavIcons, { name: 'globe', color: 'red', width: '10rem', onClick: (e) => {
                let html = document.querySelector('html');
                if (html) {
                    html.style.backgroundColor = "#ccc";
                    html.style.filter = "invert(100%)";
                }
            } })));
}
export default App;
