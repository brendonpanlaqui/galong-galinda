import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [filter, setFilter] = useState('all');
  const [cohortSize, setCohortSize] = useState('tier2');

  // Dynamic calculator state
  let calcClinicians = '3-4 Master Coaches';
  let calcFormat = 'Full-Day Intensive';
  let calcMaterials = 'Individual Drills + Certs';

  if (cohortSize === 'tier1') {
    calcClinicians = '2 Master Coaches';
    calcFormat = 'Half-Day Intensive';
    calcMaterials = 'Digital Pack + Certs';
  } else if (cohortSize === 'tier3') {
    calcClinicians = '5+ Clinicians & Marshals';
    calcFormat = 'Multi-Day / Festival Format';
    calcMaterials = 'Full Turnkey Event Logistics';
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-low overflow-hidden py-space-xl">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-surface-container text-primary font-label-badge text-label-badge uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Official Officiating • Sports Nutrition • Kinesthetic Conditioning
              </div>
              <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface font-bold tracking-tight">Our Flagship Services & <span className="text-primary underline decoration-secondary-container/30 decoration-4">Athletic Products</span></h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">Purpose-driven sports officiating services, student-athlete certified nutrition with Nutrifit Biscuit and ArmFit Powder, and dynamic event management engineered to elevate collegiate athletic leadership across Central Luzon.</p>
            </div>
            {/* Quick Summary Stats Widget */}
            <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-md self-start lg:self-auto">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-primary">4+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Core Disciplines</span>
              </div>
              <div className="w-px h-10 bg-surface-container-high"></div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-secondary">100%</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Curriculum-Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter & Service Catalog */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-sm">
            <div>
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary">Kinetic Catalog</span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Curated Athletic Programs</h2>
            </div>
            <div className="flex flex-wrap items-center gap-space-xs">
              <button onClick={() => setFilter('all')} className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-all ${filter === 'all' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>All Offerings</button>
              <button onClick={() => setFilter('officiating')} className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-all ${filter === 'officiating' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>Sports Officiating</button>
              <button onClick={() => setFilter('nutrifit')} className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-all ${filter === 'nutrifit' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>Nutrifit Biscuit</button>
              <button onClick={() => setFilter('armfit')} className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-all ${filter === 'armfit' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>ArmFit Powder</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {(filter === 'all' || filter === 'officiating') && (
              <div className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
                <div>
                  <div className="flex items-center justify-between gap-space-sm mb-space-md">
                    <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-badge text-label-badge uppercase font-bold">Professional Service</span>
                  </div>
                  <div className="relative w-full h-52 rounded-lg overflow-hidden mb-space-md bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Sports officiating" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTV9_pZYjyGTam_Hv6791yExTW3UdT6301IqQ14673qJOPLpBgsqiPCvOveX1Ctm7y847k2Hm9latg1rbkPZiWBPcw10G70lTJ7L6ztKNj5Uspd2CdnG0OIO-bo_Z226xwBkOBvFuq_iCt_E8s2KHqjUqpkRuLfCZ9Cegwps6GapITRRPVTRfM13qcgXTlAfBn4A0knmaUWmh70kbVmNPC5ZYeJ0rjnE_bCN-KQwwv2MCZlXI9TApG" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">Sports Officiating Services</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">Full-scale accredited sports officiating for institutional meets, intramurals, district leagues, basketball, and volleyball.</p>
                </div>
              </div>
            )}

            {(filter === 'all' || filter === 'nutrifit') && (
              <div className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-tertiary"></div>
                <div>
                  <div className="flex items-center justify-between gap-space-sm mb-space-md">
                    <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-badge text-label-badge uppercase font-bold">Kinetic Nutrition</span>
                  </div>
                  <div className="relative w-full h-52 rounded-lg overflow-hidden mb-space-md bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Nutrifit Biscuit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcwHpba7yOgzvM9h-7_lc_8lq1l_9aL5m3Jo7ghfk0I0DA_-dwTAe3sEbcqIpm4IIU9Bq_i5JAg7gOL3SWnmwNZPBrMzXCcfjUh0UzbOYITTHK9fs1R5jQnXgA-Nswl8l_IOZMzQXUWVKT27tJlO9mmXE6r1SSoo9eZM_axGwiX-4ABEbOVz3nfQIyl0w5W3JdReaB-bQ5zwf3NbUyyI64iGT84lAEa_f4UcaelfPjk51j1qPeQccz" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">Nutrifit Biscuit</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">High-energy, wholesome oat and whole grain biscuits fortified with essential micronutrients, slow-release carbohydrates, and fiber.</p>
                </div>
              </div>
            )}

            {(filter === 'all' || filter === 'armfit') && (
              <div className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
                <div>
                  <div className="flex items-center justify-between gap-space-sm mb-space-md">
                    <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-badge text-label-badge uppercase font-bold">Performance Supplement</span>
                  </div>
                  <div className="relative w-full h-52 rounded-lg overflow-hidden mb-space-md bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="ArmFit Powder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAih_QMb82KrHZHXs0wiv3JsJhjq4Jb5Kesor2oB6J6vPquRjc-tmS-TSjJr9PLOEn7QVdyFILg8gDrkXbD6w6xYuzaasanHn2sV2yXPQtS6Oz4wjw-2KUsnVXdDjmajoPrZWxa05rb_CCi6Kz8oS-BoDgQA1njzs2bjmkVNqXN2cqZ8vX4KfvvuI8AX32WDStCQURnwoeN3q1WmsX9FDfeq33mRXnZs_wMsbE6D53TrxY7I5lGUvD2" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">ArmFit Powder</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">Premium kinetic electrolyte and muscle recovery protein formula engineered specifically for arm muscle endurance.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin">
          <div className="rounded-xl bg-surface-container-lowest p-space-lg lg:p-space-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col gap-space-sm max-w-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge uppercase">Interactive Planning Tool</div>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Estimate Your Workshop Scope</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Select your institution's projected participant tier and module focus to preview estimated trainer allocations and certificate packages.</p>
            </div>
            
            <div className="w-full md:w-auto flex-1 max-w-md flex flex-col gap-space-md p-space-md rounded-xl bg-surface-container">
              <div>
                <label className="font-label-md text-label-md text-on-surface block mb-1" htmlFor="cohort-size">Estimated Participants</label>
                <select 
                  id="cohort-size"
                  value={cohortSize}
                  onChange={(e) => setCohortSize(e.target.value)}
                  className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="tier1">Intramural Day Pass</option>
                  <option value="tier2">Full Tournament Suite</option>
                  <option value="tier3">District / Inter-Collegiate Meet</option>
                </select>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col gap-space-xs">
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm">Officiating Crew:</span>
                  <span className="font-label-lg text-label-lg font-bold text-primary">{calcClinicians}</span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm">Nutritional Supply:</span>
                  <span className="font-label-lg text-label-lg font-bold text-secondary">{calcFormat}</span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm">Event Materials:</span>
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">{calcMaterials}</span>
                </div>
              </div>
              <Link to="/contact" className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-center font-label-lg text-label-lg transition-colors">
                Proceed with this Configuration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}