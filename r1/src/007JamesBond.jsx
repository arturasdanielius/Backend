import './App.css';
//import Fun from './Components/006/Fun';
import { useState } from "react";
//import Sad from './Components/006/Sad';
import randColor from './Functions/randColor';
import Kv from './Components/JamesBond/Kv';
import { useEffect } from 'react';
// import Count from './Components/JamesBond/Count';
import ForeverYoung from './Components/JamesBond/ForeverYoung';


function App() {
  const [kv, setKv] = useState([]);
  
  const kvPressed = () => {
    setKv(k => [...k, randColor()]);
    console.log('Ja Ja 1');
  }
  useEffect(() => {
    if (kv.length === 0){
      return;
    }
    console.log('Ja Ja 2');
  }, [kv]);



  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick=/*{() => setKv(k => [...k, randColor()])}*/ {kvPressed}>State</h1>
         <div className="kv-bin">
            {
              kv ? kv.map((c, i) => <Kv key={i} c={c}></Kv>) :null
            }
         </div>
         {/* <Count start={127}></Count> */}
         <ForeverYoung></ForeverYoung>
        </header>
    </div>
  );
}

export default App;


//state - busena, pradzioje buna false, po to paspaudus mygtuka patampa true.