import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ items, initialValue }) => (
  <div>
    <p className={styles.counter}>
      {initialValue}/{items.length}
    </p>
  </div>
);

Counter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  initialValue: PropTypes.number.isRequired,
};

export default Counter;
