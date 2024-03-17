import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const GsapTo = () => {

    useGSAP(() => {
        gsap.to('#blue-box', {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration:2,
            ease: "elastic",

        })
    }, [])

  return (
    <main>
        <div className="mt-20">
            <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-md"/>
        </div>
    </main>
  )
}

export default GsapTo