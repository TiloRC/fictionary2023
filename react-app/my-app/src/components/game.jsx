import React, { Component } from "react";
import DefList from "./defList";

class Game extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Game;
