import { useState } from "react"


export const Navbar = () => {
    const [open, setOpen] = useState(false)
    let count = 0;
    const modal = () => {
        count++;
        console.log(count)
        if (count % 2 !== 0) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
    return (
        <div className="nav">
            <div className="logo">
                <img src="https://www.cakedayphotoframes.com/public/storage/posts/1673286575-18.jpg" alt="images" />
                <p style={{ fontSize: "30px", marginLeft: "20px" }}>InvestPe</p>
                <button style={{marginLeft: "20px" }}>Gateway</button>
            </div>
            <div className="modal">
                <p style={{ fontSize: "30px", cursor:"pointer" }} onClick={()=>modal()}>Products <span style={{color:"white"}}>&#8595;</span></p>
                <p style={{ fontSize: "30px" }}>AboutUs</p>
                {
                    open&&
                    <div className="box">
                        <div>
                            <p style={{ color: "green", fontSize: "20px" }}>INVESTMENTS</p>
                            <div className="modaldiv">
                                <div>
                                    <img src="https://www.freeiconspng.com/thumbs/homepage-icon-png/gallery-homepage-icon-png-2.png" alt="images" />
                                </div>
                                <div>
                                    <h2>Mutual Funds</h2>
                                    <p className="navtext">E2E infrastructure for mutual fund investing</p>
                                </div>
                            </div>
                            <div className="modaldiv">
                                <div>
                                    <img src="https://www.freeiconspng.com/thumbs/homepage-icon-png/gallery-homepage-icon-png-2.png" alt="images" />
                                </div>
                                <div>
                                    <h2>Mutual Funds</h2>
                                    <p className="navtext">E2E infrastructure for mutual fund investing</p>
                                </div>
                            </div>
                            <div className="modaldiv">
                                <div>
                                    <img src="https://www.freeiconspng.com/thumbs/homepage-icon-png/gallery-homepage-icon-png-2.png" alt="images" />
                                </div>
                                <div>
                                    <h2>Mutual Funds</h2>
                                    <p className="navtext">E2E infrastructure for mutual fund investing</p>
                                </div>
                            </div>
                            <div className="modaldiv">
                                <div>
                                    <img src="https://www.freeiconspng.com/thumbs/homepage-icon-png/gallery-homepage-icon-png-2.png" alt="images" />
                                </div>
                                <div>
                                    <h2>Mutual Funds</h2>
                                    <p className="navtext">E2E infrastructure for mutual fund investing</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style={{ color: "green", fontSize: "20px" }}>DATA</p>
                            <div className="modaldiv">
                                <div>
                                    <img src="https://www.freeiconspng.com/thumbs/homepage-icon-png/gallery-homepage-icon-png-2.png" alt="images" />
                                </div>
                                <div>
                                    <h2>Mutual Funds</h2>
                                    <p className="navtext">E2E infrastructure for mutual fund investing</p>
                                </div>
                            </div>
                            <div className="modaldiv">
                                <div>
                                    <img src="https://www.freeiconspng.com/thumbs/homepage-icon-png/gallery-homepage-icon-png-2.png" alt="images" />
                                </div>
                                <div>
                                    <h2>Mutual Funds</h2>
                                    <p className="navtext">E2E infrastructure for mutual fund investing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}