import './App.css';
import React, { useState } from 'react';
import BoxColors from './components/BoxColors';


function App() {

  const [boxes, setBoxes] = useState([]);
  
  return (
  <div className='App'>
    <BoxColors boxes = { boxes } setBoxes = { setBoxes } />

    <div style={{ display: "flex" }}>
      {
        boxes.map((color, i) => {
        return <div key={i} style={{ 
          backgroundColor: color, 
          width: 200, 
          height: 200, 
          marginRight: 30 
          }}></div>
          
        } )
      }
    </div>
  </div>
  );
}

export default App;
