import React, { Component } from 'react';

class ProjectsItem extends Component {
  render() {
    return (
      <li className="ProjectItem">
        {this.props.project.title} - {this.props.project.category}
      </li>
    );
  }
}

export default ProjectsItem;
