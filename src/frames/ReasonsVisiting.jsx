import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../components/SampleArrows";
import './ReasonsVisiting.css'

const ReasonsVisiting = () => {
  const sliderRef = useRef(null);
  const textSliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30%",
    arrows: false,
    focusOnSelect: true,
  };

  const textSliderSettings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 2000,
    waitForAnimate: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
  };

  const styles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 0,
    backgroundColor: "white",
  };

  const reasonsContentStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const itemStyles = {
    height: "80vh",
    backgroundColor: "black",
    backgroundSize: "cover",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const infoBoxContentStyles = {
    width: "100%",
    minHeight: "50vh",
    height: "70vh",
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "20px",
    // justifyContent: "flex-start",
    // alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={styles}>
      <h2 className="reasons-header">Причины поехать в Италию</h2>
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
              <div key={1} className="infoSlide" style={infoBoxContentStyles}>
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
              <button className="button infoBoxButton">
                Подробнее
              </button>
            </div>
            <div style={itemStyles}>
              <div key={2} className="infoBox" style={infoBoxContentStyles}>
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
            <div style={itemStyles}>
              <div key={3} className="infoBox" style={infoBoxContentStyles}>
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
        <div className="sliderContainer unique-slider-wrapper" style={{ width: "60%", height: "auto" }}>
          <Slider  {...sliderSettings} ref={sliderRef}>
            <div>
              <h3 style={itemStyles}>1</h3>
            </div>
            <div>
              <h3 style={itemStyles}>2</h3>
            </div>
            <div>
              <h3 style={itemStyles}>3</h3>
            </div>
            <div>
              <h3 style={itemStyles}>4</h3>
            </div>
            <div>
              <h3 style={itemStyles}>5</h3>
            </div>
            <div>
              <h3 style={itemStyles}>6</h3>
            </div>
          </Slider>
        </div>
        <CustomNextArrow
          className="next-arrow"
          onClick={() => {
            sliderRef.current.slickNext();
            textSliderRef.current.slickNext();
          }}
        />
      </div>
    </div>
  );
};

export default ReasonsVisiting;