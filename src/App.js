import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from 'theming/theme';
import TrainingComponent from 'components/TrainingComponent';
function App() {
    return (React.createElement(ThemeProvider, { theme: myTheme },
        React.createElement(TrainingComponent, { msg: "HelloHelloHello" })));
}
export default App;
