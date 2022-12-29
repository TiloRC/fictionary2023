import React, { Component } from "react";

class DefList extends Component {
  state = {
    def: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut cursus hendrerit neque, vel blandit dui fermentum non.",
      "Proin lectus lorem, tincidunt id urna vitae, elementum aliquam enim.",
      "Maecenas velit ipsum, fringilla vel velit quis, congue varius augue.",
      " Vestibulum sapien ante, tincidunt eu sapien eget, fermentum finibus leo.",
    ],
  };
  render() {
    return (
      <div>
        {this.state.def.map((def) => (
          <button
            className="App-definitions"
            type="button"
            onClick={() => {
              alert("inline alert");
            }}
            key={def}
          >
            {def}
          </button>
        ))}
      </div>
    );
  }
}

export default DefList;
