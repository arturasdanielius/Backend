import { useState } from "react";

function RctForm1() {

    const [number, setNumber] = useState ('');

    const [square, setSquare] = useState ([]);
    
  

    const style = {
        width: '80px',
        height: '80px',
        backgroundColor: 'red',
        border: '1px solid #fff'
    }

    const add = () => {
        setSquare(a => [...a, '1'])
    }
    
    const handleInput = e => {
        setNumber(e.target.value);
    }

    return (
        <>
            <fieldset>
                <legend>RED Squares</legend>
                <input type="number" value={number} onChange={handleInput}></input>
                <div>
                    <button onClick={add}>*Magic*</button>
                </div>
            </fieldset>
            <div className="kubelis">
        {
            square.map((_, i) => <div style={style} key={i}></div>)
        }
            </div>
        </>
    )


}
export default RctForm1;

//jeigu type color pakeisime i range atsiras slankykle