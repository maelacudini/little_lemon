import { Fragment } from "react";
import useFetch from "./hooks/useFetch";
import OnlineMenuItems from "./OnlineMenuItems";
import styles from '../components/css/OnlineMenuItems.module.css'

const OnlineMenu = () => {
    const {data:specials, isLoading, error} = useFetch('http://localhost:8000/specials');

    return (
        <Fragment>
            <article className={`p-5 ${styles.headerMenu}`}>
                <h1 className={styles.title}>Our Online Menu!</h1>
                <h4 className="text-white">Here you can find all our fantastic dishes.</h4>
                <p className="text-white">
                    Embrace the ease and convenience of Little Lemon's online menu. 
                    Elevate your dining experience with just a few clicks, and let us bring the flavors of Little Lemon to your doorstep. 
                    <br />Buon appetito!
                    </p>
            </article>
            <div className={`row m-5`}>
                {error && <p className="container m-5">{error}</p>}
                {isLoading && <p className="container m-5">Loading...</p>}
                {specials && <OnlineMenuItems specials={specials}/>}    
            </div>
        </Fragment>
    );
}
 
export default OnlineMenu;