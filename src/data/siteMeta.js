
import logoBroadcastMed from '@/images/logos/BCM_logo.svg'
import logoSelf from '@/images/logos/MyLogo.svg'
import logoProsek from '@/images/logos/ProsekLogo.png'
import logoMerkle from '@/images/logos/MerkleLogo.png'
import logoMerck from '@/images/logos/MerckLogo.png'
import logoNovocent from '@/images/logos/novocent_logo.png'


import logoVerizon from '@/images/logos/verizonLogo.png'

const siteMeta = {
    title: "Earl H.",
    description: "Front-End Developer based in Parsippany, New Jersey. With a passion for creating intuitive and responsive web interfaces, Earl combines technical expertise with creative problem-solving to deliver impactful digital solutions.Earl Hickson Jr., also known as Earl the Kaiju, is a skilled graphic artist, proficient front-end developer, and passionate Jiu-Jitsu competitor and instructor.",
    copyright: "Earl Hickson Jr., CC-BY-SA",
    author: {
        name: "Earl Hickson Jr.",
        email: "earlhicksonjr@gmail.com",

        instagram: "https://instagram.com/ehicksonjr",
        github: "https://github.com.com/epetaway",
        linkedin: "https://www.linkedin.com/in/earl-hickson-jr/",

    },
    siteUrl: "https://ehicksonjr.com"
}
export const resume = [
  {
    company: 'Self-Employment',
    title: 'Freelance Developer & Designer',
    logo: logoSelf,
    start: '2019',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Wealth Creation Innovation',
    title: 'Senior Front-End Developer (Contract)',
    logo: logoSelf,
    start: 'Nov 2024',
    end: 'Dec 2024',
  },
  {
    company: 'Asembia',
    title: 'Frontend Developer',
    logo: logoSelf,
    start: 'Dec 2023',
    end: 'Nov 2024',
  },
  {
    company: 'BroadcastMed',
    title: 'Lead Designer and Developer',
    logo: logoBroadcastMed,
    start: 'Sep 2021',
    end: 'May 2023',
  },
  {
    company: 'Prosek Partners',
    title: 'Freelance Front-End Web Developer',
    logo: logoProsek,
    start: 'Apr 2021',
    end: 'Sep 2021',
  },
  {
    company: 'William R Seide Agency',
    title: 'Frontend Developer',
    logo: logoSelf,
    start: 'Jan 2020',
    end: 'Jun 2020',
  },
  {
    company: 'Merkle Inc',
    title: 'Email Marketing Specialist',
    logo: logoMerkle,
    start: 'Nov 2018',
    end: 'Jul 2019',
  },
  {
    company: 'Merck',
    title: 'Freelance Web Developer',
    logo: logoMerck,
    start: 'Apr 2018',
    end: 'Nov 2018',
  },
  {
    company: 'Novocent',
    title: 'Frontend Web Developer',
    logo: logoNovocent,
    start: 'Mar 2017',
    end: 'Jun 2017',
  },
  {
    company: 'Verizon Wireless',
    title: 'Front-End Developer',
    logo: logoVerizon,
    start: 'Sep 2015',
    end: 'Dec 2016',
  },
  {
    company: 'Second Melody',
    title: 'Web Developer',
    logo: logoSelf,
    start: 'Jun 2015',
    end: 'Sep 2015',
  },
]

export const projects = [

  {
    name: 'Employee Directory',
    description:
      "In this project, I'm leveraging JavaScript to build an interactive employee directory by integrating data from third-party APIs such as Twitter, Facebook, IMDB, and Wikipedia. It's a dynamic exploration of effective data communication, all wrapped up in a user-friendly web interface.",
    link: { href: 'https://epetaway.github.io/Employee-Directory/', label: 'directory.dev' },
    // logo: logoFleek,
  },
  {
    name: 'Movie Rating app',
    description:
      'A small web-app that just allows the user to rate the latest Marvel movies, using Javascript.',
    link: { href: 'https://epetaway.github.io/marvel-movie-app/', label: 'rating.dev' },
    // logo: logoVanilla,
  },
  {
    name: 'Game Show App',
    description:
      "In this project, you'll create a browser version of 'Wheel of Success', a word guessing game. You’ll use Javascript to come up with a random phrase that players will try to guess by entering different letters into the program.",
    link: { href: 'https://epetaway.github.io/WHEEL-OF-SUCCESS/', label: 'game-app.dev' },
    // logo: logoCaptainhook,
  },



]


export default siteMeta;