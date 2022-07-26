import './App.css';
import Text from './Components/008/Text';
import Select from './Components/008/Select';
import Checkbox from './Components/008/Checkbox';
import Radio from './Components/008/Radio';

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <h1>Form Controll</h1>
                <Text></Text>
                <Select></Select>
                <Checkbox></Checkbox>
                <Radio></Radio>
            </header>
        </div>
    );
}

export default App;


//state - busena, pradzioje buna false, po to paspaudus mygtuka patampa true.