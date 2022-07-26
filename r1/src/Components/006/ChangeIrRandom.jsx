import { useState } from "react";
import rand from '../../Functions/rand';



function ChangeIrRandom () {

    const [forma, setBg] = useState(50);

    const apskritimas = {
        width: '100px',
        height: '100px',
        backgroundColor: 'yellow',
        color: 'red',
        borderRadius: forma + '%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'    
    }

    const changeF = () => {
       
        setBg(a => a === 50 ? 0 : 50);
    }
    
    const [count, setCount] = useState(rand(5, 25));

    const skaicius = () => {
       
        setCount(c => c === rand(5, 25) ? rand(5, 25) : rand(5, 25));

    }

   
    return (
        <>
    <div style={apskritimas}>{count}</div>
    <button onClick={changeF}>Change</button>
    <button onClick={skaicius}>Random</button>
    </>
    )
};

export default ChangeIrRandom;