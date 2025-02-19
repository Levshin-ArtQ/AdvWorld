import PropTypes from 'prop-types';
import ArrowRight from '../assets/arrow-right-icon.svg';
import ArrowLeft from '../assets/arrow-left-icon.svg';

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
        backgroundColor: 'transparent', 
        color: 'white',

      }}
      onClick={onClick}
    ><img src={ArrowRight} alt=">" className="arrowRight" /></div>
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
        backgroundColor: 'transparent', 
        color: 'white',

      }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="<" className="arrowLeft" />
    </div>
  );
}
CustomPrevArrow.propTypes = { className: PropTypes.string, style: PropTypes.object, onClick: PropTypes.func };
export { CustomNextArrow, CustomPrevArrow };