import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig,
    SiJavascript,
    SiOracle,
    SiOpenjdk,
    SiMysql
} from "react-icons/si";
import {IconType} from "react-icons";


export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "Meu portofolio.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/nuIIpointerexception/www.seekvisualartist.com",
        demo: "https://www.seekvisualartist.com/",
        image: "/projects/portofolio.png",
        available: true,
    },
    {
        id: 1,
        name: "Sistema de gestão Holetaria",
        description:
            "Sistema de gestão de uma empresa de hotelaria e turismo, facilitanto a ",
        technologies: [SiOpenjdk, SiMysql],
        techNames: ["Java", "Mysql"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://www.codewars.com/",
        image: "/projects/deosol.png",
        available: true,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "Coming Soon",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/construction.webp",
        available: false,
    },
];
