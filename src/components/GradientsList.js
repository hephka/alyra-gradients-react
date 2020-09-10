import React from 'react';
import Gradient from './Gradient/Gradient'

const GradientsList = (props) => {
    const {list} = props
    return (
        <ul className="row list-unstyled">
          {list.map( el => (
          <Gradient 
            key={el.name} 
            name={el.name} 
            colorStart={el.start} 
            colorEnd={el.end} 
          />
          ))}
        </ul>
    );
  };

export default GradientsList