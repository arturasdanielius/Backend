import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(a => setJokes(a.data.jokes));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Jokes</h1>
                <ul>
                    {
                        jokes.map(u => u.joke ?<li key={u.id}><span>{u.joke}</span></li> : <li key={u.id}><span>{u.setup}{u.delivery}</span></li>)
                    }
                </ul>

            </header>
        </div>
    );
}

export default App;
