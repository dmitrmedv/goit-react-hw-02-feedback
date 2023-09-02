import css from './FeedbackOptions.module.css';
import setData from '../../utils/utils';

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
              className="btn"
              data-name={buttonItem}
              onClick={onLeaveFeedback}
            >
              {buttonItem}
            </button>
          );
        })}
      </div>
      <h2>Statistics</h2>
    </>
  );
};
