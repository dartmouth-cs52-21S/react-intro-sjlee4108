import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import debounce from 'lodash.debounce';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import giphySearch from './giphy-api';
import GifList from './components/gif_list';
import jokeSearch from './jokes-api';
import JokeBox from './components/joke_box';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      gifs: [],
      joke: null,
    };
    this.search = debounce(this.search, 300);
    this.search('pixar');
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });

    giphySearch(text).then((gifs) => {
      this.setState({
        gifs,
      });
    });

    this.searchJoke();
  }

  searchJoke = () => {
    jokeSearch().then((joke) => {
      this.setState({
        joke,
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
        <div id="gif-section">
          <GifList gifs={this.state.gifs} />
        </div>
        <JokeBox joke={this.state.joke} onClick={() => { this.searchJoke(); }} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('main'));
