import { useState } from "react";


function AddSquare () {

    const [square, setCount] = useState([]);


    const style = {
        width: '80px',
        height: '80px',
        backgroundColor: 'blue',
        border: '1px solid #fff'
    }

    const add = () => {
        setCount(a => [...a, '1'])
    }

    return (
        <>
        <button onClick={add}>+ kvadratas</button>
        <div className="kubelis">
        {
            square.map((_, i) => <div style={style} key={i}></div>)
        }
        </div>
        </>
    )

}

export default AddSquare;