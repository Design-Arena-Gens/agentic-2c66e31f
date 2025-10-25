export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="visit">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-heading">Visit Our Kitchen</h2>
          <p className="footer-text">
            112 Cedar Street, Willow Park
            <br />
            Wednesday — Sunday · 8am to 6pm
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Stay in Touch</h2>
          <p className="footer-text">
            Call us at <a href="tel:+14085551212">+1 (408) 555-1212</a> or email{" "}
            <a href="mailto:hello@velvetcrumb.com">hello@velvetcrumb.com</a>
          </p>
          <p className="footer-text">
            Follow along for fresh drops, seasonal desserts, and tasting events.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Hours & Pickup</h2>
          <p className="footer-text">
            Same-day pickup available for select cakes and confections.
            Pre-orders recommended for celebration cakes.
          </p>
        </div>
      </div>
      <p className="footer-note">© {year} Velvet Crumb Bakery</p>
    </footer>
  );
}
