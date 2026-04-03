import "./NavBar.css";

function NavBar() {
  return (
    <header className="nav-bar">
      <div className="nav-bar__inner">
        <span className="nav-bar__brand">Ultra Barber</span>
        <nav className="nav-bar__links" aria-label="Main">
          <a href="#services" className="nav-bar__link">
            Services
          </a>
          <a href="#book" className="nav-bar__link">
            Book
          </a>
          <a href="#contact" className="nav-bar__link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
