import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Heading = ({ value, parent }) => {
  gsap.registerPlugin(ScrollTrigger);
  const newArr = value.split("");
  useEffect(() => {
    let strategy_value = gsap.timeline({
      scrollTrigger: {
        trigger: parent,
        start: "top 70%",
        end: "bottom center",
        scrub: 2,
        markers: true,
      },
    });
    strategy_value.from(".text_split_child_strategy", {
      yPercent: 10,
      stagger: 0.3,
      autoAlpha: 0,
    });
  }, []);
  return (
    <h2 className="text-md md:text-[36px] xl:text-xl text-white font-avantt font-semibold leading-[130%] xl:whitespace-nowrap text-center lg:text-start ">
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
