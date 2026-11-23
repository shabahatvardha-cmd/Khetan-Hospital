export const clinicInfo = {
  name: "Dr. Vatsal Khetan",
  qualification: "MBBS, MS (Ortho), MRCS, FRCS, IOC Dip (Sports Med)",
  clinicName: "Khetan Knee N Shoulder Clinic",
  subtitle: "Orthopedic, Joint Replacement & Arthroscopy Surgeon",
  location: "SK Pandey Complex, Betiahata Rd, Beside Union Bank, Betiahata, Gorakhpur, UP 273001",
  phone: "+91 96623 65917",
  email: "drvatsalkhetan@gmail.com",
  timings: "Mon - Sat: 10:30 AM - 02:00 PM | 05:30 PM - 08:30 PM",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com"
  }
};

export const treatmentsData = [
  { name: "Robotic Knee Surgery", category: "Knee" },
  { name: "Knee Replacement Surgery", category: "Knee" },
  { name: "Hip Replacement Surgery", category: "Hip" },
  { name: "Shoulder Replacement", category: "Shoulder" },
  { name: "Knee Arthroscopy (Keyhole)", category: "Knee" },
  { name: "Shoulder Arthroscopy & Rotator Cuff", category: "Shoulder" },
  { name: "ACL Surgery & Ligament Reconstruction", category: "Sports Medicine" },
  { name: "Spine Surgery & Back Pain", category: "Spine" },
  { name: "Ankle Surgery & Trauma", category: "Ankle" }
];

export const navMenu = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "About",
    href: "/about",
    dropdown: [
      {
        title: "About Dr. Vatsal Khetan",
        desc: "Qualifications, MS Orthopedics, Royal College FRCS/MRCS credentials & 12+ yrs experience",
        href: "/about/dr-vatsal-khetan"
      },
      {
        title: "Memorable Moments",
        desc: "International fellowships (Wrightington, UK), athlete interactions & medical conferences",
        href: "/about/memorable-moments"
      },
      {
        title: "Published Papers",
        desc: "Peer-reviewed research in Acta Orthopaedica, knee arthroplasty & meniscus repair",
        href: "/about/published-papers"
      }
    ]
  },
  {
    title: "Services",
    href: "/services",
    dropdown: [
      { title: "Robotic Knee Surgery", tag: "Advanced", href: "/services/robotic-knee-surgery" },
      { title: "Knee Replacement Surgery", tag: "Popular", href: "/services/knee-replacement" },
      { title: "Hip Replacement Surgery", tag: "Specialty", href: "/services/hip-replacement" },
      { title: "Shoulder Replacement", tag: "Specialty", href: "/services/shoulder-replacement" },
      { title: "Knee Arthroscopy (Keyhole)", tag: "Day Care", href: "/services/knee-arthroscopy" },
      { title: "Shoulder Arthroscopy & Rotator Cuff", tag: "Keyhole", href: "/services/shoulder-arthroscopy" },
      { title: "ACL Surgery & Ligament Repair", tag: "Sports Med", href: "/services/acl-surgery" },
      { title: "Spine Surgery & Back Pain", tag: "Care", href: "/services/spine-surgery" },
      { title: "Ankle Surgery & Trauma", tag: "Care", href: "/services/ankle-surgery" }
    ]
  },
  {
    title: "Service Locations",
    href: "/locations",
    dropdown: [
      { city: "Gorakhpur", note: "Primary Clinic - Betiahata Chowk", isMain: true },
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
    ]
  },
  {
    title: "Blogs",
    href: "/blogs"
  },
  {
    title: "Contact Us",
    href: "/contact"
  }
];
