import { Fragment, useEffect, useState } from 'react';
import styles from '../components/css/Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {

    const [data, setData] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      // Fetch the JSON data
      fetch('http://localhost:8000/login')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, []);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoggedIn(false);
        if (data && username && password) {
        // Compare logic goes here
        const match = data.find(item => item.username === username.toLowerCase() && item.password === password);
            
        if (match) {
          console.log('Match found');
          setIsLoggedIn(true)
          navigate('/');
        } else {
            setFeedback('Match not found.')
          // Handle no match
        }
      }
    }

  return (
    <Fragment>
      <article>
        <div className={styles.intro}>
          <h3>Welcome back!</h3>
        </div>
      </article>
      <div className={`card text-white ${styles.card}`}>
        <form onSubmit={handleSubmit}>
          <h3 className={`mb-3 ${styles.title}`}>Login!</h3>
          <p>{feedback}</p>
          <div className='mb-3'>
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning">Login</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
