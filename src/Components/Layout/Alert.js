import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  return (
    alert && (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem 0',
          backgroundColor: '#65B4B4',
          padding: '0.3rem',
          color: '#fff', // Added color to make text visible
        }}
      >
        <i className="ri-alert-fill"></i> {alert.msg}
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.shape({
    msg: PropTypes.string,
    style: PropTypes.string,
  }),
};

export default Alert;
