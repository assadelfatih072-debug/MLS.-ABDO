import { Question, QuestionCategory } from '../types/quiz';

export const QUESTIONS_DATA: Question[] = [
  {
    id: 1,
    question: "Which lab level is simplest with low risk organisms like food spoilage bacteria?",
    options: [
      { key: "A", text: "Level I" },
      { key: "B", text: "Level II" },
      { key: "C", text: "Level III" },
      { key: "D", text: "Level IV" }
    ],
    correctAnswer: "A",
    category: "Biosafety & Containment",
    explanation: "Biosafety Level I (BSL-1) is the basic laboratory level handling well-characterized agents of minimal hazard not known to consistently cause disease in healthy adults, such as food spoilage bacteria and non-pathogenic Bacillus subtilis.",
    clinicalKey: "BSL-1: Minimal hazard; standard open benchwork without special containment equipment."
  },
  {
    id: 2,
    question: "Which organisms work in Basic lab level II?",
    options: [
      { key: "A", text: "Yeasts" },
      { key: "B", text: "Staphylococci, streptococci" },
      { key: "C", text: "Small pox" },
      { key: "D", text: "Ebola" }
    ],
    correctAnswer: "B",
    category: "Biosafety & Containment",
    explanation: "Basic Biosafety Level II (BSL-2) is designed for moderate-risk clinical pathogens causing mild-to-moderate human disease, specifically common pyogenic bacteria like Staphylococci and Streptococci, as well as Hepatitis B and Salmonella.",
    clinicalKey: "BSL-2: Moderate personal/community risk; includes Staph, Strep, and bloodborne pathogens."
  },
  {
    id: 3,
    question: "Containment lab Level III example?",
    options: [
      { key: "A", text: "Food spoilage" },
      { key: "B", text: "Tubercle bacilli, Salmonella typhi, HIV" },
      { key: "C", text: "Yeasts" },
      { key: "D", text: "Non-pathogenic" }
    ],
    correctAnswer: "B",
    category: "Biosafety & Containment",
    explanation: "Biosafety Level III (BSL-3 Containment) handles indigenous or exotic agents transmitted via aerosols that can cause serious or potentially lethal disease, such as Mycobacterium tuberculosis (tubercle bacilli), Salmonella typhi, and HIV.",
    clinicalKey: "BSL-3: Controlled negative air pressure, HEPA filtration, and strict respiratory protection."
  },
  {
    id: 4,
    question: "Maximum containment lab Level IV example?",
    options: [
      { key: "A", text: "Staphylococci" },
      { key: "B", text: "Small pox, Ebola" },
      { key: "C", text: "Yeasts" },
      { key: "D", text: "Streptococci" }
    ],
    correctAnswer: "B",
    category: "Biosafety & Containment",
    explanation: "Biosafety Level IV (BSL-4 Maximum Containment) is reserved for life-threatening, highly aerosol-transmissible viral agents with no known prophylaxis or cure, including Smallpox (Variola virus) and Ebola / Marburg filoviruses.",
    clinicalKey: "BSL-4: Positive pressure suits with independent breathing air supply and Class III biosafety cabinets."
  },
  {
    id: 5,
    question: "WHO classification of labs based on?",
    options: [
      { key: "A", text: "Size" },
      { key: "B", text: "Biosafety" },
      { key: "C", text: "Color" },
      { key: "D", text: "Price" }
    ],
    correctAnswer: "B",
    category: "Biosafety & Containment",
    explanation: "The World Health Organization (WHO) classifies laboratory facilities based on Biosafety risk groups (Risk Groups 1-4) assessing infectivity, pathogenicity, host range, and aerosol transmission.",
    clinicalKey: "WHO Classification: Risk Group 1 (BSL-1) to Risk Group 4 (BSL-4 Maximum Containment)."
  },
  {
    id: 6,
    question: "Without reliable lab services?",
    options: [
      { key: "A", text: "Source identified" },
      { key: "B", text: "Best care" },
      { key: "C", text: "Source may not be identified correctly" },
      { key: "D", text: "No effect" }
    ],
    correctAnswer: "C",
    category: "Lab Safety & Regulations",
    explanation: "Without quality-assured and reliable clinical laboratory services, the etiology and specific infectious or chemical source of disease may not be identified correctly, risking inappropriate patient management.",
    clinicalKey: "Accurate laboratory medicine underpins diagnostic validity, antimicrobial stewardship, and patient outcomes."
  },
  {
    id: 7,
    question: "Laboratory glassware made of?",
    options: [
      { key: "A", text: "Plastic" },
      { key: "B", text: "Borosilicate glass" },
      { key: "C", text: "Ordinary glass" },
      { key: "D", text: "Metal" }
    ],
    correctAnswer: "B",
    category: "Lab Glassware & Vessels",
    explanation: "Standard high-performance laboratory glassware is manufactured from Borosilicate glass (such as Pyrex or Duran) due to its very low thermal expansion coefficient and high chemical corrosion resistance.",
    clinicalKey: "Borosilicate glass: Formulated with silica and boron trioxide for superior thermal shock tolerance."
  },
  {
    id: 8,
    question: "Beakers capacities?",
    options: [
      { key: "A", text: "5-5000 ml" },
      { key: "B", text: "1-10 ml" },
      { key: "C", text: "50-100 ml" },
      { key: "D", text: "25-5000 ml" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Laboratory beakers (Griffin low-form or Berzelius tall-form) are manufactured across a wide volume spectrum ranging from 5 ml micro-beakers to 5000 ml (5 Liter) preparation vessels.",
    clinicalKey: "Beaker capacities: 5 ml to 5000 ml for general bench solution mixing."
  },
  {
    id: 9,
    question: "Beakers mainly used for?",
    options: [
      { key: "A", text: "Exact volume" },
      { key: "B", text: "Preparation of solution" },
      { key: "C", text: "Drops" },
      { key: "D", text: "Blood collection" }
    ],
    correctAnswer: "B",
    category: "Lab Glassware & Vessels",
    explanation: "Beakers are primarily utilized for reagent preparation, dissolution, mixing, and holding solutions. They are not volumetric measuring devices (graduations are only approximate within ±5%).",
    clinicalKey: "Use volumetric flasks for exact volumes; beakers for preparation and non-critical holding."
  },
  {
    id: 10,
    question: "Round bottomed flasks?",
    options: [
      { key: "A", text: "Withstand higher temperature" },
      { key: "B", text: "Cannot withstand" },
      { key: "C", text: "Drops" },
      { key: "D", text: "Blood" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Round-bottomed flasks possess uniform wall thickness and curved geometry that distribute heat evenly, allowing them to withstand higher temperatures and vacuum pressures during distillation or reflux.",
    clinicalKey: "Spherical base prevents localized thermal stress fractures during high-temperature heating."
  },
  {
    id: 11,
    question: "Volumetric flasks used for?",
    options: [
      { key: "A", text: "Make final volume very accurately" },
      { key: "B", text: "Heating directly" },
      { key: "C", text: "Drops" },
      { key: "D", text: "Centrifugation" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Volumetric flasks are Class A calibrated glassware with a single ring mark (meniscus line) specifically calibrated 'To Contain' (TC) a precise volume of liquid at 20°C for analytical standard preparation.",
    clinicalKey: "Volumetric flasks provide analytical precision for standard calibration and buffer reconstitution."
  },
  {
    id: 12,
    question: "Measuring cylinder capacities?",
    options: [
      { key: "A", text: "10-2000 ml" },
      { key: "B", text: "5-5000 ml" },
      { key: "C", text: "50-100 ml" },
      { key: "D", text: "0.1-10 ml" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Standard laboratory measuring (graduated) cylinders typically range from 10 ml up to 2000 ml (2 Liters), used for measuring moderate liquid volumes with intermediate precision.",
    clinicalKey: "Graduated cylinders: 10 ml to 2000 ml capacity with ±1% general accuracy."
  },
  {
    id: 13,
    question: "Reagent bottles capacities?",
    options: [
      { key: "A", text: "25-5000 ml" },
      { key: "B", text: "5-5000 ml" },
      { key: "C", text: "50-100 ml" },
      { key: "D", text: "2-20 ml" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Reagent storage bottles (narrow-mouth and wide-mouth with ground-glass stoppers or screw caps) typically range from 25 ml to 5000 ml.",
    clinicalKey: "Reagent storage bottles: 25 ml to 5000 ml for stable stock and working solutions."
  },
  {
    id: 14,
    question: "Amber reagent bottles useful to?",
    options: [
      { key: "A", text: "Store light sensitive reagents" },
      { key: "B", text: "Water only" },
      { key: "C", text: "Heating" },
      { key: "D", text: "Centrifuge" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Amber glass acts as an optical filter absorbing actinic light wavelengths below 500 nm (ultraviolet and short blue light), protecting light-sensitive compounds like silver nitrate, bilirubin standards, and stains from photodegradation.",
    clinicalKey: "Amber glass safeguards light-sensitive chemicals and photosensitive clinical indicators."
  },
  {
    id: 15,
    question: "Drop bottles capacities?",
    options: [
      { key: "A", text: "50-100 ml" },
      { key: "B", text: "5-5000 ml" },
      { key: "C", text: "10-2000 ml" },
      { key: "D", text: "2-20 ml" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Benchtop dropping bottles (such as Barnes or TK dropping bottles) are standardly manufactured in 50 ml to 100 ml capacities.",
    clinicalKey: "Dropping bottles: 50-100 ml for routine histology, cytology, and Gram staining reagents."
  },
  {
    id: 16,
    question: "Drop bottles used for?",
    options: [
      { key: "A", text: "Delivery of drops such as stain" },
      { key: "B", text: "Preparation" },
      { key: "C", text: "Heating" },
      { key: "D", text: "Large volume" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Dropping bottles are engineered with integral grooved stoppers or pipettes to deliver controlled droplets of reagents, particularly vital stains, mordants, and pH indicators onto slides.",
    clinicalKey: "Dropwise delivery minimizes waste and ensures controlled application on microscope smears."
  },
  {
    id: 17,
    question: "Test tubes 10 X 75 ml used for?",
    options: [
      { key: "A", text: "Testing and centrifugation" },
      { key: "B", text: "Heating directly" },
      { key: "C", text: "Biochemistry" },
      { key: "D", text: "Drops" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Small 10 × 75 mm test tubes (Kahn tubes) are standard bench vessels for serological agglutination testing, blood bank crossmatching, and benchtop centrifugation.",
    clinicalKey: "10 × 75 mm tubes fit standard centrifuge buckets for serum separation and blood bank serology."
  },
  {
    id: 18,
    question: "Test tubes 18 X 150 ml used for?",
    options: [
      { key: "A", text: "Heating mixture directly on flame" },
      { key: "B", text: "Centrifugation only" },
      { key: "C", text: "Drops" },
      { key: "D", text: "Storage" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Large 18 × 150 mm test tubes (boiling tubes) have heavy walls designed to withstand direct heating over an open Bunsen flame without sudden thermal fracture or boiling over.",
    clinicalKey: "Boiling tubes (18 × 150 mm) safely accommodate direct flame heating and vigorous boiling."
  },
  {
    id: 19,
    question: "Graduated pipettes capacities?",
    options: [
      { key: "A", text: "0.1-10 ml" },
      { key: "B", text: "5-5000 ml" },
      { key: "C", text: "50-100 ml" },
      { key: "D", text: "10-2000 ml" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Standard serological and Mohr graduated pipettes range in total capacity from 0.1 ml up to 10 ml, calibrated in fractional subdivision increments (e.g., 0.01 ml, 0.1 ml).",
    clinicalKey: "Graduated pipettes: 0.1 to 10 ml for aliquoting precise fractional volumes."
  },
  {
    id: 20,
    question: "Syringes for blood and CSF capacities?",
    options: [
      { key: "A", text: "2,5,10,20 ml" },
      { key: "B", text: "5-5000 ml" },
      { key: "C", text: "50-100 ml" },
      { key: "D", text: "0.1 ml" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "Clinical sterile syringes used for diagnostic venipuncture, arterial blood sampling, and cerebrospinal fluid (CSF) collection via lumbar puncture come in standard 2, 5, 10, and 20 ml sizes.",
    clinicalKey: "Standard collection syringes: 2 ml, 5 ml, 10 ml, and 20 ml."
  },
  {
    id: 21,
    question: "Autoclave used to sterilize by?",
    options: [
      { key: "A", text: "Wet sterilization" },
      { key: "B", text: "Dry sterilization" },
      { key: "C", text: "Radiation" },
      { key: "D", text: "Filtration" }
    ],
    correctAnswer: "A",
    category: "Sterilization & Incubators",
    explanation: "Autoclaves employ moist heat (wet sterilization) using pressurized saturated steam to denature and coagulate microbial enzymes and structural proteins.",
    clinicalKey: "Moist heat / steam under pressure is far more bactericidal and rapid than dry heat."
  },
  {
    id: 22,
    question: "Autoclave principle?",
    options: [
      { key: "A", text: "15 pressure - 121 C° temperature" },
      { key: "B", text: "0 C°" },
      { key: "C", text: "50 C°" },
      { key: "D", text: "37 C°" }
    ],
    correctAnswer: "A",
    category: "Sterilization & Incubators",
    explanation: "The standard operating benchmark for clinical autoclaving is 15 pounds per square inch (psi) gauge steam pressure (~103 kPa) achieving 121°C for a minimum of 15-20 minutes.",
    clinicalKey: "Autoclave standard: 15 psi at 121°C (250°F) for 15 minutes destroys bacterial endospores."
  },
  {
    id: 23,
    question: "Autoclave kills?",
    options: [
      { key: "A", text: "All organisms" },
      { key: "B", text: "Only bacteria" },
      { key: "C", text: "Only viruses" },
      { key: "D", text: "None" }
    ],
    correctAnswer: "A",
    category: "Sterilization & Incubators",
    explanation: "True sterilization achieved by autoclaving eradicates all living microbial forms, including vegetative bacteria, fungal spores, viruses, and highly heat-resistant bacterial endospores (e.g., Geobacillus stearothermophilus).",
    clinicalKey: "Sterilization means the absolute destruction of all viable microorganisms and spores."
  },
  {
    id: 24,
    question: "Hot air oven uses?",
    options: [
      { key: "A", text: "Dry sterilization of needle 140-160 C°" },
      { key: "B", text: "Wet sterilization" },
      { key: "C", text: "121 C°" },
      { key: "D", text: "Freezing" }
    ],
    correctAnswer: "A",
    category: "Sterilization & Incubators",
    explanation: "Hot air ovens provide dry heat sterilization typically operating between 140°C–160°C (or 160°C–180°C for 1–2 hours), ideal for dry glassware, metal instruments, and needles.",
    clinicalKey: "Dry heat oxidizes cell components; required for anhydrous materials and glassware."
  },
  {
    id: 25,
    question: "Hot air oven also for?",
    options: [
      { key: "A", text: "Drying glassware" },
      { key: "B", text: "Culturing" },
      { key: "C", text: "Blood collection" },
      { key: "D", text: "Urine" }
    ],
    correctAnswer: "A",
    category: "Sterilization & Incubators",
    explanation: "Beyond terminal dry sterilization, hot air ovens are routinely utilized in laboratories for rapid, thorough drying of washed glass beakers, flasks, and cylinders.",
    clinicalKey: "Hot air ovens remove residual water from cleaned glassware prior to analytical use."
  },
  {
    id: 26,
    question: "Incubators mainly for?",
    options: [
      { key: "A", text: "Growing microorganisms in culture media" },
      { key: "B", text: "Sterilizing" },
      { key: "C", text: "Weighing" },
      { key: "D", text: "Centrifuging" }
    ],
    correctAnswer: "A",
    category: "Sterilization & Incubators",
    explanation: "Bacteriological incubators provide an insulated, thermally controlled chamber (typically regulated at 35°C–37°C) to foster the active growth and replication of microorganisms in culture media.",
    clinicalKey: "Incubators maintain 37°C (human body temperature) for optimal clinical pathogen growth."
  },
  {
    id: 27,
    question: "Incubators also for determination of?",
    options: [
      { key: "A", text: "Glucose, urea by enzymatic methods" },
      { key: "B", text: "Weight" },
      { key: "C", text: "Volume" },
      { key: "D", text: "Pressure" }
    ],
    correctAnswer: "A",
    category: "Sterilization & Incubators",
    explanation: "Many clinical biochemistry enzymatic endpoints (such as glucose oxidase and urease Berthelot methods) require strict 37°C incubation to achieve complete stoichiometric enzyme-substrate catalysis.",
    clinicalKey: "Enzymatic colorimetric assays require controlled incubation temperature for kinetic linearity."
  },
  {
    id: 28,
    question: "Two pan analytical balance sensitivity?",
    options: [
      { key: "A", text: "0.001 gram" },
      { key: "B", text: "0.001 mg" },
      { key: "C", text: "1 gram" },
      { key: "D", text: "10 gram" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "Classic mechanical two-pan analytical balances typically possess a readability / sensitivity limit of 0.001 gram (1 milligram).",
    clinicalKey: "Two-pan mechanical balance sensitivity: 0.001 g (1 mg)."
  },
  {
    id: 29,
    question: "Monopan balance most sensitive?",
    options: [
      { key: "A", text: "0.001 mg" },
      { key: "B", text: "0.001 gram" },
      { key: "C", text: "1 gram" },
      { key: "D", text: "0.1 gram" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "High-precision electronic single-pan (monopan) micro-balances achieve superior sensitivities down to 0.001 mg (1 microgram / 0.000001 g) utilizing electromagnetic force restoration.",
    clinicalKey: "Monopan microbalance sensitivity reaches 0.001 mg (1 µg)."
  },
  {
    id: 30,
    question: "Petri dishes used in?",
    options: [
      { key: "A", text: "Culturing microorganism" },
      { key: "B", text: "Urine specimen" },
      { key: "C", text: "Blood specimen" },
      { key: "D", text: "Stool specimen" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "Petri dishes are shallow circular transparent dishes with flat lids designed to hold solid nutrient agar media for isolation, streak plating, and culturing of microorganisms.",
    clinicalKey: "Invented by Julius Richard Petri for microbial colony isolation on agar."
  },
  {
    id: 31,
    question: "Petri dishes made of?",
    options: [
      { key: "A", text: "Glass or plastic" },
      { key: "B", text: "Metal only" },
      { key: "C", text: "Wood" },
      { key: "D", text: "Paper" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "Petri dishes are fabricated either from heat-resistant reusable borosilicate glass or pre-sterilized disposable polystyrene plastic.",
    clinicalKey: "Glass (autoclavable) or clear virgin polystyrene plastic (gamma pre-irradiated)."
  },
  {
    id: 32,
    question: "Urine container for?",
    options: [
      { key: "A", text: "Urine specimen" },
      { key: "B", text: "Stool specimen" },
      { key: "C", text: "Blood specimen" },
      { key: "D", text: "Sputum" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "A sterile wide-mouth container with a leak-proof screw cap designed specifically to collect clean-catch midstream urine specimens.",
    clinicalKey: "Leak-proof sterile urine cup prevents external contamination and sample evaporation."
  },
  {
    id: 33,
    question: "Stool container for?",
    options: [
      { key: "A", text: "Stool specimen" },
      { key: "B", text: "Urine" },
      { key: "C", text: "Blood" },
      { key: "D", text: "CSF" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "A clean, wide-mouth container, frequently equipped with a collection spoon/spatula attached to the screw cap, for fecal/stool specimen collection.",
    clinicalKey: "Stool collection containers ensure hygienic handling for parasitological and microbiological exams."
  },
  {
    id: 34,
    question: "Blood container for?",
    options: [
      { key: "A", text: "Blood specimen" },
      { key: "B", text: "Urine" },
      { key: "C", text: "Stool" },
      { key: "D", text: "Water" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "Blood collection tubes (evacuated Vacutainer tubes) contain specific anticoagulants (EDTA, sodium citrate, heparin) or clot activators tailored for blood specimen collection.",
    clinicalKey: "Evacuated blood tubes maintain specific blood-to-anticoagulant ratios."
  },
  {
    id: 35,
    question: "Microscope Stage is where?",
    options: [
      { key: "A", text: "Sample placed for examination" },
      { key: "B", text: "Light control" },
      { key: "C", text: "Eye piece" },
      { key: "D", text: "Nose piece" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The microscope stage is the flat horizontal platform fitted with stage clips or a mechanical slide holder where the glass specimen slide is placed directly over the condenser aperture.",
    clinicalKey: "Mechanical stage allows precise X-Y translation of the slide during scanning."
  },
  {
    id: 36,
    question: "Iris Diaphragm allows?",
    options: [
      { key: "A", text: "Control amount of light" },
      { key: "B", text: "Magnification" },
      { key: "C", text: "Focus" },
      { key: "D", text: "Stage movement" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The iris diaphragm located beneath the condenser controls the angular aperture and amount of light reaching the specimen, optimizing contrast and resolving power.",
    clinicalKey: "Adjusting the iris diaphragm balances image contrast against optical resolution."
  },
  {
    id: 37,
    question: "Lab glassware manufactured?",
    options: [
      { key: "A", text: "Borosilicate glass" },
      { key: "B", text: "Plastic" },
      { key: "C", text: "Ordinary glass" },
      { key: "D", text: "Metal" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Professional laboratory glassware is manufactured predominantly from Borosilicate 3.3 glass to guarantee stability against harsh acids, alkalis, and thermal cycling.",
    clinicalKey: "Borosilicate composition: ~81% SiO2, 13% B2O3, 4% Na2O/K2O, 2% Al2O3."
  },
  {
    id: 38,
    question: "Borosilicate glass resistant to?",
    options: [
      { key: "A", text: "Chemicals, mechanical breakage, sudden temperature change" },
      { key: "B", text: "Only water" },
      { key: "C", text: "Only air" },
      { key: "D", text: "Nothing" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Borosilicate glass boasts broad chemical inertness, high mechanical durability, and resistance to sudden thermal shock without cracking.",
    clinicalKey: "Resists rapid temperature deltas up to 150°C and attack by corrosive inorganic chemicals."
  },
  {
    id: 39,
    question: "Beakers capacities?",
    options: [
      { key: "A", text: "5-5000 ml" },
      { key: "B", text: "50-100 ml" },
      { key: "C", text: "0.1-10 ml" },
      { key: "D", text: "2-20 ml" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Laboratory beakers are standardized in nominal capacities from 5 ml up to 5000 ml for clinical, biochemical, and pharmaceutical applications.",
    clinicalKey: "Standard sizes: 5, 10, 25, 50, 100, 250, 400, 600, 1000, 2000, 5000 ml."
  },
  {
    id: 40,
    question: "Reagent bottles capacities?",
    options: [
      { key: "A", text: "25-5000 ml" },
      { key: "B", text: "5-5000 ml" },
      { key: "C", text: "50-100 ml" },
      { key: "D", text: "0.1-10 ml" }
    ],
    correctAnswer: "A",
    category: "Lab Glassware & Vessels",
    explanation: "Standard storage reagent bottles are manufactured in volume capacities between 25 ml and 5000 ml with ground-glass or polypropylene autosealing closures.",
    clinicalKey: "25 ml to 5000 ml capacities provide versatile containment for analytical grade reagents."
  },
  {
    id: 41,
    question: "Laboratory is a place equipped with?",
    options: [
      { key: "A", text: "Instruments, equipments and chemicals for experimental works" },
      { key: "B", text: "Food only" },
      { key: "C", text: "Clothes" },
      { key: "D", text: "Cars" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "A scientific or medical laboratory is a controlled facility equipped with specialized analytical instruments, safety apparatus, and chemical reagents designed for diagnostic testing and experimental procedures.",
    clinicalKey: "A controlled environment governed by Good Laboratory Practices (GLP) and ISO 15189 standards."
  },
  {
    id: 42,
    question: "Medical laboratory uses biological specimens?",
    options: [
      { key: "A", text: "Whole blood, serum, plasma, urine, stool" },
      { key: "B", text: "Water only" },
      { key: "C", text: "Soil only" },
      { key: "D", text: "Air only" }
    ],
    correctAnswer: "A",
    category: "Balances & Specimen Handling",
    explanation: "Clinical and medical laboratories analyze human biological specimens including whole blood, serum, plasma, urine, stool, cerebrospinal fluid, and other body fluids for diagnostic and monitoring purposes.",
    clinicalKey: "Specimen matrix integrity (pre-analytical phase) directly governs diagnostic accuracy."
  },
  {
    id: 43,
    question: "Definition of Microscope?",
    options: [
      { key: "A", text: "micro: small, scope: view" },
      { key: "B", text: "micro: large" },
      { key: "C", text: "scope: hearing" },
      { key: "D", text: "micro: food" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The word microscope derives etymologically from the Greek words 'mikros' meaning small, and 'skopein' meaning to look at or view.",
    clinicalKey: "Microscope: An instrument that renders minute sub-visible structures visually observable."
  },
  {
    id: 44,
    question: "Microscope is an optical instrument that?",
    options: [
      { key: "A", text: "Allows you to see objects magnified" },
      { key: "B", text: "Allows you to hear" },
      { key: "C", text: "Allows you to taste" },
      { key: "D", text: "Allows you to smell" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "A microscope is an optical instrument consisting of compound lenses that produces an enlarged, magnified virtual image of microscopic specimens.",
    clinicalKey: "Combines magnification (size enlargement) with resolving power (separating fine details)."
  },
  {
    id: 45,
    question: "Magnification obtained by?",
    options: [
      { key: "A", text: "Objective x eyepiece" },
      { key: "B", text: "Stage x light" },
      { key: "C", text: "Arm x base" },
      { key: "D", text: "Diaphragm x lens" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "Total optical magnification is calculated as the product of the Objective lens magnification and the Ocular (eyepiece) magnification (Total = M_obj × M_eye).",
    clinicalKey: "Example: 100x oil immersion objective × 10x eyepiece = 1000x total magnification."
  },
  {
    id: 46,
    question: "Eyepiece is?",
    options: [
      { key: "A", text: "Top part where microscopist applies his eye" },
      { key: "B", text: "Bottom part" },
      { key: "C", text: "Light source" },
      { key: "D", text: "Stage" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The ocular lens (eyepiece) is mounted at the top of the body tube where the microscopist looks; it further magnifies the primary real intermediate image formed by the objective.",
    clinicalKey: "Standard oculars provide 10x magnification with diopter adjustment for binocular viewing."
  },
  {
    id: 47,
    question: "Stage is where?",
    options: [
      { key: "A", text: "Sample placed for examination" },
      { key: "B", text: "Eye placed" },
      { key: "C", text: "Light controlled" },
      { key: "D", text: "Arm attached" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The microscope stage is the platform where the specimen slide is positioned and clamped for optical examination.",
    clinicalKey: "Equipped with mechanical calipers and coaxial Vernier scales for coordinate navigation."
  },
  {
    id: 48,
    question: "Iris Diaphragm allows you to?",
    options: [
      { key: "A", text: "Control amount of light" },
      { key: "B", text: "Control magnification" },
      { key: "C", text: "Move stage" },
      { key: "D", text: "Focus" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The iris diaphragm regulates the light beam diameter and aperture angle entering the objective, optimizing contrast and resolving power.",
    clinicalKey: "Opening too wide washes out contrast; closing too far introduces diffraction artifacts."
  },
  {
    id: 49,
    question: "Fine Adjustment Knob used to?",
    options: [
      { key: "A", text: "Fine-tune focus" },
      { key: "B", text: "Move stage" },
      { key: "C", text: "Control light" },
      { key: "D", text: "Change objective" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The fine adjustment knob moves the stage in microscopic increments (micrometers per rotation) to achieve crisp, sharp focus, especially on high-power (40x) and oil-immersion (100x) lenses.",
    clinicalKey: "Always focus first with coarse focus on low power, then fine focus for critical detail."
  },
  {
    id: 50,
    question: "Coarse Adjustment Knob?",
    options: [
      { key: "A", text: "Largest, relative up and down, focus first with coarse" },
      { key: "B", text: "Smallest" },
      { key: "C", text: "Controls light" },
      { key: "D", text: "Holds slide" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The coarse adjustment knob is the largest focusing dial that produces rapid vertical travel of the stage for initial rapid focusing under low-power (4x or 10x) objectives.",
    clinicalKey: "Never use the coarse adjustment knob when focusing on the 40x or 100x oil objective."
  },
  {
    id: 51,
    question: "In lab bacteria can become airborne by?",
    options: [
      { key: "A", text: "Mouth pipetting" },
      { key: "B", text: "Washing hands" },
      { key: "C", text: "Wearing gloves" },
      { key: "D", text: "Closing door" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Mouth pipetting can generate fine infectious aerosols through forceful blowing or aspiration, creating dangerous airborne pathogen dispersal and immediate poisoning or infection risk.",
    clinicalKey: "Mouth pipetting is strictly prohibited by OSHA and WHO biosafety standards."
  },
  {
    id: 52,
    question: "Bacteria airborne also by?",
    options: [
      { key: "A", text: "Manipulation of cultures" },
      { key: "B", text: "Writing" },
      { key: "C", text: "Sitting" },
      { key: "D", text: "Reading" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Vigorous mechanical manipulation of liquid bacterial cultures (such as vortexing without caps, forceful expulsion from pipettes, or streaking loops hot from flame) generates airborne bioaerosols.",
    clinicalKey: "Perform aerosol-generating culture manipulation inside a certified Biosafety Cabinet (BSC)."
  },
  {
    id: 53,
    question: "Bacteria airborne also by?",
    options: [
      { key: "A", text: "Centrifuge, fractures of test tube" },
      { key: "B", text: "Microscope" },
      { key: "C", text: "Incubator" },
      { key: "D", text: "Oven" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "High-speed centrifugation of cracked or broken tubes creates massive aerosol clouds inside the centrifuge bowl that disperse when opened.",
    clinicalKey: "Use sealed safety buckets and wait 30 minutes before opening if tube breakage occurs."
  },
  {
    id: 54,
    question: "Centrifuges designed to?",
    options: [
      { key: "A", text: "Accelerate sedimentation by centrifugal force" },
      { key: "B", text: "Magnify" },
      { key: "C", text: "Sterilize" },
      { key: "D", text: "Incubate" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "Centrifuges rotate samples at high angular velocity, exerting centrifugal force (Relative Centrifugal Force / RCF) that accelerates the sedimentation rate of suspended particles according to Stokes' law.",
    clinicalKey: "Centrifugal force accelerates particle sedimentation thousands of times faster than gravity."
  },
  {
    id: 55,
    question: "Centrifuge speed measured in?",
    options: [
      { key: "A", text: "RPM" },
      { key: "B", text: "C°" },
      { key: "C", text: "ml" },
      { key: "D", text: "mg" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "Centrifuge rotor rotational velocity is measured in Revolutions Per Minute (RPM), which correlates to relative centrifugal field (RCF × g) based on the rotor radius.",
    clinicalKey: "RPM = Revolutions Per Minute; RCF = 1.118 × 10⁻⁵ × r × (RPM)²."
  },
  {
    id: 56,
    question: "Centrifuge uses: separation of?",
    options: [
      { key: "A", text: "Solid particles in suspension" },
      { key: "B", text: "Light" },
      { key: "C", text: "Sound" },
      { key: "D", text: "Heat" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "The core clinical function of centrifuges is separating suspended solid precipitates or cellular particles from liquid media based on density differential.",
    clinicalKey: "Pellets particulate matter to yield clear supernatant liquids for analysis."
  },
  {
    id: 57,
    question: "Centrifuge also for separation of?",
    options: [
      { key: "A", text: "Serum or plasma from red cells" },
      { key: "B", text: "Urine from stool" },
      { key: "C", text: "Water from air" },
      { key: "D", text: "Glass from plastic" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "In clinical hematology and chemistry, centrifugation separates denser cellular components (erythrocytes, leukocytes, platelets) from liquid serum (clotted blood) or plasma (anticoagulated blood).",
    clinicalKey: "Standard blood centrifugation: 1000–2000 g for 10–15 minutes yields serum or plasma."
  },
  {
    id: 58,
    question: "Centrifuge also for?",
    options: [
      { key: "A", text: "Sediment in urine" },
      { key: "B", text: "Glucose" },
      { key: "C", text: "Urea" },
      { key: "D", text: "Enzymes" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "Urinalysis utilizes gentle centrifugation (e.g., 400 g for 5 minutes) to concentrate cellular casts, epithelial cells, erythrocytes, and crystals into a microscopic sediment pellet.",
    clinicalKey: "Concentrates microscopic elements for standardized urine sediment evaluation."
  },
  {
    id: 59,
    question: "Centrifuge also for?",
    options: [
      { key: "A", text: "Washing RBC by normal saline" },
      { key: "B", text: "Drying glassware" },
      { key: "C", text: "Sterilizing needle" },
      { key: "D", text: "Growing bacteria" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "Immunohematology (blood banking) routines rely on centrifuging red blood cells with normal saline (0.9% NaCl) in multiple cycles to wash away unbound serum antibodies before Coombs testing.",
    clinicalKey: "RBC cell washing is crucial for valid Antihuman Globulin (AHG / Coombs) test results."
  },
  {
    id: 60,
    question: "Before centrifugation you must?",
    options: [
      { key: "A", text: "Close cover, tubes balanced properly" },
      { key: "B", text: "Open cover" },
      { key: "C", text: "Unbalance tubes" },
      { key: "D", text: "Place near colorimeter" }
    ],
    correctAnswer: "A",
    category: "Microscopy & Centrifugation",
    explanation: "Rotor balance must be verified (opposing tubes matched by weight/volume) and the safety lid firmly latched before starting to prevent catastrophic vibration, mechanical spindle failure, and aerosol generation.",
    clinicalKey: "Always balance centrifuge tubes diametrically opposite to within 0.1 gram."
  },
  {
    id: 61,
    question: "Law says you must perform?",
    options: [
      { key: "A", text: "RISK ASSESSMENTS" },
      { key: "B", text: "Eating" },
      { key: "C", text: "Sleeping" },
      { key: "D", text: "Playing" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Occupational health and safety legislation mandates that every clinical laboratory perform formal, documented Risk Assessments before initiating any hazardous activity.",
    clinicalKey: "Risk assessments identify hazards, evaluate likelihood and severity, and establish control hierarchies."
  },
  {
    id: 62,
    question: "Management of health and safety at work Regs?",
    options: [
      { key: "A", text: "1999" },
      { key: "B", text: "2004" },
      { key: "C", text: "1974" },
      { key: "D", text: "2010" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "The Management of Health and Safety at Work Regulations were enacted in 1999, placing clear duties on employers to assess and manage risks to employees and visitors.",
    clinicalKey: "MHSWR 1999 mandates systematic health and safety management arrangements."
  },
  {
    id: 63,
    question: "Control of substances hazards to health Regs?",
    options: [
      { key: "A", text: "2004" },
      { key: "B", text: "1999" },
      { key: "C", text: "1974" },
      { key: "D", text: "2000" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "The Control of Substances Hazardous to Health (COSHH) Regulations were consolidated and updated in 2002/2004 (SI 2004/3386), establishing strict exposure control limits for hazardous chemicals and biological agents.",
    clinicalKey: "COSHH Regulations protect workers against chemical, toxic, and biological hazards."
  },
  {
    id: 64,
    question: "Health safety at work act?",
    options: [
      { key: "A", text: "1974" },
      { key: "B", text: "1999" },
      { key: "C", text: "2004" },
      { key: "D", text: "2020" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "The foundational framework statute governing occupational health and safety in the UK and widely mirrored internationally is the Health and Safety at Work etc. Act 1974 (HSWA).",
    clinicalKey: "HSWA 1974 establishes the overarching statutory framework for workplace safety."
  },
  {
    id: 65,
    question: "Laboratory coats must be?",
    options: [
      { key: "A", text: "Kept fastened" },
      { key: "B", text: "Open" },
      { key: "C", text: "Removed" },
      { key: "D", text: "On floor" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Lab coats must be fully buttoned/fastened at all times in active laboratory areas to provide continuous barrier protection against hazardous chemical splashes and infectious biofluids.",
    clinicalKey: "An unbuttoned lab coat fails as personal protective equipment and poses snag hazards."
  },
  {
    id: 66,
    question: "Don't wear?",
    options: [
      { key: "A", text: "Sandals or open shoes" },
      { key: "B", text: "Lab coat" },
      { key: "C", text: "Gloves" },
      { key: "D", text: "Goggles" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Open-toed footwear, sandals, and clogs with perforations are strictly banned in laboratories because they expose skin to shattered glassware, dropped sharps, and caustic chemical spills.",
    clinicalKey: "Footwear must be completely closed-toe, low-heeled, and chemical/fluid resistant."
  },
  {
    id: 67,
    question: "Long hair must be?",
    options: [
      { key: "A", text: "Tied back" },
      { key: "B", text: "Open" },
      { key: "C", text: "Cut" },
      { key: "D", text: "Colored" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Long hair must be securely tied back to prevent it from catching fire in Bunsen burner flames, trailing into open chemical containers, or becoming caught in rotary equipment like centrifuges.",
    clinicalKey: "Prevents mechanical entanglements and ignition near open flames or reagents."
  },
  {
    id: 68,
    question: "General hazards in lab include?",
    options: [
      { key: "A", text: "Fire" },
      { key: "B", text: "Food" },
      { key: "C", text: "Music" },
      { key: "D", text: "Sleeping" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Fire is a primary general hazard in laboratories due to the co-presence of flammable solvents (alcohols, ethers, acetone), gas burners, and electrical equipment.",
    clinicalKey: "Always know fire extinguisher locations (Class ABC/CO2), blankets, and pull stations."
  },
  {
    id: 69,
    question: "General hazards include breaking of?",
    options: [
      { key: "A", text: "Glassware" },
      { key: "B", text: "Plastic" },
      { key: "C", text: "Paper" },
      { key: "D", text: "Wood" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Shattered glassware is one of the most frequent causes of laboratory lacerations and wound contamination; broken glass must never be handled directly with bare hands.",
    clinicalKey: "Dispose of cracked or broken glassware strictly in dedicated puncture-proof glass bins."
  },
  {
    id: 70,
    question: "General hazards include?",
    options: [
      { key: "A", text: "Sharps" },
      { key: "B", text: "Food" },
      { key: "C", text: "Drinks" },
      { key: "D", text: "Cosmetics" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Sharps (needles, scalpels, lancets, broken pipettes) represent severe physical hazards and vectors for bloodborne pathogen transmission (HIV, HBV, HCV).",
    clinicalKey: "Never recap needles; discard sharps immediately into rigid yellow biohazard sharps boxes."
  },
  {
    id: 71,
    question: "General hazards include?",
    options: [
      { key: "A", text: "Spillages" },
      { key: "B", text: "Cleaning" },
      { key: "C", text: "Washing" },
      { key: "D", text: "Eating" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Chemical and biohazard spillages pose instant risks of inhalation, slips, chemical burns, and contamination, requiring standardized spill-kit cleanup protocols.",
    clinicalKey: "Contain spills immediately with neutralizing absorbent pads or 10% sodium hypochlorite."
  },
  {
    id: 72,
    question: "Safer form of substance eg?",
    options: [
      { key: "A", text: "Solution instead of powder" },
      { key: "B", text: "Powder instead of solution" },
      { key: "C", text: "Gas" },
      { key: "D", text: "Solid" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Using liquid solutions rather than dry powders is a key Substitution control because fine powders easily generate respirable airborne dust when scooped or weighed.",
    clinicalKey: "Substitution of powders with liquid pre-mixes prevents respiratory exposure."
  },
  {
    id: 73,
    question: "Safe system of work?",
    options: [
      { key: "A", text: "Reduce exposure times, increase distance, reduce volumes" },
      { key: "B", text: "Increase exposure" },
      { key: "C", text: "Reduce distance" },
      { key: "D", text: "Increase volumes" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "The core principles of occupational radiation and chemical hygiene are minimizing exposure time, maximizing distance from hazard sources, and working with the minimal necessary volume.",
    clinicalKey: "ALARA / Hygiene triad: Time minimization, Distance maximization, Volume reduction."
  },
  {
    id: 74,
    question: "PPE is?",
    options: [
      { key: "A", text: "Last resort for primary protection" },
      { key: "B", text: "First choice" },
      { key: "C", text: "Not needed" },
      { key: "D", text: "For fashion" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "In the Hierarchy of Hazard Controls (Elimination → Substitution → Engineering Controls → Administrative Controls → PPE), PPE is the final line of defense and last resort.",
    clinicalKey: "PPE protects only the individual wearer and fails if bypassed, breached, or improperly worn."
  },
  {
    id: 75,
    question: "Control measures totally enclose process eg?",
    options: [
      { key: "A", text: "Gloves-box" },
      { key: "B", text: "Open bench" },
      { key: "C", text: "Corridor" },
      { key: "D", text: "Outside" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "A glove box (or Class III biosafety cabinet) provides a totally sealed physical enclosure maintained under negative pressure with hermetically sealed glove ports for total containment.",
    clinicalKey: "Glove boxes achieve complete physical isolation of high-hazard pathogens and air-sensitive chemicals."
  },
  {
    id: 76,
    question: "Partially enclose process eg?",
    options: [
      { key: "A", text: "Fume cupboard" },
      { key: "B", text: "Open window" },
      { key: "C", text: "Door" },
      { key: "D", text: "Table" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "A laboratory chemical fume hood / fume cupboard partially encloses volatile operations with an adjustable sliding sash while drawing air inward to exhaust toxic fumes outside.",
    clinicalKey: "Maintain face velocity around 0.5 m/s (100 fpm) and keep the sash at or below safe mark."
  },
  {
    id: 77,
    question: "Flammable substances store in?",
    options: [
      { key: "A", text: "Specific storage cabinet" },
      { key: "B", text: "Open bench" },
      { key: "C", text: "Floor" },
      { key: "D", text: "Pocket" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Flammable solvents must be stored inside dedicated fire-rated flammable storage cabinets featuring double-walled insulated steel and self-closing, spark-proof doors.",
    clinicalKey: "NFPA/OSHA compliant yellow flammable cabinets prevent vapor ignition and fuel spread."
  },
  {
    id: 78,
    question: "Temperature controlled heating source eg?",
    options: [
      { key: "A", text: "Water bath rather than hot-plate or bunsen burner" },
      { key: "B", text: "Bunsen burner" },
      { key: "C", text: "Open flame" },
      { key: "D", text: "Direct fire" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Thermally regulated water baths provide gentle, uniform heat transfer capped at 100°C without open flames or surface hot-spots that could ignite flammable vapors.",
    clinicalKey: "Water baths eliminate open ignition sources when warming reagents or biological assays."
  },
  {
    id: 79,
    question: "If allergy or medical condition like diabetes or epilepsy?",
    options: [
      { key: "A", text: "Ensure supervisor knows" },
      { key: "B", text: "Hide" },
      { key: "C", text: "Ignore" },
      { key: "D", text: "Leave lab" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Personnel with medical conditions (diabetes, epilepsy, severe latex or chemical allergies) must inform their laboratory supervisor so that tailored emergency action plans and first-aid protocols are in place.",
    clinicalKey: "Supervisor notification enables prompt, appropriate emergency first-aid intervention."
  },
  {
    id: 80,
    question: "Lab hygiene: Never eat, drink or smoke?",
    options: [
      { key: "A", text: "In laboratory" },
      { key: "B", text: "In home" },
      { key: "C", text: "In market" },
      { key: "D", text: "In street" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Eating, drinking, smoking, gum chewing, applying cosmetics, or storing food in a laboratory is strictly banned to prevent inadvertent oral ingestion of toxic chemicals and pathogens.",
    clinicalKey: "Zero tolerance for food and beverages inside active clinical or analytical laboratories."
  },
  {
    id: 81,
    question: "Hazard warning system used to rate hazards on?",
    options: [
      { key: "A", text: "Primary and secondary containers" },
      { key: "B", text: "Food" },
      { key: "C", text: "Clothes" },
      { key: "D", text: "Cars" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "Hazard identification systems (NFPA 704 standard and GHS labels) are legally required on both primary manufacturer containers and secondary working containers filled by staff.",
    clinicalKey: "Every secondary container must display full chemical name and hazard warnings."
  },
  {
    id: 82,
    question: "Blue color means?",
    options: [
      { key: "A", text: "Health hazard" },
      { key: "B", text: "Flammability" },
      { key: "C", text: "Reactivity" },
      { key: "D", text: "Special hazard" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "In the NFPA 704 Standard diamond, the BLUE quadrant positioned on the left signifies Health Hazard (rated from 0 = normal material to 4 = deadly).",
    clinicalKey: "NFPA 704: Blue = Health (toxicity, corrosiveness, organ damage)."
  },
  {
    id: 83,
    question: "Red color means?",
    options: [
      { key: "A", text: "Flammability" },
      { key: "B", text: "Health hazard" },
      { key: "C", text: "Reactivity" },
      { key: "D", text: "Special" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "In the NFPA 704 diamond, the RED quadrant at the top signifies Flammability (rated 0 = will not burn to 4 = rapidly vaporizes and burns below 73°F/23°C).",
    clinicalKey: "NFPA 704: Red = Flammability (flash point and fire hazard)."
  },
  {
    id: 84,
    question: "Yellow color means?",
    options: [
      { key: "A", text: "Reactivity" },
      { key: "B", text: "Health" },
      { key: "C", text: "Flammability" },
      { key: "D", text: "Special" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "In the NFPA 704 diamond, the YELLOW quadrant on the right signifies Instability / Reactivity (0 = stable to 4 = explosive at normal temperatures).",
    clinicalKey: "NFPA 704: Yellow = Instability / Chemical Reactivity / Explosive potential."
  },
  {
    id: 85,
    question: "White color means?",
    options: [
      { key: "A", text: "Special hazard" },
      { key: "B", text: "Health" },
      { key: "C", text: "Flammability" },
      { key: "D", text: "Reactivity" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "In the NFPA 704 diamond, the bottom WHITE quadrant is designated for Special Hazards, conveying specific symbols like OX (oxidizer), W with strikethrough (water reactive), or COR (corrosive).",
    clinicalKey: "NFPA 704: White = Special hazard symbols (OX, ₩, SA, BIO, ACID)."
  },
  {
    id: 86,
    question: "Secondary chemical container labels must have?",
    options: [
      { key: "A", text: "Chemical name non-abbreviated" },
      { key: "B", text: "Abbreviated only" },
      { key: "C", text: "No name" },
      { key: "D", text: "Color only" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "OSHA Hazard Communication and GHS rules stipulate that secondary container labels must feature the full, non-abbreviated chemical identity to prevent dangerous chemical confusion.",
    clinicalKey: "Never use ambiguous formulas or abbreviations (e.g. write 'Hydrochloric Acid', not just 'HCl')."
  },
  {
    id: 87,
    question: "Secondary labels must indicate?",
    options: [
      { key: "A", text: "Relative hazards e.g. flammable, toxic" },
      { key: "B", text: "Price" },
      { key: "C", text: "Owner" },
      { key: "D", text: "Date only" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "Secondary containers must clearly display the relative physical and health hazards (e.g. Flammable, Corrosive, Toxic, Carcinogen) alongside signal words.",
    clinicalKey: "Clear hazard warnings alert laboratory personnel to personal protective requirements."
  },
  {
    id: 88,
    question: "MSDS used to obtain?",
    options: [
      { key: "A", text: "Hazard information including physical and health hazards" },
      { key: "B", text: "Food recipe" },
      { key: "C", text: "Price" },
      { key: "D", text: "Owner" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "Material Safety Data Sheets (MSDS / SDS) provide detailed 16-section technical documentation on chemical properties, occupational exposure limits, and toxicity hazards.",
    clinicalKey: "SDS documents comprehensive health, fire, reactivity, and environmental hazard profiles."
  },
  {
    id: 89,
    question: "MSDS describe?",
    options: [
      { key: "A", text: "Physical and chemical properties" },
      { key: "B", text: "Food taste" },
      { key: "C", text: "Color of lab" },
      { key: "D", text: "Salary" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "Section 9 of the standard Safety Data Sheet details physical and chemical properties including boiling point, vapor pressure, flash point, pH, solubility, and appearance.",
    clinicalKey: "Physical and chemical constants dictate handling conditions and ventilation criteria."
  },
  {
    id: 90,
    question: "MSDS recommend precautions for?",
    options: [
      { key: "A", text: "Handling, storage and disposal" },
      { key: "B", text: "Eating" },
      { key: "C", text: "Sleeping" },
      { key: "D", text: "Playing" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "Safety Data Sheets outline actionable, mandatory precautions for safe operational handling, compatible storage separation, and environmentally compliant chemical waste disposal.",
    clinicalKey: "Crucial for preventing inadvertent mixing of incompatible chemical storage groups."
  },
  {
    id: 91,
    question: "If unable to find MSDS contact?",
    options: [
      { key: "A", text: "Manufacture" },
      { key: "B", text: "Friend" },
      { key: "C", text: "Patient" },
      { key: "D", text: "Cleaner" }
    ],
    correctAnswer: "A",
    category: "Hazard Ratings & MSDS",
    explanation: "Under the OSHA Hazard Communication Standard and international chemical regulations, the chemical manufacturer or authorized distributor is legally obligated to provide the current SDS upon request.",
    clinicalKey: "Contact chemical manufacturer or institutional chemical safety officer."
  },
  {
    id: 92,
    question: "Corrosive substances destroy?",
    options: [
      { key: "A", text: "Living tissue" },
      { key: "B", text: "Glass only" },
      { key: "C", text: "Paper only" },
      { key: "D", text: "Air" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "Corrosive substances (concentrated strong acids and alkalis) cause visible destruction of or irreversible necrosis in living epidermal, ocular, and mucosal tissue on contact.",
    clinicalKey: "Corrosives produce chemical burns via rapid protein denaturation and saponification."
  },
  {
    id: 93,
    question: "Example of corrosive?",
    options: [
      { key: "A", text: "Concentrated acid and alkaline" },
      { key: "B", text: "Water" },
      { key: "C", text: "Salt" },
      { key: "D", text: "Sugar" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "Classic examples of severe corrosive laboratory agents are concentrated mineral acids (sulfuric, nitric, hydrochloric) and concentrated alkalis (sodium hydroxide, potassium hydroxide).",
    clinicalKey: "Both strong acids (pH < 2) and strong bases (pH > 11.5) are potent corrosives."
  },
  {
    id: 94,
    question: "Parasitic agents intestinal example?",
    options: [
      { key: "A", text: "Giardia, Entamoeba" },
      { key: "B", text: "Staphylococci" },
      { key: "C", text: "Ebola" },
      { key: "D", text: "HIV" }
    ],
    correctAnswer: "A",
    category: "Parasitology & Pathogens",
    explanation: "Giardia lamblia (flagellate) and Entamoeba histolytica (amoeba) are pathogenic intestinal protozoa causing waterborne and foodborne diarrhea and amoebic dysentery.",
    clinicalKey: "Intestinal parasites are identified in fresh or preserved stool via cysts/trophozoites."
  },
  {
    id: 95,
    question: "Blood parasitic example?",
    options: [
      { key: "A", text: "Malaria" },
      { key: "B", text: "Giardia" },
      { key: "C", text: "Yeast" },
      { key: "D", text: "Food spoilage" }
    ],
    correctAnswer: "A",
    category: "Parasitology & Pathogens",
    explanation: "Malaria (caused by Plasmodium falciparum, P. vivax, P. malariae, and P. ovale) is an intraerythrocytic protozoan parasite of human red blood cells transmitted by Anopheles mosquitoes.",
    clinicalKey: "Diagnosed microscopically via Giemsa-stained thick and thin peripheral blood smears."
  },
  {
    id: 96,
    question: "Primary hazard of parasitic agents?",
    options: [
      { key: "A", text: "Ingestion" },
      { key: "B", text: "Inhalation" },
      { key: "C", text: "Injection" },
      { key: "D", text: "Touch" }
    ],
    correctAnswer: "A",
    category: "Parasitology & Pathogens",
    explanation: "The primary laboratory and environmental transmission route for intestinal parasitic cysts, eggs, and larvae is accidental ingestion (fecal-oral route via contaminated hands or mouth contact).",
    clinicalKey: "Strict handwashing, gloving, and prohibition of hand-to-mouth actions prevent ingestion."
  },
  {
    id: 97,
    question: "Risk assessment should be done?",
    options: [
      { key: "A", text: "Before initiating procedures" },
      { key: "B", text: "After accident" },
      { key: "C", text: "Never" },
      { key: "D", text: "During eating" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Risk assessments must always be conducted proactively before initiating any new diagnostic procedure, assay modification, or handling unfamiliar reagents.",
    clinicalKey: "Proactive evaluation eliminates hazards prior to employee exposure."
  },
  {
    id: 98,
    question: "Risk assessment answers: What are?",
    options: [
      { key: "A", text: "Hazard" },
      { key: "B", text: "Food" },
      { key: "C", text: "Price" },
      { key: "D", text: "Color" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Step 1 of the formal risk assessment framework specifically addresses: 'What are the hazards?' (identifying biological agents, toxic chemicals, electrical or mechanical dangers).",
    clinicalKey: "Hazard Identification is the prerequisite first step in risk management."
  },
  {
    id: 99,
    question: "Risk assessment answers: What might?",
    options: [
      { key: "A", text: "Happen" },
      { key: "B", text: "Eat" },
      { key: "C", text: "Sleep" },
      { key: "D", text: "Buy" }
    ],
    correctAnswer: "A",
    category: "Lab Safety & Regulations",
    explanation: "Step 2 of the risk assessment protocol evaluates potential adverse events and consequences: 'What might happen?' (likelihood, failure modes, exposure pathways, and severity).",
    clinicalKey: "Scenarios evaluation identifies worst-case exposures and containment breaches."
  },
  {
    id: 100,
    question: "Tools for risk assessment?",
    options: [
      { key: "A", text: "Risk Group, Biosafety levels" },
      { key: "B", text: "Beaker, flask" },
      { key: "C", text: "Gloves, coat" },
      { key: "D", text: "Fire, sharps" }
    ],
    correctAnswer: "A",
    category: "Biosafety & Containment",
    explanation: "The primary internationally recognized tools for microbiological risk assessment are the WHO Risk Group classifications (1 to 4) paired with designated Biosafety Levels (BSL 1 to 4).",
    clinicalKey: "Matching pathogen Risk Group to required Biosafety Level establishes containment engineering."
  },
  {
    id: 101,
    question: "Staining solutions are solutions that contain?",
    options: [
      { key: "A", text: "Colored dyes" },
      { key: "B", text: "Water only" },
      { key: "C", text: "Salt only" },
      { key: "D", text: "Sugar" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Biological staining solutions are formulated with organic colored dyes containing chromophore groups (color-conferring radicals) and auxochromes (ionizing groups enabling tissue binding).",
    clinicalKey: "Staining imparts visual contrast to otherwise transparent biological microorganisms and cells."
  },
  {
    id: 102,
    question: "Staining solutions can contain?",
    options: [
      { key: "A", text: "Basic, acidic or neutral dyes" },
      { key: "B", text: "Only basic" },
      { key: "C", text: "Only acidic" },
      { key: "D", text: "Only neutral" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Biological dyes are categorized based on their charge: cationic (basic dyes like methylene blue binding negatively charged nucleic acids), anionic (acidic dyes like eosin binding proteins), and neutral dye complexes.",
    clinicalKey: "Basic dyes stain basophilic cell components; acidic dyes stain acidophilic/eosinophilic targets."
  },
  {
    id: 103,
    question: "Different stains used in medical labs to give?",
    options: [
      { key: "A", text: "Artificial color for substances to be identified" },
      { key: "B", text: "Real color" },
      { key: "C", text: "No color" },
      { key: "D", text: "Black only" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Stains impart artificial color and differential contrast to colorless bacterial walls, nucleated cells, cytoplasm, and parasitic inclusions, enabling microscopic identification.",
    clinicalKey: "Differential staining exploits differences in biochemical affinity across cellular structures."
  },
  {
    id: 104,
    question: "Stains used to identify from biological specimen?",
    options: [
      { key: "A", text: "Whole blood, body fluids, urine" },
      { key: "B", text: "Soil only" },
      { key: "C", text: "Air only" },
      { key: "D", text: "Metal only" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Diagnostic cytology and hematology stains are applied to smears prepared from clinical specimens including whole blood, pleural/peritoneal fluids, cerebrospinal fluid, and urine sediment.",
    clinicalKey: "Cellular morphology in blood and body fluids provides direct clues to disease processes."
  },
  {
    id: 105,
    question: "Example of staining?",
    options: [
      { key: "A", text: "Giemsa stain" },
      { key: "B", text: "Water" },
      { key: "C", text: "Saline" },
      { key: "D", text: "Alcohol" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Giemsa stain is a classic Romanowsky polychromatic stain combining methylene blue, azure B, and eosin, renowned for blood smears and malaria parasite detection.",
    clinicalKey: "Giemsa stain is the gold-standard diagnostic tool for identifying Plasmodium in thick/thin smears."
  },
  {
    id: 106,
    question: "Example of staining?",
    options: [
      { key: "A", text: "Wright stain" },
      { key: "B", text: "Normal saline" },
      { key: "C", text: "Distilled water" },
      { key: "D", text: "Tap water" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Wright stain is a widely used hematologic stain that differentiates leukocyte lineages and red blood cell morphology on peripheral blood films.",
    clinicalKey: "Wright stain produces distinctive purple leukocyte nuclei and pink erythrocyte cytoplasm."
  },
  {
    id: 107,
    question: "Example of staining?",
    options: [
      { key: "A", text: "Gram stain" },
      { key: "B", text: "Water" },
      { key: "C", text: "Oil" },
      { key: "D", text: "Air" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Gram stain is the most critical differential staining procedure in clinical bacteriology, dividing bacteria into Gram-positive (purple) and Gram-negative (pink) based on cell wall peptidoglycan thickness.",
    clinicalKey: "Gram-positive retain crystal violet-iodine; Gram-negative decolorize and counterstain with safranin."
  },
  {
    id: 108,
    question: "Example of staining?",
    options: [
      { key: "A", text: "Leishman stain" },
      { key: "B", text: "Sugar" },
      { key: "C", text: "Salt" },
      { key: "D", text: "Sand" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Leishman stain is a Romanowsky-type dye used predominantly in hematology to examine peripheral blood films, bone marrow smears, and trypanosome or leishmania parasites.",
    clinicalKey: "Differentiates WBC differential morphology and parasitic protozoa."
  },
  {
    id: 109,
    question: "Example of staining?",
    options: [
      { key: "A", text: "Acid Fast Stain" },
      { key: "B", text: "Water" },
      { key: "C", text: "Milk" },
      { key: "D", text: "Juice" }
    ],
    correctAnswer: "A",
    category: "Biological Staining",
    explanation: "Acid-Fast Staining (Ziehl-Neelsen or Kinyoun method) identifies Mycobacteria (e.g. M. tuberculosis) whose lipid-rich, mycolic acid cell walls resist decolorization by acid-alcohol.",
    clinicalKey: "Acid-fast bacilli (AFB) stain bright red against a methylene blue background."
  },
  {
    id: 110,
    question: "Contact with corrosive chemicals: Acid splashes on skin wash with?",
    options: [
      { key: "A", text: "Plenty water" },
      { key: "B", text: "Oil" },
      { key: "C", text: "Alcohol" },
      { key: "D", text: "Acid" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "Immediate, continuous, copious flushing with running water (emergency shower/eyewash) for a minimum of 15 to 20 minutes is the mandatory first-aid action for acid skin splashes.",
    clinicalKey: "Water rapidly dilutes and carries away the corrosive agent, preventing deep tissue penetration."
  },
  {
    id: 111,
    question: "After washing acid splash, bathe with cotton wool soaked in?",
    options: [
      { key: "A", text: "5% solution of sodium carbonate" },
      { key: "B", text: "10% acid" },
      { key: "C", text: "Water only" },
      { key: "D", text: "Alcohol" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "After extensive initial water irrigation, traditional lab first-aid protocols recommend gently bathing the affected dermal area with a mild 5% sodium carbonate (or sodium bicarbonate) solution to neutralize residual traces of acid.",
    clinicalKey: "Mild alkaline buffer (5% sodium carbonate/bicarbonate) neutralizes residual cutaneous acid."
  },
  {
    id: 112,
    question: "After that rinse affected skin in mild detergent then contact?",
    options: [
      { key: "A", text: "Physician" },
      { key: "B", text: "Friend" },
      { key: "C", text: "Cleaner" },
      { key: "D", text: "Nurse only" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "Following emergency on-site first-aid stabilization, the casualty must immediately be evaluated by a qualified Physician / Medical Doctor for assessment of burn depth and specialist wound care.",
    clinicalKey: "Prompt medical assessment prevents secondary infection and chronic scar formation."
  },
  {
    id: 113,
    question: "Contact of lip and tongue with corrosive acid: Immediately rinse in?",
    options: [
      { key: "A", text: "Tap water" },
      { key: "B", text: "Oil" },
      { key: "C", text: "Acid" },
      { key: "D", text: "Milk" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "If corrosive acid contacts the lips or tongue, immediately and repeatedly rinse the mouth with copious tap water, spitting out the wash without swallowing.",
    clinicalKey: "Immediate oral water irrigation prevents esophageal and mucosal ulceration."
  },
  {
    id: 114,
    question: "Acid on lip bathe affected part in?",
    options: [
      { key: "A", text: "2% aqueous sodium carbonate" },
      { key: "B", text: "5% acetic acid" },
      { key: "C", text: "Water only" },
      { key: "D", text: "Alcohol" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "For acid burns to the lips, after copious water rinsing, gently bathe the affected mucosa with a gentle 2% aqueous sodium carbonate (or sodium bicarbonate) solution.",
    clinicalKey: "A 2% aqueous sodium carbonate solution is gentle on delicate oral mucosal membranes."
  },
  {
    id: 115,
    question: "Alkalies on lip/tongue immediately rinse in?",
    options: [
      { key: "A", text: "Tap water" },
      { key: "B", text: "Oil" },
      { key: "C", text: "Acid" },
      { key: "D", text: "Salt" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "For caustic alkali contamination on the oral mucosa, immediately rinse copiously and thoroughly with running tap water to wash out the saponifying caustic agent.",
    clinicalKey: "Alkali causes liquefactive necrosis; immediate high-volume water flushing is critical."
  },
  {
    id: 116,
    question: "Alkalies on lip bathe affected part in?",
    options: [
      { key: "A", text: "5% acetic acid" },
      { key: "B", text: "2% sodium carbonate" },
      { key: "C", text: "Water only" },
      { key: "D", text: "Alcohol" }
    ],
    correctAnswer: "A",
    category: "Chemical First Aid",
    explanation: "After extensive water rinsing of an alkali burn on the lip, gently bathe the area with a mild dilute organic acid, specifically 5% acetic acid (or vinegar), to neutralize residual base.",
    clinicalKey: "5% acetic acid gently neutralizes caustic alkali without inducing severe exothermic burns."
  },
  {
    id: 117,
    question: "Laboratory mathematics deals with?",
    options: [
      { key: "A", text: "Calculations used in preparation of reagents" },
      { key: "B", text: "Food" },
      { key: "C", text: "Clothes" },
      { key: "D", text: "Cars" }
    ],
    correctAnswer: "A",
    category: "Laboratory Mathematics",
    explanation: "Laboratory mathematics encompasses stoichiometric formulas, molecular weight calculations, molarity, normality, and dilution equations (C1V1 = C2V2) essential for reagent preparation.",
    clinicalKey: "Accurate reagent preparation formulas ensure analytical standard accuracy and reproducibility."
  },
  {
    id: 118,
    question: "Lab math also deals with?",
    options: [
      { key: "A", text: "Determining concentration of substances in samples" },
      { key: "B", text: "Cooking" },
      { key: "C", text: "Sleeping" },
      { key: "D", text: "Playing" }
    ],
    correctAnswer: "A",
    category: "Laboratory Mathematics",
    explanation: "Laboratory calculations apply the Beer-Lambert law (Absorbance = ε·b·c), linear calibration regression, and dilution factors to quantify patient analyte concentrations (e.g. serum creatinine, glucose).",
    clinicalKey: "Translates raw spectrophotometric absorbance values into clinical patient analyte concentrations."
  },
  {
    id: 119,
    question: "Lab math also deals with?",
    options: [
      { key: "A", text: "Calibration of equipment" },
      { key: "B", text: "Cleaning floor" },
      { key: "C", text: "Washing hands" },
      { key: "D", text: "Eating" }
    ],
    correctAnswer: "A",
    category: "Laboratory Mathematics",
    explanation: "Equipment calibration requires mathematical computation of multi-point calibration slopes, intercept offsets, micropipette gravimetric error calculations, and photometer linearity checks.",
    clinicalKey: "Calibration curves verify instrument linearity and clinical dynamic range."
  },
  {
    id: 120,
    question: "Lab math also deals with?",
    options: [
      { key: "A", text: "Evaluation of methods" },
      { key: "B", text: "Buying reagents" },
      { key: "C", text: "Selling" },
      { key: "D", text: "Painting" }
    ],
    correctAnswer: "A",
    category: "Laboratory Mathematics",
    explanation: "Method evaluation relies heavily on statistical mathematics: calculating the Mean (x̄), Standard Deviation (SD), Coefficient of Variation (%CV), Westgard multi-rule QC, and diagnostic sensitivity/specificity.",
    clinicalKey: "Quality control statistics (%CV, SD, Levey-Jennings charts) govern clinical test validity."
  }
];

export const CATEGORIES: { name: QuestionCategory; count: number; icon: string }[] = [
  { name: 'Biosafety & Containment', count: 6, icon: 'ShieldAlert' },
  { name: 'Lab Glassware & Vessels', count: 18, icon: 'FlaskConical' },
  { name: 'Sterilization & Incubators', count: 7, icon: 'Flame' },
  { name: 'Balances & Specimen Handling', count: 9, icon: 'Scale' },
  { name: 'Microscopy & Centrifugation', count: 17, icon: 'Microscope' },
  { name: 'Lab Safety & Regulations', count: 20, icon: 'AlertTriangle' },
  { name: 'Hazard Ratings & MSDS', count: 11, icon: 'FileWarning' },
  { name: 'Parasitology & Pathogens', count: 3, icon: 'Bug' },
  { name: 'Biological Staining', count: 9, icon: 'Palette' },
  { name: 'Chemical First Aid', count: 7, icon: 'HeartPulse' },
  { name: 'Laboratory Mathematics', count: 4, icon: 'Calculator' }
];
