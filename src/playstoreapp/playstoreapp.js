import React from "react";

class Playstoreapp extends React.Component {
  render() {
    return (
      <section className="playstoreapp">
        <h2>{this.props.App}</h2>
        <div className="playstoreapp-genre">Genre: {this.props.Genres}</div>
        <div className="playstoreapp-rating">Rating: {this.props.Rating}</div>
        <div className="playstoreapp-reviews">
          Reviews: {this.props.Reviews}
        </div>
        <div className="playstoreapp-installs">
          Installs: {this.props.Installs}
        </div>
        <div className="playstoreapp-last-updated">
          Last Updated: {this.props["Last Updated"]}
        </div>
      </section>
    );
  }
}

export default Playstoreapp;
