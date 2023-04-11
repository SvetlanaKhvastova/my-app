import React from "react";

class ModalEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      valueInput: "",
      valueTextarea: "",
      valueId: "",
    };
  }

  handleCloseEditForm = (e) => {};

  handleChangeEditInput = (event) => {
    this.setState({ valueInput: event.target.value });
  };

  handleChangeEditTextarea = (event) => {
    this.setState({ valueTextarea: event.target.value });
  };

  handleSubmitEditForm = (event) => {
    alert(`${this.state.valueInput} ${this.state.valueTextarea}`);
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.valueId}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: this.state.valueInput,
        body: this.state.valueTextarea,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <svg onClick={this.handleCloseEditForm} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15.5" fill="white" stroke="#E8F1F9" />
              <path d="M21 12.0071L19.9929 11L16 14.9929L12.0071 11L11 12.0071L14.9929 16L11 19.9929L12.0071 21L16 17.0071L19.9929 21L21 19.9929L17.0071 16L21 12.0071Z" fill="black" />
            </svg>

            <div class="content_popup">
              <form onSubmit={this.handleSubmitEditForm}>
                <input type="text" placeholder="Title" value="test" onChange={this.handleChangeEditInput} />
                <textarea placeholder="Description" value="test" onChange={this.handleChangeEditTextarea}></textarea>

                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ModalEdit;
