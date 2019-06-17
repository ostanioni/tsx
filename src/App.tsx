import React, {Provider} from 'react';
import {ThemeCtx, theme} from 'themes/Theme';
import BackToTop from 'components/BackToTop';
import './st.scss';


function App() {
  return (
    <ThemeCtx.Provider value={theme}>
      <div style={{width:'100%',height:'100vh',}}>1</div>
      <div style={{width:'100%',height:'100vh',}}>2</div>
      <BackToTop/>
    </ThemeCtx.Provider>
  );
}
export default App;
