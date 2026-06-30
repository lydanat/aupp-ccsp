export interface Projects {
  src: string;
  tag: string;
  readableDate: string;
  titleKey: string;        
  title: string;  
  href: string;
}

export const projects: Projects[] = [
  {
    src: "/images/logo/stem.png",
    tag: "STEM",
    readableDate: "3-4 Jan 2025",
    titleKey: "FeatureProject.projects.0.title",
    title: "Support Our Mission: STEM4Change: Together, We Can Improve Our Community Better!",
    href: "/projects/stem",
  },
  {
    src: "/images/logo/ncic.png",
    tag: "Community Service",
    readableDate: "April 6 2025",
    titleKey: "FeatureProject.projects.1.title",
    title: "Community Service: Donations to National Infant and Child Center Charity",
    href: "/projects/ncic",
  },
  {
    src: "/images/logo/cyberai.png",
    tag: "CyberAI",
    readableDate: "Aug-September 2025",
    titleKey: "FeatureProject.projects.2.title",
    title: "CyberAI: Teaching Cybersecurity & AI Skills to High School Students",
    href: "/projects/cyberai",
  },
];
