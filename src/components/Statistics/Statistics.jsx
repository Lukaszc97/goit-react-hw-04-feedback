import React from 'react';
import styles from'./Statistics.module.css';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = (good / total) * 100 || 0;

  return (
    <div className={styles.container}>
      <p className={styles.label}>Good: {good}</p>
      <p className={styles.label}>Neutral: {neutral}</p>
      <p className={styles.label}>Bad: {bad}</p>
      <p className={styles.label}>Total: {total}</p>
      <p className={styles.label}>
        Positive Percentage: {positivePercentage.toFixed(2)}%
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
export default Statistics;
