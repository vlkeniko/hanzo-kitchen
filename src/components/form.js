import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      submitedFirstName: "",
    };
  }

  inputChange = e => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  displayNameHandler = () => {
    this.setState(prevState => ({ submitedFirstName: prevState.firstName }));
  };

  render() {
    return (
      <div>
        <form>
          <label>Enter the Name</label>
          <input type="text" name="firstName" onChange={this.inputChange} />
          <button type="button" onClick={this.displayNameHandler}>
            Submit
          </button>
          <p>
            "FirstName: "
            {this.state.submitedFirstName && this.state.submitedFirstName}
          </p>
        </form>
      </div>
    );
  }
}
export default Input;