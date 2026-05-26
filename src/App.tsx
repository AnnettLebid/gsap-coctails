import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default App;
