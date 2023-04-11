import React from "react";
import _uniqueId from "lodash/uniqueId";

class AddNewPostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      valueInput: "",
      valueTextarea: "",
    };
  }

  handleChangeInput = (event) => {
    this.setState({ valueInput: event.target.value });
  };

  handleChangeTextarea = (event) => {
    this.setState({ valueTextarea: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`${this.state.valueInput} ${this.state.valueTextarea}`);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.valueInput,
        body: this.state.valueTextarea,
        userId: _uniqueId("prefix-"),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ valueInput: "", valueTextarea: "" });
      });
    event.preventDefault();
  };

  render() {
    let { valueInput, valueTextarea } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" value={valueInput} onChange={this.handleChangeInput} />
          <textarea placeholder="Description" value={valueTextarea} onChange={this.handleChangeTextarea}></textarea>

          <input type="submit" value="Send new post" />
        </form>
      </>
    );
  }
}
export default AddNewPostForm;
