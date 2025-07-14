import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  setShowLanding: (show: boolean) => void;
}

const Navbar = ({ setShowLanding }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu - Left Side */}
          <div className="hidden md:flex space-x-8 flex-1">
            <NavLink to="/">Producers</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          
          {/* Centered Logo */}
          <button 
            onClick={() => setShowLanding(true)} 
            className="flex items-center justify-center hover:opacity-80 transition-opacity animate-fade-in px-8"
          >
            <img 
              src="/logo.PNG" 
              alt="OMG Logo" 
              className="h-16 w-auto -mt-1" 
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
                maxWidth: 'none'
              }}
            />
          </button>

          {/* Desktop Menu - Right Side */}
          <div className="hidden md:flex space-x-8 flex-1 justify-end">
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/videos">Videos</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Producers</MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</MobileNavLink>
            <MobileNavLink to="/videos" onClick={() => setIsOpen(false)}>Videos</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white block px-3 py-3 text-xl font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;