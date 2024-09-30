import { useState } from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-grid-item">
            {" "}
            <a href="http://www.mtmobaly.sk/" className="footer-logo">
              <img
                src="https://mtobaly.sitecloud.sk/wp-content/uploads/elementor/thumbs/mtm-logo-qse7b4y7w10mhvg31d7rldcigeuh6si7s055be2874.png"
                alt="logo"
              ></img>
            </a>
            <p>
              Obalovým materiálom sa venujeme už od roku 1995. Sme ideálnou
              voľbou pre tých, ktorí hľadajú kvalitné obaly alebo hárky z
              vlnitej lepenky.
            </p>
          </div>
          <div className="footer-grid-item">
            <h5>Mapa stránky</h5>
            <ul className="footer-list">
              <li>
                <a href="http://www.mtmobaly.sk/">Domov</a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/fefco-katalog">FEFCO katalóg</a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/portfolio-produktov">
                  Portfólio produktov
                </a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/o-nas">O nás</a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/kontakt">Kontakt</a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/">GDPR & Cookies</a>
              </li>
            </ul>
          </div>
          <div className="footer-grid-item">
            <h5>Portfólio produktov</h5>
            <ul className="footer-list">
              <li>
                <a href="http://www.mtmobaly.sk/portfolio-produktov/#sekcia-klopove-krabice">
                  Klopové krabice
                </a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/portfolio-produktov/#sekcia-tvarove-vyseky">
                  Tvarové výseky
                </a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/portfolio-produktov/#sekcia-vnutorne">
                  Vnútorné vybavenie krabice
                </a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/portfolio-produktov/#sekcia-prelozky">
                  Preložky
                </a>
              </li>
              <li>
                <a href="http://www.mtmobaly.sk/portfolio-produktov/#sekcia-doplnkovy-tovar">
                  Doplnkový tovar
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-grid-item">
            <h5>Kontakt</h5>
            <ul className="footer-list footer-list-last">
              <li>
                <img
                  src="http://www.mtmobaly.sk/wp-content/uploads/2024/09/mail-icon.jpg"
                  alt="mail icon"
                ></img>
                <a href="mailto:mtmobaly@mtmobaly.sk">
                  Email: mtmobaly@mtmobaly.sk
                </a>
              </li>
              <li>
                <img
                  src="http://www.mtmobaly.sk/wp-content/uploads/2024/09/map-pin.jpg"
                  alt="map pin icon"
                ></img>
                <a href="#">Adresa: M.R. Štefánika 6, 03601 Martin</a>
              </li>
              <li>
                <img
                  src="http://www.mtmobaly.sk/wp-content/uploads/2024/09/phone-icon.jpg"
                  alt="telephone icon"
                ></img>
                <a href="tel:043/4222 522,">043/4222 522</a>
              </li>
              <li>
                <img
                  src="http://www.mtmobaly.sk/wp-content/uploads/2024/09/file-icon.jpg"
                  alt="documents icon"
                ></img>
                <a href="#,">IČO: 36005274</a>
              </li>
              <li>
                <img
                  src="http://www.mtmobaly.sk/wp-content/uploads/2024/09/file-icon.jpg"
                  alt="documents icon"
                ></img>
                <a href="#">IČ DPH : SK2020435076</a>
              </li>
              <li>
                <img
                  src="http://www.mtmobaly.sk/wp-content/uploads/2024/09/file-icon.jpg"
                  alt="documents icon"
                ></img>
                <a href="#">DIČ: 2020435076 </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <h3>
          <span>LAVERDE</span> - správa stránky
        </h3>
      </div>
    </>
  );
}

export default Footer;
