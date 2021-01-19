import React, { useEffect, useRef } from "react";
import "./MotorInfo.css";

type MotorInfoProps = {
  startAnimation: boolean;
};

const MotorInfo = ({ startAnimation }: MotorInfoProps) => {
  return (
    <svg
      className="motorInfo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0 1000,1000"
      width="100%"
    >
      <filter id="shadow" x="0" y="0" width="200%" height="200%">
        <feDropShadow dx="0" dy="1" floodColor="#000000" floodOpacity="1" />
      </filter>

      <MotorInfoBubble
        startAnimation={startAnimation}
        bubbleOrigin={{ x: 100, y: 40 }}
        lineKnee={{ x: 300, y: 160 }}
        focusPoint={{ x: 350, y: 210 }}
      />

      <MotorInfoBubble
        startAnimation={startAnimation}
        bubbleOrigin={{ x: 50, y: 200 }}
        lineKnee={{ x: 250, y: 300 }}
        focusPoint={{ x: 300, y: 350 }}
      />

      <MotorInfoBubble
        startAnimation={startAnimation}
        bubbleOrigin={{ x: 800, y: 100 }}
        lineKnee={{ x: 700, y: 200 }}
        focusPoint={{ x: 600, y: 300 }}
      />
    </svg>
  );
};

type Point = {
  x: number;
  y: number;
};

type MotorInfoBubbleProps = {
  bubbleOrigin: Point;
  lineKnee: Point;
  focusPoint: Point;
  startAnimation: boolean;
};

const MotorInfoBubble = ({
  bubbleOrigin,
  lineKnee,
  focusPoint,
  startAnimation,
}: MotorInfoBubbleProps) => {
  const bubbleWidth = 100;
  const bubbleHeight = Math.abs(bubbleOrigin.y - lineKnee.y);

  const animRevealRef = useRef<SVGAnimateElement>(null);
  const animResetRef = useRef<SVGAnimateElement>(null);

  useEffect(() => {
    if (startAnimation) {
      // @ts-expect-error: <animate> elements are not typed correctly yet
      animRevealRef.current?.beginElement();
    } else {
      // @ts-expect-error: <animate> elements are not typed correctly yet
      animResetRef.current?.beginElement();
    }
  }, [startAnimation]);

  return (
    <g className="motorInfoBubble">
      <line
        x1={focusPoint.x}
        y1={focusPoint.y}
        x2={focusPoint.x}
        y2={focusPoint.y}
      >
        <animate
          id="animReveal"
          ref={animRevealRef}
          attributeName="x2"
          to={lineKnee.x}
          dur="0.2s"
          begin="indefinite"
          fill="freeze"
        />
        <animate
          attributeName="y2"
          to={lineKnee.y}
          dur="0.2s"
          begin="animReveal.begin"
          fill="freeze"
        />

        <animate
          id="animReset"
          ref={animResetRef}
          attributeName="x2"
          to={focusPoint.x}
          dur="0.2s"
          begin="indefinite"
          fill="freeze"
        />
        <animate
          attributeName="y2"
          to={focusPoint.y}
          begin="animReset.begin"
          dur="0.2s"
          fill="freeze"
        />
      </line>

      <line x1={lineKnee.x} y1={lineKnee.y} x2={lineKnee.x} y2={lineKnee.y}>
        <animate
          attributeName="x2"
          to={
            bubbleOrigin.x > lineKnee.x
              ? bubbleOrigin.x + bubbleWidth
              : bubbleOrigin.x
          }
          dur="0.5s"
          begin="animReveal.end"
          fill="freeze"
        />

        <animate
          attributeName="x2"
          to={lineKnee.x}
          begin="animReset.begin"
          dur="0.2s"
          fill="freeze"
        />
      </line>

      <rect x={bubbleOrigin.x} width={bubbleWidth}>
        <animate
          attributeName="y"
          from={bubbleOrigin.y + bubbleHeight}
          to={bubbleOrigin.y}
          dur="0.5s"
          begin="animReveal.end + 0.5s"
          fill="freeze"
        />
        <animate
          attributeName="height"
          from="0"
          to={bubbleHeight}
          dur="0.5s"
          begin="animReveal.end + 0.5s"
          fill="freeze"
        />

        <animate
          attributeName="y"
          to={bubbleOrigin.y + bubbleHeight}
          begin="animReset.begin"
          dur="0.2s"
          fill="freeze"
        />
        <animate
          attributeName="height"
          to="0"
          begin="animReset.begin"
          dur="0.2s"
          fill="freeze"
        />
      </rect>

      <circle cx={focusPoint.x} cy={focusPoint.y} r="4" />
      <circle
        cx={focusPoint.x}
        cy={focusPoint.y}
        r="10"
        fill="none"
        strokeWidth="2"
      />
      {/* <text x="100" y="50" textLength="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          blanditiis.
        </text> */}
    </g>
  );
};

export default MotorInfo;
