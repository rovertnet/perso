import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Animation() {

  const compte = useRef(null)

  useLayoutEffect(()  => {
    let ctx = gsap.config(() => {
      const t1 = gsap.timeline()
    }, compte)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="relative">
        <div id="intro-slider" className=" h-screen p-10 bg-gray-100 absolute right-0 top-0 z-10 w-full flex flex-col gap-10 tracking-tight text-8xl font-bold">
          <h1 id="title-1" className=" text-8xl font-bold">Je suis le premier texte</h1>
          <h1 id="title-2" className=" text-8xl font-bold">Je suis le premier texte</h1>
          <h1 id="title-3" className=" text-8xl font-bold">Je suis le premier texte</h1>
        </div>
        <div className=" h-screen flex bg-gray-800 justify-center place-items-center">
          <h1 className="text-9xl font-bold text-gray-50">Bienvenu.</h1>
        </div>
      </div>
    </>
  );
}

export default Animation