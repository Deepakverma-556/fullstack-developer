import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Heading = ({ value, parent, }) => {
  gsap.registerPlugin(ScrollTrigger);
  const newArr = value.split("");
  useEffect(() => {
    let strategy_value = gsap.timeline({
      scrollTrigger: {
        trigger: parent,
        start: "top bottom",
        end: "20% 90%",
        scrub: 3,
      },
    });
    strategy_value.from(".text_split_child_strategy", {
      yPercent: 0,
      stagger: 0.3,
      autoAlpha: 0,
    });
  }, []);
  return (
    <h2 className="font-roboto font-bold text-xxxl max-lg:text-4xl text-green mb-9 max-lg:mb-7 max-md:mb-5 max-sm:mb-2 max-sm:text-3xl">
      {newArr.map((obj, i) => (
        <span
          key={i}
          className="text-nowrap text_split_child_strategy inline-block"
        >
          {obj}
        </span>
      ))}
    </h2>
  );
};

export default Heading;
