import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} Ultra Barber Salon. All rights reserved.
        </p>
        <p className="footer__note">Walk-ins welcome · Book online anytime</p>
      </div>
    </footer>
  );
}

export default Footer;
