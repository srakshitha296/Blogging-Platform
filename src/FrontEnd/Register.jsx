import { React, useState } from 'react';
import axios from 'axios';
import '../css/RegisterPage.css'

const Register = () => {
    const [username, setuname] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const newData = {
            username,
            email,
            password
        };
        axios
            .post('http://localhost:3001/register', newData)
            .then((response) => {

                setMessage('Registration Successfull Please Login');
                setemail('');
                setuname('');
                setpassword('');
            })
            .catch((error) => {
                console.log(error)
                setemail('');
                setuname('');
                setpassword('');
                setMessage('Registration Failed.');
            });
    };

    return (<><br /><br />
        <div className="register-page">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setuname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    </>
    );
}

export default Register