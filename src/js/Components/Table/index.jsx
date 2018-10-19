import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './table.scss';
import TableItem from '../TableItem';

class Table extends React.PureComponent {
  render() {
    const { currentQuery } = this.props;
    const { fullResponse, fetched } = currentQuery;

    if (fullResponse && fetched) {
      return (
        <div className={s.container}>
          { fullResponse.map(item => <TableItem {...item} key={item.id} />) }
        </div>
      );
    }
    return <div>LOADING...</div>;
  }
}

export default connect(
  state => ({
    filmsList: state.filmsList,
    currentQuery: state.movie,
  }),
)(Table);

Table.propTypes = {
  currentQuery: PropTypes.objectOf(PropTypes.any).isRequired,
};
