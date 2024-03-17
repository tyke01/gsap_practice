import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  return (
    <main>
      <div className="mt-20">
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          className="bg-black/80 px-4 py-3 rounded-lg text-xl text-white"
        >
          play/pause
        </button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-md" />
      </div>
    </main>
  );
};

export default GsapTimeline;
