import React, { useState } from 'react';


const More = (props) => {
    const [username, setUsername] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [Confirm, setConfirm] = useState("");
    const [ConfirmError, setConfirmError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };
    const handleUserName = (e) => {
        setUsername(e.target.value);
        if (e.target.value == "") {
            setUserNameError("");
        }
        else if (e.target.value.length < 1) {
            setUserNameError("User Name is required!");
        } else if (e.target.value.length < 3) {
            setUserNameError("User Name must be 3 characters or longer!");
        } else {
            setUserNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value == "") {
            setEmailError("");
        }
        else if (e.target.value.length < 1) {
            setEmailError("Email is required");
        }
        else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer");
        }
        else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value == "") {
            setPasswordError("");
        }
        else if (e.target.value.length < 1) {
            setPasswordError("Password is required");
        }
        else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer");
        }
        else {
            setPasswordError("");
        }
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value == "") {
            setConfirmError("");
        }
        else if (e.target.value.length < 1) {
            setConfirmError("Password is required");
        }
        else if (e.target.value.length < 8) {
            setConfirmError("Password must be 8 characters or longer");
        }
        else if (e.target.value != password) {
            setConfirmError("Password and Confirm Password must match");
        }
        else {
            setConfirmError("");
        }
    }
    return (
        <div>

            <form onSubmit={createUser}>
                <h3>{formMessage()}</h3>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={handleUserName} />


                    {

                        userNameError ?

                            <p style={{ color: 'red' }}>{userNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} />
                    {
                        PasswordError ?
                            <p style={{ color: 'red' }}>{PasswordError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="text" onChange={handleConfirm} />
                    {
                        ConfirmError ?
                            <p style={{ color: 'red' }}>{ConfirmError}</p> :
                            ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

        </div>
    )
}

export default More