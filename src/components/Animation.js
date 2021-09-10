import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Animation = () => {
  // Landing page Olympic rings GSAP SVG animation adapted from Steve Gardner's CodePen: https://codepen.io/ste-vg/details/kXzXYW Some of his source code is refactored here to make it more ES6-compliant
  const { pressed } = useGlobalContext();
  const launchAnimation = () => {
    const count = 5;

    let circles = [];
    let lines = [];
    const colors = ["#0084c7", "#f2c418", "#000", "#00a24a", "#e01e26"];
    const reverse = [false, false, false, true, true];

    for (let i = 1; i <= count; i++) {
      let circle = document.getElementById("c" + i);
      let circleLength = circle.getTotalLength();
      circle.style.strokeDasharray = circleLength + " " + circleLength;
      circle.style.stroke = colors[i - 1];
      circles.push({
        node: circle,
        length: circleLength,
      });

      let path = document.getElementById("p" + i);
      let pathLength = path.getTotalLength();
      path.style.strokeDasharray = circleLength + " " + pathLength;
      lines.push({
        node: path,
        length: pathLength,
      });
    }

    const speed = 2.5;
    const delay = speed - 0.12;
    const delayStep = 0.2;

    const animate = () => {
      window.TweenMax.killAll();

      for (let i = 0; i < count; i++) {
        let path = lines[i].node;
        let stagger = i * delayStep;

        path.style.strokeDashoffset = lines[i].length;
        path.style.stroke = "#fff"; //colors[i];
        path.style.opacity = 0;
        path.style.strokeWidth = Math.random() * 15;
        window.TweenMax.to(path, speed, {
          delay: stagger,
          stroke: colors[i],
          strokeWidth: 5,
          opacity: 1,
          strokeDashoffset: -lines[i].length,
          ease: window.Power1.easeIn,
        });

        let circle = circles[i].node;
        circle.style.strokeDashoffset = reverse[i]
          ? -circles[i].length
          : circles[i].length;
        window.TweenMax.to(circle, speed / 4, {
          delay: stagger + delay,
          strokeDashoffset: 0,
          ease: window.Power2.easeOut,
        });
      }
    };

    animate();
    document.onclick = animate;
  };
  window.onload = launchAnimation;
  useEffect(() => {
    launchAnimation();
  }, [pressed]);
  return (
    <div className='container-landing flex-centre'>
      <svg
        width='400'
        height='400'
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 400 400'
      >
        <path
          id='p1'
          className='all'
          strokeMiterlimit='10'
          d='M0.5,99.6c297.5,39.8,367.6,91.1,371.9,132.4
	c5,48.4-76.8,112.7-117,96.7c-58.9-23.3-58.5-230.9,0.9-254.5c27.3-10.9,73,14.9,77.4,43.9c10.2,67.1-198.1,173.7-235.2,136.3
	c-13.2-13.3-4.4-44.5,8.6-74.4'
        />
        <path
          id='p2'
          className='all'
          strokeMiterlimit='10'
          d='M396.5,46.6c-26.6,154.5-107.5,261.8-196,269.1
	c-51.9,4.3-131.2-23.7-141-78.7c-7-39.2,21.2-93,68.8-101.9c59.1-11.1,116.4,55.4,106.6,87.7c-6.4,21.2-42.3,24.6-63.2,27.5'
        />
        <path
          id='p3'
          className='all'
          strokeMiterlimit='10'
          d='M188.5,350.6C67.2,311.3,14.4,202.9,41.5,135.2
	C59.3,90.3,114.3,58,169.6,57.8c48.1-0.2,109.4,24,126.4,73.5c29.2,85-92.9,182.9-123,168.1c-11.1-5.5-17.8-30.5,1.7-116.5'
        />
        <path
          id='p4'
          className='all'
          strokeMiterlimit='10'
          d='M7.2,285.3c116,68.5,242.2,60.7,305.3-6.5
	c54.8-58.3,69.1-168.9,25.8-202.5c-50.8-39.4-194.2,16.3-201.7,101.5c-4.2,47.8,34.8,100.1,52.5,95.5c30.8-8,23.8-196.1-5.2-201.2
	c-17.1-3-57.4,55-41.3,108.8c11.3,37.6,47.9,65.6,92.4,69.7'
        />
        <path
          id='p5'
          className='all'
          strokeMiterlimit='10'
          d='M383.8,279.8C184.3,119.1,108.1,101.9,78.9,124.6
	c-36,27.9-18.1,129.7,2.2,132.9c27.1,4.3,88.1-163.1,67.5-175.4C126.8,69-8.8,214.1,17.8,259.2c29.9,50.7,256.9-36.9,267.9-41.2'
        />
        <path
          id='c1'
          className='all'
          fill='none'
          stroke='#2A5AA6'
          strokeWidth='5'
          strokeMiterlimit='10'
          d='M106.9,180.7c6.3-14.9,23.4-21.9,38.3-15.6
	c14.9,6.3,21.9,23.4,15.6,38.3c-6.3,14.9-23.4,21.9-38.3,15.6c-10.8-4.6-17.9-15.2-17.9-26.9C104.6,188.2,105.4,184.3,106.9,180.7'
        />
        <path
          id='c2'
          className='all'
          strokeWidth='5'
          strokeMiterlimit='10'
          d='M168.8,250.6c-16.1,0-29.2-13.1-29.2-29.2
	s13.1-29.2,29.2-29.2c16.1,0,29.2,13.1,29.2,29.2c0,0,0,0,0,0C198.1,237.5,185,250.6,168.8,250.6'
        />
        <path
          id='c3'
          className='all'
          strokeWidth='5'
          strokeMiterlimit='10'
          d='M174.9,182.9c5-15.4,21.5-23.8,36.9-18.8
	c15.4,5,23.8,21.5,18.8,36.9c-5,15.4-21.5,23.8-36.9,18.8c-12-3.9-20.2-15.1-20.2-27.7C173.4,189,173.9,185.9,174.9,182.9'
        />
        <path
          id='c4'
          className='all'
          strokeWidth='5'
          strokeMiterlimit='10'
          d='M243.5,250c-15.8,3.3-31.3-6.9-34.5-22.7
	c-3.3-15.8,6.9-31.3,22.7-34.5c15.8-3.3,31.3,6.9,34.5,22.7c0.4,1.9,0.6,3.9,0.6,5.9C266.8,235.2,257.1,247.2,243.5,250'
        />
        <path
          id='c5'
          className='all'
          strokeWidth='5'
          strokeMiterlimit='10'
          d='M285.6,217.7c-14.1,7.9-31.9,2.8-39.8-11.3
	c-7.9-14.1-2.8-31.9,11.3-39.8c14.1-7.9,31.9-2.8,39.8,11.3c2.4,4.3,3.7,9.2,3.7,14.2C300.6,202.7,294.9,212.5,285.6,217.7'
        />
        <clipPath id='m1'>
          <path
            fill='#2D5BA4'
            d='M165.6,179.7c-3.3-8.2-9.7-14.7-17.9-18.1c-4.1-1.7-8.5-2.6-12.9-2.6c-13.4,0-25.4,8-30.7,20.3
	c-1.7,4.1-2.6,8.5-2.6,13c0,13.4,8,25.4,20.3,30.6c4.1,1.7,8.5,2.6,12.9,2.6c0.7,0,1.3,0,1.9-0.1c-0.2-1.3-0.2-2.6-0.2-3.9
	c0-1.4,0.1-2.7,0.3-4.1c-0.6,0.1-1.3,0.1-2,0.1c-3.4,0-6.7-0.7-9.8-2c-9.4-3.9-15.4-13.1-15.4-23.2c0-3.4,0.7-6.7,2-9.9
	c4-9.4,13.1-15.4,23.3-15.4c3.4,0,6.7,0.7,9.8,2c6.2,2.6,11,7.5,13.6,13.8c2.5,6.2,2.5,13.1-0.1,19.3c-2.5,6-7.1,10.6-12.8,13.2
	c-0.5,2-0.8,4.1-0.8,6.3c0,0.8,0,1.7,0.1,2.5c9.2-2.8,16.9-9.6,20.8-18.9C168.9,196.9,168.9,187.9,165.6,179.7z'
          />
        </clipPath>
        <defs>
          <clipPath id='m2'>
            <path
              fill='#F08A1A'
              d='M194.8,224.1c-1.3,12.7-12.1,22.6-25.1,22.6c-13.9,0-25.2-11.3-25.2-25.2c0-10.2,6.1-19,14.7-22.9
		c0.8-2.9,1-5.9,0.7-8.8c-13.6,4.2-23.4,16.8-23.4,31.8c0,18.3,14.9,33.2,33.2,33.2c17,0,31.1-12.9,33-29.4
		C200.1,225.2,197.4,224.8,194.8,224.1z'
            />
            <path
              fill='#F08A1A'
              d='M167.8,196.3c0.6,0,1.3-0.1,1.9-0.1c11.9,0,21.8,8.2,24.5,19.3c0.5,0.2,1.1,0.4,1.6,0.6
		c2.2,0.7,4.5,1.1,6.9,1.2c-2.1-16.4-16-29.1-33-29.1c-0.6,0-1.3,0-1.9,0.1C168.1,191,168.1,193.6,167.8,196.3z'
            />
          </clipPath>
          <clipPath id='m3'>
            <path
              d='M205.6,217.3c-0.6,0-1.3,0.1-1.9,0.1c-2.6,0-5.3-0.4-7.8-1.2c-8.5-2.8-14.7-9.7-16.7-18.1c-2.7-1.1-5.5-1.7-8.4-1.8
		c1.6,12.7,10.3,23.4,22.7,27.5c3.3,1.1,6.8,1.6,10.3,1.6c0.6,0,1.3,0,1.9-0.1C205.2,222.6,205.2,219.9,205.6,217.3z'
            />
            <path
              d='M233.3,177c-4-7.9-10.9-13.8-19.4-16.5c-3.3-1.1-6.8-1.6-10.3-1.6c-14.5,0-27.2,9.2-31.6,23c-0.7,2.1-1.1,4.3-1.4,6.4
		c2.7,0.1,5.3,0.5,7.9,1.2c0.2-1.7,0.5-3.5,1.1-5.1c3.4-10.4,13-17.5,24-17.5c2.6,0,5.3,0.4,7.8,1.2c6.4,2.1,11.6,6.5,14.7,12.5
		c3.1,6,3.6,12.9,1.5,19.3c-2.2,6.9-7.2,12.3-13.5,15.2c-0.8,2.9-1,5.8-0.7,8.8c10.2-3.1,18.4-11,21.8-21.5
		C238,193.9,237.3,184.9,233.3,177z'
            />
          </clipPath>
          <clipPath id='m4'>
            <path
              fill='#18A138'
              d='M236.6,196.3c0.7-0.1,1.3-0.1,2-0.1c11.7,0,21.9,8.2,24.5,19.5c2.7,1.1,5.5,1.6,8.4,1.7
		c-0.1-0.9-0.2-1.8-0.4-2.7c-3.2-15.4-16.8-26.5-32.5-26.5c-0.6,0-1.3,0-1.9,0.1C237,191,236.9,193.6,236.6,196.3z'
            />
            <path
              fill='#18A138'
              d='M263.6,224.3c-1.3,10.7-9.3,19.7-20,21.9c-1.7,0.3-3.4,0.5-5.1,0.5c-11.9,0-22.3-8.5-24.7-20.2
		c-1.4-6.6-0.1-13.3,3.6-19c2.6-4,6.3-7.1,10.6-9.1c0.8-2.9,1-5.9,0.7-8.8c-7.4,2.3-13.7,7-18,13.5c-4.9,7.4-6.6,16.3-4.8,25
		c3.2,15.4,16.8,26.5,32.5,26.5c2.2,0,4.5-0.2,6.7-0.7c14-2.9,24.5-14.6,26.3-28.6C268.8,225.4,266.2,225,263.6,224.3z'
            />
          </clipPath>
          <clipPath id='m5'>
            <path
              fill='#E53B22'
              d='M301.3,176.1c-5.9-10.5-17-17.1-29.1-17.1c-5.6,0-11.2,1.5-16.1,4.2c-7.8,4.3-13.4,11.4-15.8,19.9
	c-0.5,1.7-0.8,3.4-1,5.1c2.7,0.1,5.3,0.5,7.9,1.2c0.2-1.4,0.4-2.7,0.8-4.1c1.8-6.5,6.1-11.9,12-15.1c3.8-2.1,8-3.2,12.2-3.2
	c9.2,0,17.6,5,22.1,13c2.1,3.7,3.2,8,3.2,12.3c0,9.2-4.9,17.6-13,22c-3.8,2.1-8,3.2-12.2,3.2c-9.2,0-17.6-5-22.1-13
	c-1.2-2.1-2-4.3-2.5-6.5c-2.7-1.1-5.5-1.6-8.4-1.7c0.5,4.2,1.8,8.3,4,12.2c5.9,10.5,17,17.1,29.1,17.1c5.6,0,11.2-1.5,16.1-4.2
	c10.6-5.8,17.1-17,17.1-29.1C305.5,186.6,304.1,181,301.3,176.1z'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Animation;
