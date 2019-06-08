import { useInView } from "react-intersection-observer";

const slideDow = slide => {
  if (!slide) {
    return {
      width: "35%",
      minWidth: "230px",
      padding: "10vh 2.5%",
      margin: "auto 0",
      float: "right",
      textAlign: "center",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      transform: "translateX(155%)",
      transition: "2s",
      zIndex: "2"
    };
  } else {
    return {
      width: "35%",
      minWidth: "230px",
      padding: "10vh 2.5%",
      margin: "auto 0",
      float: "right",
      textAlign: "center",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      transform: "translateX(55%)",
      transition: "1.5s",
      zIndex: "2"
    };
  }
};

const Deals = props => {
  const [slideDeal, showDeal] = useInView({
    // Optional options
    threshold: 0.7,
    triggerOnce: true
  });

  return (
    <div
      id="deals"
      ref={slideDeal}
      show={showDeal}
      style={{
        position: "relative",
        height: "80vh",
        width: "100%",
        margin: "5vh 0",
        justifyContent: "flex-end",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <img
        alt="Truthy Smoothie surrounded by fruit."
        src="../static/fruit.jpg"
        style={{
          position: "absolute",
          height: "100%",
          repeat: "none",
          zIndex: "1"
        }}
      />

      <div style={slideDow(showDeal)}>
        <h1 style={{ fontFamily: "gelo, serif" }}>Deal of the Week</h1>

        <h2
          style={{
            fontFamily: "menco, sans-serif",
            fontWeight: "500",
            display: "block",
            marginTop: "2em"
          }}
        >
          Buy any Sandwich and get a
          <br />
          <span style={{ fontSize: "1.5em", fontWeight: "1000" }}>FREE</span>
          <br />
          Large Fruit Smoothie
        </h2>
      </div>
    </div>
  );
};

export default Deals;
