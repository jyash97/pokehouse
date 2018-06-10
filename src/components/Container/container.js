import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {searchResults} from '../../utils/actions';
import {Input, Button} from '../../utils/styleComponents';
import Logo from './logo.png';

const Nav = styled.div`
  background:#dfe4ea;
  overflow: hidden;
  margin-bottom: 1em;
  padding: .6em;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  width: 7%;
  padding: .2em;
  float: left;
  @media (max-width: 860px) {
    width: 20%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
`;

const ContentContainer = styled.div`
  overflow: hidden;
  display: inline-block;
  float: right;
`;

class Container extends React.Component {
  constructor () {
    super();
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    this.setState({
      text: event.target.value
    }, () => this.props.getSearchResult(this.state.text));
  }
  render () {
    return (
      <React.Fragment>
        <Nav>
          <Link to='/'>
            <ImageContainer>
              <Image src={Logo} alt='Pokehouse Logo' />
            </ImageContainer>
          </Link>
          <ContentContainer>
            <Input placeholder='Search Pokemon' value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleSearch} />
            <Button background='primary'>
              Search
            </Button>
          </ContentContainer>
        </Nav>
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchResult (text) {
    dispatch(searchResults(text));
  }
});

export default connect(null, mapDispatchToProps)(Container);
