export default function formatDateString(dateString) {
  if (
    !(
      typeof dateString === 'string' ||
      typeof dateString === 'number' ||
      dateString instanceof Date
    )
  )
    return null;

  const date = new Date(dateString);
  const today = new Date();

  const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour24 = date.getHours();
  const hour = hour24 % 12;
  const minutes = addLeadingZero(date.getMinutes());

  const amPm = hour24 > 12 ? 'pm' : 'am';
  const shortMonth = shortMonths[month];
  const currentYear = today.getFullYear();
  const isCurrentYear = currentYear === year;
  const includeYear = isCurrentYear ? '' : `, ${year}`;

  return `${shortMonth} ${day}${includeYear} @ ${hour}:${minutes} ${amPm}`;
}

const addLeadingZero = (num) => {
  return ('0' + num).slice(-2);
};
