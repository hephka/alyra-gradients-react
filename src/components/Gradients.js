import React, { useState } from 'react';
import GradientsList from './GradientsList';
import GradientsSelect from './GradientsSelect';
import {gradients} from './../gradients'


const Gradients = () => {
  const [filter, setFilter] = useState("all")
  const filteredGradients = gradients.filter((el) => {
    return filter === "all" ? true : el.tags.includes(filter)
  })
    return (
        <div className="container">
          <h1 className="text-center my-4">Alyra Gradients</h1>
          <GradientsSelect filter={filter} setFilter={setFilter} />
          <GradientsList list={filteredGradients} />
        </div>
      )
}

export default Gradients 