import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo("#orange-box",{
        x:0,
        rotation: 0,
        borderRadius: "0%",
    }, {
      x: 250,
      repeat: -1,
      yoyo: true,
      borderRadius: "100%",
      rotation: 360,
      duration: 2,
      ease: "bounce.out",
    });
  }, []);

  return (
    <main>
      <div className="mt-20">
        <div id="orange-box" className="w-20 h-20 bg-green-500 rounded-md" />
      </div>
    </main>
  );
};

export default GsapFromTo;
