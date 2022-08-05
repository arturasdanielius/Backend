import { useState } from "react";
import rand from "../../Functions/rand";

function RctForm1() {

    const [number, setNumber] = useState ('');

    const [square, setSquare] = useState ([]);
  

    const style = {
        width: '80px',
        height: '80px',
        backgroundColor: 'red',
        margin: '10px',
        border: '1px solid #fff'
    }

    const add = () => {
        for(let i = 0; i < number; i++){
            
            console.log(number);
        setSquare(a => [...a, rand(100, 200)])
        }
    }
    
    const handleInput = e => {
        setNumber(e.target.value);
    }



    return (
        <>
            <fieldset>
                <legend>RED Squares</legend>
                <input type="number" onChange={handleInput}></input>
                <div>
                    <button onClick={add}>*Magic*</button>
                </div>
            </fieldset>
            <div className="kubelis">
        {
            square.map((a, i) => <div style={style} key={i}>{a}</div>)
        }
            </div>
        </>
    )


}
export default RctForm1;

//jeigu type color pakeisime i range atsiras slankykle