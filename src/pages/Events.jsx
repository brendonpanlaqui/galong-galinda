import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [galleryEvents, setGalleryEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. PASTE YOUR PUBLISHED "UPCOMING" TAB CSV LINK HERE:
    const upcomingCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSowJhCiO6-TjuZRK0Iho_eaLfsZBey_2lrFYMCuf88hc91ogE6_K7jv9QurxlVkHonQAu2dT9bUsEQ/pub?gid=1373412542&single=true&output=csv";

    // 2. PASTE YOUR PUBLISHED "EVENTS" TAB CSV LINK HERE:
    const eventsCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSowJhCiO6-TjuZRK0Iho_eaLfsZBey_2lrFYMCuf88hc91ogE6_K7jv9QurxlVkHonQAu2dT9bUsEQ/pub?gid=0&single=true&output=csv";

    // Fetch Upcoming Events
    Papa.parse(upcomingCsvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const validUpcoming = results.data.filter(item => item.eventTitle && item.eventDate);
        setUpcomingEvents(validUpcoming);
      },
      error: (err) => console.error("Error fetching upcoming events:", err)
    });

    // Fetch Past Gallery Events
    Papa.parse(eventsCsvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const validData = results.data.filter(item => item.eventId && item.imgSrc);
        const groupedEventsMap = validData.reduce((acc, row) => {
          if (!acc[row.eventId]) {
            acc[row.eventId] = {
              eventId: row.eventId,
              eventTitle: row.eventTitle,
              eventDesc: row.eventDesc,
              category: row.category,
              photos: []
            };
          }
          acc[row.eventId].photos.push(row);
          return acc;
        }, {});

        setGalleryEvents(Object.values(groupedEventsMap));
        setIsLoading(false);
      },
      error: (error) => {
        console.error("Error fetching events spreadsheet data:", error);
        setIsLoading(false);
      }
    });
  }, []);

  const filteredEvents = activeFilter === 'all' 
    ? galleryEvents 
    : galleryEvents.filter(event => event.category === activeFilter);

  return (
    <main>
      
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-16 lg:py-24 border-b border-surface-container-high/60">
        {/* Atmospheric Dual-Energy Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3 max-w-4xl">
            <h1 className="font-display-hero text-4xl lg:text-[64px] lg:leading-[72px] text-on-surface font-bold tracking-tight">
              Gallery &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x drop-shadow-sm">Events</span>
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed mt-2">
              Explore authentic photo documentation from <span className="text-primary font-semibold">Galóng Galínda’s</span> institutional activities, from PE Days and community events to educational seminars, workshops, and sports officiating clinics. Our gallery captures the learning, teamwork, energy, and memorable experiences shared by participants throughout every event.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: UPCOMING EVENTS & SCHEDULES (DYNAMIC FROM GOOGLE SHEETS) */}
      <section className="w-full py-12 lg:py-16 bg-surface-container-low border-b border-surface-container-high/60" id="section-upcoming">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-badge text-[10px] uppercase tracking-wider font-bold self-start">
                <span className="material-symbols-outlined text-[14px]">event</span>
                Calendar
              </div>
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">Upcoming Events &amp; Schedules</h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Join our upcoming seminars, tournaments, and community outreach programs. Secure your slots early!
              </p>
            </div>
          </div>

          {/* Upcoming Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((item, index) => (
              <div key={index} className="flex flex-col bg-surface-container-lowest rounded-2xl p-6 border border-surface-container-high/60 shadow-sm justify-between gap-6 group hover:shadow-md transition-all">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-badge text-[10px] uppercase font-bold">
                      {item.status || "Upcoming"}
                    </span>
                    <span className="font-label text-xs text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">calendar_today</span>
                      {item.eventDate}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {item.eventTitle}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    {item.description || item.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-surface-container-high/50">
                  <div className="flex items-center justify-between text-xs font-label text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span> {item.eventTime}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-on-surface">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">location_on</span> {item.venue}
                    </span>
                  </div>
                  {item.ctaLink && (
                    <a 
                      href={item.ctaLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-white font-label-md text-center transition-colors shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>View Details</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {upcomingEvents.length === 0 && !isLoading && (
              <div className="col-span-full py-12 text-center text-on-surface-variant font-body-sm bg-surface-container-lowest rounded-2xl border border-surface-container-high/60">
                No upcoming events scheduled at the moment. Please check back soon!
              </div>
            )}
          </div>

        </div>
      </section>

      {/* EVENT SHOWCASE 1: The Art of the Call (HARDCODED) */}
      <section className="w-full bg-surface-container-low py-12 lg:py-16 border-b border-surface-container-high/60" id="section-art-of-the-call">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-3xl">
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">Seminar Workshop and Officiating</h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Providing participants with practical knowledge and hands-on learning through specialized seminars and workshops.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                <img alt="Referee delegation stage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/officiating.jpg"  />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Developing the skills and confidence of aspiring officials through technical training, demonstrations, and actual officiating experiences.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row lg:flex-row bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
                <div className="relative w-full sm:w-48 lg:w-48 h-52 shrink-0 overflow-hidden">
                  <img alt="Photo booth frame" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/so%20(6).jpg"  />
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
              
              <div className="flex flex-col sm:flex-row lg:flex-row bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
                <div className="relative w-full sm:w-48 lg:w-48 h-52 shrink-0 overflow-hidden">
                  <img alt="Lecture discussion session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/so%20(5).jpg"  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-headline text-base font-bold text-on-surface">Sports Officiating</h4>
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
        </div>
      </section>

      {/* EVENT SHOWCASE 2: PE Days (HARDCODED) */}
      <section className="w-full py-12 lg:py-16 bg-surface-container-lowest border-b border-surface-container-high/60" id="section-pe-days">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-container-high/60 pb-8">
            <div className="flex flex-col gap-2 max-w-3xl">
              <h2 className="font-headline text-2xl lg:text-4xl font-bold text-on-surface tracking-tight">PE Days</h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Celebrating movement, teamwork, creativity, and camaraderie through engaging physical activities and community experiences.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                <img alt="Mass aerobics" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(2).jpg" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Where learning meets movement and every moment becomes an experience. <br/><br/>
                  Each event reflects our commitment to galing, karunungan, pakikiisa, at pakikisama, creating opportunities to learn, participate, and grow together.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm group">
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <img alt="Cauldron" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/gallery/pe%20(5).jpg" />
                <span className="absolute top-3 right-3 bg-primary text-white font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow-sm">Ceremonial Flame</span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-xl font-bold text-on-surface">The Blazing Phoenix Cauldron</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Ignited by student torchbearers to herald the athletic tournaments, the ceremonial flame symbolizes the fiery determination and rise of every student-athlete within our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW DYNAMIC EVENT GROUPS (FED FROM GOOGLE SHEETS) */}
      <section className="w-full py-12 lg:py-16 bg-background border-t border-surface-container-high/60" id="section-dynamic-uploads">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-8">

          {isLoading ? (
            <div className="w-full flex flex-col items-center justify-center py-16 gap-4">
              <div className="w-10 h-10 border-4 border-surface-container-highest border-t-primary rounded-full animate-spin"></div>
              <span className="font-label text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">Syncing latest archives...</span>
            </div>
          ) : (
            <div className="flex flex-col gap-16">
              {filteredEvents.length === 0 && (
                <div className="w-full py-16 text-center flex flex-col items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-surface-container-highest">photo_library</span>
                  <div className="text-on-surface-variant font-body-sm">
                    No archive events have been appended from the spreadsheet yet.
                  </div>
                </div>
              )}

              {filteredEvents.map((event) => (
                <div key={event.eventId} className="flex flex-col gap-6 pt-10 mt-2 border-t border-surface-container-high/60 first:border-0 first:pt-0 first:mt-0">
                  <div className="flex flex-col gap-2 max-w-3xl mb-2">
                    <h2 className="font-headline text-2xl lg:text-4xl font-bold text-on-surface tracking-tight">
                      {event.eventTitle}
                    </h2>
                    <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {event.eventDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {event.photos.map((photo, index) => (
                      <div key={index} className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/60 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="relative h-56 w-full overflow-hidden">
                          <img alt={photo.photoTitle} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={photo.imgSrc} />
                          <span className="absolute top-3 right-3 bg-secondary text-white font-label text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow-sm">
                            {photo.badge}
                          </span>
                        </div>
                        <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                          <div className="flex flex-col gap-1.5">
                            <h4 className="font-headline text-base font-bold text-on-surface">{photo.photoTitle}</h4>
                            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                              {photo.photoDesc}
                            </p>
                          </div>
                          <div className="pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label text-[11px] text-on-surface-variant">
                            <span className="">{photo.location}</span>
                            <span className="material-symbols-outlined text-[16px] text-primary">{photo.icon}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}