import { useState } from "react";


function Nd006 () {

    const [forma, setBg] = useState(50);

    const apskritimas = {
        width: '100px',
        height: '100px',
        backgroundColor: 'yellow',
        borderRadius: forma + '%'
    }

    const changeF = () => {
       
        setBg(a => a === 50 ? 0 : 50);
    }


    return (
        <>
    <div style={apskritimas}></div>
    <button onClick={changeF}>Mygtukas</button>
    </>
    )
};

export default Nd006;