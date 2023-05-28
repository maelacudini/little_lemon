import { Fragment } from "react";
import '../components/css/Home.css';
import headerImg from '../assets/restauranfood.jpg';
import { motion } from 'framer-motion'
import Specials from "./Specials";

const Home = () => {
    return (
        <Fragment>
            <div className="header row">
                <div className="col-md-8 mb-5">
                    <h1 className="title">Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Eius at assumenda tempore ipsum porro nemo, perspiciatis aut cupiditate consequatur vel, 
                        ex, similique dolore mollitia consectetur minima in eaque officiis!
                        <br />
                        Dolorum!
                        <br />
                        Eius at assumenda tempore ipsum porro nemo, perspiciatis aut cupiditate consequatur vel, 
                        ex, similique dolore mollitia consectetur minima in eaque officiis! Dolorum!
                    </p>
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    type="button" class="btn btn-warning">Reserve a Table</motion.button>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <motion.img
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    src={headerImg} 
                    alt="header img" height={'auto'} width={'250px'} className="overlay-image"/>
                </div>
            </div>
            <Specials/>    
        </Fragment>
    );
}
 
export default Home;