import AdvWorldLogo from '../assets/AdvWorldLogoLight.svg'

const Navigation = () => {
  const navigationStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    

    // background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1000,
    color: 'white',
    transiction: 'background 0.3s ease'
  }

  return (
      <nav className="nav" style={navigationStyles}>
        <a className="logo-link link nav-link nav-item"><img src={AdvWorldLogo} alt="" className="logo-img" /></a>
        <a className="nav-item link nav-link">О нас</a>
        <a className="nav-item link nav-link">Все туры</a>
        <a className="nav-item link nav-link">Отзывы</a>
        <a className="nav-item link nav-link">Контакты</a>
      </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;