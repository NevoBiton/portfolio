import HeroImg from "../../assets/hero-img.png"
import TwitterIcon from "../../assets/twitter-light.svg"
import GithubIcon from "../../assets/github-light.svg"
import LinkedinIcon from "../../assets/linkedin-light.svg"
import { Button } from "@/components/ui/button"
import {ModeToggle} from "../../components/ui/modeToggle.tsx";


const CV = "Test"

function Hero() {

    return (
        <>
         <section>
             <div>
                 <img src={HeroImg} alt="Hero Image"/>
                 <ModeToggle/>
             </div>
             <div>
                 <h1>Nevo<br/>Biton</h1>
                 <h2>Software Developer</h2>
                 <span>
                     <a href="https://twitter.com" target="_blank">
                         <img src={TwitterIcon} alt="Twitter Icon"/>
                     </a>
                         <a href="https://github.com" target="_blank">
                         <img src={GithubIcon} alt="Github Icon"/>
                     </a>
                         <a href="https://linkedin.com" target="_blank">
                         <img src={LinkedinIcon} alt="LinkedinIcon Icon"/>
                     </a>
                 </span>
                 <p>
                     With the passion for the developing modern React web apps for commercial businesses.
                 </p>
                 <a href={CV} download>
                     <Button variant="outline">Resume</Button>
                 </a>
             </div>
         </section>
        </>
    )
}

export default Hero
