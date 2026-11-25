/**
 * 🏥 Khetan Hospital - Centralized Navigation & Brand Architecture
 * Single Source of Truth for:
 * 1. Exactly 6 Main Navigation Cards on the 3D Homepage
 * 2. Synchronized Navbar Items (HOME | SERVICES | DOCTORS | BLOGS | LOCATIONS | CONTACT)
 * 3. Route-to-Section Mapping
 * 4. Verified Hospital Contact & Specialties Metadata
 */

export const mainNavigation = [
  {
    id: 'home',
    label: 'HOME',
    heading: 'HOME',
    supportingLine: 'Discover Khetan Hospital and our approach to orthopaedic care.',
    route: '/',
    image: '/images/backgrounds/hospital-interior.jpg',
    isDoctor: false
  },
  {
    id: 'services',
    label: 'SERVICES',
    heading: 'SERVICES',
    supportingLine: 'Explore our orthopaedic treatments and specialised care.',
    route: '/services',
    image: '/images/surgeries/robotic-knee.jpg',
    isDoctor: false
  },
  {
    id: 'doctors',
    label: 'DOCTORS',
    heading: 'DOCTORS',
    supportingLine: 'Meet our specialists and discover their expertise.',
    route: '/about',
    image: '/images/dr-vatsal-main.webp',
    isDoctor: true
  },
  {
    id: 'blogs',
    label: 'BLOGS',
    heading: 'BLOGS',
    supportingLine: 'Read articles, insights, and patient education resources.',
    route: '/blogs',
    image: '/images/dr-vatsal-rehab.webp',
    isDoctor: false
  },
  {
    id: 'locations',
    label: 'LOCATIONS',
    heading: 'LOCATIONS',
    supportingLine: 'Find our hospital and consultation locations.',
    route: '/locations',
    image: '/images/dr-vatsal-consult.webp',
    isDoctor: false
  },
  {
    id: 'contact',
    label: 'CONTACT',
    heading: 'CONTACT',
    supportingLine: 'Connect with our hospital and plan your visit.',
    route: '/contact',
    image: '/images/backgrounds/modular-ot.jpg',
    isDoctor: false
  }
];

export const clinicInfo = {
  name: "Dr. Vatsal Khetan",
  qualification: "MBBS, MS (Ortho), MRCS, FRCS (Edinburgh), M.Ch Knee (UK), IOC Dip Sports Med (Switzerland)",
  clinicName: "Khetan Hospital",
  hospitalName: "Khetan Hospital",
  subtitle: "Advanced Orthopedic & Robotic Joint Replacement Centre",
  location: "Vikas Nagar Bargadawa Gorakhpur, Gorakhpur, Uttar Pradesh, 273015",
  phone: "+91 96623 65917",
  emergencyPhone: "+91 96623 65917",
  email: "drvatsalkhetan@gmail.com",
  timings: "Mon - Sat: 9:00 AM - 8:00 PM | Sunday by Emergency Appointment",
  opdHours: "Mon - Sat: 9:00 AM - 8:00 PM",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com"
  }
};

export const treatmentsData = [
  { name: "Robotic Knee Surgery", slug: "robotic-knee-surgery", category: "Knee" },
  { name: "Total Knee Replacement", slug: "knee-replacement", category: "Knee" },
  { name: "Hip Replacement Surgery", slug: "hip-replacement", category: "Hip" },
  { name: "Shoulder Replacement", slug: "shoulder-replacement", category: "Shoulder" },
  { name: "ACL & Sports Arthroscopy", slug: "acl-surgery", category: "Sports Medicine" },
  { name: "Spine & Lumbar Surgery", slug: "spine-surgery", category: "Spine" },
  { name: "Trauma & Fracture Fixation", slug: "trauma-surgery", category: "Trauma" },
  { name: "Ankle Surgery & Ligaments", slug: "ankle-surgery", category: "Ankle" },
  { name: "Elbow Arthroscopy & Reconstruction", slug: "elbow-surgery", category: "Elbow" }
];

export const outreachLocations = [
  { city: "Gorakhpur", note: "Primary Hospital - Vikas Nagar, Bargadawa", isMain: true },
  { city: "Deoria", note: "Regular Consultation Outreach" },
  { city: "Basti", note: "Patient Consultation Centre" },
  { city: "Kushinagar", note: "Patient Consultation Outreach" },
  { city: "Maharajganj", note: "Outreach Clinic" },
  { city: "Bettiah", note: "Regional OPD Centre" },
  { city: "Siwan", note: "Outreach Consultations" },
  { city: "Motihari", note: "Regional Clinic" },
  { city: "Gopalganj", note: "Patient Outreach" },
  { city: "Padrauna", note: "Regional Outreach" },
  { city: "Patna", note: "Specialist Surgical Consultation" }
];

export const navMenu = mainNavigation.map(item => ({
  title: item.label,
  href: item.route
}));
