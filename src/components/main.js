import React, { Component } from "react";
import Example1 from "./example1";
import Example2 from "./example2";
import FormDemo from "./form";

class Main extends Component {
  constructor() {
    super();
    this.username = "member";
    this.state = {
      count: 0,
      empName: "Sangeeta",
    };
  }
  //es6 - arrow functions
  onCountClick = () => {
    //do not mutate state directly
    //this.setState({})
    this.setState({
      count: this.state.count + 5,
      empName: "John",
      
    });
  };
  render() {
    let name = "Home Page View";
    let view;
    let user="member";
    //conditional statments if()else()
    if (user === "nmember") {
      view = (
        <>
          <div style={{ color: "red", background: "yellow", padding: "10px" }}>
            {" "}
            <h1>Welcome to React Js Session</h1>
            <h2>Hello !! This is {name}</h2>
          </div>

          <Example1 />
        </>
      );
    } else {
      view = (
        <div>
          <h3 style={{ color: "white", background: "green", padding: "10px" }}>
            There is a Big Sale in {this.props.offer} with {this.props.sale}{" "}
            discount
          </h3>
          <Example2 />
        </div>
      );
    }
    return (
      <div>
        <div style={{ marginLeft: "10px" }}>
          {view}
          <hr />
          <h4>You have clicked {this.state.count}</h4>
          <h4>{this.state.empName} is working in Accenture from 2020</h4>
          <button onClick={this.onCountClick}>Click me</button>
          <hr />
          <FormDemo />
        </div>
      </div>
    );
  }
}

export default Main;

//{this.props.propname}
