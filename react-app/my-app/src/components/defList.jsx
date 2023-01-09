import React, { Component } from "react";

class DefList extends Component {
  state = {
    def: [
      "imp. of Glide. Chaucer.",
      "One who decoys another.",
      "A whirligig.",
      "Returning, or flowing back; reflex; as, reflux action.",
      " One overattentive to forms, or too much confined to them; esp.,one who rests in external religious forms, or observes strictly theoutward forms of worship, without possessing the life and spirit ofreligion.As far a formalist from wisdom sits, In judging eyes, as libertinesfrom wits. Young.",
    ],
  };
  render() {
    return (
      <div className="columns is-multiline is-flex-direction-column">
        {this.state.def.map((def) => (
          <div className="pt-1" key={def}>
            <button
              class="column is-block is-light is-large is-responsive has-text-left is-full"
              onClick={() => {
                alert("inline alert");
              }}
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
