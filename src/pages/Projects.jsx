import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { projectList } from '../helpers/ProjectList'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((item, index) => <ProjectItem name={item.name} image={item.image} key={index} />)}
      </div>
    </div>
  )
}

export default Projects