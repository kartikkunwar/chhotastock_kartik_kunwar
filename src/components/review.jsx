import { SingleCard } from "./singlecard"


export const Review=()=>{
    return(
        <div className="review">
            <hr/>
            <div className="revfirst">
                <div>
                    <h1>Reviews From Early Adopters</h1>
                </div>
                <div>
                    <h1>150k+</h1>
                    <p className="small" style={{fontSize:"25px"}}>Registered Users</p>
                </div>
                <div>
                    <h1>$1.5Mn+</h1>
                    <p className="small" style={{fontSize:"25px"}}>Worth investing done</p>
                </div>
            </div>
            <div className="revsecond">
                <SingleCard pic={true}/>
                <SingleCard pic={false}/>
                <SingleCard pic={true}/>
                <SingleCard pic={false}/>
                <SingleCard pic={true}/>
            </div>
        </div>
    )
}