import { Component } from 'react';
import Statistic from './Statistics';
import NotificationMessage from './NotificationMessage';

export class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedBack = event => {
    let currentValue = event.currentTarget.dataset.action;
    this.setState(prevState => {
      return {
        [currentValue]: prevState[currentValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countPositiveFeedbackPercentage, countTotalFeedback, addFeedBack } =
      this;
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" data-action="good" onClick={addFeedBack}>
          Good
        </button>
        <button type="button" data-action="neutral" onClick={addFeedBack}>
          Neutral
        </button>
        <button type="button" data-action="bad" onClick={addFeedBack}>
          Bad
        </button>
        <h2>Statistics</h2>
        {countTotalFeedback() !== 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <NotificationMessage />
        )}
      </>
    );
  }
}
