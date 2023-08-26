import { Investing } from '../components/investing'
import {Features} from '../components/features'
import { Connection } from '../components/connection'
import { Partners } from '../components/partners'
import {Footer} from "../components/footer"
import { Simplified } from '../components/simplified'
import { LoginNavbar } from '../components/loginnav'
import { Review } from '../components/review'


export const Product=()=>{
    return(
        <div>
            <LoginNavbar/>
            <Investing/>
            <Features/>
            <Connection/>
            <Simplified/>
            <Partners/>
            <Review/>
            <Footer/>
        </div>
    )
}