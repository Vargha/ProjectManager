import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projItems;
    if(this.props.projects){
      projItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem key={project.title} project={project}/>
        )
      });
    }
    return (
      <div className="Projects">
        {projItems}
      </div>
    );
  }
}

export default Projects;
