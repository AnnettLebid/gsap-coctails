import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className=" h-screen">
      <NavBar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
