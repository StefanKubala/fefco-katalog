import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <nav className="nav">
        <a href="/" className="logo">
          <img
            src="https://mtobaly.sitecloud.sk/wp-content/uploads/elementor/thumbs/mtm-logo-qse7b4y7w10mhvg31d7rldcigeuh6si7s055be2874.png"
            alt="logo"
          ></img>
        </a>
        <div className="nav-menu">
          <a href="https://fefco-katalog.vercel.app/" className="menu-link">
            FEFCO katalóg
          </a>
          <a
            href="http://www.mtmobaly.sk/portfolio-produktov/"
            className="menu-link"
          >
            Portfólio produktov
          </a>
          <a href="http://www.mtmobaly.sk/o-nas/" className="menu-link">
            O nás
          </a>
          <a href="http://www.mtmobaly.sk/kontakt/" className="menu-link">
            Kontakt
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <a href="/" className="menu-link">
            FEFCO katalóg
          </a>
          <a href="/about" className="menu-link">
            Portfólio produktov
          </a>
          <a href="/services" className="menu-link">
            O nás
          </a>
          <a href="/contact" className="menu-link">
            Kontakt
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
