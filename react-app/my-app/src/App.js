import "./App.css";
import DefList from "./components/defList";
import HowTo from "./components/howTo";
import Game from "./components/game";
import "./index.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      ></link>
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <header className="title">FICTIONARY</header>
        </div>
      </div>

      <HowTo />
      <Game />
    </div>
  );
}

export default App;
