import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ target }) => {
    const { dataset } = target;
    this.setState(prevState => {
      return {
        [dataset.name]: prevState[dataset.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let key in this.state) {
      total += this.state[key];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onLeaveFeedback,
    } = this;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={onLeaveFeedback}
          />
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default FeedBack;
