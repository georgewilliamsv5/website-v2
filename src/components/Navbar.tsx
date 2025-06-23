/**
 * @copyright 2025 George Lloyd Williams V
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useEffect, useRef } from "react";

type NavBarProps = {
  navOpen: boolean;
  className?: string;
};

const Navbar = ({ navOpen, className = " " }: NavBarProps) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    const link = lastActiveLink.current;
    const box = activeBox.current;

    if (link && box) {
      box.style.top = `${link.offsetTop}px`;
      box.style.left = `${link.offsetLeft}px`;
      box.style.width = `${link.offsetWidth}px`;
      box.style.height = `${link.offsetHeight}px`;
    }
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;

    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }

    target.classList.add("active");
    lastActiveLink.current = target;

    if (activeBox.current) {
      activeBox.current.style.top = `${target.offsetTop}px`;
      activeBox.current.style.left = `${target.offsetLeft}px`;
      activeBox.current.style.width = `${target.offsetWidth}px`;
      activeBox.current.style.height = `${target.offsetHeight}px`;
    }
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#professional-work",
      className: "nav-link",
    },
    {
      label: "References",
      link: "#references",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <nav className={`navbar ${navOpen ? "active" : ""} ${className}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
