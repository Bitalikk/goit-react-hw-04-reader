import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';
import * as publicationsAPI from '../../services/publications-api';

export default class Reader extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  state = {
    publications: [],
  };

  componentDidMount() {
    const { history, location } = this.props;
    history.push({
      ...location,
      search: '?page=1',
    });

    publicationsAPI
      .fetchPublications()
      .then(publications => this.setState({ publications }));


  }

  setHistory = count => {
    const { history, location } = this.props;
    return history.push(`${location.pathname}?page=${count}`);
  };

  handleIncrement = () => {
    const { location } = this.props;
    const { publications } = this.state;
    const count = Number(queryString.parse(location.search).page);
    if (count < publications.length) this.setHistory(count + 1);
  };

  handleDecrement = () => {
    const { location } = this.props;
    const count = Number(queryString.parse(location.search).page);
    if (count > 1) this.setHistory(count - 1);
  };

  render() {
    const { publications } = this.state;
    const { location } = this.props;

    const itemsLength = publications.length;
    const count = Number(queryString.parse(location.search).page);

    return (
      <div className={styles.reader}>
        {publications.length > 0 && (
          <Publication item={publications[count - 1]} />
        )}
        <Counter items={publications} initialValue={count} />
        <Controls
          onIncrement={() => this.handleIncrement(publications)}
          onDecrement={() => this.handleDecrement(publications)}
          initialValue={count}
          itemsLength={itemsLength}
        />
      </div>
    );
  }
}
