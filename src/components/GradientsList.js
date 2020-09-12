import React from 'react';
import Gradient from './Gradient/Gradient'

const GradientsList = ({list}) => {
    return (
        <ul className="row list-unstyled">
          {list.map( (el) => (
          <Gradient 
            key={el.name} 
            name={el.name} 
            colorStart={el.start} 
            colorEnd={el.end}
            tags={el.tags}
          />
          ))}
        </ul>
    );
  };

export default GradientsList