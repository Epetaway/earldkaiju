export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description?: string;
  logo?: string;
  technologies?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    id: "self-employment",
    company: "Self-Employment",
    position: "Freelance Engineer & Designer",
    duration: "2023 - Present",
    description: "Full-stack development projects with focus on React, Next.js, and design systems",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "wealth-creation",
    company: "Wealth Creation Innovation",
    position: "Senior Front-End Engineer (Contract)",
    duration: "2022 - 2023",
    description: "Led front-end development for financial technology platform",
    technologies: ["Angular", "TypeScript", "RxJS", "Material Design"]
  },
  {
    id: "asembia",
    company: "Asembia",
    position: "Frontend Engineer",
    duration: "2021 - 2022",
    description: "Developed healthcare technology solutions with emphasis on accessibility",
    logo: "/images/asembia.png",
    technologies: ["React", "JavaScript", "SCSS", "Jest"]
  },
  {
    id: "broadcastmed",
    company: "BroadcastMed",
    position: "Lead Designer and Developer",
    duration: "2020 - 2021",
    description: "Led design and development of medical education platform",
    logo: "/images/broadcastmed.png",
    technologies: ["Vue.js", "Node.js", "Adobe Creative Suite"]
  },
  {
    id: "prosek",
    company: "Prosek Partners",
    position: "Freelance Front-End Web Engineer",
    duration: "2019 - 2020",
    description: "Financial services website development and maintenance",
    logo: "/images/prosek.png",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS"]
  },
  {
    id: "seide",
    company: "William R Seide Agency",
    position: "Frontend Engineer",
    duration: "2018 - 2019",
    description: "Insurance industry web development and digital marketing solutions",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
  },
  {
    id: "merkle",
    company: "Merkle Inc",
    position: "Email Marketing Specialist",
    duration: "2017 - 2018",
    description: "Email campaign development and automation for major brands",
    logo: "/images/Merkle.png",
    technologies: ["HTML", "CSS", "Email Templates", "Marketing Automation"]
  },
  {
    id: "merck",
    company: "Merck",
    position: "Freelance Web Engineer",
    duration: "2016 - 2017",
    description: "Pharmaceutical industry web development projects",
    logo: "/images/Merck_Logo.svg",
    technologies: ["HTML", "CSS", "JavaScript", "CMS"]
  },
  {
    id: "novocent",
    company: "Novocent",
    position: "Frontend Web Engineer",
    duration: "2015 - 2016",
    description: "Healthcare technology frontend development",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    id: "verizon",
    company: "Verizon Wireless",
    position: "Front-End Engineer",
    duration: "2014 - 2015",
    description: "Telecommunications industry web development",
    logo: "/images/verizon.png",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    id: "second-melody",
    company: "Second Melody",
    position: "Web Engineer",
    duration: "2013 - 2014",
    description: "Music industry web development and e-commerce solutions",
    technologies: ["HTML", "CSS", "JavaScript", "E-commerce"]
  }
];
