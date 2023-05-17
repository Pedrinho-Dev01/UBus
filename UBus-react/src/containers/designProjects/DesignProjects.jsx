import React from 'react';
import './designProjects.css';
import { Project } from '../../components';
import { project01, project02, project03, project04, project05, project06, project07} from './imports';

const DesignProjects = () => {
  return (
      <div className='K7__projects section__padding' id='design'>
        <div className='K7__projects-heading'>
          <h1 className='gradient__text'>Design</h1>
        </div>
        <div className='K7__projects-container'>
          <div className='K7__projects-container_groupA'>
            <Project imgUrl={project01} />
            <Project imgUrl={project02} />
            <Project imgUrl={project03} />
            <Project imgUrl={project04} />
            <Project imgUrl={project05} />
            <Project imgUrl={project06} />
            <Project imgUrl={project07} />
          </div>
        </div>
      </div>
      )
}

export default DesignProjects