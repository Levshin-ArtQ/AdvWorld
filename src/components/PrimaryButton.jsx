import PropTypes from 'prop-types';

const PrimaryButton = ({ text, onClick, disabled }) => {
  const buttonStyle = {
    backgroundColor: '#ff4b3e',
    color: '#e5ece9',
    border: 'none',
    padding: '10px 20px',
    fontSize: '28px',
    borderRadius: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 0.3s ease',
    
  };

  return (
    <div className='primary-button' style={buttonStyle} onClick={onClick} disabled={disabled}>
      {text}
    </div>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default PrimaryButton;

