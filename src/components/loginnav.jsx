import { useNavigate } from "react-router-dom"


export const LoginNavbar = () => {
    const navigate=useNavigate();

    const move=()=>{
        navigate("/landing")
    }
    return (
        <div className="nav">
            <div className="logo">
                <img src="https://www.cakedayphotoframes.com/public/storage/posts/1673286575-18.jpg" alt="images" />
                <p style={{ fontSize: "30px", marginLeft: "20px" }}>InvestPe</p>
            </div>
            <div style={{width:"25%", color:"white", marginLeft:"100px"}}>
                <input type="text" placeholder="Search stocks, ETFs, indices" style={{width:"100%", padding:"10px", borderRadius:"8px"}}/>
            </div>
            <div className="modal">
                <button style={{ padding:"10px 20px 10px 20px" }} onClick={()=>move()}>Login</button>
            </div>
        </div>
    )
}