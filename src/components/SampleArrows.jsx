import PropTypes from 'prop-types';

const CustomNextArrow = ({ className, onClick }) => {
  return (
    <div
      className={className}
      style={{
        // display: 'block', 
        display: 'flex',
        fontSize: '50px', 
        centerText: 'true',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'black', 
        color: 'white',

      }}
      onClick={onClick}
    >&gt;</div>
  );
}

CustomNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const CustomPrevArrow = ({ className, onClick }) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex', 
        fontSize: '50px', 
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'black', 
        color: 'white',

      }}
      onClick={onClick}
    >
      &lt;
    </div>
  );
}
CustomPrevArrow.propTypes = { className: PropTypes.string, style: PropTypes.object, onClick: PropTypes.func };
export { CustomNextArrow, CustomPrevArrow };