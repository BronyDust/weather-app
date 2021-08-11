interface IDayCardProps {
  date: string;
}

const dateFormatToGetMonth = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
});

function DayCard({ date }: IDayCardProps): JSX.Element {
  const dateInstance = new Date(date);
  const day = dateInstance.getDate();
  const month = dateFormatToGetMonth.format(dateInstance);

  return (
    <div>{day} {month}</div>
  );
}

export default DayCard;
