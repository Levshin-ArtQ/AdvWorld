import PropTypes from 'prop-types';

const SecondaryButton = ({ text, onClick, disabled }) => {
  const buttonStyle = {
    backgroundColor: '#e5ece9',
    color: '#120e08',
    border: 'none',
    padding: '10px 20px',
    fontSize: '28px',
    borderRadius: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className='secondary-button' style={buttonStyle} onClick={onClick} disabled={disabled}>
      {text}
    </div>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

SecondaryButton.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default SecondaryButton;

