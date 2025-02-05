import { Carousel } from 'antd';
import Navigation from '../components/Navigation';
import ItalyHero from '../assets/italyHero.png';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const HeroSection = () => {

  const heroSectionStyle = {
    width: '100vW',
    height: '100vh',
    displaly: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  }
  
  const localCarouselStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    displaly: 'flex',
    alignItems: 'center',
  }
  
  const imageBackgroundStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    objectFit: 'cover'
  }

  const heroContentStyle = {
    position: 'absolute',
    top: '65%',
    left: '10%',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    zIndex: 10,
    transform: 'translate(-50% -50%)',
    
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '28px',
  }

  const heroButtonsStyle = {
    display: 'flex',
    marginTop: '20px',
  }

  return (
    <div className="heroSection" style={heroSectionStyle}>
      <Navigation />
      <Carousel dots={false} arrows style={localCarouselStyle} >
        <div className="carousel-item hero-carousel-item">
          <img src={ItalyHero} alt="" className="back" style={imageBackgroundStyle} />
          <div className="hero-content" style={heroContentStyle}>
            <div className="carousel-item-text">Индивидуальные путешествия в любую точку мира и возможность создать свой тур</div>
            <div className="hero-buttons" style={heroButtonsStyle}>
              <PrimaryButton text='Создать тур' onClick={() => {}} disabled={false} />
              <SecondaryButton text='Подробнее' onClick={() => {}} disabled={false} />
            </div>
          </div>
        </div>
        </Carousel>
    </div>
  );
};

HeroSection.propTypes = {};

export default HeroSection;