import ProviderCard from "./ProviderCard";
const providers = [
{
  "id": 1,
  "name": "Renew Skin & Health Clinic",
  "specialty": "Dermatology",
  "location": "Leamington Spa",
  "address": "18 Guy Street, Leamington Spa, CV32 4RT",
  "phone": "01926 422 454",
  "website": "renewskinandhealthclinic.co.uk",
  "description": "Renew Skin & Health Clinic provides comprehensive skin treatments and minor surgical procedures including mole removal, wart removal, skin tags removal and more. Their expert team delivers personalised care with a focus on patient safety and excellent results.",
  "benefits": [
    "Free initial consultation",
    "10% off Hair transplants",
    "10% off Mole removal",
    "10% off Wart removal",
    "10% off Skin tags removal",
    "10% off Seborrhoeic Keratosis removal",
    "10% off Lipoma excision/removal"
  ],

  services: [
  "Clinic Consultation",
  "Skin Tag Removal",
  "Mole Removal",
  "Wart Removal",
  "Seborrhoeic Keratosis Removal",
  "Lipoma Excision",
  "Cyst Excision",
  "Xanthelasma Removal",
  "Basal Cell Carcinoma Excision",
  "Hair Transplants"
],
  "symptoms": [
    "acne",
    "skin rash",
    "eczema",
    "mole removal",
    "wart removal",
    "skin tags",
    "hair loss"
  ]
},

{
  id: 2,
  name: "One Heart Clinic",
  specialty: "Cardiology",
  location: "London",

  address: "80 Cheapside, London EC2V 6EE",
  phone: "02039838001",
  website: "oneheartclinic.com",

  description:
    "One Heart Clinic is a leading cardiac centre providing expert cardiology consultations, ECG, echocardiograms and heart health assessments.",

  benefits: [
    "10% off Consultant Consultation",
    "10% off ECG",
    "10% off Echocardiogram",
    "10% off 24-Hour Ambulatory Blood Pressure Monitoring"
  ],

  services: [
    "Consultant Consultation",
    "ECG",
    "Echocardiogram",
    "Carotid Doppler",
    "Cardiac Monitors",
    "24-Hour Ambulatory Blood Pressure Monitoring",
    "Stress Testing",
    "MRI",
    "CT Scan",
    "Healthy Heart Screening",
    "Metabolic Health Screening",
    "Cardiac Ablation",
    "TAVI",
    "Coronary Angiography"
  ],

  symptoms: [
    "chest pain",
    "heart murmur",
    "high blood pressure",
    "palpitations",
    "dizziness",
    "shortness of breath"
  ]
},
  {
  id: 3,
  name: "Vista Health",
  specialty: "Diagnostics",
  location: "Norwich",

  address: "Drayton High Road, Hellesdon, Norwich NR6 5DT",
  phone: "0330 057 2904",
  website: "vista-health.co.uk",

  description:
    "Vista Health is one of the UK's leading diagnostic providers offering MRI, CT, Ultrasound and Health Screening services.",

  benefits: [
    "10% off MRI",
    "10% off CT Scan",
    "10% off Health Screening"
  ],
  services: [
  "MRI Services",
  "Cardiac Tests",
  "Scans & Imaging",
  "Screening & Specialist Tests",
  "Other Services"
],

  symptoms: [
    "headache",
    "migraine",
    "dizziness",
    "back pain",
    "neck pain",
    "brain scan"
  ]
},
 
{
  id: 4,
  name: "GP & Health Clinic - Daleswood Health",
  specialty: "General Physician",
  location: "Solihull",

  address: "Barn House, Barston Lane, Solihull, B92 0JJ",
  phone: "01675 489 489",
  website: "daleswoodhealth.co.uk",

  description:
    "Daleswood Health provides expert private GP care, health checks, blood tests, vaccinations and specialist referrals.",

  benefits: [
    "10% off GP Consultation",
    "10% off Health Screening",
    "10% off Blood Tests"
  ],
  services: [
  "Private GP (Clinic, Video & Home Visit Consultations)",
  "Health Screening",
  "Joint Injections",
  "Women's Health",
  "Men's Health",
  "Women's Pelvic Health",
  "Blood Tests",
  "Medical Reports",
  "Medical Assessments",
  "Vaccinations",
  "Sexual Health Screening",
  "Physiotherapy",
  "Podiatry",
  "Psychological Therapy",
  "Consultant Specialists"
],

  symptoms: [
    "fever",
    "cold",
    "cough",
    "sore throat",
    "body pain",
    "fatigue"
  ]
},

  {
  id: 5,
  name: "Urology Consultant Surgeon - Mr. Maitrey Darrad",
  specialty: "Urology",
  location: "Birmingham",

  address: "Spire Parkway Hospital, Solihull, Birmingham",
  phone: "0121 716 9044",
  website: "mrdarrad.co.uk",

  description:
    "Mr. Maitrey Darrad provides specialist urology services including kidney stones, prostate conditions and urinary tract disorders.",

  benefits: [
    "15% off New Patient Consultation",
    "10% off Follow Up Consultation"
  ],
  services: [
  "Initial Consultation",
  "Kidney Stone Procedures",
  "Cystoscopy",
  "Enlarged Prostate",
  "Prostate Procedures",
  "Lower Urinary Tract Symptoms",
  "Haematuria",
  "Bladder Problems",
  "Testicular Problems",
  "Circumcision",
  "Scrotal Lumps",
  "Urinary Tract Infections",
  "Vasectomy"
],

  symptoms: [
    "kidney stones",
    "urinary infection",
    "bladder problems",
    "testicular pain",
    "blood in urine",
    "enlarged prostate"
  ]
},

  {
  id: 6,
  name: "Urology Consultant Surgeon - Mr. Vivek Wadhwa",
  specialty: "Urology",
  location: "Solihull",

  address: "Spire Parkway Hospital, Solihull",
  phone: "0121 260 5628",
  website: "vivekwadhwaurology.co.uk",

  description:
    "Mr. Vivek Wadhwa specialises in prostate health, kidney stones and urinary tract disorders.",

  benefits: [
    "10% off Consultation",
    "10% off Diagnostic Assessment"
  ],
services: [
  "Initial Consultation",
  "Lower Urinary Tract Symptoms",
  "Cystoscopy",
  "Prostate Cancer",
  "Enlarged Prostate",
  "Prostate Procedures",
  "Kidney Stone Procedures",
  "Haematuria",
  "Urinary Tract Infections",
  "Erectile Dysfunction",
  "Bladder Problems",
  "Testicular Problems"
],
  symptoms: [
    "prostate cancer",
    "kidney stones",
    "urinary tract infection",
    "erectile dysfunction",
    "bladder problems",
    "cystoscopy"
  ]
},

 {
  id: 7,
  name: "Paediatric & Sport Cardiology Consultant - Dr. Tristan Ramcharan",
  specialty: "Cardiology",
  location: "Birmingham",

  address: "Sutton Medical Consulting Centre, Birmingham",
  phone: "07515 498 077",
  website: "tristanramcharan.co.uk",

  description:
    "Specialist paediatric cardiologist providing heart assessments, ECGs and echocardiograms for children and young adults.",

  benefits: [
    "10% off Cardiac Screening",
    "10% off ECG"
  ],
  services: [
  "Cardiac Screening",
  "ECG",
  "Echocardiogram",
  "Heart Murmurs",
  "Chest Pain",
  "Palpitations",
  "Dizziness & Fainting",
  "Sports Cardiology Screening",
  "Paediatric ECG",
  "Paediatric Echocardiogram",
  "Autonomic Dysfunction",
  "POTS"
],

  symptoms: [
    "chest pain",
    "heart murmur",
    "palpitations",
    "dizziness",
    "fainting",
    "POTS"
  ]
},

{
  id: 8,
  name: "Gastroenterology Consultant - Dr. Efe Ejenavi",
  specialty: "Gastroenterology",
  location: "Birmingham",

  address: "Priory Hospital, Birmingham",
  phone: "0121 716 9028",
  website: "efe-ejenavi.co.uk",

  description:
    "Experienced gastroenterologist treating digestive disorders, acid reflux, Crohn's disease and liver conditions.",

  benefits: [
    "15% off New Consultation",
    "10% off Follow Up"
  ],
  services: [
  "Clinic Consultation",
  "Abdominal Pain",
  "Chronic Diarrhoea",
  "Ulcerative Colitis",
  "Crohns Disease",
  "Achalasia",
  "Dyspepsia",
  "Acid Reflux",
  "Dysphagia",
  "Irritable Bowel Syndrome",
  "Jaundice",
  "Liver Function Blood Test Abnormalities",
  "Biliary Problems",
  "Gastroscopy",
  "Colonoscopy",
  "Polypectomy"
],

  symptoms: [
    "abdominal pain",
    "acid reflux",
    "chronic diarrhoea",
    "crohns disease",
    "ulcerative colitis",
    "jaundice"
  ]
},

  
{
  id: 9,
  name: "ENT Consultant Surgeon - Mr. Aman Khanna",
  specialty: "ENT",
  location: "Birmingham",

  address: "The Harborne Hospital, Birmingham",
  phone: "07446 098 133",
  website: "circlehealthgroup.co.uk",

  description:
    "Leading ENT consultant treating hearing loss, sinus problems, throat disorders and nasal obstruction.",

  benefits: [
    "10% off ENT Consultation",
    "10% off Hearing Assessment"
  ],
  services: [
  "Clinic Consultation",
  "Nasal Symptoms",
  "Sinusitis",
  "Nasal Polyps",
  "Snoring",
  "Septal Deviation",
  "Septorhinoplasty",
  "Hearing Loss",
  "Tinnitus",
  "Ear Symptoms",
  "Voice Issues",
  "Nasal Tumours",
  "CSF Leak",
  "Skull Base Surgery"
],

  symptoms: [
    "hearing loss",
    "ear pain",
    "sinusitis",
    "snoring",
    "voice issues",
    "nasal obstruction"
  ]
},

  {
  id: 10,
  name: "Vista Health",
  specialty: "Diagnostics",
  location: "Ipswich",

  address: "Morrisons Sproughton Rd, Ipswich IP1 5AQ",
  phone: "0330 057 2904",
  website: "vista-health.co.uk",

  description:
    "Vista Health Ipswich provides MRI, CT, Ultrasound and health screening services.",

  benefits: [
    "10% off MRI",
    "10% off CT Scan",
    "10% off Health Screening"
  ],
  services: [
  "MRI Services",
  "Cardiac Tests",
  "Scans & Imaging",
  "Screening & Specialist Tests",
  "Other Services"
],

  symptoms: [
    "headache",
    "migraine",
    "back pain",
    "joint pain",
    "dizziness",
    "neck pain"
  ]
},

{
  id: 11,
  name: "Vista Health",
  specialty: "Diagnostics",
  location: "Canterbury",

  address: "Canterbury MRI Unit, Sturry Road, Canterbury CT1 1DG",
  phone: "0330 057 2904",
  website: "vista-health.co.uk",

  description:
    "Vista Health Canterbury offers MRI, Ultrasound, Echocardiograms and health screening services.",

  benefits: [
    "10% off MRI",
    "10% off Ultrasound",
    "10% off Health Screening"
  ],
  services: [
  "MRI",
  "Ultrasound",
  "Echocardiogram",
  "Health Screening",
  "Cardiac Tests"
],

  symptoms: [
    "headache",
    "dizziness",
    "chest pain",
    "palpitations",
    "health screening",
    "fatigue"
  ]
}
]

function ProviderList() {
  return (
    <div className="provider-grid">
      {providers.map((provider) => (
        <ProviderCard
          key={provider.id}
          provider={provider}
        />
      ))}
    </div>
  );
}
export default ProviderList;