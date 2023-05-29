import { Fragment, useContext } from "react";
import styles from '../components/css/OnlineMenuItems.module.css'
import { motion } from 'framer-motion'
import { CartContext } from "./context/CartContext";

const OnlineMenuItems = ({specials}) => {

    const { addToCart } = useContext(CartContext);

    return (
        <Fragment>
                {specials.map((special) => (
                    <div className="col-md mb-3" key={special.id}>
                        <div className={`card ${styles.card}`}>
                            <img src={special.image} className="card-img-top" alt={special.title}/>
                            <div className="card-body">
                                <div className="row d-flex justify-content-between">
                                    <h5 className="card-title col">{special.title}</h5>
                                    <p className={`col text-end ${styles.price}`}>{special.price}</p>
                                </div>
                                <p className="card-text">{special.description}</p>
                                <div className="input-group d-flex justify-content-between">
                                    <input type="number" className="form-control"/>
                                    <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} 
                                    type="button" className="btn btn-warning"
                                    onClick={() => addToCart(special)}
                                    > Add to cart
                                    </motion.button> 
                                </div>
                            </div>
                        </div>
                    </div>                    
                ))}
        </Fragment>
    );
}
 
export default OnlineMenuItems;