import React from 'react'
import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
  } from "../constants/index";
import { SkilldataProvider } from "../SkilldataProvider";

export const Skills = () => {
  return (
    <section id="skills" className="skills" /*style={{backgroundImage: `url(${dungeonimg})`}}*/>
      <div className='container'>
        <h2>My skills</h2>
        <p>Explore my expertise. Below are the tools and software I'm skilled at using.</p>
      </div>
      <div className="skill-data">
        {Skill_data.map((image, index) => (
          <SkilldataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="skill-front">
        {Frontend_skill.map((image, index) => (
          <SkilldataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="skill-back">
        {Backend_skill.map((image, index) => (
          <SkilldataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="skill-back">
        {Full_stack.map((image, index) => (
          <SkilldataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="skill-back">
        {Other_skill.map((image, index) => (
          <SkilldataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}