import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-12 pb-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left Column: Dynamic Hero Content */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg relative z-10">
              <div className="inline-flex items-center gap-space-xs self-start px-3 py-1.5 rounded-full bg-surface-container text-secondary">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                <span className="font-label-badge text-label-badge tracking-wider uppercase">City College of Angeles • EVENT3 Academic Initiative</span>
              </div>
              
              <div className="flex flex-col gap-space-sm">
                <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight leading-[1.08]">
                  Empowering <span className="text-primary underline decoration-primary/30 decoration-wavy decoration-2">Physical Education</span> Through Purposeful Movement & Excellence
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs">
                  <span className="font-semibold text-primary">“Patinikang Gâlo, Ipákit Ing Galíng Da”</span> — Igniting the innate skill, kinetic discipline, and fire within student-athletes, physical educators, and institutional sports leaders across Central Luzon.
                </p>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <Link to="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(178,1,18,0.28)] hover:-translate-y-0.5">
                  <span>EXPLORE OUR WORKSHOPS</span>
                  <span className="material-symbols-outlined text-[18px]">sports</span>
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary font-label-lg text-label-lg transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">event_available</span>
                  <span>BOOK AN EVENT / INQUIRE</span>
                </Link>
              </div>

              {/* Institutional Trust Proofs */}
              <div className="grid grid-cols-3 gap-space-sm pt-space-md max-w-xl">
                <div className="flex flex-col p-space-sm rounded-lg bg-surface-container-low">
                  <span className="font-headline-md text-headline-md text-primary font-bold">50+</span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">Workshops Hosted</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-surface-container-low">
                  <span className="font-headline-md text-headline-md text-secondary font-bold">1,500+</span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">PE Educators & Athletes</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-surface-container-low">
                  <span className="font-headline-md text-headline-md text-tertiary-container font-bold">100%</span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">Kinetic Mastery Focus</span>
                </div>
              </div>
            </div>

            {/* Right Column: Emblem Spotlight & Kinetic Aura */}
            <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]" fill="none" viewBox="0 0 400 400">
                  <circle className="text-secondary/25" cx="200" cy="200" r="185" stroke="currentColor" strokeDasharray="14 10" strokeWidth="2" />
                  <circle className="text-primary/30" cx="200" cy="200" r="150" stroke="currentColor" strokeDasharray="6 8" strokeWidth="2" />
                </svg>
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-fixed/60 via-surface-container to-secondary-fixed/50 blur-xl opacity-75"></div>
                
                <div className="relative z-10 w-72 sm:w-84 h-72 sm:h-84 rounded-full p-2 bg-surface-container-lowest shadow-[0_20px_40px_-10px_rgba(19,27,46,0.18)] flex items-center justify-center">
                  <img alt="Galóng Galínda Phoenix Emblem" className="w-full h-full object-contain rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIqStjIyN-GDtk0jJB2yBde3U0rX1qGSE6ceeRTLuVhePqWXySiJNYTdqcmYu_rYoOvjZ6TuC2pbr--6_p3wJcQgVtCnEgB8nzOImBu6rqV5ZUU5Ie5a28cYGAE6Swg-LzwGy7o8HMq0OKZ7zzR8A0aEeSIkFqy2KYbPH02sL4382Bt3YNMUAMzvW69z20YAQCkLz1ah-QNDx9L6FkDb1RKKWXBYNSZggwtypn9chkq8F4MxUL2rWQPzbzJwguX0nfvg" />
                </div>

                <div className="absolute -top-2 right-4 z-20 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                  <span className="font-label-badge text-label-badge text-on-surface uppercase">Apalit • Angeles City</span>
                </div>
                <div className="absolute -bottom-2 left-4 z-20 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                  <span className="font-label-badge text-label-badge text-secondary font-bold uppercase">CCA PE Endorsed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PURPOSE & SALIENT PILLARS */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-7 flex flex-col gap-space-xs">
              <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest font-bold">Academic Genesis & Scope</span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
                What is <span className="text-primary">Galóng Galínda</span>?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Galóng Galínda is an innovative, student-driven event and workshop management organization born out of the <strong>EVENT3 subject at the City College of Angeles (CCA)</strong>. Designed collaboratively with the Physical Education Department, our mission bridges theoretical human kinetics with professional game management, coaching pedagogy, and grassroots sports empowerment.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-tertiary-container text-[28px]">verified_user</span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Curricular Legitimacy</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Structured in compliance with standard Philippine tertiary physical education benchmarks and practical field protocols.</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Salient Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-full h-1.5 bg-primary absolute top-0 left-0"></div>
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">fitness_center</span>
              </div>
              <span className="font-label-badge text-label-badge text-primary uppercase">Pillar 01</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Holistic Kinesthetic Learning</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Workshops rooted in high-fidelity motor skills, purposeful biomechanical movement, and long-term health optimization for both aspiring competitive student-athletes and grassroots learners.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-primary font-label-md text-label-md">
                <span>Motor Skills & Conditioning</span>
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
              </div>
            </div>

            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-full h-1.5 bg-secondary absolute top-0 left-0"></div>
              <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">school</span>
              </div>
              <span className="font-label-badge text-label-badge text-secondary uppercase">Pillar 02</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Professional PE Development</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Actionable pedagogical seminars equipping modern physical education teachers and sports coaches with modernized game officiating standards, digital drills, and safety protocols.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <span>Teacher Seminars & Clinics</span>
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
              </div>
            </div>

            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-full h-1.5 bg-tertiary-container absolute top-0 left-0"></div>
              <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary-container mb-space-md">
                <span className="material-symbols-outlined text-[26px]">groups</span>
              </div>
              <span className="font-label-badge text-label-badge text-tertiary-container uppercase">Pillar 03</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Camaraderie & Sportsmanship</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                High-energy athletic festivals and multi-bracket leagues celebrating sportsmanship, teamwork, Filipino recreational games, and character-building resilience under pressure.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-tertiary-container font-label-md text-label-md">
                <span>Festivals & Tournaments</span>
                <span className="material-symbols-outlined text-[16px]">emoji_events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE OFFERINGS PREVIEW */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">Engineered For Action</span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
                Signature Programs & Service Modules
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Tailor-made athletic events, clinics, and academic PE initiatives structured for colleges, secondary institutions, and community sports councils.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:underline">
              <span>VIEW FULL CATALOG</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* Offerings Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter lg:grid-cols-3">
            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-44 w-full relative overflow-hidden bg-surface-container-high">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTV9_pZYjyGTam_Hv6791yExTW3UdT6301IqQ14673qJOPLpBgsqiPCvOveX1Ctm7y847k2Hm9latg1rbkPZiWBPcw10G70lTJ7L6ztKNj5Uspd2CdnG0OIO-bo_Z226xwBkOBvFuq_iCt_E8s2KHqjUqpkRuLfCZ9Cegwps6GapITRRPVTRfM13qcgXTlAfBn4A0knmaUWmh70kbVmNPC5ZYeJ0rjnE_bCN-KQwwv2MCZlXI9TApG" alt="Sports Officiating Services & Referee Clinic" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-secondary uppercase">Official Service</span>
              </div>
              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-secondary">Event Management & Clinic</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Sports Officiating Services</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Accredited officiating delegations, certified referee clinics, and impartial court marshaling tailored for campus intramurals, invitational leagues, and inter-collegiate matches.
                  </p>
                </div>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-primary font-label-lg text-label-lg hover:translate-x-1 transition-transform pt-space-xs">
                  <span>Explore Officiating</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-44 w-full relative overflow-hidden bg-surface-container-high">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcwHpba7yOgzvM9h-7_lc_8lq1l_9aL5m3Jo7ghfk0I0DA_-dwTAe3sEbcqIpm4IIU9Bq_i5JAg7gOL3SWnmwNZPBrMzXCcfjUh0UzbOYITTHK9fs1R5jQnXgA-Nswl8l_IOZMzQXUWVKT27tJlO9mmXE6r1SSoo9eZM_axGwiX-4ABEbOVz3nfQIyl0w5W3JdReaB-bQ5zwf3NbUyyI64iGT84lAEa_f4UcaelfPjk51j1qPeQccz" alt="Nutrifit Biscuit Healthy Athletic Energy Fortified Oat Biscuits" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-primary uppercase">Nutrition Product</span>
              </div>
              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-primary">Wholesome Energy</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Nutrifit Biscuit</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Wholesome oat and energy-fortified athletic biscuits designed to provide clean sustained vitality for student-athletes, physical education students, and tournament participants.
                  </p>
                </div>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-primary font-label-lg text-label-lg hover:translate-x-1 transition-transform pt-space-xs">
                  <span>View Nutrifit Biscuit</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-44 w-full relative overflow-hidden bg-surface-container-high">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAih_QMb82KrHZHXs0wiv3JsJhjq4Jb5Kesor2oB6J6vPquRjc-tmS-TSjJr9PLOEn7QVdyFILg8gDrkXbD6w6xYuzaasanHn2sV2yXPQtS6Oz4wjw-2KUsnVXdDjmajoPrZWxa05rb_CCi6Kz8oS-BoDgQA1njzs2bjmkVNqXN2cqZ8vX4KfvvuI8AX32WDStCQURnwoeN3q1WmsX9FDfeq33mRXnZs_wMsbE6D53TrxY7I5lGUvD2" alt="ArmFit Powder Muscle Endurance and Recovery Supplement" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-tertiary-container uppercase">Recovery Formula</span>
              </div>
              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-tertiary-container">Muscle Endurance</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">ArmFit Powder</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Targeted electrolyte and protein endurance drink mix scientifically formulated to accelerate muscle stamina, rapid post-game recovery, and peak athletic performance.
                  </p>
                </div>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-primary font-label-lg text-label-lg hover:translate-x-1 transition-transform pt-space-xs">
                  <span>View ArmFit Powder</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIALS & COMMUNITY VOICES */}
      <section className="w-full bg-surface-container-high/40 py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-badge text-label-badge text-primary font-bold uppercase tracking-wider">Voices From The Field</span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
              What Campus Leaders & Educators Say
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hear how our kinesthetic workshops and structured tournament models impacted Physical Education classes across Pampanga.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Review 1 */}
            <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center text-tertiary-container gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                  “Galóng Galínda brought electrifying precision to our intramural drills. Their movement framework not only made exercises engaging, but taught our students the anatomical purpose behind every repetition.”
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md mt-space-md border-t border-surface-container-highest/60">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary font-label-lg">MR</div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface">Mark Ryan Dizon, LPT</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">PE Department Lead, Angeles</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center text-tertiary-container gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                  “The level of event discipline, punctuality, and athletic camaraderie was unparalleled. The phoenix motif isn’t just decorative; the team’s energy is truly infectious from start to whistle blow!”
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md mt-space-md border-t border-surface-container-highest/60">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary font-label-lg">CL</div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface">Clarissa L. Santos</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">CCA Student Athlete Federation</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center text-tertiary-container gap-0.5">
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                  “The referee and tournament scheduling clinic gave our varsity volunteers the confidence to run official league matches seamlessly. A masterclass in practical sports leadership.”
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md mt-space-md border-t border-surface-container-highest/60">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary-container font-label-lg">JE</div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface">Jerome Encarnacion</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Community Sports Coordinator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION BANNER */}
      <section className="w-full bg-surface-container-lowest py-space-xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary-container to-secondary-container text-on-primary p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-on-primary/10 blur-2xl pointer-events-none"></div>
            <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-tertiary-fixed-dim/20 blur-xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-space-sm max-w-2xl">
                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-sm text-on-primary">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  <span className="font-label-badge text-label-badge tracking-wider uppercase">EVENT3 Class Project • City College of Angeles</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold leading-tight">
                  Ready to Level Up Your School's Physical Education Events?
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl">
                  Collaborate with the Galóng Galínda team for tailor-fit seminars, active clinic facilitation, or full campus tournament management.
                </p>
                <div className="flex items-center gap-space-sm pt-space-xs text-on-primary/80 font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span>Available Monday – Friday, 8:00 AM – 5:00 PM PHT for consultations.</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container font-label-lg text-label-lg transition-all shadow-lg hover:scale-105 text-center">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>SUBMIT INQUIRY</span>
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 backdrop-blur-sm text-on-primary font-label-lg text-label-lg transition-all text-center">
                  <span>CAMPUS OFFICE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}