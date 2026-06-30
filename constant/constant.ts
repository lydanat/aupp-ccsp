import { Users, BookOpen, Lightbulb, Globe, HandHeart, GraduationCap } from "lucide-react";


// ------------------- Types -------------------
export interface NavLink {
  id: number;
  url: string;
  label: string;
  children?: { id: number; url: string; label: string }[];
}
export interface FooterLinks {
  id: number;
  url: string;
  label: string;
}

export interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

export interface HeroSlide {
  src: string;
  title: string;
  description: string;
  href: string;
}
export interface Projects {
  src: string;
  tag: string;
  readableDate: string;
  title: string;
  description: string;
  href: string;
}
export interface SocialMedia {
  href: string;
  src: string;
  label: string;
}
export interface AboutCarousel{
  src: string;
}
export interface CardVission {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  borderColor: string;
  bgColor?: string;
}
export interface SocialLinksType{
  facebook: string;
  instagram: string;
}
export interface TeamMember{
  name: string;
  role: string;
  major: string;
  image: string;
  social?: SocialLinksType;
}
// Nav
export const NavLinks: NavLink[] = [
  { id: 1, url: "", label: "Home" },
  {
    id: 2,
    url: "about",
    label: "About",
    children: [
      { id: 1, url: "about/about-us", label: "About CCSP" },
      { id: 2, url: "about/about-team", label: "Our Team" },
    ],
  },
  { id: 3, url: "projects", label: "Projects" },
  { id: 4, url: "contact", label: "Contact" },
];

// Feature
export const Features: Feature[] = [
  { icon: BookOpen, text: "Stem Education", color: "text-blue-600" },
  { icon: Globe, text: "English Language", color: "text-green-600" },
  { icon: Lightbulb, text: "Environmental Education", color: "text-yellow-600" },
  { icon: Users, text: "Community Focus", color: "text-purple-600" },
];

// ------------------- Hero Slides -------------------
export const heroSlides: HeroSlide[] = [
  {
    src: "/images/home/homepage1.png",
    title: "Stem4Change",
    description: "Students engaging in hands-on STEM activities",
    href: "/projects/stem",
  },
  {
    src: "/images/home/homepage2.png",
    title: "Community Impact",
    description: "Making a difference in our community",
    href: "/projects/ncic",
  },
    {
    src: "/images/carousel/carousel1.png",
    title: "CyberAI",
    description: "Enhance technology to young generation",
    href: "/projects/ncic",
  },
];

export const projects: Projects[] = [
  {
    src: "/images/logo/stem.png",
    tag: "STEM",
    readableDate: "3-4 Jan 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
    description:
      "We aim to empower students through hands-on STEM projects that drive innovation, teamwork, and positive change in the community.",
    href: "/projects/stem",
  },
  {
    src: "/images/logo/ncic.png",
    tag: "Community Service",
    readableDate: "April 6 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
      description:
      "We aim to empower students through hands-on STEM projects that drive innovation, teamwork, and positive change in the community.",
    href: "/projects/stem",
  },
  {
    src: "/images/logo/cyberai.png",
    tag: "CyberAI",
    readableDate: "Aug-September 2025",
    title:
      "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
      description:
      "We aim to empower students through hands-on STEM projects that drive innovation, teamwork, and positive change in the community.",
    href: "/projects/cyberai-nca",
  },
];

export const socialLink: SocialMedia[] = [
  {
      href: "https://www.facebook.com/profile.php?id=61566459083009",
      src:  "/images/media-logo/fb.png",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/aupp_ccsp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
       src:  "/images/media-logo/ig.png",
      label: "Instagram",
    },
];

export const slide: AboutCarousel[] =[
  { src: "/images/carousel/carousel1.png" },
  { src: "/images/carousel/carousel2.png" },
  { src: "/images/carousel/carousel3.png" }
]

export const cards: CardVission[] = [
  {
    title: "Empower",
    description: "We aim to provide underprivileged communities, especially children, with the tools and opportunities to create change in their lives through education and skills development.",
    icon: HandHeart,
    iconColor: "text-[#1565c0]",
    borderColor: "border-[#1565c0]",
  },
  {
    title: "Education",
    description: "We focus on providing access to quality education in STEM and digital literacy, as education is key to creating lasting positive impacts.",
    icon: GraduationCap,
    iconColor: "text-[#B22234]",
    borderColor: "border-[#B22234]",
  },
  {
    title: "Sustain",
    description: "We are committed to ensuring that the positive changes we create are long-lasting, fostering continued growth and development for future generations.",
    icon: Globe,
    iconColor: "text-[#008000]",
    borderColor: "border-[#008000]",
  },
]

export const advisor: TeamMember[] = [
  {
    name: "Dr. Danet Hak",
    role: "Advisor",
    major: "Liberal Arts and Sciences",
    image: "/images/team/advisor-danet.png",
    social: {
      facebook: "https://www.facebook.com/hak.danet.7",
      instagram: "https://www.instagram.com/hakdanet.7?igsh=MTYxZ3RtbWk1NnNxdw==",
    },
  },
]
export const leaders: TeamMember[] = [
  {
    name: "Chanrithlaksmey Chhoeth",
    role: "Leader",
    major: "Cybersecurity",
    image: "/images/team/leader-smi.png",
    social: {
      facebook: "https://www.facebook.com/leaksmiii",
      instagram: "https://www.instagram.com/l34k5m111?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
  {
    name: "Sreypich Leam",
    role: "Co Leader",
    major: "Cybersecurity",
    image: "/images/team/leader-pich.png",
    social: {
      facebook: "https://www.facebook.com/leam.sreypich.5",
      instagram: "https://www.instagram.com/h_orang.hae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
]
export const member: TeamMember[] = [
  {
    name: "Chanboromey Chhay",
    role: "Officer",
    major: "Computer Science",
    image: "/images/team/member-mey.png",
    social: {
      facebook: "https://www.facebook.com/chhay.chanboromey",
      instagram: "https://www.instagram.com/iamboromey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
  {
    name: "CHING CHOU KEO",
    role: "Officer",
    major: "Computer Science",
    image: "/images/team/member-chou.png",
    social: {
      facebook: "https://www.facebook.com/XBangZeX",
      instagram: "https://www.instagram.com/xbangzex/?utm_source=ig_web_button_share_sheet",
    },
  },
  {
    name: "Lydana Tan",
    role: "Officer",
    major: "Software Development",
    image: "/images/team/member-dana.png",
    social: {
      facebook: "https://www.facebook.com/dana.974245/",
      instagram: "https://www.instagram.com/__danaaaa__/",
    },
  },
  {
    name: "Narak Horn",
    role: "Officer",
    major: "Digital Infrastructure",
    image: "/images/team/member-narak.png",
    social: {
      facebook: "https://www.facebook.com/na.rak.459263",
      instagram: "https://www.instagram.com/narak_03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  }
]

export const footerLinks = [
  { id: 1, url: "", label: "Home" },
  { id: 2, url: "about/about-us", label: "About CCSP" },
  { id: 3, url: "about/about-team", label: "Our Team" },
  { id: 4, url: "projects", label: "Projects" },
  { id: 5, url: "contact", label: "Contact" },
];
