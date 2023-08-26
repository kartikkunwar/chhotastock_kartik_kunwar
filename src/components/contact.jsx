

export const Contact = () => {
    return (
        <div className="contact">
            <h1>How would you like to work with us?</h1>
            <p style={{fontSize:"25px", width:"40%"}}>Tell us more about yourself, and we will reach out to you as soon as possible.</p>
            <div className="insidecontact">
                <div>
                    <p style={{fontSize:"20px", marginBottom:"0px"}}>Work email</p>
                    <input type="email" placeholder="abc@xyz.com" className="mail"/>
                    <p style={{fontSize:"20px", marginBottom:"0px"}}>Company Name</p>
                    <input type="text"  className="mail"/>
                    <p style={{fontSize:"20px", marginBottom:"0px"}}>Mobile Number</p>
                    <input type="number"  className="mail"/>
                </div>
                <div>
                    <p style={{fontSize:"18px"}}>Which products are you interested in?</p>
                    <div className="contacttwo">
                        <div>
                            <p style={{fontSize:"20px"}}>Mutual Funds</p>
                            <p style={{color:"gray"}}>Stock gateway & stock baskets</p>
                        </div>
                        <div>
                            <p style={{fontSize:"20px"}}>Mutual Funds</p>
                            <p style={{color:"gray"}}>Stock gateway & stock baskets</p>
                        </div>
                        <div>
                            <p style={{fontSize:"20px"}}>Mutual Funds</p>
                            <p style={{color:"gray"}}>Stock gateway & stock baskets</p>
                        </div>
                        <div>
                            <p style={{fontSize:"20px"}}>Mutual Funds</p>
                            <p style={{color:"gray"}}>Stock gateway & stock baskets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}