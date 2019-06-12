import React, {Provider} from 'react';
import Theme from 'components/MyContext';
import BackToTop from 'components/BackToTop';


function App() {
  return (
    <Theme.Provider value='light'>
      <div style={{width:'100%',height:'100vh',}}>1</div>
      <div style={{width:'100%',height:'100vh',}}>2</div>
      <BackToTop/>
    </Theme.Provider>
  );
}
export default App;
