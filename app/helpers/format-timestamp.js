import { helper } from '@ember/component/helper';
import formatDateString from '../utils/date';

export default helper(function formatTimestamp(params) {
  const [dateString] = params;
  return formatDateString(dateString);
});
