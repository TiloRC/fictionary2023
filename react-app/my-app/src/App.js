import "./App.css";
import DefList from "./components/defList";
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

      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Dailyword
                <span className="px-1 has-text-weight-normal">
                  is defined as:
                </span>
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <DefList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
