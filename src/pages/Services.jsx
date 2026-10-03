export default function Services() {
  const handleInquirySubmit = (e) => {
    e.preventDefault();
    alert('Inquiry recorded! Thank you for supporting Galong Galinda (Educational Demonstration).');
  };

  return (
    <main>
      <div className="flex flex-col w-full">
        
        <section className="relative w-full bg-surface-container-lowest overflow-hidden py-16 lg:py-24 border-b border-surface-container-high/50">
          {/* Atmospheric Dual-Energy Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                <h1 className="font-display-hero text-4xl lg:text-[64px] lg:leading-[72px] text-on-surface font-bold tracking-tight">
                  Products &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x drop-shadow-sm">Services</span>
                </h1>
                <div className="font-body-lg text-lg text-on-surface-variant leading-relaxed mt-4">
                  <p>Galóng Galínda offers sports officiating services, referee clinics, and event support designed for schools, sports organizations, and community events.</p>
                  <p className="mt-2">We also feature carefully selected nutrition and personal-care products like Nutrifit Crackers and ArmFeet Deodorant Powder to support an active, healthy collegiate lifestyle.</p>
                </div>
              </div>
              
              {/* Highlights Pill Box (Enhanced with glass effect to match) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-space-sm p-space-md rounded-xl bg-surface-container-lowest/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-container-highest self-stretch shrink-0">
                  <a href="#officiating" className="flex items-center gap-space-sm p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors group">
                    <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">sports</span>
                    <span className="font-headline-sm text-[15px] font-bold text-on-surface">Officiating</span>
                  </a>
                  <a href="#nutrifit" className="flex items-center gap-space-sm p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors group">
                    <span className="w-10 h-10 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">bakery_dining</span>
                    <span className="font-headline-sm text-[15px] font-bold text-on-surface">Nutrifit</span>
                  </a>
                  <a href="#armfeet" className="flex items-center gap-space-sm p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors group">
                    <span className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">clean_hands</span>
                    <span className="font-headline-sm text-[15px] font-bold text-on-surface">ArmFeet</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: UNIFIED SHOWCASE CATALOG */}
        <section className="w-full py-space-xl bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-24 lg:gap-32">
            
            {/* ITEM 1: Sports Officiating (Text Left, Image Right) */}
            <div id="officiating" className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center scroll-mt-32">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div>
                  <h2 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-on-surface">Officiating Services</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Professional sports officiating, referee clinics, and technical court marshaling for intramurals, campus leagues, and inter-collegiate competitions. 
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-md sm:col-span-2 h-64 bg-surface-container">
                  <img alt="Galóng Galínda collegiate sports arbiters" className="w-full h-full object-cover" src="/gallery/so%20(7).jpg" />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-sm h-40 bg-surface-container">
                  <img alt="Student delegates participating in referee training" className="w-full h-full object-cover" src="/gallery/so%20(3).jpg"  />
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-center border border-surface-container-high/50">
                  <span className="font-label-badge text-label-badge uppercase text-primary font-bold">Booking Requirement</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Please secure dates at least 2 weeks prior to tournament tip-off for optimal scheduling.</p>
                </div>
              </div>
            </div>

            {/* ITEM 2: Nutrifit Crackers (Image Left, Text Right) */}
            <div id="nutrifit" className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center scroll-mt-32">
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 bg-surface-container">
                  <img alt="Nutrifit Crackers" className="w-full h-full object-cover" src="/gallery/crackers.jpg"  />
                  <div className="absolute top-3 left-3 bg-tertiary text-on-tertiary px-3 py-1 rounded-full font-label-badge text-[10px] uppercase font-bold">
                    Official Product
                  </div>
                </div>
                {/* Facebook Video Compact Wrapper */}
                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 bg-black flex flex-col">
                  <div className="px-3 py-2 bg-inverse-surface/90 border-b border-surface-container-highest/20 flex justify-between items-center z-10">
                    <span className="font-label-badge text-[10px] uppercase text-secondary-fixed flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">movie</span> Promo Reel
                    </span>
                  </div>
                  <div className="flex-1 w-full relative">
                    <iframe 
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1516798193346768%2F&show_text=false&width=560&t=0" 
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ border: 'none', overflow: 'hidden' }} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-md order-1 lg:order-2">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-badge text-label-badge uppercase tracking-wider mb-3">
                    Athletic Nutrition
                  </div>
                  <h2 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-on-surface">Nutrifit Crackers</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Whole-grain fortified crackers offering a convenient snack option for students and athletes during active days and sports activities. 
                </p>
                <p className="font-body-md text-on-surface-variant">
                  Engineered to avoid sugar crashes while supplying clean, long-lasting energy through slow-releasing complex carbohydrates.
                </p>
                
              </div>
            </div>

            {/* ITEM 3: ArmFeet Powder (Text Left, Image Right) */}
            <div id="armfeet" className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center scroll-mt-32">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-badge text-label-badge uppercase tracking-wider mb-3">
                    Personal Care
                  </div>
                  <h2 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-on-surface">ArmFeet Powder</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  2-in-1 underarm and foot deodorant powder designed to help maintain freshness and comfort during intensive sports, training, and daily campus activities.
                </p>
                <p className="font-body-md text-on-surface-variant">
                  Specially formulated for student athletes facing prolonged training sessions and tournaments in tropical weather conditions.
                </p>
                <div className="p-space-sm rounded-xl bg-surface-container-low border border-secondary/20 inline-block self-start mt-2">
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 bg-white border border-surface-container flex items-center justify-center">
                  <img alt="ArmFeet Underarm & Foot Deodorant Powder" className="max-h-full w-auto object-contain" src="/gallery/crackers-armfeet.jpg" />
                </div>
                {/* Facebook Video Compact Wrapper */}
                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 bg-black flex flex-col">
                  <div className="px-3 py-2 bg-inverse-surface/90 border-b border-surface-container-highest/20 flex justify-between items-center z-10">
                    <span className="font-label-badge text-[10px] uppercase text-secondary-fixed flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">movie</span> Promo Reel
                    </span>
                  </div>
                  <div className="flex-1 w-full relative">
                    <iframe 
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1445901410357588%2F&show_text=false&width=560&t=0" 
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ border: 'none', overflow: 'hidden' }} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        
      </div>
    </main>
  );
}