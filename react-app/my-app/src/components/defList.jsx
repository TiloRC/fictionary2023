import React, { Component } from "react";

class DefList extends Component {
  
  state = {
    correct_def: "imp. of Glide. Chaucer.",
    clicked_defs: [],
    def: [
      "imp. of Glide. Chaucer.",
      "One who decoys another.",
      "A whirligig.",
      "Returning, or flowing back; reflex; as, reflux action.",
      " One overattentive to forms, or too much confined to them; esp.,one who rests in external religious forms, or observes strictly theoutward forms of worship, without possessing the life and spirit ofreligion.As far a formalist from wisdom sits, In judging eyes, as libertinesfrom wits. Young.",
    ],
  };


  handleClick(clicked_def){
    this.state.clicked_defs.append(clicked_def)
  };

  wasClicked(def){
    return this.state.clicked_defs.contains(def)
  }


  render() {
    return (
      <div className="columns is-multiline is-flex-direction-column">
        {this.state.def.map((def,index) => (
          <div
            className="pt-1"
            key={def}
          >
            <div 
              correct-choice="{this.state.correct_def==index}" 
              onClick={() => {
                alert("inline alert");
                this.handleClick({def})
              }}
              className = {"box py-2 px-2 is-clickable definition" + (this.wasClicked({def}) ? "is-success" : "is-danger")}
              >
              <p>{this.state.correct_def==index}{def}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DefList;
