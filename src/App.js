import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from 'theming/theme';
import TrainingComponent from 'components/TrainingComponent';
import BackToTop from 'components/BackToTop';
function App() {
    return (React.createElement(ThemeProvider, { theme: myTheme },
        React.createElement(React.Fragment, null,
            React.createElement(TrainingComponent, null),
            React.createElement(BackToTop, null))));
}
export default App;
