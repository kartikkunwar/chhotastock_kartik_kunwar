import { useNavigate } from "react-router-dom"


export const LoginNavbar = () => {
    const navigate = useNavigate();

    const move = () => {
        navigate("/landing")
    }
    return (
        <div className="nav">
            <div className="lognav">
                <div className="logo" style={{width:"13%"}}>
                    <img src="https://www.cakedayphotoframes.com/public/storage/posts/1673286575-18.jpg" alt="images" />
                    <p style={{ fontSize: "30px"}}>InvestPe</p>
                </div>
                <div style={{ width: "25%", color: "white", marginLeft: "100px" }}>
                    <input type="text" placeholder="Search stocks, ETFs, indices" style={{ width: "100%", padding: "10px", borderRadius: "8px" }} className="search"/>
                </div>
                <div className="modal">
                    <button style={{ padding: "10px 20px 10px 20px", cursor:"pointer" }} onClick={() => move()}>Login</button>
                </div>
            </div>
        </div>
    )
}