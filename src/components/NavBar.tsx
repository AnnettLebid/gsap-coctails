import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top", //when the bottom of the navbar reaches a top of the viewport
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.out",
      },
    );
  }, []);
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" />
          <p>Velvet pour</p>
        </a>

        <ul>
          {navLinks.map((item) => (
            <li key={item.title}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
