function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <img
            src={
              "https://mtobaly.sitecloud.sk/wp-content/uploads/elementor/thumbs/mtm-logo-qse7b4y7w10mhvg31d7rldcigeuh6si7s055be2874.png"
            }
            alt="logo"
          ></img>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">FEFCO katalóg</a>
            </li>
            <li>
              <a href="https://mtobaly.sitecloud.sk/portfolio-produktov/">
                Portfólio produktov
              </a>
            </li>
            <li>
              <a href="https://mtobaly.sitecloud.sk/o-nas/">O nás</a>
            </li>
            <li>
              <a href="https://mtobaly.sitecloud.sk/kontakt/">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
