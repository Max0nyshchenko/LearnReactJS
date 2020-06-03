import React from "react";

class Ap extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      travel: "",
      checked: false,
      diet: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, type, name, checked } = e.target;

    if (type === "checkbox") {
      checked === false
        ? this.setState((prev) => {
            return {
              diet: prev.diet.splice(0, prev.diet.length - 1),
            };
          })
        : this.setState((prev) => {
            return {
              diet: [...prev.diet, value],
            };
          });
      console.log(this.state.diet);
    } else {
      this.setState({
        [name]: value,
      });
    }

    console.log(this.state.diet);
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            placeholder="Enter First Name"
            type="text"
            onChange={this.handleChange}
          />
          <input
            name="lastName"
            value={this.state.lastName}
            placeholder="Enter Last Name"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            placeholder="Enter Your Age"
            type="number"
            onChange={this.handleChange}
          />
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
          </label>
          <select
            name="travel"
            onChange={this.handleChange}
            value={this.state.travel}
          >
            <option value="Irland">Irland</option>
            <option value="Italy">Italy</option>
            <option value="India">India</option>
          </select>

          <h4>your dietary restriction</h4>
          <label>
            <input
              type="checkbox"
              name="diet"
              value="vegetarian"
              onChange={this.handleChange}
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="diet"
              value="kosher"
              onChange={this.handleChange}
            />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="diet"
              value="lactoseFree"
              onChange={this.handleChange}
            />
            lactoseFree
          </label>
        </form>

        <h2>
          Your Age {this.state.age} ; name is {this.state.lastName}{" "}
          {this.state.firstName}; gender: {this.state.gender}
        </h2>
        <h2>you travelling to {this.state.travel}</h2>
        <h2>Dietary restriction: {this.state.diet.join(" ")}</h2>
      </div>
    );
  }
}

export default Ap;
