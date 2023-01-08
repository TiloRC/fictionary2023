import React, { Component } from "react";

class DefList extends Component {
  state = {
    def: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut cursus hendrerit neque, vel blandit dui fermentum non.",
      "Proin lectus lorem, tincidunt id urna vitae, elementum aliquam enim. Proin lectus lorem, tincidunt id urna vitae, elementum aliquam enim. Proin lectus lorem, tincidunt id urna vitae, elementum aliquam enim.",
      "Maecenas velit ipsum, fringilla vel velit quis, congue varius augue.",
      " hmmVestibulum sapien ante, tincidunt eu sapien eget, fermentum finibus leo. 1324322435432132435",
    ],
  };
  render() {
    return (
      <div className="columns is-multiline is-flex-direction-column">
        {this.state.def.map((def) => (
          <div className="pt-1">
            <button
              class="column is-block is-light is-large is-responsive has-text-left is-full"
              onClick={() => {
                alert("inline alert");
              }}
              key={def}
            >
              {def}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default DefList;
