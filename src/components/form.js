import React, { Component } from "react";

// inspired: https://stackoverflow.com/questions/52134686/how-to-display-user-info-after-clicked-submit-in-react-js

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            submitedFirstName: "",

            comment: "",
            submitedComment: ""
        };
    }

    inputChange = e => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));

        const comment = e.target.value;
        this.setState(() => ({ comment }));
    };
    displayNameHandler = () => {
        this.setState(prevState => ({ submitedFirstName: prevState.firstName }));

        this.setState(prevState => ({ submitedComment: prevState.comment }));
    };


    render() {
        return (
            <div>
                <form className='exportforms'>
                    <div className='exportform'>
                        <label className='exportformlabel'>Enter the Name</label>
                        <input type="text" name="firstName" onChange={this.inputChange} className='exportformnamefield' />
                    </div>

                    <div className='exportform'>
                        <label className='exportformlabel'>Comment</label>
                        <textarea type="text" name="comment" onChange={this.inputChange} className='exportformcommentfield' />
                    </div>

                    <button type="button" onClick={this.displayNameHandler} className='exportformsubmit'>
                            Submit
                        </button>

                    <p>
                        FirstName:
                        {this.state.submitedFirstName && this.state.submitedFirstName}
                    </p>

                    <p>
                        Comments:
                        {this.state.submitedComment && this.state.submitedComment}
                    </p>
                </form>
            </div>
        );
    }
}
export default Input;