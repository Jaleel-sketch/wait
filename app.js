// Stripe Public Test Key Placeholder
const stripe = Stripe('pk_test_TYooMQauvd3q5451x44ay4C600L7BX2Y');

// 50 COMPLETE COURSES DATABASE
const courses = [
  // ENTRY-LEVEL ($0 - $8)
  { id: 1, code: "ARC 101", title: "Architectural Sketching & Spatial Thinking", tier: "Entry-Level", category: "Architecture Core", price: 0, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Hand posture, line weight discipline, orthographic projections, and isometric spatial drawing.", deliverable: "Complete a 10-page hand-sketched analytical portfolio of a local building." },
  { id: 2, code: "SCI 101", title: "Geometry & Trigonometry for Spatial Design", tier: "Entry-Level", category: "Applied Sciences & Math", price: 0, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Pythagorean theorem in construction, sine/cosine vector forces, and area/volume ratios.", deliverable: "Solve a series of site layout and roof-pitch geometric calculation challenges." },
  { id: 3, code: "ARC 102", title: "Reading Construction & Architectural Drawings", tier: "Entry-Level", category: "Architecture Core", price: 5, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Blueprint symbols, scales, plan views, sections, and elevation reading hierarchy.", deliverable: "Annotate a multi-sheet residential drawing set to identify load-bearing walls." },
  { id: 4, code: "SCI 102", title: "Basic Mechanics: Force, Vectors & Equilibrium", tier: "Entry-Level", category: "Applied Sciences & Math", price: 6, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Free-body diagrams, static equilibrium (ΣF=0), tension vs. compression forces.", deliverable: "Calculate member forces in a 2D pin-jointed roof truss using vector statics." },
  { id: 5, code: "ARC 103", title: "History of Built Spaces & Human Scale", tier: "Entry-Level", category: "Architecture Core", price: 8, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Classical orders, modernism, human ergonomics, and spatial proportions.", deliverable: "Redesign a room layout using Vitruvian and Modulor proportion systems." },
  { id: 6, code: "ARC 104", title: "Physical Model Making & Tectonics", tier: "Entry-Level", category: "Architecture Core", price: 8, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Chipboard cutting, joinery techniques, foam massing, and scale accuracy.", deliverable: "Construct a 1:50 scale structural physical model using museum board." },
  { id: 7, code: "ARC 105", title: "Introduction to Digital Drafting (2D CAD)", tier: "Entry-Level", category: "Architecture Core", price: 8, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Interface setup, precision drawing commands, layer organization, and dimensioning.", deliverable: "Draft a code-compliant single-family residential floor plan in 2D CAD." },
  { id: 8, code: "SCI 103", title: "Environmental Biology & Site Ecosystems", tier: "Entry-Level", category: "Applied Sciences & Math", price: 8, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Native vegetation, soil biomes, microclimate biology, and urban canopy effects.", deliverable: "Create an ecological landscape plan that restores native flora on a lot." },

  // INTERMEDIATE ($12 - $18)
  { id: 9, code: "ARC 201", title: "3D Spatial Modeling (Rhino & SketchUp)", tier: "Intermediate", category: "Architecture Core", price: 12, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Poly-modeling, NURBS surface creation, boolean operations, and export pipelines.", deliverable: "Build a fully detailed 3D digital massing model of an urban pavilion." },
  { id: 10, code: "SCI 201", title: "Physics of Light & Optical Phenomena", tier: "Intermediate", category: "Applied Sciences & Math", price: 12, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Refraction, reflection coefficients, lumens, lux, and solar radiation physics.", deliverable: "Calculate total lux levels and solar heat gain for a glass atrium." },
  { id: 11, code: "ARC 202", title: "Architectural Site Planning & Topography", tier: "Intermediate", category: "Architecture Core", price: 14, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Contour lines, cut-and-fill calculations, orientation, and microclimate analysis.", deliverable: "Produce a site analysis board including slope maps and solar path diagrams." },
  { id: 12, code: "ARC 203", title: "Interior Spatial Planning & Ergonomics", tier: "Intermediate", category: "Architecture Core", price: 15, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Circulation paths, ADA clearances, fixture layouts, and material finishes.", deliverable: "Design an accessible interior layout for a 2,000 sq. ft. commercial café." },
  { id: 13, code: "SCI 202", title: "Applied Statics & Strength of Materials", tier: "Intermediate", category: "Applied Sciences & Math", price: 15, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Stress, strain, Young's Modulus (E), bending moments, and shear force diagrams.", deliverable: "Plot shear and bending moment diagrams for a multi-supported beam." },
  { id: 14, code: "ARC 204", title: "Architectural Daylight Strategies", tier: "Intermediate", category: "Architecture Core", price: 16, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Solar charts, light wells, shading devices, and daylight factor calculations.", deliverable: "Perform a daylighting simulation and design custom exterior louvers." },
  { id: 15, code: "SCI 203", title: "Geology & Soil Mechanics for Foundations", tier: "Intermediate", category: "Applied Sciences & Math", price: 18, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Soil classification, bearing capacity, water tables, and retaining structures.", deliverable: "Recommend a foundation type based on a geotechnical borehole report." },
  { id: 16, code: "ARC 205", title: "Vernacular Architecture & Traditional Joinery", tier: "Intermediate", category: "Architecture Core", price: 18, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Timber frame joinery, rammed earth, adobe masonry, and regional craft.", deliverable: "Design a zero-cement, timber-joined shelter for a hot-dry climate." },

  // DIFFICULT ($20 - $28)
  { id: 17, code: "ARC 301", title: "Building Information Modeling (BIM/Revit)", tier: "Difficult", category: "Architecture Core", price: 20, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Parametric walls, floor assemblies, schedules, family creation, and sheet sets.", deliverable: "Model a 3-story steel and glass office building with door/window schedules." },
  { id: 18, code: "SCI 301", title: "Thermodynamics & Building Thermal Mass", tier: "Difficult", category: "Applied Sciences & Math", price: 22, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Heat transfer conduction (Q=kAΔT/d), convection, radiation, U-values, R-values.", deliverable: "Calculate overall R-value and energy loss for a custom exterior wall detail." },
  { id: 19, code: "ARC 302", title: "Construction Detailing: Envelopes & Assemblies", tier: "Difficult", category: "Architecture Core", price: 22, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Flashing, moisture barriers, insulation placement, and curtain wall anchors.", deliverable: "Draft 1:10 scale technical wall-section details for a rainscreen facade." },
  { id: 20, code: "ARC 303", title: "Acoustic Design & Noise Control", tier: "Difficult", category: "Architecture Core", price: 24, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Sound reflection, absorption coefficients, STC ratings, and reverberation (RT60).", deliverable: "Calculate RT60 for an auditorium and select acoustic treatment panels." },
  { id: 21, code: "SCI 302", title: "Hydrology & Stormwater Engineering", tier: "Difficult", category: "Applied Sciences & Math", price: 25, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Rational method (Q=CIA), runoff coefficients, bioswales, and retention ponds.", deliverable: "Design a site drainage system capable of managing a 100-year storm." },
  { id: 22, code: "ARC 304", title: "Modern Timber Architecture (Mass Timber)", tier: "Difficult", category: "Architecture Core", price: 26, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "CLT panel engineering, glulam columns, fire performance, and connections.", deliverable: "Engineer a 5-story mass timber residential frame with connection details." },
  { id: 23, code: "SCI 303", title: "Fluid Dynamics & Natural Ventilation (CFD)", tier: "Difficult", category: "Applied Sciences & Math", price: 28, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Bernoulli's principle, Venturi effect, and computational fluid dynamics.", deliverable: "Run an airflow simulation to optimize window placement for cooling." },
  { id: 24, code: "ARC 305", title: "Architectural Lighting Design", tier: "Difficult", category: "Architecture Core", price: 28, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Photometrics, Kelvin temperatures, CRI, luminaire placement, and daylighting.", deliverable: "Produce a reflected ceiling plan (RCP) with fixture schedules for a gallery." },

  // HARD ($30 - $36)
  { id: 25, code: "ARC 401", title: "Advanced Computational Design (Grasshopper)", tier: "Hard", category: "Architecture Core", price: 30, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Algorithmic logic, data trees, attractor points, and evolutionary solvers.", deliverable: "Program a custom parametric facade that adjusts based on live sun data." },
  { id: 26, code: "SCI 401", title: "Structural Analysis: Indeterminate Systems", tier: "Hard", category: "Applied Sciences & Math", price: 32, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Moment distribution method, matrix structural analysis, and deflection.", deliverable: "Calculate deflections and internal forces for a multi-bay steel frame." },
  { id: 27, code: "ARC 402", title: "High-Performance Facade Systems", tier: "Hard", category: "Architecture Core", price: 32, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Double-skin facades, unitized curtain walls, structural silicone glazing.", deliverable: "Design a dynamic, kinetically responsive double-skin curtain wall module." },
  { id: 28, code: "SCI 402", title: "Environmental Chemistry: VOCs & Indoor Air", tier: "Hard", category: "Applied Sciences & Math", price: 34, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Volatile Organic Compounds, off-gassing, air exchange, and HEPA filtration.", deliverable: "Conduct a material off-gassing audit and specify zero-VOC products." },
  { id: 29, code: "ARC 403", title: "Urban Masterplanning & Density", tier: "Hard", category: "Architecture Core", price: 34, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Floor-Area-Ratio (FAR), transit integration, block typologies, pedestrian flows.", deliverable: "Generate a 10-hectare mixed-use urban master plan with massing data." },
  { id: 30, code: "ARC 404", title: "Architectural Digital Rendering (V-Ray/Unreal)", tier: "Hard", category: "Architecture Core", price: 35, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "V-Ray/Unreal materials, HDRI lighting, camera framing, and post-production.", deliverable: "Render 2 interior and 2 exterior photorealistic architectural scenes." },
  { id: 31, code: "SCI 403", title: "Solar & Renewable Energy Physics", tier: "Hard", category: "Applied Sciences & Math", price: 36, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Photovoltaic cell physics, tilt angles, inverter efficiencies, battery chemistry.", deliverable: "Size a rooftop PV system and battery bank for a net-zero residential project." },
  { id: 32, code: "ARC 405", title: "Fire Safety, Life Safety & Egress Design", tier: "Hard", category: "Architecture Core", price: 36, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "IBC occupancy loads, travel distances, exit stairs, and smoke evacuation.", deliverable: "Conduct an egress audit and route calculation on a convention center plan." },

  // UNDERGRAD CAPSTONE ($38 - $42)
  { id: 33, code: "ARC 451", title: "Integrated Studio I: Civic Architecture", tier: "Undergrad Capstone", category: "Architecture Core", price: 38, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Complex civic functions, structural integration, and public realm connections.", deliverable: "Deliver a conceptual design package for a public metropolitan library." },
  { id: 34, code: "ARC 452", title: "Building Code Compliance & IBC Regulations", tier: "Undergrad Capstone", category: "Architecture Core", price: 40, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Height/area limits, construction types (Type I-V), and ADA standards.", deliverable: "Perform a complete IBC Code Review report for a commercial structure." },
  { id: 35, code: "ARC 453", title: "Sustainable HVAC & Active Systems Integration", tier: "Undergrad Capstone", category: "Architecture Core", price: 40, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "VRF systems, chilled beams, air handlers (AHUs), and ductwork routing.", deliverable: "Route ductwork and mechanical shafts through a 4-story building plan." },
  { id: 36, code: "ARC 454", title: "Architectural Specification Writing", tier: "Undergrad Capstone", category: "Architecture Core", price: 41, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "CSI MasterFormat structure, performance specs, and material testing.", deliverable: "Draft a CSI Division 07 (Thermal & Moisture Protection) specification." },
  { id: 37, code: "ARC 455", title: "Capstone Studio II: Multi-Family Housing", tier: "Undergrad Capstone", category: "Architecture Core", price: 42, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Unit layouts, vertical mechanical distribution, amenities, and cost efficiency.", deliverable: "Complete full schematic drawings for a 60-unit housing development." },

  // GRADUATE-LEVEL ($45 - $50)
  { id: 38, code: "ARC 501", title: "Historic Preservation & Adaptive Reuse", tier: "Graduate-Level", category: "Architecture Core", price: 45, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Secretary of Interior standards, conservation, and structural retrofits.", deliverable: "Design a proposal converting a 1920s warehouse into a tech incubator." },
  { id: 39, code: "SCI 501", title: "Seismic Engineering & Dynamics of Structures", tier: "Graduate-Level", category: "Applied Sciences & Math", price: 45, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Earthquake acceleration, natural frequency, base isolation, and damping.", deliverable: "Design dynamic seismic bracing and base isolators for a concrete building." },
  { id: 40, code: "ARC 502", title: "Advanced Steel & Reinforced Concrete", tier: "Graduate-Level", category: "Architecture Core", price: 46, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Moment frames, shear walls, rebar placement, and post-tensioned slabs.", deliverable: "Calculate beam sizes and rebar placement layouts for a long-span gallery." },
  { id: 41, code: "ARC 503", title: "Tall Building Architecture & Wind Engineering", tier: "Graduate-Level", category: "Architecture Core", price: 48, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Skyscraper cores, wind vortex shedding, outriggers, and tuned mass dampers.", deliverable: "Model a 50-story tower massing optimized against local prevailing winds." },
  { id: 42, code: "SCI 502", title: "Advanced Material Science: Polymers & Aerogels", tier: "Graduate-Level", category: "Applied Sciences & Math", price: 48, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Self-healing concrete, aerogels, phase-change materials, and carbon fiber.", deliverable: "Formulate a material specification leveraging phase-change materials." },
  { id: 43, code: "ARC 504", title: "Architectural Practice Management & Law", tier: "Graduate-Level", category: "Architecture Core", price: 48, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "AIA contract agreements, liability management, fee proposals, and bidding.", deliverable: "Write a professional service proposal and fee structure for a public project." },
  { id: 44, code: "ARC 505", title: "Parametric Urbanism & Smart Cities", tier: "Graduate-Level", category: "Architecture Core", price: 49, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "GIS data integration, urban heat island algorithms, and automated zoning.", deliverable: "Generate a computational urban growth simulation based on GIS data." },
  { id: 45, code: "ARC 506", title: "Regenerative Architecture & Living Buildings", tier: "Graduate-Level", category: "Architecture Core", price: 49, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Living Building Challenge, net-positive systems, and biophilic design.", deliverable: "Produce a zero-waste, net-positive water loop design for a resort." },
  { id: 46, code: "ARC 507", title: "Healthcare & Laboratory Spatial Design", tier: "Graduate-Level", category: "Architecture Core", price: 50, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Cleanroom pressurization, hospital flows, and infection control layouts.", deliverable: "Design a compliant surgical suite and emergency department floor plan." },
  { id: 47, code: "SCI 503", title: "Urban Climatology & Microclimate Physics", tier: "Graduate-Level", category: "Applied Sciences & Math", price: 50, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Urban heat island effect, albedo mapping, wind tunnel testing, and cooling.", deliverable: "Design a plaza intervention that reduces ambient summer surface temp by 5°C." },
  { id: 48, code: "ARC 508", title: "Digital Fabrication & Robotic Construction", tier: "Graduate-Level", category: "Architecture Core", price: 50, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "CNC milling, 3D concrete printing, robotic toolpaths, and G-code.", deliverable: "Program a toolpath to digitally fabricate a custom concrete facade panel." },
  { id: 49, code: "ARC 509", title: "Master's Thesis Studio: Advanced Research", tier: "Graduate-Level", category: "Architecture Core", price: 50, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Self-directed, rigorous research pushing spatial and tectonic boundaries.", deliverable: "Complete a thesis document and architectural design defense board." },
  { id: 50, code: "ARC 510", title: "Real Estate Development for Architects", tier: "Graduate-Level", category: "Architecture Core", price: 50, video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", outline: "Pro-forma financial models, cap rates, debt structuring, and financing.", deliverable: "Build a financial pro-forma model for an infill residential project." }
];

// GENERATE 150 CREATORS
const creators = [];
const disciplines = ["Architect", "Interior Architect", "Parametric Specialist", "Urban Planner", "Structural Engineer"];
const cities = ["Tokyo", "Berlin", "New York", "London", "Copenhagen", "Milan", "Zurich", "Singapore"];

for (let i = 1; i <= 150; i++) {
  creators.push({
    id: i,
    name: `Studio Member #${i}`,
    discipline: disciplines[i % disciplines.length],
    location: cities[i % cities.length],
    bio: "Focusing on sustainable massing, high-performance enclosures, and spatial tectonics."
  });
}

// STATE VARIABLES
let activeCourse = null;
let donateAmount = 5;

// NAVIGATION
function switchSection(secId) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  
  document.getElementById(`sec-${secId}`).classList.add('active');
  const link = document.getElementById(`link-${secId}`);
  if(link) link.classList.add('active');
  window.scrollTo(0, 0);
}

// RENDER COURSES
function renderCourses(list) {
  const container = document.getElementById('coursesGrid');
  container.innerHTML = list.map(c => `
    <div class="card" onclick="openCourseModal(${c.id})">
      <span class="card-badge">${c.code} • ${c.tier}</span>
      <h3>${c.title}</h3>
      <p>${c.outline.substring(0, 90)}...</p>
      <div class="card-footer">
        <span class="price">${c.price === 0 ? 'FREE' : '$' + c.price}</span>
        <button class="btn btn-primary">${c.price === 0 ? 'Start Course' : 'Enroll Now'}</button>
      </div>
    </div>
  `).join('');
}

// RENDER CREATORS
function renderCreators(list) {
  const container = document.getElementById('creatorsGrid');
  container.innerHTML = list.slice(0, 30).map(cr => `
    <div class="card">
      <span class="card-badge">${cr.discipline}</span>
      <h3>${cr.name}</h3>
      <p style="color: var(--accent-slate); font-weight: 500;">${cr.location}</p>
      <p>${cr.bio}</p>
      <div class="card-footer">
        <button class="btn btn-secondary" onclick="alert('Opening Creator Portfolio Showcase...')">View Portfolio</button>
      </div>
    </div>
  `).join('');
}

// FILTER LOGIC
function filterCourses() {
  const q = document.getElementById('courseSearch').value.toLowerCase();
  const tier = document.getElementById('tierFilter').value;
  const cat = document.getElementById('categoryFilter').value;

  const filtered = courses.filter(c => {
    const matchQ = c.title.toLowerCase().includes(q) || c.code.toLowerCase().includes(q);
    const matchTier = tier === 'ALL' || c.tier === tier;
    const matchCat = cat === 'ALL' || c.category === cat;
    return matchQ && matchTier && matchCat;
  });

  renderCourses(filtered);
}

function filterCreators() {
  const q = document.getElementById('creatorSearch').value.toLowerCase();
  const filtered = creators.filter(cr => cr.name.toLowerCase().includes(q) || cr.discipline.toLowerCase().includes(q) || cr.location.toLowerCase().includes(q));
  renderCreators(filtered);
}

// MODAL CONTROLS
function openCourseModal(id) {
  activeCourse = courses.find(c => c.id === id);
  if (!activeCourse) return;

  document.getElementById('mCode').innerText = activeCourse.code;
  document.getElementById('mTitle').innerText = activeCourse.title;
  document.getElementById('mTier').innerText = `${activeCourse.tier} • ${activeCourse.category}`;
  document.getElementById('mOutline').innerText = activeCourse.outline;
  document.getElementById('mDeliverable').innerText = activeCourse.deliverable;
  document.getElementById('mPrice').innerText = activeCourse.price === 0 ? 'FREE ACCESS' : `$${activeCourse.price} USD`;
  document.getElementById('mVideo').src = activeCourse.video;

  document.getElementById('courseModal').style.display = 'flex';
  renderPayPalButton(activeCourse.price);
}

function openDonateModal() {
  document.getElementById('donateModal').style.display = 'flex';
  renderPayPalDonateButton(donateAmount);
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
  if (id === 'courseModal') document.getElementById('mVideo').src = '';
}

function setDonation(amt, btn) {
  donateAmount = amt;
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('customDonateAmount').value = amt;
  renderPayPalDonateButton(amt);
}

// PAYMENT PROCESSORS
function processStripeCheckout() {
  if (!activeCourse) return;
  if (activeCourse.price === 0) {
    alert("This course is free! Redirecting to course workspace...");
    return;
  }
  alert(`Connecting securely to Stripe to charge $${activeCourse.price} for ${activeCourse.code}...`);
}

function processDonation(type) {
  const amt = document.getElementById('customDonateAmount').value;
  alert(`Thank you! Processing $${amt} donation via ${type}...`);
  closeModal('donateModal');
}

function renderPayPalButton(amount) {
  const container = document.getElementById('paypal-button-container');
  container.innerHTML = '';
  if (amount === 0) return;

  if (window.paypal) {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{ amount: { value: amount.toString() } }]
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then(details => {
          alert('Payment Successful! Course Unlocked for ' + details.payer.name.given_name);
          closeModal('courseModal');
        });
      }
    }).render('#paypal-button-container');
  }
}

function renderPayPalDonateButton(amount) {
  const container = document.getElementById('paypal-donate-container');
  container.innerHTML = '';
  if (window.paypal) {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{ amount: { value: amount.toString() } }]
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then(() => {
          alert('Donation Received! Thank you for supporting PRAXIS.');
          closeModal('donateModal');
        });
      }
    }).render('#paypal-donate-container');
  }
}

// INITIALIZATION
renderCourses(courses);
renderCreators(creators);
