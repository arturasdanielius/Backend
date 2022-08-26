import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [jokes, setJokes] = useState([]);

    //pasiimam is bibliotekos duomenis is visos data  pasiimam jokes (a.data.jokes)

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(a => setJokes(a.data.jokes));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Jokes</h1>
                <ol>
                    {//ismapinam pagal id priskiriant joke, jei true, jei false - setup arba delivery, nes objektuose yra tik joke arba setup su delivery kartu. Pridejau siek tiek stiliaus
                        jokes.map(u => u.joke ?<li key={u.id}><span style={{color: 'lightblue', fontSize: '14px'}}>{u.joke}</span></li> : <li key={u.id}><span style={{color: 'yellow', fontSize: '10px'}}>{u.setup}{u.delivery}</span></li>)
                    }
                </ol>

            </header>
        </div>
    );
}

export default App;
