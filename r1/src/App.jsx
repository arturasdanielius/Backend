import './App.css';
import Text from './Components/008/Text';
import Select from './Components/008/Select';
import Checkbox from './Components/008/Checkbox';
import Radio from './Components/008/Radio';
import RctForm1 from './Components/008/ReactForms1';
import RctForm2 from './Components/008/ReactForms2';

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <h1>Form Controll</h1>
                <Text></Text>
                <Select></Select>
                <Checkbox></Checkbox>
                <Radio></Radio>
                -----React--Forms1----
                <RctForm1></RctForm1>
                -----React--Forms2----
                <RctForm2></RctForm2>

            </header>
        </div>
    );
}

export default App;


//state - busena, pradzioje buna false, po to paspaudus mygtuka patampa true.