import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import GradientCode from './GradientCode'
import GradientPill from './GradientPill'
import GradientTitle from './GradientTitle'
import GradientTag from './GradientTag';

const Gradient = ({ colorStart, colorEnd, name, tags }) => {
    return (
      <li className="col-lg-3 col-md-4 col-sm-6">
        <div className="card pt-3 px-3 mb-4 shadow">
          <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
          <GradientTitle>{name}</GradientTitle>
          <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
          <GradientTag tags={tags} />
        </div>
      </li>
    );
  };

export default Gradient