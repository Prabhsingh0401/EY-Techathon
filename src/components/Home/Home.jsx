import NavBar from "../NavBar/NavBar"
import { HeroSection } from "../HeroSection/HeroSection"
import { Features } from "../Features/Features"
import Footer from "../Footer/Footer"

export function Home() {
    return(
        <>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Features></Features>
        <Footer></Footer>
        </>
    )
}