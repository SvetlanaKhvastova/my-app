import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      errorEmail: "",
      errorPassword: "",
      errorFirstName: "",
      errorLastName: "",
      disabled: true,
    };
  }

  handleChangeDisabled = () => {
    let { email, password, firstName, lastName } = this.state;
    if (email !== "" && password !== "" && firstName !== "" && lastName !== "") {
      this.setState({ disabled: false });
    }
  };

  handleChangeInputEmail = (event) => {
    this.setState({ email: event.target.value });
    let emailVal = event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);
    if (emailVal === null) {
      this.setState({ errorEmail: "Please enter younr valid email address" });
    } else {
      this.setState({ errorEmail: "" });
      this.handleChangeDisabled();
    }
  };
  handleChangeInputPassword = (event) => {
    this.setState({ password: event.target.value });
    let passwordVal = event.target.value.match(/^(?=.*[A-Z])(?=.*[0-9]).{6,10}$/);
    if (passwordVal === null) {
      this.setState({ errorPassword: `Please enter your password (minimum 1 capital letter and 1 number, maximum 10 and minimum 6 characters)` });
    } else {
      this.setState({ errorPassword: `` });
      this.handleChangeDisabled();
    }
  };
  handleChangeInputFirstName = (event) => {
    this.setState({ firstName: event.target.value });
    let nameVal = event.target.value.match(/^[a-z0]{2,}$/);
    if (nameVal === null) {
      this.setState({ errorFirstName: "Please enter your First Name without spaces, numbers or special characters, minlength 2" });
    } else {
      this.setState({ errorFirstName: "" });
      this.handleChangeDisabled();
    }
  };
  handleChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
    let nameVal = event.target.value.match(/^[a-z0]{2,}$/);
    if (nameVal === null) {
      this.setState({ errorLastName: "Please enter your Last Name without spaces, numbers or special characters, minlength 2" });
    } else {
      this.setState({ errorLastName: "" });
      this.handleChangeDisabled();
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.email}  ${this.state.password} ${this.state.firstName} ${this.state.lastName}`);
    this.setState({ email: "", password: "", firstName: "", lastName: "" });
  };

  render() {
    let { email, password, firstName, lastName, errorEmail, errorPassword, errorLastName, errorFirstName, disabled } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>{errorEmail}</p>
            <input name="email" type="email" placeholder="Email" value={email} onChange={this.handleChangeInputEmail} />
          </label>
          <label>
            <p>{errorPassword}</p>
            <input name="password" type="password" placeholder="Password" value={password} onChange={this.handleChangeInputPassword} />
          </label>
          <label>
            <p>{errorFirstName}</p>
            <input name="firstName" type="text" placeholder="First Name" value={firstName} onChange={this.handleChangeInputFirstName} />
          </label>
          <label>
            <p>{errorLastName}</p>
            <input name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={this.handleChangeLastName} />
          </label>

          <button type="submit" disabled={disabled}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default Form;
