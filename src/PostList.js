//import logo from './logo.svg';
//import React from "react";
import React, { useState, Component } from 'react'

import './App.css';


export default function PostList() {

    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        supervior: "",
    });


    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
        console.log(event.target[0].value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setContactInfo({ firstName: "", lastName: "", email: "", phonenumber: "", supervior: "" });
        console.log(event.target[0].value);
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Submit Form</h3>
                </div>
                <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name" required
                        value={contactInfo.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name" required
                        value={contactInfo.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="phonenumber"
                        placeholder="Phone Number"
                        value={contactInfo.phonenumber}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="supervior"
                        placeholder="Supervior" required
                        value={contactInfo.supervior}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}