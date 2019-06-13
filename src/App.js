import React from 'react';
import { ThemeCtx, theme } from 'themes/Theme';
import BackToTop from 'components/BackToTop';
function App() {
    return (React.createElement(ThemeCtx.Provider, { value: theme },
        React.createElement("div", { style: { width: '100%', height: '100vh', } }, "1"),
        React.createElement("div", { style: { width: '100%', height: '100vh', } }, "2"),
        React.createElement(BackToTop, null)));
}
export default App;
