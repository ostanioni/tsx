import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from 'theming/theme';
import TrainingComponent from 'components/TrainingComponent';
import BackToTop from 'components/BackToTop';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <>
        <TrainingComponent />
        <BackToTop />
      </>
    </ThemeProvider>
  );
}
export default App;
