import { useState } from "react";


function PlusMinus () {

    const [count, setDigit] = useState(0);

    const style  = {
        width: '50px',
        height: '50px',
        color: 'yellow',
        backgroundColor: 'skyblue'
    }

    const changePlus = () => {
       
        setDigit(a => a + 1 );
    }
    
   

    const changeMinus = () => {
       
        setDigit(c => c - 3);

    }

   
    return (
        <>
    <div style={style}>{count}</div>
    <button onClick={changePlus}>Plus</button>
    <button onClick={changeMinus}>Minus</button>
    </>
    )
};

export default PlusMinus;