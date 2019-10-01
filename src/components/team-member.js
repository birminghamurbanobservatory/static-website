import React from 'react';
import Img from "gatsby-image"

export default (props) => {

  let outerDivClassNames = 'flex flex-wrap my-10 items-center'
  if (props.picSide === 'right') {
    outerDivClassNames += ' flex-row-reverse'
  }

  return (
    <div className={outerDivClassNames}>
      <div className="w-full md:w-1/3 flex justify-center">
        <Img fluid={props.fluidImg} alt={props.name} className="rounded-full h-48 w-48" />
      </div>
      <div className="w-full md:w-2/3 p-3">
        <h3 className="font-bold text-teal-600">{props.name}</h3>
        <h4 className="italic">{props.title}</h4>
        <p className="text-justify">{props.projectRole}</p>
      </div>
    </div>
  );

};