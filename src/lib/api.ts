// API for handling all website content
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Destination {
  name: string;
  route: string;
  popular: boolean;
  image: string;
  description?: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

export interface Update {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

export interface SuccessStory {
  name: string;
  country: string;
  university: string;
  image: string;
  quote: string;
}

export interface Gallery {
  year: string;
  images: string[];
}

export interface CountryInfo {
  name: string;
  image: string;
  description: string;
  universities: Array<{
    name: string;
    logo: string;
  }>;
  requirements: string[];
  benefits: string[];
  educationSystem: string;
  applicationProcess: string;
  scholarships: string;
  studentLife: string;
  visaInfo: string;
}

export interface NavigationItem {
  name: string;
  href?: string;
  children?: Array<{
    name: string;
    href: string;
  }>;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
}

export interface Certification {
  name: string;
  description: string;
  year: string;
}

// Company Information API
export const getCompanyInfo = (): CompanyInfo => ({
  name: "StudentsRoute",
  tagline: "Your Gateway to Global Education",
  description: "StudentsRoute is a leading educational consultancy dedicated to helping students achieve their dreams of studying abroad. With years of experience and a commitment to excellence, we have successfully guided thousands of students through their educational journey.",
  mission: "To provide comprehensive, personalized guidance to students seeking international education opportunities, ensuring their success through expert counseling and unwavering support.",
  vision: "To be the most trusted name in international education consultancy, known for our integrity, expertise, and student success stories.",
  values: [
    "Integrity in all our dealings",
    "Excellence in service delivery",
    "Student-centric approach",
    "Continuous improvement",
    "Global perspective"
  ],
  contact: {
    address: "123 Education Street, City, Country",
    phone: "+1 234 567 890",
    email: "info@studentsroute.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM"
  }
});

// Navigation API
export const getNavigationItems = (): NavigationItem[] => [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    children: [
      { name: 'Introduction', href: '/about/introduction' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Our Services', href: '/about/services' },
      { name: 'CEO Message', href: '/about/ceo-message' },
      { name: 'Certifications', href: '/about/certifications' },
    ]
  },
  {
    name: 'Destinations',
    children: [
      { name: 'USA', href: '/destinations/usa' },
      { name: 'Canada', href: '/destinations/canada' },
      { name: 'UK', href: '/destinations/uk' },
      { name: 'Australia', href: '/destinations/australia' },
      { name: 'Sweden', href: '/destinations/sweden' },
      { name: 'Portugal', href: '/destinations/portugal' },
    ]
  },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Galleries', href: '/galleries' },
  { name: 'Updates', href: '/updates' },
  { name: 'Contact', href: '/contact' },
];

// Services API
export const getServices = (): Service[] => [
  {
    icon: "GraduationCap",
    title: "Student Counseling",
    description: "We offer professional advice and guidance to students who want to study abroad, at the undergraduate or postgraduate level. Our expert counselors evaluate your educational background, interests, and strengths while considering market trends to suggest the most suitable academic route for you."
  },
  {
    icon: "FileCheck",
    title: "Admission Process",
    description: "We take charge of the application process and assist with documentation. We coordinate directly with universities to ensure prompt admission processing."
  },
  {
    icon: "Plane",
    title: "Visa Guidance",
    description: "We provide a complete visa application file, guidance, and training through mock interviews to prepare students for real sessions with visa officers. Our ongoing communication with embassies and consulates ensures we stay updated on current regulations, resulting in a high visa approval rate."
  },
  {
    icon: "BookOpen",
    title: "IELTS Coaching",
    description: "IELTS is the most widely accepted English proficiency test for students aiming to study abroad. We offer expert training across all four skill areas: reading, listening, speaking, and writing. Our coaching ensures students are confident and test-ready."
  }
];

// Extended Services for Services Page
export const getExtendedServices = (): Service[] => [
  {
    icon: "GraduationCap",
    title: "Educational Counseling",
    description: "Expert guidance on course selection and university admissions."
  },
  {
    icon: "FileCheck",
    title: "Application Processing",
    description: "Complete assistance with university applications and documentation."
  },
  {
    icon: "Plane",
    title: "Visa Assistance",
    description: "Comprehensive support for student visa applications and interviews."
  },
  {
    icon: "BookOpen",
    title: "Test Preparation",
    description: "Professional coaching for IELTS, TOEFL, and other required tests."
  },
  {
    icon: "Users",
    title: "Pre-Departure Briefing",
    description: "Detailed orientation sessions for successful transition abroad."
  },
  {
    icon: "Globe",
    title: "Post-Landing Support",
    description: "Continued assistance after arrival at your destination."
  }
];

// Destinations API
export const getDestinations = (): Destination[] => [
  { 
    name: "UK",
    route: "uk",
    popular: true,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    description: "Study in the UK's prestigious universities with a rich academic heritage and global recognition."
  },
  {
    name: "Sweden",
    route: "sweden",
    popular: true,
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
    description: "Sweden provides innovative learning with a focus on sustainability, independence, and equality."
  },
  {
    name: "Portugal",
    route: "portugal",
    popular: true,
    image: "https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?auto=format&fit=crop&w=800&q=80",
    description: "Portugal combines quality education with beautiful weather and vibrant culture."
  },
  {
    name: "USA",
    route: "usa",
    popular: true,
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    description: "Experience diverse education opportunities in the United States."
  }
];

// Hero Slides API
export const getHeroSlides = (): HeroSlide[] => [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1950&q=80",
    title: "Your Gateway to Global Education",
    subtitle: "Let us guide you through your educational journey abroad with expert counseling and support."
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1950&q=80",
    title: "Study at World's Top Universities",
    subtitle: "Access prestigious institutions across UK, USA, Canada, Australia and Europe."
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1950&q=80",
    title: "Expert Visa & Application Support",
    subtitle: "Professional guidance through every step of your study abroad journey."
  }
];

// Team API
export const getTeamMembers = (): TeamMember[] => [
  {
    name: "John Smith",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Over 15 years of experience in international education consulting."
  },
  {
    name: "Sarah Johnson",
    position: "Head of Counseling",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Specialized in UK and European university admissions."
  },
  {
    name: "Michael Chen",
    position: "Visa Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Expert in student visa processing for multiple countries."
  },
  {
    name: "Emily Brown",
    position: "Academic Advisor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Specializes in course selection and academic planning."
  }
];

// CEO Information API
export const getCEOInfo = () => ({
  name: "John Smith",
  position: "CEO, StudentsRoute",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  message: {
    greeting: "Dear Students and Parents,",
    content: [
      "Welcome to StudentsRoute, your trusted partner in international education. For over a decade, we have been dedicated to helping students achieve their dreams of studying abroad and building successful careers.",
      "Our commitment to excellence, integrity, and student success has made us one of the most respected names in educational consultancy. We understand that choosing to study abroad is a significant decision, and we are here to guide you through every step of the journey.",
      "At StudentsRoute, we believe in providing personalized attention to each student, understanding their unique aspirations, and helping them make informed decisions about their education and future.",
      "I invite you to explore our services and learn how we can help you achieve your educational goals."
    ],
    closing: "Best regards,\nJohn Smith\nCEO, StudentsRoute"
  }
});

// Updates API
export const getUpdates = (): Update[] => [
  {
    title: "New Scholarship Opportunities for 2024",
    date: "March 15, 2024",
    category: "Scholarships",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover exciting new scholarship opportunities available for international students across multiple countries and universities."
  },
  {
    title: "UK Student Visa Process Updates",
    date: "March 10, 2024",
    category: "Visa News",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    excerpt: "Important changes to UK student visa requirements and application processes that every prospective student should know."
  },
  {
    title: "University Application Deadlines 2024",
    date: "March 5, 2024",
    category: "Admissions",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    excerpt: "Don't miss these crucial application deadlines for top universities worldwide. Plan your applications strategically."
  },
  {
    title: "IELTS Score Requirements Update",
    date: "February 28, 2024",
    category: "Test Preparation",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
    excerpt: "Latest updates on IELTS score requirements for different universities and countries. Prepare accordingly."
  },
  {
    title: "Canada Immigration Policy Changes",
    date: "February 20, 2024",
    category: "Immigration",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56cd601?auto=format&fit=crop&w=800&q=80",
    excerpt: "New immigration policies in Canada affecting international students and post-graduation work permits."
  },
  {
    title: "Australia Study Visa Success Stories",
    date: "February 15, 2024",
    category: "Success Stories",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    excerpt: "Read inspiring success stories of students who successfully obtained their Australian study visas through our guidance."
  }
];

// Success Stories API
export const getSuccessStories = (): SuccessStory[] => [
  {
    name: "Emma Thompson",
    country: "UK",
    university: "University of Oxford",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote: "StudentsRoute made my dream of studying at Oxford a reality. Their guidance was invaluable throughout the process."
  },
  {
    name: "Michael Chen",
    country: "Canada",
    university: "University of Toronto",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "The team's expertise in Canadian university admissions helped me secure a place at my dream university."
  },
  {
    name: "Sofia Rodriguez",
    country: "Sweden",
    university: "KTH Royal Institute of Technology",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    quote: "Studying in Sweden was a life-changing experience, and it wouldn't have been possible without StudentsRoute."
  }
];

// Galleries API
export const getGalleries = (): Gallery[] => [
  {
    year: "2024",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1523243319451-54b60322f948?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
    ]
  },
  {
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=500&q=80",
    ]
  },
  {
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    ]
  }
];

// Gallery Videos API
export const getGalleryVideos = () => [
  {
    year: "2024",
    videos: [
      {
        id: "1",
        title: "Study Expo 2024 Highlights",
        thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80",
        duration: "2:30"
      },
      {
        id: "2", 
        title: "Student Success Stories",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
        duration: "3:45"
      }
    ]
  }
];

// Service Details API
export const getServiceDetails = (serviceId: string) => {
  const services: Record<string, any> = {
    'student-counseling': {
      title: "Student Counseling",
      icon: "GraduationCap",
      hero: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1500&q=80",
      description: "Professional guidance for your educational journey abroad",
      overview: "Our expert counselors provide personalized advice and guidance to students who want to study abroad, at the undergraduate or postgraduate level. We evaluate your educational background, interests, and strengths while considering market trends to suggest the most suitable academic route for you.",
      features: [
        "One-on-one counseling sessions",
        "Career pathway analysis", 
        "University selection guidance",
        "Course recommendation",
        "Academic planning"
      ],
      process: [
        "Initial consultation and assessment",
        "Educational background evaluation", 
        "Career goals discussion",
        "University and course recommendations",
        "Application strategy development"
      ],
      benefits: [
        "Personalized guidance based on your profile",
        "Expert knowledge of international education",
        "Higher chances of admission success",
        "Time and effort savings",
        "Ongoing support throughout the process"
      ]
    },
    'admission-process': {
      title: "Admission Process",
      icon: "FileCheck", 
      hero: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1500&q=80",
      description: "Complete assistance with university applications and documentation",
      overview: "We take charge of the application process and assist with documentation. We coordinate directly with universities to ensure prompt admission processing and keep you updated throughout the journey.",
      features: [
        "Application form completion",
        "Document preparation and verification",
        "University coordination",
        "Application tracking",
        "Status updates"
      ],
      process: [
        "Document collection and verification",
        "Application form preparation",
        "University submission",
        "Follow-up with institutions",
        "Admission confirmation"
      ],
      benefits: [
        "Error-free applications",
        "Direct university coordination",
        "Faster processing times",
        "Regular status updates",
        "Higher acceptance rates"
      ]
    },
    'visa-guidance': {
      title: "Visa Guidance", 
      icon: "Plane",
      hero: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1500&q=80",
      description: "Expert visa assistance and interview preparation",
      overview: "We provide a complete visa application file, guidance, and training through mock interviews to prepare students for real sessions with visa officers. Our ongoing communication with embassies ensures high approval rates.",
      features: [
        "Visa application preparation",
        "Document checklist and verification",
        "Mock interview sessions",
        "Embassy coordination",
        "Application tracking"
      ],
      process: [
        "Visa requirements assessment",
        "Document preparation",
        "Application form completion",
        "Mock interview training",
        "Embassy appointment scheduling"
      ],
      benefits: [
        "95% visa approval rate",
        "Expert interview preparation",
        "Complete documentation support",
        "Embassy relationships",
        "Stress-free process"
      ]
    },
    'ielts-coaching': {
      title: "IELTS Coaching",
      icon: "BookOpen",
      hero: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1500&q=80", 
      description: "Professional IELTS preparation and training",
      overview: "IELTS is the most widely accepted English proficiency test for students aiming to study abroad. We offer expert training across all four skill areas: reading, listening, speaking, and writing.",
      features: [
        "All four skills training",
        "Practice tests and mock exams",
        "Individual attention",
        "Flexible scheduling",
        "Score improvement guarantee"
      ],
      process: [
        "Initial assessment test",
        "Customized study plan",
        "Regular practice sessions",
        "Mock tests and feedback",
        "Final exam preparation"
      ],
      benefits: [
        "Experienced instructors",
        "Proven teaching methods",
        "High success rates",
        "Flexible timings",
        "Comprehensive materials"
      ]
    }
  };
  
  return services[serviceId] || null;
};

// Certifications API
export const getCertifications = (): Certification[] => [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System Certification",
    year: "2023"
  },
  {
    name: "British Council",
    description: "Certified Education UK Partner",
    year: "2023"
  },
  {
    name: "ICEF Agency",
    description: "Certified International Education Agency",
    year: "2023"
  },
  {
    name: "QISAN",
    description: "Quality International Study Abroad Network Member",
    year: "2023"
  }
];

// Country Information API
export const getCountryInfo = (countryCode: string): CountryInfo | null => {
  const countries: Record<string, CountryInfo> = {
    uk: {
      name: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1500&q=80",
      description: "Study in the UK's prestigious universities with a rich academic heritage and global recognition.",
      universities: [
        { name: "University of Oxford", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/University_of_Oxford_coat_of_arms.svg/1200px-University_of_Oxford_coat_of_arms.svg.png" },
        { name: "University of Cambridge", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Cambridge_University_Arms.svg/1200px-Cambridge_University_Arms.svg.png" },
        { name: "Imperial College London", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Imperial_College_London_crest.svg/1200px-Imperial_College_London_crest.svg.png" }
      ],
      requirements: ["IELTS score of 6.0–7.0", "UCAS application (for UG)", "Academic transcripts", "SOP & recommendation letters", "Portfolio (for creative degrees)"],
      benefits: ["World-class education", "Post-study work opportunities", "Rich cultural experience", "Shorter course durations"],
      educationSystem: "UK education includes Undergraduate (3 years), Postgraduate (1 year), and Doctoral programmes. Foundation and Sandwich programmes are also available. Teaching emphasizes independent and creative thinking.",
      applicationProcess: "UG applications go through UCAS, allowing 6 university choices. PG applications are university-specific. Early application (before Jan 15) is strongly recommended.",
      scholarships: "UK offers Chevening, Commonwealth, GREAT Scholarships, and many university-specific grants. NHS provides nearly free healthcare for students.",
      studentLife: "UK is multicultural with diverse student societies and support services. Students can work 20 hours/week during term and full-time during holidays.",
      visaInfo: "Student visas require CAS from a UK institution, TB test, bank statements, and English proficiency proof. Visas allow work and are multi-entry."
    },
    usa: {
      name: "United States",
      image: "https://images.unsplash.com/photo-1569841344094-61fb6b6c9a4c?auto=format&fit=crop&w=1500&q=80",
      description: "Experience diverse education opportunities in the United States.",
      universities: [
        { name: "Harvard University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Harvard_University_shield.svg/1200px-Harvard_University_shield.svg.png" },
        { name: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/MIT_logo.svg/1200px-MIT_logo.svg.png" },
        { name: "Stanford University", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png" }
      ],
      requirements: ["SAT/ACT scores", "TOEFL/IELTS", "Academic transcripts", "Letters of recommendation"],
      benefits: ["Flexible education system", "Research opportunities", "Optional Practical Training"],
      educationSystem: "US universities offer a flexible credit-based system across Associate, Bachelor's, Master's, and Doctorate levels. Programs are highly customizable.",
      applicationProcess: "Applications are submitted directly to universities. CommonApp is used for UG. Documents include transcripts, test scores, SOP, LORs, and financials.",
      scholarships: "Wide range of merit-based, need-based, and sports scholarships are available from universities and external organizations.",
      studentLife: "Campus life is vibrant with clubs, dorms, sports, and events. Students can work 20 hours/week on campus during term time.",
      visaInfo: "F1 Visa required. Needs I-20 form from the university, SEVIS fee payment, proof of finances, and DS-160 form."
    },
    canada: {
      name: "Canada",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56cd601?auto=format&fit=crop&w=1500&q=80",
      description: "Study in Canada's world-renowned universities with excellent post-graduation opportunities.",
      universities: [
        { name: "University of Toronto", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/University_of_Toronto_crest.svg/1200px-University_of_Toronto_crest.svg.png" },
        { name: "McGill University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png" },
        { name: "University of British Columbia", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/University_of_British_Columbia_coat_of_arms.svg/1200px-University_of_British_Columbia_coat_of_arms.svg.png" }
      ],
      requirements: ["IELTS/TOEFL", "Academic transcripts", "Statement of Purpose", "Letters of recommendation", "Proof of funds"],
      benefits: ["Post-graduation work permit", "Pathway to permanent residence", "High quality of life", "Multicultural environment"],
      educationSystem: "Canadian education system offers Bachelor's (4 years), Master's (1-2 years), and PhD programs. Co-op programs are widely available for practical experience.",
      applicationProcess: "Direct applications to universities or through provincial application systems. Early applications recommended for competitive programs.",
      scholarships: "Various scholarships available including Vanier Canada Graduate Scholarships, provincial scholarships, and university-specific awards.",
      studentLife: "Safe and welcoming environment with diverse student communities. Students can work 20 hours/week during studies and full-time during breaks.",
      visaInfo: "Study permit required. Needs acceptance letter, proof of funds, medical exam (if required), and police certificate. Allows part-time work during studies."
    },
    australia: {
      name: "Australia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1500&q=80",
      description: "Experience world-class education in Australia with excellent research opportunities and lifestyle.",
      universities: [
        { name: "University of Melbourne", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/University_of_Melbourne_logo.svg/1200px-University_of_Melbourne_logo.svg.png" },
        { name: "Australian National University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Australian_National_University_logo.svg/1200px-Australian_National_University_logo.svg.png" },
        { name: "University of Sydney", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/University_of_Sydney.svg/1200px-University_of_Sydney.svg.png" }
      ],
      requirements: ["IELTS/TOEFL", "Academic transcripts", "Statement of Purpose", "CV/Resume", "Portfolio (for specific courses)"],
      benefits: ["Post-study work visa", "High-quality education", "Beautiful climate", "Strong job market"],
      educationSystem: "Australian universities offer Bachelor's (3-4 years), Master's (1-2 years), and PhD programs. Strong focus on research and practical learning.",
      applicationProcess: "Direct applications to universities. Some courses have specific entry requirements and deadlines. Early application recommended.",
      scholarships: "Australia Awards, university scholarships, and research scholarships available for international students.",
      studentLife: "Vibrant campus life with excellent facilities. Students can work 40 hours per fortnight during studies and unlimited hours during breaks.",
      visaInfo: "Student visa (subclass 500) required. Needs Confirmation of Enrolment (CoE), health insurance, financial capacity, and English proficiency proof."
    },
    sweden: {
      name: "Sweden",
      image: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=1500&q=80",
      description: "Sweden provides innovative learning with a focus on sustainability, independence, and equality.",
      universities: [
        { name: "Lund University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Lund_University_Logo.svg/1200px-Lund_University_Logo.svg.png" },
        { name: "KTH Royal Institute of Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/KTH_logo.svg/1200px-KTH_logo.svg.png" },
        { name: "Uppsala University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Uppsala_University_Seal.svg/1200px-Uppsala_University_Seal.svg.png" }
      ],
      requirements: ["IELTS/TOEFL", "Bachelor's degree (for Master's)", "Motivation letter", "Supporting documents", "Proof of secondary education (for undergrad)"],
      benefits: ["Tuition-free for EU students", "Work opportunities during studies", "Progressive, student-centered society"],
      educationSystem: "Sweden's higher education system includes Bachelor's (3 years), Master's (1-2 years), and PhD programmes. Courses are structured in ECTS credits. Many Master's are offered in English, and teaching promotes critical thinking and collaboration.",
      applicationProcess: "Application is done through UniversityAdmissions.se. Key deadlines include: Jan 15 for applications, Feb 3 for documents and fees. Results are published in March (Master's) and April (Bachelor's).",
      scholarships: "Several scholarships are available including the Swedish Institute Scholarships for Global Professionals. Universities also offer merit-based aid.",
      studentLife: "Students engage in seminars, group work, and self-study. Many campuses offer international clubs, and work during studies is allowed with flexible hours.",
      visaInfo: "Pakistani students need a residence permit for studies. A university admission letter, proof of funds, and insurance are required. Visa allows part-time work."
    },
    portugal: {
      name: "Portugal",
      image: "https://images.unsplash.com/photo-1583744041644-d2dfef1c863b?auto=format&fit=crop&w=1500&q=80",
      description: "Portugal combines quality education with beautiful weather and vibrant culture.",
      universities: [
        { name: "University of Lisbon", logo: "https://www.ulisboa.pt/sites/default/files/styles/logo/public/logo_ulisboa.png" },
        { name: "University of Porto", logo: "https://www.up.pt/wp-content/uploads/2020/07/logo_up.png" },
        { name: "NOVA University Lisbon", logo: "https://www.unl.pt/sites/default/files/styles/logo/public/logo_nova_university_lisbon.png" }
      ],
      requirements: ["High school diploma or equivalent", "Proof of English/Portuguese proficiency", "Academic transcripts"],
      benefits: ["Affordable tuition and living costs", "Growing international student community", "Safe and scenic environment"],
      educationSystem: "Three-cycle Bologna system. Courses are in Portuguese and increasingly in English.",
      applicationProcess: "Direct university applications, or via DGES platform.",
      scholarships: "SASUP and merit-based aid available for non-EU students.",
      studentLife: "Beach lifestyle, student parties, Erasmus+ network, and great food.",
      visaInfo: "Student visa needed for non-EU. Includes LOA, accommodation, and financial proof."
    }
  };

  return countries[countryCode] || null;
};

// Update Images API
export const getUpdateImages = (): string[] => [
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600195077075-d99c83752f3e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
];