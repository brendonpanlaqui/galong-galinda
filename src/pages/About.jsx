export default function About() {
  return (
    <main>
      <div className="flex flex-col w-full">
        
        {/* SECTION 1: HERO */}
        <section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl border-b border-surface-container-high/60">
          {/* Atmospheric Dual-Energy Glows (Consistent with Home) */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                <div className="flex flex-wrap items-center gap-space-xs"></div>
                <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero font-bold text-on-surface tracking-tight leading-tight">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x drop-shadow-sm">Galóng Galínda</span>
                </h1>
                <div className="flex flex-col gap-space-sm text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  <p className="font-normal text-on-surface">
                    Our organization focuses on the <b>Physical Education community, providing seminars, workshops, training programs, and events</b> designed to develop both individual talents and professional skills. We believe that Physical Education goes beyond physical activity—it is a platform for learning, leadership, self-expression, teamwork, and personal growth.
                  </p>
                </div>
              </div>
              
              {/* Right Column: Original Card with Subtle Float */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-surface-container-lowest/80 backdrop-blur-sm p-space-lg shadow-[0_20px_50px_-10px_rgba(178,1,18,0.15)] flex flex-col items-center justify-center border border-surface-container-highest text-center animate-float-slow">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden p-2 flex items-center justify-center">
                    <img alt="Galóng Galínda Crest Emblem" className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500" src="/gallery/sticker%20(2).webp" />
                  </div>
                  <div className="mt-space-md">
                    <span className="font-label-badge text-label-badge tracking-widest text-primary uppercase block">Official Motto</span>
                    <p className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight mt-0.5">
                      “Patinikang Gâlo, Ipákit Ing Galíng Da”
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-1">
                      Sharpen movement, display their greatness and innate talent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: OUR GOALS */}
        <section className="w-full py-space-xl bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
            
            <div className="flex flex-col gap-space-sm max-w-3xl mb-space-md">
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Our Goals</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Galóng Galínda aims to design and implement meaningful seminars, training programs, workshops, and events for the Physical Education community that promote purposeful movement and learning.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We aim to help participants develop their four core pillars:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-primary/20 shadow-sm flex flex-col gap-space-xs hover:border-primary hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary font-bold">01</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Galing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through the discovery and enhancement of their talents and skills</p>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-secondary/20 shadow-sm flex flex-col gap-space-xs hover:border-secondary hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">psychology</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">02</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Karunungan</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through education, training, and practical experiences</p>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-tertiary/20 shadow-sm flex flex-col gap-space-xs hover:border-tertiary hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">handshake</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-tertiary font-bold">03</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Pakikiisa</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through teamwork and active participation</p>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-sm flex flex-col gap-space-xs hover:border-on-surface-variant hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">diversity_3</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant font-bold">04</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Pakikisama</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through collaboration, respect, and camaraderie</p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: OUR EXPERIENCE & COMMITMENT */}
        <section className="w-full py-space-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                  Our Experience &amp; Commitment
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  For us, an event is more than a gathering. It is an opportunity to learn, connect, and showcase what we can do.
                </p>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <div>Through every seminar, workshop, training session, and event, Galóng Galínda continues to uphold the values behind our name:</div>
                  <div><br /></div>
                  <div><b>Galing. Karunungan. Pakikiisa. Pakikisama.</b></div>
                  <div><br /></div>
                  <div>Together, we create experiences that move people—not only physically, but also toward growth, learning, confidence, and excellence.</div>
                </div>
              </div>
              
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md group">
                  <img alt="City College of Angeles PE stage committee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/so%20(7).jpg"  />
                </div>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="relative h-36 rounded-xl overflow-hidden shadow-sm group">
                    <img alt="PE mass field routine demonstration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/pe%20(8).jpg"  />
                  </div>
                  <div className="relative h-36 rounded-xl overflow-hidden shadow-sm group">
                    <img alt="Sports officiating covered court assembly" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/so%20(4).jpg"  />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-transparent to-transparent flex items-end p-2">
                      <span className="text-inverse-on-surface text-[11px] font-label-badge uppercase tracking-wider font-bold"><br /></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: OUR TEAM */}
        <section className="w-full py-space-xl bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">THE MINDS &amp; HANDS BEHIND GALÓNG GALÍNDA</span>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Our Team</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Each member contributes different skills and responsibilities in planning, coordination, documentation, communication, program implementation, and event management.
                </p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-surface-container-high/80 grid grid-cols-1 md:grid-cols-2 gap-space-md items-center">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-sm">
                <img alt="Galóng Galínda Executive Committee" className="w-full h-full object-cover" src="/gallery/so%20(7).jpg"  />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-sm">
                <img alt="CCA Student Delegates and Arbiters" className="w-full h-full object-cover" src="/gallery/so%20(3).jpg"  />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CLOSING ANTHEM */}
        <section className="w-full py-space-xl bg-surface-container-low border-y border-surface-container-high/60">
          <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center flex flex-col items-center gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-label-badge uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
              Official Motto &amp; Anthem
            </div>
            <span className="font-headline-sm sm:font-headline-md font-bold text-primary tracking-wide">
              “Patinikang Gâlo, Ipákit Ing Galíng Da”
            </span>
            <blockquote className="font-headline-sm md:text-headline-md text-on-surface font-semibold leading-relaxed max-w-4xl">
              “At Galóng Galínda, we believe that everyone has the potential to excel. Through galing, karunungan, pakikiisa, at pakikisama, we continue to create opportunities where people can learn, move, connect, and grow together.”
            </blockquote>
          </div>
        </section>

      </div>
    </main>
  );
}