import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID c315fd36c550ce708920901491dff324863c738286cd81784563eeb4f166e484"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
