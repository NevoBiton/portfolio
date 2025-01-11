import React from "react";
import HeroImg from "../../assets/hero-img.png";
import GithubLightIcon from "../../assets/github-light.svg";
import GithubDarkIcon from "../../assets/github-dark.svg";
import LinkedinDarkIcon from "../../assets/linkedin-dark.svg";
import LinkedinLightIcon from "../../assets/linkedin-light.svg";
import TwitterDark from "../../assets/twitter-dark.svg";
import TwitterLight from "../../assets/twitter-light.svg";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../components/ui/modeToggle.tsx";
import IconLink from "@/components/costum-components/IconLink.tsx";

const CV = "Test";
const socialLinks = [
    {
        iconSet: { light: TwitterLight, dark: TwitterDark },
        link: "https://twitter.com",
        altText: "Twitter Icon",
    },
    {
        iconSet: { light: GithubLightIcon, dark: GithubDarkIcon },
        link: "https://github.com",
        altText: "Github Icon",
    },
    {
        iconSet: { light: LinkedinLightIcon, dark: LinkedinDarkIcon },
        link: "https://linkedin.com",
        altText: "Linkedin Icon",
    },
];

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-3 h-screen min-h-96 px-3">
            <div className="flex flex-col">
                <img className="max-w-52" src={HeroImg} alt="Hero Image" />
                <ModeToggle />
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="uppercase font-rubik text-5xl text-center font-extrabold">
                    Nevo
                    <br />
                    Biton
                </h1>
                <h2 className='uppercase font-mono font-medium text-3xl text-center'>Software Developer</h2>
                <div className="flex items-center gap-4">
                    {socialLinks.map(({ iconSet, link, altText }, index) => (
                        <IconLink key={index} iconSet={iconSet} link={link} altText={altText} />
                    ))}
                </div>
                <p className="text-center" >With a passion for developing modern React web apps for commercial businesses.</p>
                <a href={CV} download>
                    <Button className="rounded-2xl">Resume</Button>
                </a>
            </div>
        </section>
    );
};

export default Hero;

