import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCount } from '../../utils/actions';

import { PageNumber, ActivePageNumber, PageContainer } from '../../utils/styleComponents';

class Pagination extends React.Component {
  componentDidMount () {
    this.props.getTotalPokemons();
  }

  render () {
    let pages = 0;
    if (this.props.count !== 0) {
      pages = Math.ceil(this.props.count / 12);
    }

    return (
      <PageContainer>
        <Link to='/page/1'>
          {parseInt(this.props.match.params.id, 10) === 1 ? null : (
            <PageNumber color='green'>First</PageNumber>
          )}
        </Link>
        {parseInt(this.props.match.params.id, 10) !== 1 && (
          <Link to={`/page/${parseInt(this.props.match.params.id, 10) - 1}`}>
            <PageNumber color='green'>Prev</PageNumber>
          </Link>
        )}
        {
          <ActivePageNumber color='green'>
            {this.props.match.params.id}
          </ActivePageNumber>
        }
        {parseInt(this.props.match.params.id, 10) !== pages && (
          <Link to={`/page/${parseInt(this.props.match.params.id, 10) + 1}`}>
            <PageNumber color='green'>Next</PageNumber>
          </Link>
        )}
        <Link to={`/page/${pages}`}>
          {parseInt(this.props.match.params.id, 10) === pages ? null : (
            <PageNumber color='green'>Last</PageNumber>
          )}
        </Link>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  count: state.totalCount
});

const mapDispatchToProps = dispatch => ({
  getTotalPokemons () {
    dispatch(getCount());
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Pagination)
);
