
import "./App.css";
import DefList from "./components/defList";
import './index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">Fictionary</header>

      <div>
        <div className="App-dailyWord">[Daily Word]</div>

        <DefList />
      </div>
    </div>
  );
}

export default App;
