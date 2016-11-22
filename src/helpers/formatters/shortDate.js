import moment from 'moment';

export default function shortDate(date) {
  return new moment(date).format('l');
}