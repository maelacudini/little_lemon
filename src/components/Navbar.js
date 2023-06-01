import styles from '../components/css/Navbar.module.css';
import Logo from '../assets/Logo.svg'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {

  const navigate = useNavigate();

  const handleLogout = (event) => {
      event.preventDefault();
      setIsLoggedIn(false)
      navigate('/');
  };
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src={Logo} className="navbar-brand" alt='logo'/>
        <button className={`navbar-toggler shadow-none ${styles.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false">
          <label htmlFor="check" className={styles.label}>
          <input className={styles.input} type="checkbox" id="check"/> 
            <span className={styles.span}></span>
            <span className={styles.span}></span>
          </label>      
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className={`navbar-nav ${styles.navbarNav}`}>
            <Link className={`nav-link ${styles.navLink}`} to='/'>Home</Link>
            <Link className={`nav-link ${styles.navLink}`} to='about'>About</Link>
            <Link className={`nav-link ${styles.navLink}`} to='reservations'>Reservations</Link>
            <Link className={`nav-link ${styles.navLink}`} to='onlinemenu'>Online Menu</Link>
            {!isLoggedIn && <Link className={`nav-link ${styles.navLink}`} to='login'>Login</Link>}
            {isLoggedIn && <Link className={`nav-link ${styles.navLink}`} onClick={handleLogout}>Logout</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;