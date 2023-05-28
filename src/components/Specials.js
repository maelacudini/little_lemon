import { motion } from 'framer-motion'
import '../components/css/Specials.css';
import { Fragment } from 'react';
import bruschetta from '../assets/bruchetta.svg';
import salad from '../assets/greek salad.jpg';
import lemon from '../assets/dessert.jpg';



const Specials = () => {
    return (
        <Fragment>
            <div className="row adv">
                <div className="col-sm-8"><h1>This Weeks Specials!</h1></div>
                <div className="onlineMenu col-sm-4">
                    <div>
                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        type="button" class="btn btn-warning"
                        > Online Menu
                        </motion.button>                 
                    </div>
                </div>
            </div>

            <div className='row specials'>
                <div className="col-md mb-3">
                    <div class="card">
                        <img src={bruschetta} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <div className="row d-flex justify-content-between">
                                <h5 class="card-title col">Bruschetta</h5>
                                <p className='col text-end price'>12.99$</p>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                type="button" className="btn btn-warning"
                            > Order a Delivery
                            </motion.button> 
                        </div>
                    </div>
                </div>
                <div className="col-md mb-3">
                    <div class="card">
                        <img src={salad} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <div className="row d-flex justify-content-between">
                                <h5 class="card-title col">Greek salad</h5>
                                <p className='col text-end price'>12.99$</p>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                type="button" className="btn btn-warning"
                            > Order a Delivery
                            </motion.button> 
                        </div>
                    </div>
                </div>
                <div className="col-md mb-3">
                    <div class="card">
                        <img src={lemon} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <div className="row d-flex justify-content-between">
                                <h5 class="card-title col">Lemon cake</h5>
                                <p className='col text-end price'>12.99$</p>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                type="button" className="btn btn-warning"
                            > Order a Delivery
                            </motion.button> 
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

        
    );
}
 
export default Specials;