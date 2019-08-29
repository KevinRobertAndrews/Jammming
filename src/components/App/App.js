import React from "react";
import "./App.css";

// Components
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: "Jamming", artist: "Joe Blow", album: "Copycat", id: 1 },
        { name: "Fuggedaboutit", artist: "Waka", album: "Bluecar", id: 2 },
        { name: "Hip To Be", artist: "Bull Rider", album: "Marker", id: 3 }
      ],
      playlistName: "Cowabunga!",
      playlistTracks: [
        { name: "Blue", artist: "Square", album: "Smooth", id: 4 },
        { name: "Red", artist: "Triangle", album: "Rough", id: 5 },
        { name: "Yellow", artist: "Circle", album: "Spotted", id: 6 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
