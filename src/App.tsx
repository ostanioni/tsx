import React, {Provider} from 'react';
// import { ThemeProvider } from 'styled-components';
import Theme from 'components/MyContext';
// import TrainingComponent from 'components/TrainingComponent';
// import BackToTop from 'components/BackToTop';
import NavIcons from 'components/NavIcons';




function App() {
  return (
    <Theme.Provider value='light'>
      <NavIcons name='globe' color='red' width='10rem' onClick={(e)=>{
        let html: HTMLHtmlElement | null = document.querySelector('html');
        if(html){
          html.style.backgroundColor= "#ccc";
          html.style.filter="invert(100%)";
        }
      }}/>
    </Theme.Provider>
  );
}
export default App;
