import './App.css';
import Kn from './Components/005/Kn';
import Kosmosas from './Components/005/Kosmosas';
import LabasZuiki from './Components/005/nd1';
import nd1 from './Components/005/nd1';
import BetKoks from './Components/005/BetKoks';
import ZebraiBebrai from './Components/005/ZebraiBebrai';
import rand from './Functions/rand';
import DuProps from './Components/005/DuProps';
import TrysProps from './Components/005/TrysProps';
import DogsInSquare from './Components/005/DogsInSquare';

const yel = 'yellow';
const ms = {color: yel, backgroundColor:'skyblue'}

const mas = ['Pilkis', 'Murkis', 'Gagarinas'];

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Labas</h1>

        {
          mas.map((n, i) => <Kn key={i} name={n}></Kn>)
        }
        <Kosmosas spalva="pink" krastas="40"></Kosmosas>
        <Kosmosas spalva= {yel} krastas="70" manoStilius={ms}></Kosmosas>

      </header>
    </div>
  );
}*/

const betKoks = 'Bet koks pasirinktas tekstas';
const txt1 = 'Lorem ipsum snipsum';
const txt2 = 'Snipsum lorem ipsum';
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {dogs.map((n, i) => <DogsInSquare key={i} sarasas={n}></DogsInSquare>)}
        
        <LabasZuiki></LabasZuiki>
        <BetKoks dydis={betKoks}></BetKoks>
        <ZebraiBebrai spalva={rand(1, 2)}></ZebraiBebrai>
        <DuProps pirmas={txt1} antras={txt2}></DuProps>
        <TrysProps pirmas={txt1} antras={txt2} stiliukas={ms}></TrysProps>
        
      </header>
    </div>
  );
}


export default App;


//