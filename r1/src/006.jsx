import './App.css';
//import Fun from './Components/006/Fun';
import { useState } from "react";
//import Sad from './Components/006/Sad';
import randColor from './Functions/randColor';
import Kvadratukas from './Components/006/Nd006';
import Nd006 from './Components/006/Nd006';
import ChangeIrRandom from './Components/006/ChangeIrRandom';
import PlusMinus from './Components/006/PlusMinus';
import AddSquare from './Components/006/AddSquare';
import RedBlueReset from './Components/006/RedBlueReset';

// function App() {
//   // const [count, setCount] = useState(0);
//   const [kv, setKv] = useState([]);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 onClick={() => setKv(k => [...k, randColor()])}>State</h1>
//             {/* <Fun spalva="pink" setCount={setCount}></Fun>
//             <Sad count={count}></Sad> */}
//             <div className="kv-bin">
//                 {
//                   kv.map((c, i) => <div className="kv" style={{
//                       backgroundColor: c+'69',
//                       borderColor: c
//                   }} key={i}></div>)
//                 }
//             </div>
//         </header>
//     </div>
//   );
// }



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
          <Nd006></Nd006>
          -----------ChangeIrRandom--------
          <ChangeIrRandom></ChangeIrRandom>
          -----------PlusMinus--------
          <PlusMinus></PlusMinus>
          -----------AddSquare--------
          <AddSquare></AddSquare>
          -----------Red Blue Reset--------
          <RedBlueReset></RedBlueReset>
        </header>
    </div>
  );
}

export default App;


//state - busena, pradzioje buna false, po to paspaudus mygtuka patampa true.