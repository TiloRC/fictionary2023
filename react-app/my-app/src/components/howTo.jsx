import React, { Component } from "react";

class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <article className="message">
              <div className="message-header">
                <p>How to Play</p>
                <button
                  className="delete"
                  aria-label="delete"
                  onClick={this.toggleModal}
                ></button>
              </div>
              <div className="message-body">
                Guess the correct definition in 2 tries
              </div>
            </article>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default HowTo;
