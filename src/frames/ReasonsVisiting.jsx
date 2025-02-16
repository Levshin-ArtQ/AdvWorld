import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../components/SampleArrows";

const ReasonsVisiting = () => {
  const sliderRef = useRef(null);
  const textSliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    color: "white",
    slidesToScroll: 1,
    // centerMode: true,
    arrows: false,
  };
  const textSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    color: "white",
    slidesToScroll: 1,
    // centerMode: true,
    arrows: false,
  };
  const styles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 0,
    // position: 'relative',
    backgroundColor: "white",
  };
  const reasonsContentStyle = {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
  };
  const itemStyles = {
    // width: "80vw",
    height: "80vh",
    zIndex: 1,
    backgroundColor: "black",
    backgroundImageSize: "cover",
    color: "white",
  };
  const infoBoxContentStyles = {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }
  return (
    <div style={styles}>
      <h2 className="reasons-header">Причины поезать в Италию</h2>
      <div className="reasons-content" style={reasonsContentStyle}>
      <CustomPrevArrow
        className="prev-arrow"
        onClick={() => {
          sliderRef.current.slickPrev();
          textSliderRef.current.slickPrev();
        }}
      />
      <div className="sliderContainer" style={{ width: "30%", height: "auto" }}>
        <Slider
          className="textSlider"
          {...textSliderSettings}
          ref={textSliderRef}
        >
          <div style={itemStyles}>
            <div key={1} className="infoBox" style={itemStyles}>
              <h3 className="infoBoxHeader">Восхищение архитектурой</h3>
              <div className="infoBoxContent" style={infoBoxContentStyles}>
                <span className="textHighlight">
                  Восхищение архитектурой Италии
                </span>{" "}
                — это путешествие через тысячелетия, которое охватывает величие
                древних цивилизаций, блеск Ренессанса и богатое культурное
                наследие.
                <br />
                Величественные здания и сооружения, такие как Колизей, собор
                Святого Петра в Ватикане и купол Брунеллески во Флоренции,
                демонстрируют инженерные достижения прошлого и вдохновляют своим
                мастерством.
                <br />
                Получите уникальную возможность проследить путь развития
                человеческой цивилизации, увидеть своими глазами великие
                памятники и произведения искусства, которые формировали мировую
                культуру.
              </div>
            </div>
          </div>
          <div>
            <div key={2} className="infoBox" style={itemStyles}>
              <h3 className="infoBoxHeader">Восхищение архитектурой</h3>
              <div className="infoBoxContent">
                <span className="textHighlight">
                  Восхищение архитектурой Италии
                </span>{" "}
                — это путешествие через тысячелетия, которое охватывает величие
                древних цивилизаций, блеск Ренессанса и богатое культурное
                наследие.
                <br />
                Величественные здания и сооружения, такие как Колизей, собор
                Святого Петра в Ватикане и купол Брунеллески во Флоренции,
                демонстрируют инженерные достижения прошлого и вдохновляют своим
                мастерством.
                <br />
                Получите уникальную возможность проследить путь развития
                человеческой цивилизации, увидеть своими глазами великие
                памятники и произведения искусства, которые формировали мировую
                культуру.
              </div>
            </div>
          </div>
          <div>
            <div key={3} className="infoBox" style={itemStyles}>
              <h3 className="infoBoxHeader">Восхищение архитектурой</h3>
              <p className="infoBoxContent">
                <span className="textHighlight">
                  Восхищение архитектурой Италии
                </span>{" "}
                — это путешествие через тысячелетия, которое охватывает величие
                древних цивилизаций, блеск Ренессанса и богатое культурное
                наследие.
                <br />
                Величественные здания и сооружения, такие как Колизей, собор
                Святого Петра в Ватикане и купол Брунеллески во Флоренции,
                демонстрируют инженерные достижения прошлого и вдохновляют своим
                мастерством.
                <br />
                Получите уникальную возможность проследить путь развития
                человеческой цивилизации, увидеть своими глазами великие
                памятники и произведения искусства, которые формировали мировую
                культуру.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="sliderContainer" style={{ width: "30%", height: "auto" }}>
        <Slider {...sliderSettings} ref={sliderRef}>
          <div>
            <h3 style={itemStyles}>1</h3>
          </div>
          <div>
            <h3 style={itemStyles}>2</h3>
          </div>
          <div style={itemStyles}>
            <h3 style={itemStyles}>3</h3>
          </div>
          <div style={itemStyles}>
            <h3 style={itemStyles}>4</h3>
          </div>
          <div style={itemStyles}>
            <h3 style={itemStyles}>5</h3>
          </div>
          <div style={itemStyles}>
            <h3 style={itemStyles}>6</h3>
          </div>
        </Slider>
      </div>
      <CustomNextArrow
        className="prev-arrow"
        onClick={() => {
          sliderRef.current.slickNext();
          textSliderRef.current.slickNext();
        }}
      />
      </div>
    </div>
  );
};

ReasonsVisiting.propTypes = {};

export default ReasonsVisiting;
