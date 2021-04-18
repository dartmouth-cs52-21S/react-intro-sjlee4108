import React from 'react';

const JokeBox = (props) => {
  if (props.joke == null) {
    return (
      <div id="jokeBoxStyle">Joke Loading....</div>
    );
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div id="jokeBoxStyle" onClick={props.onClick}>
      <h3>Random Jokes! (Click for more)</h3>
      <h4>{props.joke.setup}</h4>
      <h5>{props.joke.punchline}</h5>
    </div>
  );
};

export default JokeBox;
