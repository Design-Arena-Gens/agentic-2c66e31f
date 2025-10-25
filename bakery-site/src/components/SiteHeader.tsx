import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cakes", label: "Cakes" },
  { href: "/chocolates", label: "Chocolates" },
  { href: "#visit", label: "Visit Us" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link href="/" className="brand" aria-label="Velvet Crumb Bakery home">
          <span className="brand-mark" aria-hidden="true">
            VC
          </span>
          <span className="brand-text">
            Velvet <span>Crumb</span> Bakery
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
