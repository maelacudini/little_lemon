import { Fragment } from "react";
import useFetch from "./hooks/useFetch";
import Specials from "./Specials";
import styles from '../components/css/Specials.module.css'
import  'react-router-dom'
import { Link } from "react-router-dom";

const SpecialsList = () => {
    const {data:specials, isLoading, error} = useFetch('http://localhost:8000/specials');

    //basically this component has a row and two columns, inside the first column you can find the title and the online menu button, inside the second column there is the specials tag
    //the specials are mapped inside the Specials.js, here i fetch the data from the db and i pass it to the specials tag
    //Specials.js and SpecialsList.js have the same css file, Specials.css
    return (
        <Fragment>
            <div className={`row ${styles.adv}`}>
                <div className="col-sm-8"><h1>This Weeks Specials!</h1></div>
                <div className={`${styles.onlineMenu} col-sm-4`}>
                    <div>
                        <Link className="btn btn-warning" to='onlinemenu'>Online Menu</Link>                       
                    </div>
                </div>
            </div>

            <div className={`row ${styles.specials}`}>
                {error && <p className="container m-5">{error}</p>}
                {isLoading && <p className="container m-5">Loading...</p>}
                {specials && <Specials specials={specials}/>}    
            </div>
        </Fragment>
    );
}
 
export default SpecialsList;