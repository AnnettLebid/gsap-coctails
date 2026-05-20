import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div className="border border-red-500 flex-center h-[100vh]">App</div>;
};

export default App;
