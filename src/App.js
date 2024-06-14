import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import News from "./components/News";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="card-container">
          <News />
        </div>
      </div>
    );
  }
}

export default App;
