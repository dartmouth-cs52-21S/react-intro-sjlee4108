import React from 'react';
import GifListItem from './gif_list_item';

const GifList = (props) => {
  const gifItems = props.gifs.map((gifs) => (
    <GifListItem
      key={gifs.id}
      url={gifs.embed_url}
    />
  ));
  return (
    <ul>
      {gifItems}
    </ul>
  );
};

export default GifList;
