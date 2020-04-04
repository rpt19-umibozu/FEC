import React from 'react';
import ListImage from './ListImage.jsx';

const ListOfImages = (props) => (
  <span className="itemBlock">
    {props.images.slice(0, 3).map((image, index)=> <ListImage image={image} key={index}/>) }
  </span>
);
export default ListOfImages;