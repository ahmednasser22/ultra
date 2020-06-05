import React, { Component } from 'react';
import axios from 'axios';
import { WorkDiv, WorkTitle, Span, Part, Icon, PartTitle, Line, PartDetails } from './style.js';
class Work extends Component {
  state = {
    works: []
  }

  componentDidMount() {
    axios.get('js/data.json').then(res => {this.setState({ works : res.data.works }) } );
  }

  render() {

     const works = this.state.works;
    
    const WorksList = works.map( (workItem) => {
      return (
        <Part first={workItem.id}  key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDetails> {workItem.body} </PartDetails>
        </Part>
        );
    }); 
    
    return (
      <WorkDiv>
        <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          { WorksList }
        </div>
      </WorkDiv>
    );//end return
  }
}

export default Work;