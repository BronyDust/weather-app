import { ForecastDayCondition } from "../../api.types";

interface IDayCardProps {
  date: string;
  condition: ForecastDayCondition;
  temperature: number;
}

const dateFormatToGetMonth = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
});

function DayCard({ date, condition, temperature }: IDayCardProps): JSX.Element {
  const dateInstance = new Date(date);
  const day = dateInstance.getDate();
  const month = dateFormatToGetMonth.format(dateInstance);

  return (
    <div>{day} {month} {temperature}°C {condition.text} <img src={condition.icon} alt={condition.text} /></div>
  );
}

export default DayCard;
