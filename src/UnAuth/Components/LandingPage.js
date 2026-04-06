import "./LandingPage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TimeStamp from "./TimeSTamp";
import Bumpups from "./bumpups";

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <main className="landing-page__main">
        <div className="landing-page__content">
          <Bumpups />
          <section className="landing-page__hero">
            <h1 className="landing-page__title">Hello landing page</h1>
            <p className="landing-page__subtitle">
              Welcome — this is your landing screen.
            </p>
            <TimeStamp />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
