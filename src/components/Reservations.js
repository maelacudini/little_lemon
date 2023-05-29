import { motion } from 'framer-motion'
import styles from '../components/css/Reservations.module.css'
import { Fragment, useState } from 'react';
import useFetch from './hooks/useFetch';
import { number } from 'yup';

const Reservations = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [guests, setGuests] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        const reservations = {email, phone, name, guests, time, date, description};
        setIsLoading(true);

        fetch('http://localhost:8000/reservations', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(reservations)
        }).then((response) => {
            if (response.ok) {
                setFeedback('Reservation added succesfully!')
                setEmail('');
                setPhone('');
                setName('');
                setGuests('');
                setTime('');
                setDate('');
                setDescription('');
            } else {
                throw new Error('Failed to add reservation.')
            }
        }).catch((error) => {
            setFeedback(`Error adding reservation: ${error.message}`)
        }).finally(() => {
            setIsLoading(false);
        });
        };
    

    return (
        <Fragment>
            <div className={styles.intro}>
            <h3>Thank you for choosing our restaurant!</h3>
            <p>Reserving a table at Little Lemon is super easy: we need you contact informations and some specifics about the reservation (time, date, number of guests).
                In case you need to disclose more informations about the reservation, you can add them in the Description box down below.
                <br />
                <b>See you later!</b>
            </p>
            </div>

            <div className={`card ${styles.card}`}>
                <form onSubmit={handleSubmit}>
                <h3 className={`mb-3 ${styles.title}`}>Reserve a table at Little Lemon!</h3>
                <p className={feedback.includes('Error') ? styles.textred : styles.textwhite}>{feedback}</p>
                <div className="mb-3">
                    <label className={`form-label text-white`}>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </div>
                <div className="mb-3">
                    <label className={`form-label text-white`}>Phone number</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        minLength={8} 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required/>
                </div>
                <div className="mb-3">
                    <label className={`form-label text-white`}>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        minLength={3} 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required/>
                </div>
                <div className="mb-3">
                    <label className={`form-label text-white`}>Number of guests</label>
                    <input 
                        type="number"  
                        className="form-control" 
                        min={1} 
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        required/>
                </div>
                <div className="mb-3">
                    <label className={`form-label text-white`}>Time</label>
                    <input 
                        type="time" 
                        className="form-control" 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required/>
                </div>
                <div className="mb-3">
                    <label className={`form-label text-white`}>Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required/>
                </div>
                <div className="mb-3">
                    <label className={`form-label text-white`}>Description</label>
                    <textarea 
                        className={`form-control ${styles.formInput}`} 
                        placeholder='Optional'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </div>
                {!isLoading && <button type="submit" className="btn btn-warning"> Reserve a Table </button>}        
                {isLoading && <button type="submit" className="btn btn-warning" disabled> Reserve a Table </button>}    
                </form>
            </div>            
        </Fragment>
    );
};
 
export default Reservations;