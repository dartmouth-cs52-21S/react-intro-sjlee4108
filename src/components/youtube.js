import React from 'react';
import '../style.scss';
import debounce from 'lodash.debounce';

import SearchBar from './search_bar';
import youtubeSearch from '../youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import giphySearch from '../giphy-api';
import GifList from './gif_list';
import jokeSearch from '../jokes-api';
import JokeBox from './joke_box';

class Youtube extends React.Component {
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
export default Youtube;
