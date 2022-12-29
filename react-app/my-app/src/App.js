import './App.css';



function App() {
  return (
    <div className="App">
      
      <div className="App-header">
        Fictionary
      </div>

      <div>
        <div className="App-dailyWord">
          Tibo
        </div>

        <div>

          <button className="App-definitions" type="button" onClick={ () =>{ alert('inline alert');} } >
            A smart fella
          </button>

          <button className="App-definitions" type="button" onClick={ () =>{ alert('inline alert2');}} >
            A fart smella
          </button>

          <button className="App-definitions" type="button" onClick={ () =>{ alert('inline alert3');} } >
            Resedent stem major
          </button>

          <button className="App-definitions" type="button" onClick={ () =>{ alert('inline alert4');} } >
            mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
          </button>

          <button className="App-definitions" type="button" onClick={ () =>{ alert('inline alert5');} } >
            uh oh need to wrap stuff
          </button>
          
        </div>

      </div>
      


     
  
    </div>
  );
}

export default App;
