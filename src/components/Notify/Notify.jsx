import PropTypes from 'prop-types';
import { NotifyStyle } from './Notify.styled';

export const Notify = ({ message }) => {
  return (
    <NotifyStyle>
      <p className="notify-message">{message}</p>
    </NotifyStyle>
  );
};

Notify.propTypes = {
  message: PropTypes.string.isRequired,
};
