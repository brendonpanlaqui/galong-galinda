import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  const baseClasses = "h-full flex items-center transition-colors font-label-lg text-label-lg";
  
  // Define the classes to apply when the link IS active
  const activeClasses = "text-primary font-bold border-b-2 border-primary";
  
  // Define the classes to apply when the link is NOT active
  const inactiveClasses = "text-on-surface-variant hover:text-primary";

  // Helper to apply active state styles to the current page
  const navClass = (targetPath) => 
    `h-full flex items-center transition-colors font-label-lg text-label-lg ${
      path === targetPath 
        ? 'text-primary font-bold border-b-2 border-primary' 
        : 'text-on-surface-variant hover:text-primary'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="w-full bg-primary-container text-on-primary-container px-margin-mobile lg:px-margin py-1.5 flex items-center justify-center gap-space-sm font-label-md text-label-md uppercase tracking-wider text-center">
        <span className="material-symbols-outlined text-[16px]">warning</span>
        <span>NOTICE: THIS WEBSITE IS FOR EDUCATIONAL PURPOSES ONLY</span>
      </div>
      
      <div className="h-20 bg-surface-container-lowest/95 backdrop-blur-md px-margin-mobile lg:px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <div className="relative flex items-center justify-center">
            <img alt="Galóng Galínda Logo" className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida/AEtjO1UvKpD-zHCQyaZIeS2Nkl27SryE_Ty4VAfv7v4v73k1iuvStj2b_GlzkBTU5OSxlub-pXkM7vMuVaRmDxMOK5eqNvqgEfr7DgDaRNQ2oGUcbxhNIT7npFMjiwucTbY4GJtEkjKgFQBeLW_xP9IEnKtkvn-DFDAtAulSs0e8UTAtIgagVoWu3lfJSHLlG_fEZoWQiEmzzlLdz5jWyaEDb6No9cPrA-utoXnSiR5u8hIFbkSN3tckL7m50I6sEG8U_h4My50vHasx7A" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight leading-tight">GALÓNG GALÍNDA</span>
            <span className="font-label-badge text-label-badge text-secondary font-semibold uppercase tracking-wider">Patinikang Gâlo, Ipákit Ing Galíng Da</span>
          </div>
        </div>
        
        <nav className="hidden xl:flex items-center gap-space-lg h-full">
          <Link to="/" className={navClass('/')}>Home</Link>
          <Link to="/about" className={navClass('/about')}>About Us</Link>
          <Link to="/services" className={navClass('/services')}>Services & Workshops</Link>
          <Link to="/events" className={navClass('/events')}>Gallery & Events</Link>
          <Link to="/faq" className={navClass('/faq')}>FAQs</Link>
          <Link to="/contact" className={navClass('/contact')}>Contact Us</Link>
        </nav>
        
        <div className="flex items-center gap-space-md">
          <Link to="/contact" className="hidden sm:inline-flex items-center justify-center px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_2px_6px_-1px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_12px_rgba(178,1,18,0.25)]">
            Inquire / Book Event
          </Link>
          <button aria-label="Toggle Menu" className="xl:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface focus:outline-none">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}