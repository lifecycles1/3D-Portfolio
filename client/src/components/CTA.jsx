import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Looking for a talented software engineer? <br className="sm:block hidden" />
        Let&#39;s discuss how I can contribute to your team!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
