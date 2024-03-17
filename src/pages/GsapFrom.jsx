import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main>
      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-md" />
      </div>
    </main>
  );
};

export default GsapFrom;
