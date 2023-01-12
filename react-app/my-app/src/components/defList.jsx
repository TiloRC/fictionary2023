import React, { Component } from "react";
import axios from "axios";

class DefList extends Component {
  state = {
    def: [
      "imp. of Glide. Chaucer.",
      "One who decoys another.",
      "A whirligig.",
      "Returning, or flowing back; reflex; as, reflux action.",
      " One overattentive to forms, or too much confined to them; esp.,one who rests in external religious forms, or observes strictly theoutward forms of worship, without possessing the life and spirit ofreligion.As far a formalist from wisdom sits, In judging eyes, as libertinesfrom wits. Young.",
    ],
    answer: [],
    decoys: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/game/`).then((res) => {
      const persons = res.data;
      console.log(persons);
      //this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="columns is-multiline is-flex-direction-column">
        {this.state.def.map((def) => (
          <div
            className="pt-1"
            key={def}
            onClick={() => {
              alert("inline alert");
            }}
          >
            <div className="box py-2 px-2 is-clickable">
              <p>{def}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DefList;
