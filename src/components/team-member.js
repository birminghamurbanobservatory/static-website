import React from 'react';
import Img from "gatsby-image"

export default (props) => {
  return (
    <div className="flex flex-wrap m-2 items-center">
      <div className="w-full md:w-1/3">
        <Img fluid={props.fluidImg} alt={props.name} className="rounded-full h-48 w-48" />
      </div>
      <div className="w-full md:w-2/3 p-3">
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
        <p>{props.role}</p>
      </div>
    </div>
  );
};