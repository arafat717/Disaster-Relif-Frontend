import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCustomCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={true}
      swipeable={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15 }}
          >
            ‹
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15 }}
          >
            ›
          </button>
        )
      }
    >
      <div style={{ height: "600px" }}>
        {" "}
        {/* Set height here */}
        <img
          src="https://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slide1.jpg"
          alt="Slide 1"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ height: "600px" }}>
        <img
          src="https://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slide2.jpg"
          alt="Slide 2"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ height: "600px" }}>
        <img
          src="https://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slid3.jpg"
          alt="Slide 3"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ height: "600px" }}>
        {" "}
        {/* Set height here */}
        <img
          src="https://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slide1.jpg"
          alt="Slide 1"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ height: "600px" }}>
        <img
          src="https://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slide2.jpg"
          alt="Slide 2"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ height: "600px" }}>
        <img
          src="https://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slid3.jpg"
          alt="Slide 3"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
    </Carousel>
  );
};

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 50,
  height: 50,
  cursor: "pointer",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  borderRadius: "50%",
  fontSize: 32,
  lineHeight: "30px",
  textAlign: "center",
};

export default MyCustomCarousel;
