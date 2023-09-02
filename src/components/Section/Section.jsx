import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.sections}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};
