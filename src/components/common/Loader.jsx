import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Loader = (props) => {
  const currentLocation = useLocation().pathname


  const pageRef = useRef(null);

  const stairDiv = useRef(null);

  useGSAP(() => {
    const fullAnimation = gsap.timeline();

    // Reset state before running
    gsap.set(stairDiv.current, { display: "block" });
    gsap.set(".stairs", { clearProps: "all" }); // remove leftover inline styles

    // 1. Show loader (already set to block above)

    // 2. Animate stairs growing
    fullAnimation.from(".stairs", {
      scaleY: 0,
      transformOrigin: 'top',
      stagger: {
        amount: 0.4,
        from: 'end'
      },
      duration: 1,
      ease: "power2.out"
    });

    // 3. Animate stairs sliding down
    fullAnimation.to(".stairs", {
      scaleY: 0,
      y: "+=100%",
      transformOrigin: 'top',
      stagger: {
        amount: 0.25,
        from: 'end'
      },
      ease: "power2.in"
    });

    // 4. Hide loader again
    fullAnimation.set(stairDiv.current, { display: "none" });

    // 5. Fade in page AFTER loader ends
    fullAnimation.from(pageRef.current, {
      delay: -1,
      opacity: 0,
      duration: 0.9,
    });

    return () => fullAnimation.kill(); // clean up old timelines
  }, [currentLocation]);



  return (
    <div className="h-screen w-full loader">
      <div
        ref={stairDiv}
        className="h-full w-full z-50 fixed top-0 left-0"
      >
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>

      {/* Actual page */}
      <div className='h-full w-full ' ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Loader;