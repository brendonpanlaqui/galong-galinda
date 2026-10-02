import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface py-space-xl border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
        
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            <img alt="Galóng Galínda Emblem" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1UvKpD-zHCQyaZIeS2Nkl27SryE_Ty4VAfv7v4v73k1iuvStj2b_GlzkBTU5OSxlub-pXkM7vMuVaRmDxMOK5eqNvqgEfr7DgDaRNQ2oGUcbxhNIT7npFMjiwucTbY4GJtEkjKgFQBeLW_xP9IEnKtkvn-DFDAtAulSs0e8UTAtIgagVoWu3lfJSHLlG_fEZoWQiEmzzlLdz5jWyaEDb6No9cPrA-utoXnSiR5u8hIFbkSN3tckL7m50I6sEG8U_h4My50vHasx7A" />
            <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">GALÓNG GALÍNDA</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Empowering physical education educators, student-athletes, and sports leaders across Central Luzon through kinetic mastery, sports pedagogy, and authentic collegiate community leadership.</p>
          <div className="flex items-center gap-space-sm pt-space-xs">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-all shadow-sm" title="Visit Galóng Galínda on Facebook">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-space-md">
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Quick Navigation</h4>
          <ul className="flex flex-col gap-space-xs">
            <li className="py-1"><Link to="/" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Home</Link></li>
            <li className="py-1"><Link to="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">About Organization</Link></li>
            <li className="py-1"><Link to="/services" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Services & Training Modules</Link></li>
            <li className="py-1"><Link to="/events" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Events & Documentation</Link></li>
            <li className="py-1"><Link to="/faq" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Frequently Asked Questions</Link></li>
            <li className="py-1"><Link to="/contact" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Contact Campus Office</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-space-md">
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Campus & Contact</h4>
          <div className="flex flex-col gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
            <div className="flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
              <span>City College of Angeles, Arayat Blvd., Brgy. Pampang, Angeles City, Pampanga</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px]">call</span>
              <span>0956 387 1771</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
              <span>galonggalinda@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-space-md">
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Office Hours</h4>
          <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-surface-container-highest/50">
            <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span>REGULAR SESSIONS</span>
            </div>
            <p className="font-body-md text-body-md font-semibold text-on-surface">Monday – Friday</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">8:00 AM – 5:00 PM PHT</p>
            <p className="font-label-badge text-label-badge text-tertiary pt-space-xs">Field trainings scheduled on weekends.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin mt-space-xl pt-space-md border-t border-surface-container-highest/60 flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left">
        <p className="font-body-sm text-body-sm text-on-surface-variant">© 2026 Galóng Galínda. All Rights Reserved.</p>
        <div className="inline-flex items-center gap-space-xs text-tertiary font-label-md text-label-md">
          <span className="material-symbols-outlined text-[16px]">school</span>
          <span>NOTICE: THIS WEBSITE IS FOR EDUCATIONAL PURPOSES ONLY</span>
        </div>
      </div>
    </footer>
  );
}