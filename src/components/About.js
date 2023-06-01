import { Fragment } from 'react';
import styles from '../components/css/About.module.css';
import restaurant from '../assets/Mario and Adrian b.jpg';
import restaurant2 from '../assets/restaurant chef B.jpg';
import restaurant3 from '../assets/restaurant.jpg';
import { motion } from 'framer-motion'
import logo from '../assets/Logo.svg'

const About = () => {
    return (
        <Fragment>
        <article className={styles.header}>
            <h1 className={styles.title}>Little Lemon</h1>
            <h4>A <i>little</i> more about us!</h4>
            <p className='m-0'>
                Since its grand opening in 2015, Little Lemon has been delighting diners with its exceptional culinary offerings and warm hospitality. The decision to establish the restaurant was driven by a passion for creating a unique dining experience that celebrates the vibrant flavors of Chicago's culinary scene.
                One compelling argument for opening Little Lemon was to fill a gap in the local restaurant scene. The founders noticed a need for a restaurant that would offer a combination of inventive cuisine, impeccable service, and a welcoming atmosphere. With a vision to elevate the dining landscape, they meticulously curated a menu and assembled a team of talented chefs and staff who shared their commitment to excellence.
                Another driving force behind opening Little Lemon was the desire to showcase the abundance of fresh and seasonal ingredients available in the region. The founders believed in supporting local farmers and suppliers while embracing sustainable practices. By partnering with local producers, they were able to create a menu that not only delighted taste buds but also contributed to the growth of the community.
                Together, these motivations led to the birth of Little Lemon, a culinary destination that continues to captivate patrons with its inspired dishes, inviting ambiance, and dedication to providing a memorable dining experience.
            </p>
            <br />
            <p>
                At Little Lemon, our passion for exceptional dining experiences is reflected in every aspect of our restaurant. Located in the heart of Chicago, we strive to create a warm and inviting atmosphere where guests can unwind and savor the flavors of our culinary creations.
                Our dedicated team of chefs combines their expertise and creativity to curate a menu that celebrates the finest ingredients, both local and international. From farm-fresh produce to expertly sourced meats and seafood, each dish is meticulously crafted to deliver an unforgettable culinary journey.
                We believe that hospitality is at the heart of every great dining experience. Our attentive staff is committed to providing personalized service, ensuring that each guest feels welcomed and valued. Whether you're joining us for a romantic dinner, a gathering with friends, or a special occasion, we aim to exceed your expectations and create cherished memories.
                At Little Lemon, we also take pride in our thoughtfully curated wine selection and handcrafted cocktails, designed to perfectly complement our culinary offerings.
                Join us at Little Lemon and embark on a gastronomic adventure where impeccable flavors, warm hospitality, and a vibrant ambiance combine to create an extraordinary dining experience in the heart of Chicago.
            </p>
            <div className="d-flex justify-content-center">
                <img src={logo} alt="logo" className={styles.logoImage} />
            </div>
            
            <motion.div whileHover={{ scale: 1.1 }} id="carouselExampleSlidesOnly" className={`carousel slide overlay-image pt-3 rounded ${styles.carousel}`} data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={restaurant} className="d-block w-100 rounded" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={restaurant2} className="d-block w-100 rounded" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={restaurant3} className="d-block w-100 rounded" alt="..."/>
                    </div>
                </div>
            </motion.div>
        </article>
        </Fragment>
    );
}
 
export default About;