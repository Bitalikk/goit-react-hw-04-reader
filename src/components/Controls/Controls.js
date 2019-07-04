import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, itemsLength, initialValue }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={onDecrement}
      disabled={initialValue === 1}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={onIncrement}
      disabled={initialValue === itemsLength}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  itemsLength: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
};

export default Controls;
