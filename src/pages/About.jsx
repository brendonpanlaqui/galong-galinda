export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: EDITORIAL HERO BANNER */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl">
        <div className="absolute -top-36 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="flex flex-col gap-space-sm mb-space-md">
            <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-surface-container text-secondary font-label-badge text-label-badge uppercase tracking-wider">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              Kinetic Identity & Educational Mission
            </div>
            <h1 className="font-headline-lg lg:text-display-hero font-bold text-on-surface tracking-tight leading-tight max-w-4xl">
              About <span className="text-primary">Galóng Galínda</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Fostering Camaraderie, Talent, and Purposeful Movement across Physical Education Communities.
            </p>
          </div>
          {/* Quick Metrics Strip / Asymmetric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-lg">
            <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
              <span className="font-headline-md text-headline-md font-bold text-primary">CCA</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Campus Origin</span>
              <span className="font-body-sm text-body-sm text-on-surface">City College of Angeles</span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
              <span className="font-headline-md text-headline-md font-bold text-secondary">EVENT3</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Applied Lab</span>
              <span className="font-body-sm text-body-sm text-on-surface">Curricular Capstone Project</span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
              <span className="font-headline-md text-headline-md font-bold text-tertiary">8-RAY</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">National Heart</span>
              <span className="font-body-sm text-body-sm text-on-surface">Philippine Kinetic Pride</span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
              <span className="font-headline-md text-headline-md font-bold text-on-surface">100%</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Pedagogical</span>
              <span className="font-body-sm text-body-sm text-on-surface">Non-profit Academic Event</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MEANING BEHIND OUR IDENTITY (DUAL FLAME & PHOENIX EMBLEM) */}
      <section className="w-full py-space-xl bg-background">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Visual Phoenix Showcase (Bespoke Frame) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl bg-surface-container-lowest p-space-lg shadow-xl flex flex-col items-center justify-center">
                <div className="absolute inset-4 rounded-xl bg-gradient-to-tr from-primary/10 via-surface-container-lowest to-secondary/10 pointer-events-none"></div>
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden p-2 bg-surface-container-lowest shadow-md">
                  <img alt="Galóng Galínda Official Crest Emblem" className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida/AEtjO1UvKpD-zHCQyaZIeS2Nkl27SryE_Ty4VAfv7v4v73k1iuvStj2b_GlzkBTU5OSxlub-pXkM7vMuVaRmDxMOK5eqNvqgEfr7DgDaRNQ2oGUcbxhNIT7npFMjiwucTbY4GJtEkjKgFQBeLW_xP9IEnKtkvn-DFDAtAulSs0e8UTAtIgagVoWu3lfJSHLlG_fEZoWQiEmzzlLdz5jWyaEDb6No9cPrA-utoXnSiR5u8hIFbkSN3tckL7m50I6sEG8U_h4My50vHasx7A" />
                </div>
                {/* Motto Placard */}
                <div className="mt-space-md text-center">
                  <span className="font-label-badge text-label-badge tracking-widest text-primary uppercase block">Official Motto</span>
                  <p className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">
                    “Patinikang Gâlo, Ipákit Ing Galíng Da”
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-1">
                    Sharpen movement, display their greatness and innate talent.
                  </p>
                </div>
              </div>
            </div>
            {/* Narrative & Breakdown */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Iconography & Heraldry
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                The Meaning Behind Our Identity
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The Galóng Galínda seal reflects the mythical phoenix rising in synchronized kinetic power. It fuses timeless Kapampangan spirit with contemporary sports science pedagogy, creating a visual talisman for educators and athletes alike.
              </p>
              {/* Component Grid for the 3 visual pillars of the emblem */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                {/* Orange/Red Flame */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                  <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-primary">Blaze Crimson</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Embodying cardiovascular grit, passion, and fierce dedication to grassroots movement development.
                  </p>
                </div>
                {/* Electric Blue Flame */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                  <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-1">
                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary">Electric Kinetic</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Signifying tactical discipline, intellect, agility, and fluid motor execution across sports disciplines.
                  </p>
                </div>
                {/* 8-Ray Philippine Sun */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                  <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary mb-1">
                    <span className="material-symbols-outlined text-[20px]">wb_sunny</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-tertiary">8-Ray Sun Heart</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    National heritage anchoring the chest, representing the continuous revival and ascent of Philippine Physical Education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION & MISSION CARDS (VERBATIM) */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs">
            <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest">Guiding Foundations</span>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Institutional Intent</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The strategic pillars driving our workshop design, curriculum alignment, and student-centered physical education gatherings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Vision Card */}
            <div className="relative bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-2xl shadow-md flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col gap-space-md relative z-10">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-primary-fixed text-primary font-label-badge text-label-badge uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    Institutional Vision
                  </div>
                  <span className="font-headline-sm text-headline-sm font-bold text-surface-container-highest">01</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface leading-snug">
                  Strengthening the ‘Galing’ of the PE Community
                </h3>
                <blockquote className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed italic bg-surface-container-low p-space-md rounded-xl">
                  “To be a leading event organization that strengthen the 'galing' of the Physical Education community through innovative workshops, trainings, and professional seminars to develop and enhance creativity and camaraderie.”
                </blockquote>
              </div>
              <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-[20px]">stars</span>
                <span>Creative Kinesthetics & Unified Community</span>
              </div>
            </div>
            {/* Mission Card */}
            <div className="relative bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-2xl shadow-md flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col gap-space-md relative z-10">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-secondary-fixed text-secondary font-label-badge text-label-badge uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">flag</span>
                    Institutional Mission
                  </div>
                  <span className="font-headline-sm text-headline-sm font-bold text-surface-container-highest">02</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface leading-snug">
                  Designing Purposeful Movement & Learning
                </h3>
                <blockquote className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed italic bg-surface-container-low p-space-md rounded-xl">
                  “To implement and design seminars, training and workshops for the Physical Education Department that promotes purposeful movement and learning while developing talents, teamwork, physical fitness, and sportsmanship.”
                </blockquote>
              </div>
              <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-secondary font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                <span>Talent, Teamwork, Fitness & Sportsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PILLARS & VALUES */}
      <section className="w-full py-space-xl bg-background">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">Our Guiding Matrix</span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Core Pillars & Values</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">The kinetic standards guiding every workshop drill, academic keynote, and referee symposium.</p>
            </div>
            <div className="inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Pedagogy in Motion</span>
            </div>
          </div>
          {/* Bento-style Grid of 4 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm group">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">directions_run</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Purposeful Movement</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Transcending repetitive, rote drills. We infuse deep cognitive understanding, biomechanical consciousness, and active kinetic joy into lifelong physical fitness.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-1 text-primary font-label-badge text-label-badge uppercase">
                <span>Motor Mastery</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm group">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">diversity_3</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Professional Camaraderie</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Constructing dynamic inter-collegiate bridges among student majors, seasoned educators, athletic coaches, and sports science practitioners across Central Luzon.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-1 text-secondary font-label-badge text-label-badge uppercase">
                <span>Unified Network</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm group">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">military_tech</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Integrity & Sportsmanship</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Instilling ethical sportsmanship and grounded leadership. Winning with modesty, losing with grace, and maintaining honor on and off the court.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-1 text-tertiary font-label-badge text-label-badge uppercase">
                <span>Character First</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </div>
            {/* Pillar 4 */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">temple_buddhist</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Cultural Rootedness</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Embracing the rich Kapampangan cultural tapestry and historic Philippine national games (Laro ng Lahi) as fundamental kinetic assets for pedagogical growth.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-1 text-on-surface font-label-badge text-label-badge uppercase">
                <span>Kapampangan Pride</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ACADEMIC BACKGROUND & CURRICULAR CONTEXT (EVENT3) */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Text Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-label-badge text-label-badge uppercase tracking-wider self-start">
                <span className="material-symbols-outlined text-[16px]">school</span>
                Curricular Foundation • CCA Institute
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Born from Applied Event Management
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Galóng Galínda originated as an asynchronous applied event management project under the <strong className="text-on-surface">EVENT3 curriculum</strong> at the <strong className="text-primary">City College of Angeles (CCA)</strong> in Angeles City, Pampanga.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Conceived by visionary student organizers and physical educators, the initiative tests real-world operational execution: from drafting event safety protocols and procuring venue partnerships, to designing sports clinic methodologies and measuring participant kinesthetic development.
              </p>
              {/* Formal Mandatory Educational Disclaimer Box */}
              <div className="p-space-md rounded-xl bg-primary-container text-on-primary-container shadow-md flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-[24px] text-on-primary-container shrink-0 mt-0.5">warning</span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-lg text-label-lg uppercase tracking-wider font-bold">Academic Project Disclaimer</span>
                  <p className="font-body-sm text-body-sm leading-relaxed">
                    NOTICE: THIS WEBSITE IS FOR EDUCATIONAL PURPOSES ONLY. This platform is part of a collegiate coursework submission for EVENT3 at the City College of Angeles and does not represent an independent commercial enterprise.
                  </p>
                </div>
              </div>
            </div>
            {/* Institutional Graphic & Photo Card */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-md flex flex-col gap-space-md">
                <div className="relative w-full h-52 rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="A sunlit modern gymnasium and university physical education classroom filled with active collegiate students and sports coordinators wearing athletic training kits in Angeles City Pampanga, captured with cinematic depth of field, warm morning light, crisp red and blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhhbqi44jpbSZVm5cSzOIxZZZlix_Zh8OvlLDZYPr_Xc5lw1aGQd6JE1l67WI9BWa-T_dalA1jvmSxUhH_VfQAPEdx9C0zRLZ0ZC-4eAm6zBWGCUmJovZelBZgYeBRikRiWX7VoCvNu0FSXi5Mw_YCdCAlBizTEunLCSRNS1K5BNEFy6YWa4cDyaXxGZsZMC-y78bs4wVKxGo-z5cAkAneNxB4Hg_4pMQjMlHyq-Vx3IPirtk27XVz" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-space-md">
                    <span className="text-inverse-on-surface font-label-md text-label-md tracking-wider uppercase">City College of Angeles • Arayat Blvd</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-sm text-center">
                  <div className="p-space-sm rounded-lg bg-surface-container">
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">BS-PE</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Department Hub</p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container">
                    <span className="font-headline-sm text-headline-sm font-bold text-secondary">A.Y. 2024-25</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Curricular Cycle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LEADERSHIP & COMMITTEE STRUCTURE */}
      <section className="w-full py-space-xl bg-background">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest">Organizational Blueprint</span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Organizing Team Leadership</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">The committee framework orchestrating student-athlete workshops and academic athletic lectures.</p>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">account_tree</span>
              <span>EVENT3 Executive Board</span>
            </div>
          </div>
          {/* Committee Structure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Committee 1: Executive Directorship */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group hover:translate-y-[-2px]">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">admin_panel_settings</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Executive Directorship</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Provides overall governance, liaison with CCA faculty advisors, institutional compliance, and strategic vision delivery across all assemblies.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container-high/60 flex items-center gap-space-xs text-primary font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">groups</span>
                <span>Lead Project Managers</span>
              </div>
            </div>
            {/* Committee 2: Logistics & Operations */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group hover:translate-y-[-2px]">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Logistics & Operations</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Manages gymnasium floor layout, sports equipment distribution, participant safety checkpoints, medical protocol coordination, and flow control.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container-high/60 flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">sports</span>
                <span>Field Stewards & Equippers</span>
              </div>
            </div>
            {/* Committee 3: Program & Technical */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group hover:translate-y-[-2px]">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">timer</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Program & Technical</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Curates drill modules, speaker itineraries, timekeeping, kinetic performance rubrics, and formal seminar presentation frameworks.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container-high/60 flex items-center gap-space-xs text-tertiary font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                <span>Curriculum Modulators</span>
              </div>
            </div>
            {/* Committee 4: PR & Marketing */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group hover:translate-y-[-2px]">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">campaign</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Public Relations & PR</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Drives campus-wide community outreach, social documentation, digital workshop registration portals, and student participant advocacy.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container-high/60 flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">share</span>
                <span>Media & Community Voices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: INTERACTIVE CALL-TO-ACTION & WORKSHOP ENROLLMENT STRIP */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="bg-primary text-on-primary rounded-2xl p-space-lg lg:p-space-xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-on-primary/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex flex-col gap-space-xs max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-space-xs text-on-primary/80 font-label-badge text-label-badge uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                Join the Next Kinetic Cohort
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary leading-tight">
                Ready to experience purposeful movement?
              </h2>
              <p className="font-body-md text-body-md text-on-primary/90 leading-relaxed">
                Explore our curated calendar of coaching clinics, physical education symposiums, and kinesthetic laboratory workshops.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md relative z-10">
              <a className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg transition-transform hover:scale-105 shadow-md" href="#">
                Explore Workshops
              </a>
              <a className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-on-primary/10 hover:bg-on-primary/20 text-on-primary font-label-lg text-label-lg transition-colors" href="#">
                Contact Project Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}