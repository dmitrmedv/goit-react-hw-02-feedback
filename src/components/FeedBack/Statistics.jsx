import { PropTypes } from 'prop-types';

export default function Statistic({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </>
  );
}

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};
