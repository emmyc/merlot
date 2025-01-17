import { Link } from 'gatsby';
import React from 'react';

import circles from '~/src/images/circles.png';
import cylinders from '~/src/images/cylinders.png';
import stars from '~/src/images/stars.png';

function getImg(index) {
  if (index == 0) {
    return circles;
  } else if (index == 1) {
    return cylinders;
  } else {
    return stars;
  }
}
function DescriptionComponent(props) {
  return (
    <div className='description_container'>
      <div className='description_top'>
        <h2>{props.title}</h2>
        <img src={getImg(props.index)} />
      </div>
      <p className='body1'>{props.description}</p>
    </div>
  );
}
export default DescriptionComponent;
