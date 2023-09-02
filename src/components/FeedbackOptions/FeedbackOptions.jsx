import css from './FeedbackOptions.module.css';
import setData from '../../utils/utils';
// import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonsNames = setData(options);
  return (
    <>
      <div className={css.buttons}>
        {buttonsNames.map(buttonItem => {
          return (
            <button
              key={buttonItem}
              type="button"
              className={css.btn}
              data-name={buttonItem}
              onClick={onLeaveFeedback}
            >
              {buttonItem}
            </button>
          );
        })}
      </div>
      <h2 className={css.statisticTitle}>Statistics</h2>
    </>
  );
};

// FeedbackOptions.PropTypes = {
//   options: PropTypes.shape({
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//   }),
//   onLeaveFeedback: PropTypes.func,
// };
