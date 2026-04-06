import "./NavBar.css";

function NavBar() {
  return (
    <header className="nav-bar">
      <div className="nav-bar__inner">
        <a href="#home" className="nav-bar__logo" aria-label="Ultra Barber Salon home">
          <span className="nav-bar__logo-mark" aria-hidden="true">
            <svg
              className="nav-bar__logo-icon"
              viewBox="0 0 40 36"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                d="M20 2L38 32H2L20 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="miter"
              />
              <path
                d="M20 10v14M14 17h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
          <span className="nav-bar__logo-text">
            <span className="nav-bar__logo-line">Barber</span>
            <span className="nav-bar__logo-line">Salon</span>
          </span>
        </a>

        <nav className="nav-bar__links" aria-label="Main">
          <a href="#home" className="nav-bar__link nav-bar__link--active" aria-current="page">
            Home
          </a>
          <a href="#gallery" className="nav-bar__link">
            Gallery
          </a>
          <a href="#services" className="nav-bar__link">
            Services
          </a>
          <a href="#contact" className="nav-bar__link">
            Contact us
          </a>
        </nav>

        <a href="#book" className="nav-bar__cta">
          Book now
        </a>
      </div>
    </header>
  );
}

export default NavBar;
