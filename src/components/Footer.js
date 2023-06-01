import { Fragment } from "react";
import styles from '../components/css/Footer.module.css';

const Footer = () => {
    return (
        <Fragment>
            <div className={`row text-white ${styles.row}`}>
                <div className="col-lg-8">
                    <h4 className={styles.title}>Opening Hours</h4>
                    <table class="table text-white">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">From</th>
                                <th scope='col'>To</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Monday</th>
                                <td>10:00 am</td>
                                <td>15:00 pm</td>
                                <td>17:00 pm</td>
                                <td>01:00 am</td>
                            </tr>
                            <tr>
                                <th scope="row">Tuesday</th>
                                <td>10:00 am</td>
                                <td>15:00 pm</td>
                                <td>closed</td>
                                <td>closed</td>
                            </tr>
                            <tr>
                                <th scope="row">Thursday</th>
                                <td>10:00 am</td>
                                <td>15:00 pm</td>
                                <td>17:00 pm</td>
                                <td>01:00 am</td>
                            </tr>
                            <tr>
                                <th scope="row">Friday</th>
                                <td>10:00 am</td>
                                <td>15:00 pm</td>
                                <td>17:00 pm</td>
                                <td>02:00 am</td>
                            </tr>
                            <tr>
                                <th scope="row">Saturday</th>
                                <td>10:00 am</td>
                                <td>15:00 pm</td>
                                <td>17:00 pm</td>
                                <td>02:00 am</td>
                            </tr>
                            <tr>
                                <th scope="row">Sunday</th>
                                <td>10:00 am</td>
                                <td>15:00 pm</td>
                                <td>17:00 pm</td>
                                <td>02:00 am</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>* we are closed <b>Wednesday</b></p>
                </div>
                <div className={`col-lg-4 ${styles.infos}`}>
                <h4 className={styles.title}>Infos</h4>
                <p>
                    Via Roma, 21, Chicago. <br />
                    LittleLemonChicago@gmail.com <br />
                    +12 345 6789 <br />
                    Some Copyright Statement 
                </p>
                    <h4 className={styles.title}>Our Socials</h4>
                    <i className={`bi bi-facebook ${styles.social}`}></i>
                    <i className={`bi bi-instagram ${styles.social}`}></i>
                    <i className={`bi bi-linkedin ${styles.social}`}></i>
                    <i className={`bi bi-discord ${styles.social}`}></i>
                    <i className={`bi bi-whatsapp ${styles.social}`}></i>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Footer;