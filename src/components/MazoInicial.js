import React from "react";
import "../App.css";
// import TweenOne from "rc-tween-one";
// // import PuffLoader from "./Loader";
// import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";
// TweenOne.plugins.push(BezierPlugin);

const InitialDeck = ({ imagesArr, setCardPicked }) => {
  //   const animation = {
  //     bezier: {
  //       type: "thru",
  //       curviness: 1,
  //       vars: [{ x: 800, y: 0 }],
  //     },
  //     duration: 1000,
  //     ease: "easeOutSine",
  //   };

  const handleClick = () => {
    setCardPicked(true);
  };

  const renderCartas = () => {
    return (
      <>
        <p className="pintro">Memorice una carta... cualquier carta</p>
        <button onClick={handleClick} className="button">
          Ok, ya estoy listo!
        </button>
        <div style={{ width: "0" }} className="row">
          {imagesArr.map((image, index) => (
            <div className="column">
              <img
                className={`image${index}`}
                key={index}
                src={`${image}`}
                alt=""
                //   style={{
                //     position: "absolute",
                //     left: "0",
                //     top: "70px",
                //   }}
              />
            </div>
          ))}
        </div>
      </>
    );
  };

  const AlgoEstaFallando = () => {
    return (
      <>
        <p className="pintro">ヽ༼ ಠ益ಠ ༽ﾉ</p>
      </>
    );
  };

  //Loop through the 21 card images and display them for user to mentally pick a card.
  return (
    <div
      style={{
        position: "relative",
        margin: "0 auto",
        width: "1200px",
        textAlign: "center",
      }}
    >
      {imagesArr.length === 21 ? renderCartas() : <AlgoEstaFallando />}
    </div>
  );
};

export default InitialDeck;
