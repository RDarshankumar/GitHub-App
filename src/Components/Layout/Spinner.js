import React from 'react';
import PropTypes from 'prop-types';
import spinnerGif from './spinner.gif'; // Import the GIF file

class Spinner extends React.Component {
  static propTypes = {
    message: PropTypes.string,
  };

  static defaultProps = {
    message: 'Loading...',
  };

  render() {
    const spinnerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Adjust height as necessary
    };

    const imgStyle = {
      width: '50px', // Adjust size as necessary
      height: '50px', // Adjust size as necessary
      marginBottom: '10px',
    };

    const messageStyle = {
      fontSize: '1.2rem',
      color: '#333', // Adjust color as necessary
    };

    return (
      <div style={spinnerStyle}>
        <img src={spinnerGif} alt="Loading..." style={imgStyle} />
        <p style={messageStyle}>{this.props.message}</p>
      </div>
    );
  }
}

export default Spinner;
