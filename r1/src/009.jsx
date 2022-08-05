import './App.css';
// import PirmasisKontekstas, {KitasKontekstas, DarVienasKontekstas} from './Contexts/PirmasisKontekstas';
import PirmasisKontekstas, {KitasKontekstas, DarVienasKontekstas}  from './Contexts/PirmasisKontekstas';
import M1 from './Components/009/M2';
import { useState } from 'react';
import { useRef } from 'react';

function App() {

    const [count, setCount] = useState(0);

    const blaSuper = useRef(5);

    const good = useRef();    
    let Bla = 5;

    const doCount = () => {
        // const my = document.querySelector('button');

        const my = good.current;

        console.log(my);

        setCount (c => c +1);
        Bla++;
        console.log(Bla);
        blaSuper.current++
        console.log(blaSuper.current);
    }


    return (
        <DarVienasKontekstas.Provider value={{dar:10000}}>
        <PirmasisKontekstas.Provider value={{
            pirmas: 'Valio',
            spalva: 'pink'
        }}>
        <div className="App">
            <header className="App-header">
                <h1>useContext & useRef{count}</h1>
                <M1 kas="Penki"></M1>
                <button ref={good} onClick={doCount}>+1</button>
               

            </header>
        </div>
        </PirmasisKontekstas.Provider>
        </DarVienasKontekstas.Provider>
    );
}

export default App;


//state - busena, pradzioje buna false, po to paspaudus mygtuka patampa true.
// defoultinis importuojamas kontekstas gali buti pervardintas App faile prie Import "PirmasisKontekstas" i Bla.
// <PirmasisiKontekstas.Provider></PirmasisKontekstas.Provider> plotas kuriame veiks drilinimas.