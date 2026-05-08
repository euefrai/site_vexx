import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Portfólio', href: '#portfolio' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors shadow-[0_0_15px_rgba(147,51,234,0.5)]">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">VEXX</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+5521980202308"
            className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors"
          >
            +55 (21) 98020-2308
          </a>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5521980202308?text=Ol%C3%A1%20VEXX%2C%20quero%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] active:scale-95"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+5521980202308"
            className="text-lg font-medium text-gray-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            +55 (21) 98020-2308
          </a>
          <a
            href="https://wa.me/5521980202308?text=Ol%C3%A1%20VEXX%2C%20quero%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-purple-600 text-white text-center font-semibold rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Orçamento no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
