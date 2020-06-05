import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {NavbarSection , Container , Logo , LogoText , Ul , ListItem , AnchorTag} from './style.js';

class Index extends Component {
  render() {
    return (
      <NavbarSection>

        <Container>

          <Logo>
            <LogoText> <Link to= "/"> Ultra Profile </Link> </LogoText>
          </Logo>

          <Ul>
            <ListItem> <Link to="/">Home</Link> </ListItem>
            <ListItem> <AnchorTag href="#">Portfolio</AnchorTag> </ListItem>
            <ListItem> <AnchorTag href="#">Resume</AnchorTag> </ListItem>
            <ListItem> <AnchorTag href="#">About</AnchorTag> </ListItem>
            <ListItem> <AnchorTag href="#">Work</AnchorTag> </ListItem>
            <ListItem> <Link to="/contact">Contact</Link> </ListItem>
          </Ul>

        </Container>

      </NavbarSection>
    );
  }
}

export default Index;