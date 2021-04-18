import React from 'react';

const GifListItem = (props) => (
  <li>
    <iframe title="gifVideo" frameBorder="0" className="gifStyle" src={props.url} />
  </li>
);

export default GifListItem;
