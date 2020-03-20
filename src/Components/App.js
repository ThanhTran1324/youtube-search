import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount() {
    this.onTermSubmit("hello");
  }
  onTermSubmit = async keyword => {
    var KEY = process.env.REACT_APP_YOUTUBEAPI_KEY;

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: KEY,
          q: keyword
        }
      }
    );

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelected = selectedVideo => {
    this.setState({ selectedVideo: selectedVideo });
  };
  render() {
    return (
      <div className="container">
        <SearchBar keyword={this.onTermSubmit}></SearchBar>
        <div className="ui grid">
          <div className="ui row ">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelected={this.onVideoSelected}
                videos={this.state.videos}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
