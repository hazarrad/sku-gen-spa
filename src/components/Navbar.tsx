
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-brand-blue">
            SKU<span className="text-brand-darkBlue">Gen</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue/5">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white">
              Sign Up Free
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-brand-blue py-2 px-4"
            >
              {link.name}
            </button>
          ))}
          <hr className="my-2" />
          <Link to="/login" className="w-full">
            <Button variant="outline" className="w-full text-brand-blue border-brand-blue hover:bg-brand-blue/5">
              Log In
            </Button>
          </Link>
          <Link to="/signup" className="w-full">
            <Button className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white">
              Sign Up Free
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
