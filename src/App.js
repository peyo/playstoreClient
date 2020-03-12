import React from "react";
import "./App.css";
import Playstoreapp from "./playstoreapp/playstoreapp";

class App extends React.Component {
  state = {
    playstoreapps: [],
    sort: "",
    genres: ""
  }

  setSort(sort) {
    this.setState({
      sort
    });
  }

  setGenres(genres) {
    this.setState({
      genres
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const baseUrl = "http://localhost:8000/playstoreapps";
    const params = [];
    if (this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    if (this.state.genres) {
      params.push(`genres=${this.state.genres}`);
    }
    const query = params.join("&");
    const url = `${baseUrl}?${query}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          playstoreapps: data,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: "Sorry, try again in a few minutes."
        });
      })
  }
  
  render() {
    const playstoreapps = this.state.playstoreapps.map((playstoreapp, index) => {
      return <Playstoreapp {...playstoreapp} key={index}/>
    })
    return (
      <section className="playstoreapps">
        <h1>Play Store</h1>
        <div className="search">
          <form onSubmit={event => this.handleSubmit(event)}>
            <label htmlFor="sort">Sort: </label>
            <select id="sort" name="sort" onChange={event => this.setSort(event.target.value)}>
              <option value="">None</option>
              <option value="rating">Rating</option>
              <option value="app">App</option>
            </select>
            <label htmlFor="genres">Genres: </label>
            <select id="genres" name="genres" onChange={event => this.setGenres(event.target.value)}>
              <option value="">None</option>
              <option value="Action">Action</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Strategy">Strategy</option>
              <option value="Casual">Casual</option>
              <option value="Arcade">Arcade</option>
              <option value="Card">Card</option>
            </select>
            <button type="submit">Search</button>
          </form>
          <div className="App_error">{this.state.error}</div>
        </div>
        {playstoreapps}
      </section>
    )
  }
}

export default App;