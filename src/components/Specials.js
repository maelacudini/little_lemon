import { motion } from 'framer-motion'
import styles from '../components/css/Specials.module.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Specials = ({specials}) => {
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
                                <Link className="btn btn-warning" to='onlinemenu'>Online Menu</Link>                       
                            </div>
                        </div>
                    </div>                    
                ))}
        </Fragment>
    );
}
 
export default Specials;