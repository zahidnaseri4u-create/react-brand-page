import "./Content.css"

function Content() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="pb-3">YOUR FEET DESERVE THE BEST</h3>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="d-flex pb-3">
                        <button className="btn btn-danger me-3">Shop Now</button>
                        <button className="btn btn-outline-secondary">Category</button>
                    </div>
                    <p>Also Available On</p>
                    <div className="d-flex">
                        <img className="me-3" src="./flipkart.png" alt="" />
                        <img src="./amazon.png" alt="" />
                    </div>
                </div>
                <div className="col">
                    <img src="./shoe_image.png" alt="" />
                </div>
            </div>
        </div>
     );
}

export default Content;