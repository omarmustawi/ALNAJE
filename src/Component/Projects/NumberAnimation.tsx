import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const NumberAnimation = ({ endValue }: { endValue: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? endValue : 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref}>
      {number.interpolate((value: number) => Math.floor(value))}
    </animated.div>
  );
};

export default NumberAnimation;
