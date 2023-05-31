import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./styles.css";

const App = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(".text", {
      duration: 1,
      ease: "power4.out",
      y: "0%",
      stagger: 0
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="wrapperr">
        <h1>
          <span ref={textRef} className="text">
            TEXT
          </span>
        </h1>
        <h1>
          <span ref={textRef} className="text">
            REVEAL
          </span>
        </h1>

        <h1>
          <span ref={textRef} className="text">
            fffff
          </span>
        </h1>
      </div>
      <div className="wrapperr">
        <h1>ssss</h1>
      </div>
    </div>
  );
};

export default App;
