import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top, 10%',
          scrub: true,
          ease: "power1.inOut",
        },
      });
    });
  }, {scope: scrollRef});

  return (
    <main className="">
      <div className="bg-black/80 h-screen w-full  px-10 py-5 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-slate-300">scroll down to see animation</span>
        <svg
        className="animate-bounce mt-5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox=" 0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V1" />
        <path d="M5 12l7 7 8-8" />
      </svg>
      </div>
      <svg
        className="animate-bounce mt-5 mx-auto "
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox=" 0 0 24 24"
        fill="none"
        stroke="blue"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7 7 7-7" />
      </svg>
      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
