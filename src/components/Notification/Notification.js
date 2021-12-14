import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <span className={s.message}>{message}</span>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
