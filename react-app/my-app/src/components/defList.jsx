import React, { Component } from "react";
import axios from "axios";

class DefList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      def: [
        "imp. of Glide. Chaucer.",
        "One who decoys another.",
        "A whirligig.",
        "Returning, or flowing back; reflex; as, reflux action.",
        " One overattentive to forms, or too much confined to them; esp.,one who rests in external religious forms, or observes strictly theoutward forms of worship, without possessing the life and spirit ofreligion.As far a formalist from wisdom sits, In judging eyes, as libertinesfrom wits. Young.",
      ],
      answer: ["hhhhhhh", "h"],
      decoys: [
        ["nnnnnnn", "n"],
        ["nnnnnnn", "n"],
      ],
    };
  }

  updateDef = () => {
    const newDef = this.decoys.map((pair) => pair[1]);
    //list.map((item) => item + 1);
    this.setState({ def: newDef });
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/game/`).then((res) => {
      const game = res.data;
      this.setState(
        {
          answer: game.answer,
          decoys: game.decoys,
        },
        () => {
          let newDef = [];
          newDef.push(this.state.answer[1]);
          for (let i = 0; i < 4; i++) {
            newDef.push(this.state.decoys[i][1]);
          }
          console.log(newDef);
          this.setState({ def: newDef });
        }
      );
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
              console.log("test2");
              this.setState({
                isOpen: !this.state.isOpen,
              });
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
