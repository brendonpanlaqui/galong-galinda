export default function Events() {
  return (
    <main>
      
      {/* Hero Showcase Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-12 lg:py-16 border-b border-surface-container-high/60">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute left-10 bottom-0 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant self-start font-label text-xs font-bold uppercase tracking-wider">
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-surface font-bold tracking-tight">
              Gallery &amp; Events
            </h1>
            <p className="font-body text-base lg:text-lg text-on-surface-variant leading-relaxed">
              Explore authentic photo documentation from <span className="text-primary font-semibold">Galóng Galínda’s</span> institutional activities, from PE Days and community events to educational seminars, workshops, and sports officiating clinics. Our gallery captures the learning, teamwork, energy, and memorable experiences shared by participants throughout every event.
            </p>
          </div>
          {/* Quick Event Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
          </div>
        </div>
      </section>

      {/* EVENT SHOWCASE 1: The Art of the Call */}
      <section className="w-full bg-surface-container-low py-12 lg:py-16 border-b border-surface-container-high/60" id="section-art-of-the-call">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-3xl">
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">Seminar Workshop and Officiating</h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Providing participants with practical knowledge and hands-on learning through specialized seminars and workshops.
              </p>
            </div>
            {/* Key takeaways stats/chips */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
            </div>
          </div>
          
          {/* Rich Gallery Grid for The Art of the Call */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Main highlight card: Stage Cadre Delegation */}
            <div className="lg:col-span-7 flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                <img alt="City College of Angeles covered court stage, full referee cadre delegation with 'The Art of the Call' banner" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/so%20(7).jpg"  />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="font-headline text-lg sm:text-xl font-bold">Official Officiating Delegation</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Developing the skills and confidence of aspiring officials through technical training, demonstrations, and actual officiating experiences.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-on-surface-variant font-label text-xs font-semibold border-t border-surface-container-high/50">
                </div>
              </div>
            </div>
            
            {/* Secondary Grid (Cards 2 & 3): Photo booth + Lecture Session */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Photo Booth Fun Frame */}
              <div className="flex flex-col sm:flex-row lg:flex-row bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
                <div className="relative w-full sm:w-48 lg:w-48 h-52 shrink-0 overflow-hidden">
                  <img alt="Photo booth frame 'The Art of the Call', referees with whistles and volleyball penalty cards" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/so%20(6).jpg"  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">Seminar-Workshops</h4>
                    <p className="font-body text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      Facilitators enjoying interactive photo props showcasing volleyball touch, net faults, yellow cards, and whistle calls.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant mt-3">
                    <span className="">Peer Fellowship</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">photo_camera</span>
                  </div>
                </div>
              </div>
              
              {/* Floor Lecture & Discussion Session */}
              <div className="flex flex-col sm:flex-row lg:flex-row bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
                <div className="relative w-full sm:w-48 lg:w-48 h-52 shrink-0 overflow-hidden">
                  <img alt="Lecture discussion session with facilitators holding microphones addressing sitting PE students on court" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/so%20(5).jpg"  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface"><div className="">Sports Officiating</div></h4>
                    <div className="font-body text-xs text-on-surface-variant mt-1.5 leading-relaxed">Providing participants with practical knowledge and hands-on learning through specialized seminars and workshops.</div>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant mt-3">
                    <span className="">Court Discussion</span>
                    <span className="material-symbols-outlined text-[16px] text-tertiary">record_voice_over</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom 3 Cards of Workshop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 4: Practical court session & oath */}
            <div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative h-56 w-full overflow-hidden">
                <img alt="Practical court session: PE students standing in formation with right hand raised taking referee oath and practicing hand signals" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/so%20(4).jpg" />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">Practical Drills &amp; Arbiter's Oath</h4>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                    Students lined up on court with hands raised, taking their officiating oath and rehearsing synchronized hand signals in front of the projection clinic.
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                  <span className="">Hand Signals Practice</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary">pan_tool</span>
                </div>
              </div>
            </div>
            {/* Card 5: Full delegation stage portrait */}
            <div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative h-56 w-full overflow-hidden">
                <img alt="Wide group cohort shot on CCA stage with City College of Angeles sign and The Art of the Call backdrop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/so%20(3).jpg"  />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">Official Workshop Certification</h4>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                    The complete batch of accredited student arbiters, PE teachers, and seminar facilitators celebrating successful clinic completion on the CCA main stage.
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                  <span className="">Stage Delegation</span>
                  <span className="material-symbols-outlined text-[16px] text-primary">groups_3</span>
                </div>
              </div>
            </div>
            {/* Card 6: Keynote & Opening address */}
            <div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative h-56 w-full overflow-hidden">
                <img alt="Speaker at official wooden lectern addressing attendees on court" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/so%20(2).jpg"  />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">Keynote &amp; Officiating Ethics</h4>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                    Keynote presentation delivered at the CCA official podium outlining impartiality, sports law principles, integrity, and ethical conduct for youth sports.
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                  <span className="">Podium Session</span>
                  <span className="material-symbols-outlined text-[16px] text-tertiary">co_present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT SHOWCASE 2: PE Days */}
      <section className="w-full py-12 lg:py-16 bg-surface-container-lowest border-b border-surface-container-high/60" id="section-pe-days">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-container-high/60 pb-8">
            <div className="flex flex-col gap-2 max-w-3xl">
              <h2 className="font-headline text-2xl lg:text-4xl font-bold text-on-surface tracking-tight">PE Days</h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Celebrating movement, teamwork, creativity, and camaraderie through engaging physical activities and community experiences.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-on-surface-variant font-label text-xs font-bold bg-surface-container-low px-4 py-2 rounded-full border border-surface-container-high/60 shrink-0 self-start md:self-end">
            </div>
          </div>
          
          {/* Featured Hero Mosaic / Dual Highlights for PE Days */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Primary Highlight Card: Mass Aerobics */}
            <div className="lg:col-span-7 flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                <img alt="Hundreds of PE students performing synchronized rhythmic mass aerobics in quadrangle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(2).jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Where learning meets movement and every moment becomes an experience. <br></br><br></br>
                  Each event reflects our commitment to galing, karunungan, pakikiisa, at pakikisama, creating opportunities to learn, participate, and grow together.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-surface-container-high/50">
                </div>
              </div>
            </div>
            
            {/* Secondary Highlight Card: Blazing Phoenix Cauldron */}
            <div className="lg:col-span-5 flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <img alt="Towering Olympic ceremonial flame blazing in quadrangle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(5).jpg" />
                <span className="absolute top-3 right-3 bg-primary text-white font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">Ceremonial Flame</span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-xl font-bold text-on-surface">The Blazing Phoenix Cauldron</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Ignited by student torchbearers to herald the athletic tournaments, the ceremonial flame symbolizes the fiery determination and rise of every student-athlete within our community.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container-high/60 flex items-start gap-3 mt-1">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">shield</span>
                  <div className="flex flex-col">
                    <span className="font-headline text-xs font-bold text-on-surface">Official Athlete's Pledge</span>
                    <span className="font-body text-xs text-on-surface-variant leading-relaxed">Commitment to fair play, mutual respect, and clean sportsmanship.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* PE Days Photo Gallery Grid (8 Gallery Cards) */}
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-xl font-bold text-on-surface">Highlights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Torch Relay */}
              <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img alt="Ceremonial bamboo torch lighting into cauldron bowl" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(3).jpg" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">The Lighting of the Cauldron</h4>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                      Delegation leaders bearing bamboo torches together to ignite the ceremonial cauldron.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                    <span className="">Torch Relay</span>
                    <span className="material-symbols-outlined text-[16px] text-tertiary">local_fire_department</span>
                  </div>
                </div>
              </div>
              
              {/* Card 2: Phoenix Emblem Flame */}
              <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img alt="Towering Olympic ceremonial flame blazing in quadrangle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(5).jpg" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">Towering Flame</h4>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                      The majestic fire standing as a real-world embodiment of the rising Phoenix emblem.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                    <span className="">Ceremonial Opening</span>
                    <span className="material-symbols-outlined text-[16px] text-primary">whatshot</span>
                  </div>
                </div>
              </div>
              
              {/* Card 3: Kinesthetic Mass Aerobics */}
              <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img alt="PE students executing synchronized rhythmic stretches in custom white uniforms" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(2).jpg" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">Kinesthetic Mass Aerobics</h4>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                      PE students executing synchronized rhythmic stretches in custom white PE uniforms.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                    <span className="">Field Choreography</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">groups</span>
                  </div>
                </div>
              </div>
              
              {/* Card 4: Dynamic Field Drills */}
              <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img alt="Dynamic formation shifts during quadrangle performance" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(8).jpg" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">Dynamic Field Drills</h4>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                      High-tempo formation shifts highlighting agility, stamina, and cooperative team movement.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                    <span className="">Applied Kinesiology</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">directions_run</span>
                  </div>
                </div>
              </div>
              
              {/* Card 5: Solemn Assembly & Anthem */}
              <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img alt="Students, faculty, and committee standing solemnly with hands over chests" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(4).jpg" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">Solemn Assembly &amp; Anthem</h4>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                      Students, faculty, and committee standing solemnly with hands over chests during the opening Philippine national anthem.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                    <span className="">Opening Assembly</span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface">flag</span>
                  </div>
                </div>
              </div>
              
              {/* Card 6: Purple Cheering Squad */}
              <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img alt="Batch section members displaying vibrant handmade placards and balloons" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(6).jpg" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">Purple Cheering Squad</h4>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                      Batch section members displaying vibrant handmade placards, balloons, and high-volume cheering cadences.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                    <span className="">Section Spirit</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">celebration</span>
                  </div>
                </div>
              </div>
              
              {/* Card 7: Faculty & Leader Camaraderie */}
              <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img alt="Dedicated PE faculty advisors and student organizers posing together" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(7).jpg" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">Faculty &amp; Leader Camaraderie</h4>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                      Dedicated PE faculty advisors and student organizers posing together with yellow batch batons and commemorative IDs.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                    <span className="">Academic Guidance</span>
                    <span className="material-symbols-outlined text-[16px] text-tertiary">diversity_3</span>
                  </div>
                </div>
              </div>
              
              {/* Card 8: The Roaring Grandstand Crowd */}
              <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img alt="Hundreds of spectators gathered under festive collegiate pennant streamers" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(1).jpg" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">The Roaring Grandstand Crowd</h4>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                      Hundreds of spectators gathered under festive collegiate pennant streamers cheering enthusiastically for their classes.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                    <span className="">Festival Atmosphere</span>
                    <span className="material-symbols-outlined text-[16px] text-primary">campaign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}