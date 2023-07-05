import React from "react";
import PropTypes from "prop-types";

// Style
import styles from "./Button.module.scss";

const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  children: null,
  onClick: null,
};

export default Button;
