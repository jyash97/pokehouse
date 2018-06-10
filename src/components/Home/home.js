import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import { allPokemon, reset } from '../../utils/actions';
import {
  Heading,
  PokeCard,
  LoadingBar,
  LoadingImage,
  Content,
  Spinner,
  Image,
  CardHeading,
  Capsules
} from '../../utils/styleComponents';

import Pagination from './pagination';

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
    return (
      <React.Fragment>
        <Heading color='dark'>All Pokemons</Heading>
        <CardContainer>
          {this.props.pokeDetails.length > 0 ? (
            this.props.pokeDetails.map(data => (
              <PokeCard> { /* Data Component */ }
                <LoadingImage>
                  <Image src={data.sprites.front_default} />
                </LoadingImage>
                <Content>
                  <CardHeading color='dark'>{data.name}</CardHeading>
                  {data.types.map(typeObject => (
                    <Capsules background='danger'>
                      {typeObject.type.name}
                    </Capsules>
                  ))}
                </Content>
              </PokeCard>
            ))
          ) : this.props.allPokeName.length > 0 ? (
            this.props.allPokeName.map(data => (
              <PokeCard> { /* Loading Component */ }
                <LoadingImage />
                <Content>
                  {
                    this.props.pokeDetails.map(data => data)
                  }
                  <CardHeading color='dark'>{data.name}</CardHeading>
                  <LoadingBar />
                  <LoadingBar small />
                </Content>
              </PokeCard>
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
  pokeDetails: state.singleDetails
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
