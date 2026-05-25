import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className=" h-screen overflow-hidden">
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
