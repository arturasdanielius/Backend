import { useState } from "react"

function RedBlueReset () {

    const [square, setCount] = useState([]);

    const [squareR, setCountR] = useState([]);


    const style = {
        width: '80px',
        height: '80px',
        backgroundColor: 'blue',
        border: '1px solid #fff'
    }

    const styleR = {
        width: '80px',
        height: '80px',
        backgroundColor: 'red',
        border: '1px solid #fff'
    }

    

    const clearAll = () => {
        setCount([])
        setCountR([])
    }


    const add = () => {
        setCount(a => [...a, '1'])
    }

    const addR = () => {
        setCountR(a => [...a, '1'])
    }

    return (
        <>
      
        <button onClick={addR}>+ Red</button>
        <button onClick={add}>+ Blue</button>
        <button onClick={clearAll}>Reset</button>

        <div className="kubelis">
        {
            square.map((_, i) => <div style={style} key={i}></div>)
        }
        {
            squareR.map((_, i) => <div style={styleR} key={i}></div>)
        }

        </div>
        </>
    )

}

export default RedBlueReset;