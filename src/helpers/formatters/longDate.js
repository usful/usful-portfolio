import moment from 'moment';

export default function longDate(date) {
  return new moment(date).format('MMMM Do, YYYY');
}