import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from 'theming/theme';
import TrainingComponent from 'components/TrainingComponent';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <TrainingComponent />
    </ThemeProvider>
  );
}
export default App;
