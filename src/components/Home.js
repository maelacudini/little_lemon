import styles from '../components/css/Home.module.css';
import headerImg from '../assets/restauranfood.jpg';
import { motion } from 'framer-motion'
import SpecialsList from "./SpecialsList";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <article>
            <div className={`row ${styles.header}`}>
                <div className="col-md-8 mb-5">
                    <h1 className={styles.title}>Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p>
                    Welcome to <b>Little Lemon</b>, an inviting culinary gem in the heart of Chicago. 
                    Experience a celebration of flavors as our talented chefs artfully prepare a menu that blends <b>local and international influences</b>. 
                    From fresh salads to savory entrees and decadent desserts, each dish is thoughtfully crafted using the <b>finest ingredients</b>. 
                    Our warm and welcoming ambiance sets the stage for <b>memorable moments</b>, whether you're enjoying an intimate dinner or gathering with friends. 
                    Immerse yourself in a vibrant culinary journey at Little Lemon, where unforgettable flavors await!
                    </p>
                    <Link className="btn btn-warning" to='reservations'>Reserve a Table</Link>                    
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <motion.img
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    src={headerImg} 
                    alt="header img" height={'auto'} width={'250px'} className={styles.overlayImage}/>
                </div>
            </div>
            <SpecialsList ></SpecialsList>  
        </article>
    );
}
 
export default Home;