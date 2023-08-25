import { Cards } from "../components/cards"
import { Connection } from "../components/connection"
import { Contact } from "../components/contact"
import { Features } from "../components/features"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Navbar } from "../components/navbar"
import { Partners } from "../components/partners"
import { Solutions } from "../components/solutions"


export const Landing = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Cards />
            <Features/>
            <Connection/>
            <Solutions/>
            <Partners/>
            <Contact/>
            <Footer/>
        </>
    )
}