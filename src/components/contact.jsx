

export const Contact = () => {
    return (
        <div className="contact">
            <h2>How would you like to work with us?</h2>
            <p>Tell us more about yourself, and we will reach out to you as soon as possible.</p>
            <div className="insidecontact">
                <div>
                    <p>Work email</p>
                    <input type="email" placeholder="abc@xyz.com" />
                    <p>Company Name</p>
                    <input type="text" />
                    <p>Mobile Number</p>
                    <input type="number" />
                </div>
                <div>
                    <p>Which products are you interested in?</p>
                    <div className="contacttwo">
                        <div>
                            <h4>Mutual Funds</h4>
                            <p>Stock gateway & stock baskets</p>
                        </div>
                        <div>
                            <h4>Mutual Funds</h4>
                            <p>Stock gateway & stock baskets</p>
                        </div>
                        <div>
                            <h4>Mutual Funds</h4>
                            <p>Stock gateway & stock baskets</p>
                        </div>
                        <div>
                            <h4>Mutual Funds</h4>
                            <p>Stock gateway & stock baskets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}