import { useState } from "react";

function Radio() {

   const [radio, setRadio] = useState('A');

   const handleInput = e => {
    setRadio(e.target.value)
   }

    return (
        <>
            <fieldset>
                <legend>Radio: <b>{radio}</b> </legend>
                <lable htmlFor="_a">A</lable><input id="_a" type="radio" name="b" value="A" onChange={handleInput} checked={radio === 'A'}></input>
                <lable htmlFor="_b">B</lable><input id="_b" type="checkbox" name="b" value="B" onChange={handleInput} checked={radio === 'B'}></input>
                <lable htmlFor="_c">C</lable><input id="_c" type="radio" name="b" value="C" onChange={handleInput} checked={radio === 'C'}></input>
                
            </fieldset>
        </>
    )


}
export default Radio;

//buttone selecte dviguba lygybe, nes lygina skaiciu su stringu