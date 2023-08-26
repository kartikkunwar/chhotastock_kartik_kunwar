import { Investing } from '../components/investing'
import {Features} from '../components/features'
import { Connection } from '../components/connection'
import { Partners } from '../components/partners'
import {Footer} from "../components/footer"
import { Simplified } from '../components/simplified'
import { LoginNavbar } from '../components/loginnav'


export const Product=()=>{
    return(
        <div>
            <LoginNavbar/>
            <Investing/>
            <Features/>
            <Connection/>
            <Simplified/>
            <Partners/>
            <Footer/>
        </div>
    )
}