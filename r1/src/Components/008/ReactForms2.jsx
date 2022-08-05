import { useEffect } from "react";
import { useState } from "react";

function RctForm2() {

    const [name, setName] = useState('');

    const [weight, setWeight] = useState('');

    const [sarasas, setSarasas] = useState([])


    const addName = () => {
        setSarasas(x => [...x, {name, weight}])   
    }
    console.log(sarasas);


    const handleInputName = (e) => {
        setName(e.target.value)

    }

    const handleInputWeight = (e) => {
        setWeight(e.target.value)
    }

    useEffect(() => {
        const currentCats = localStorage.getItem('Katinai')
        if(currentCats !== null) 
        setSarasas(JSON.parse(currentCats));
    },[])

    useEffect(() => {
        localStorage.setItem('Katinai', JSON.stringify(sarasas))
    }, [sarasas])
    


    const totalWeight = sarasas.map(a => a.weight).map(a => +a).reduce((a, b) => a + b);
    

    return(

        <>
            <legend>Katinukai</legend>
            <input type="text" onChange={handleInputName}></input>
            <input type="text" onChange={handleInputWeight}></input>
            <button onClick={addName}>+Cat and CatWeight</button>
            
            <div>Cat list:</div>
            <div>
                {
                    sarasas.sort((a, b)  => {return b.weight - a.weight}).map((a, i) => <div key={i}>{a.name} {a.weight}</div>)
                }
                </div>   
            <div>Total cats weight:{totalWeight} kg.</div>
        </>


    )

}

export default RctForm2;