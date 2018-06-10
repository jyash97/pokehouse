import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import { allPokemon, reset } from '../../utils/actions';
import {
  Heading,
  Spinner
} from '../../utils/styleComponents';

import LoadingCard from './LoadingCard';
import DisplayCard from './displayCard';
import Pagination from './pagination';
import Selector from './Selector';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  justify-content: space-around;
`;

class Home extends React.Component {
  componentDidMount () {
    this.props.handleAllPoke(12, (this.props.match.params.id - 1) * 12);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.resetCurrentPage();
      this.props.handleAllPoke(12, (this.props.match.params.id - 1) * 12);
    }
  }

  render () {
    let searchResults = this.props.pokeDetails;
    if (this.props.search) {
      searchResults = searchResults.filter(data => data.name.startsWith(this.props.search.text));
    }
    return (
      <React.Fragment>
        <Heading color='dark'>All Pokemons</Heading>
        <Selector />
        <CardContainer>
          {this.props.pokeDetails.length > 0 ? (
            searchResults.length === 0 ? 'Nothing to Show'
              : searchResults.map(data => (
                <DisplayCard {...data} key={data.name} type={this.props.filter.type} />
              ))
          ) : this.props.allPokeName.length > 0 ? (
            this.props.allPokeName.map(data => (
              <LoadingCard name={data.name} key={data.name} />
            ))
          ) : (
            <Spinner />
          )}
        </CardContainer>
        <Pagination />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  allPokeName: state.allPokeDetails,
  pokeDetails: state.singleDetails,
  search: state.searchPoke,
  filter: state.filterPoke
});

const mapDispatchToProps = dispatch => ({
  handleAllPoke (resultPerPage, resultIndex) {
    dispatch(allPokemon(resultPerPage, resultIndex));
  },
  resetCurrentPage () {
    dispatch(reset());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
