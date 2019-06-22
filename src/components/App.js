import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList";
import ButtonFetchUser from "./ButtonFetchUser";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null
  };

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          users: data.results
        });
      })
      .catch(error => console.log(error + " Coś nie tak !"));
  };

  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUser click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
