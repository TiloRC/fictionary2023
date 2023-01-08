import React, { Component } from "react";

class DefList extends Component {
  state = {
    def: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut cursus hendrerit neque, vel blandit dui fermentum non.",
      "Proin lectus lorem, tincidunt id urna vitae, elementum aliquam enim. Proin lectus lorem, tincidunt id urna vitae, elementum aliquam enim.",
      "Maecenas velit ipsum, fringilla vel velit quis, congue varius augue.",
      " hmmVestibulum sapien ante, tincidunt eu sapien eget, fermentum finibus leo. 1324322435432132435",
    ],
  };
  render() {
    return (
      <div class="columns is-multiline ">
        {this.state.def.map((def) => (
          <button
            class="App-definitions column  is-block is-light is-large is-responsive is-three-fifths is-offset-one-fifth is-flex-wrap-wrap"
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
