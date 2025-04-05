import { useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-primary dark:text-blue-400">
          RS<span className="text-slate-800 dark:text-slate-200">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#blog" className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Blog</a>
          <a href="#experience" className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Experience</a>
          <a href="#contact" className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-5 w-5 text-slate-600 dark:text-slate-300" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-900 shadow-md`}>
        <div className="container mx-auto px-6 py-3 flex flex-col space-y-4">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Blog</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Experience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
