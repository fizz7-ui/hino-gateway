import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav.home"), href: "/", type: "route" },
    { name: t("nav.services"), href: "#services", type: "hash" },
    { name: t("nav.countries"), href: "#countries", type: "hash" },
    { name: t("nav.training"), href: "#training", type: "hash" },
    { name: t("nav.about"), href: "/about", type: "route" },
    { name: t("nav.contact"), href: "#contact", type: "hash" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Royal Rolls Manpower" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
                >
                  {link.name}
                </a>
              )
            )}
            <LanguageSelector />
            <Link to="/login">
              <Button variant="hero" size="lg" className="animate-fade-in">
                {t("nav.getStarted")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
              <div className="pt-2">
                <LanguageSelector />
              </div>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" size="lg" className="w-full">
                  {t("nav.getStarted")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
