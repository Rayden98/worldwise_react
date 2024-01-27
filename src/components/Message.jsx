import PropTypes from "prop-types"; // Import PropTypes at the top

import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.array.isRequired, // cities should be an array
};

export default Message;
