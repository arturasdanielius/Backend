import "./styles.css";
import Pokemons from "./components/Pokemons";

export default function App() {
  // const [error, setError] = useState("");
  // const [isLoaded, setIsLoaded] = useState("");
  // // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.example.com/items")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result.results);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  return (
    <>
      <h2>Užduotis su vienu API</h2>
      <ol className="App" style={{ textAlign: "left" }}>
        <li>
          Gauti visus duomenis iš{" "}
          <a href="https://pokeapi.co/api/v2/pokemon">
            https://pokeapi.co/api/v2/pokemon
          </a>{" "}
          API ir išrenderinti Pokemons komponente.
          <strong> Nenaudoti bibliotekų. </strong> Pvz.{" "}
          <a href="https://reactjs.org/docs/faq-ajax.html">
            https://reactjs.org/docs/faq-ajax.html{" "}
          </a>
        </li>
        <li>
          <strong> Pokemons </strong> komponente turėtų būti panaudotas{" "}
          <strong> Pokemon </strong>
          komponentas, kuris per props gauna <strong>name</strong> ir{" "}
          <strong>url</strong> iš API.
        </li>
      </ol>
      <Pokemons />
    </>
  );
}
