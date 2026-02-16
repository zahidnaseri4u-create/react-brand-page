import "./Nav.css"

function Nav() {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="d-flex justify-content-between p-3">
                        <img src="/brand_logo.png" alt="" />
                        <ul className="d-flex  gap-5">
                            <li><a href="">Menu</a></li>
                            <li><a href="">Location</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>

                        <button className="btn btn-danger">Login</button>
                    </nav>
                </div>
            </div>
        </div>
     );
}

export default Nav;