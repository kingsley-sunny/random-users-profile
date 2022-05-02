import React, { Component } from "react";
import "./index.css";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import CardList from "./components/card-list/Card-list";
import ShowLoading from "./components/loading-Components/ShowLoading";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
      status: "pending",
      filter: "name",
      darkClass: { one: "none", two: "none" },
      theme: { bg: "rgb(253, 252, 252)", color: "rgb(48, 47, 47)" },
      mode: "light mode",
    };
  }
  async componentDidMount() {
    const fetchData = await fetch("https://randomuser.me/api/?results=20");
    const res = await fetchData.json();
    this.setState({ users: res.results, status: "fulfilled" }, () => {
      console.log(this.state);
    });
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  toggleDarkMode = () => {
    this.state.darkClass.one === "none" ?? this.state.darkClass.two === "none"
      ? this.setState({
          darkClass: { one: "change1", two: "change2" },
          theme: { bg: "rgb(48, 47, 47)", color: "rgb(253, 252, 252)" },
          mode: "dark mode",
        })
      : this.setState({
          darkClass: { one: "none", two: "none" },
          theme: { bg: "rgb(253, 252, 252)", color: "rgb(48, 47, 47)" },
          mode: "light mode",
        });
  };

  render() {
    document.body.style.background = this.state.theme.bg;
    document.body.style.color = this.state.theme.color;
    const { users, searchField, filter } = this.state;
    const filteredArray = users.filter((user) => {
      return filter === "name"
        ? (user.name.first + " " + user.name.last)
            .toLowerCase()
            .includes(searchField.toLowerCase())
        : filter === "email"
        ? user.email.toLowerCase().includes(searchField.toLowerCase())
        : user;
    });
    return (
      <main>
        <NavBar
          darkEffect={this.state.darkClass}
          toggleDarkMode={this.toggleDarkMode}
          mode={this.state.mode}
        />
        <SearchBox
          placeholder="Search for any User"
          handleSearch={this.handleSearch}
        />
        {this.state.status === "pending" ? (
          <ShowLoading />
        ) : (
          <CardList users={filteredArray} />
        )}
      </main>
    );
  }
}

export default App;
