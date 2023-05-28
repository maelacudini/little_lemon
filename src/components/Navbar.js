import '../components/css/Navbar.css';
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src={Logo} className="navbar-brand" alt='logo'/>
        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false">
          <label htmlFor="check">
          <input type="checkbox" id="check"/> 
            <span></span>
            <span></span>
          </label>      
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/'>About</Link>
            <Link className="nav-link" to='/'>Menu</Link>
            <Link className="nav-link" to='/'>Reservations</Link>
            <Link className="nav-link" to='/'>Order Online</Link>
            <Link className="nav-link" to='/'>Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;