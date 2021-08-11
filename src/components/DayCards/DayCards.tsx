import { ReactElement } from "react";
import { ForecastDayCondition } from "../../api.types";
import css from './DayCards.module.css';

interface IDayCardsProps {
  children: ReactElement<ICardProps> | ReactElement<ICardProps>[];
}

function DayCards({ children }: IDayCardsProps): JSX.Element {
  return (
    <div className={css.wrapper}>{children}</div>
  )
}

interface ICardProps {
  date: string;
  condition: ForecastDayCondition;
  temperature: number;
}

const dateFormatToGetMonth = new Intl.DateTimeFormat('en-US', {
  month: 'short',
});

DayCards.Card = function Card({ date, condition, temperature }: ICardProps): JSX.Element {
  const dateInstance = new Date(date);
  const day = dateInstance.getDate();
  const month = dateFormatToGetMonth.format(dateInstance);

  return (
    <div className={css.card}>
      <p className={css.header}>
        {day} {month}
      </p>
      <p className={css.status}>
        {condition.text}
      </p>
      <div className={css.footer}>
        <p className={css.footer__temperature}>{temperature}°C</p>
        <img className={css.footer__icon} src={condition.icon} alt={condition.text} />
      </div>
    </div>
  );
}

export default DayCards;
