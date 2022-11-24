import { Link } from 'react-router-dom'

function Navbar(){
    return(
       <div>
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><h4>HOME</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="create-account" className="nav-link active text-success"><h5>CREATE</h5></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="reset-password"  className="nav-link text-danger"><h5>Reset Password</h5></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
       </div>
    );
}

export default Navbar;