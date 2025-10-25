import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageSelector from "@/components/LanguageSelector";
import ContactModal from "@/components/ContactModal";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navLinks = [
    { name: t("nav.home"), href: "/", type: "route" },
    { name: t("nav.training"), href: "#training", type: "hash" },
    { name: t("nav.about"), href: "/about", type: "route" },
    { name: "Job Seekers", href: "/job-seekers", type: "route" },
    { name: "Blog", href: "/blog", type: "route" },
  ];

  const countryLinks = [
    { name: "Japan", href: "/countries/japan" },
    { name: "Saudi Arabia", href: "/countries/saudi-arabia" },
  ];

  const serviceLinks = [
    { name: "Air Tickets", href: "/air-tickets" },
    { name: "Work Visas", href: "/work-visas" },
    { name: "Student Visa", href: "/student-visas" },
    { name: "Hajj And Umrah Visas", href: "/hajj-umrah" },
    { name: "Tour Package", href: "/tour-packages" },
    { name: "Okala", href: "#" },
    { name: "Language Admission", href: "#" },
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
            {/* Countries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 flex items-center gap-1">
                {t("nav.countries")}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                {countryLinks.map((country) => (
                  <DropdownMenuItem key={country.name} asChild>
                    <Link to={country.href} className="cursor-pointer">
                      {country.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 flex items-center gap-1">
                {t("nav.services")}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.href} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <LanguageSelector />
            <Button
              variant="hero"
              size="lg"
              className="animate-fade-in"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button & Language Selector */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              {/* Mobile Countries */}
              <div className="border-t border-border pt-2">
                <div className="text-muted-foreground font-semibold mb-2">
                  {t("nav.countries")}
                </div>
                {countryLinks.map((country) => (
                  <Link
                    key={country.name}
                    to={country.href}
                    className="text-foreground hover:text-primary transition-all duration-300 pl-4 py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {country.name}
                  </Link>
                ))}
              </div>
              {/* Mobile Services */}
              <div className="border-t border-border pt-2">
                <div className="text-muted-foreground font-semibold mb-2">
                  {t("nav.services")}
                </div>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="text-foreground hover:text-primary transition-all duration-300 pl-4 py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </nav>
  );
};

export default Navigation;
