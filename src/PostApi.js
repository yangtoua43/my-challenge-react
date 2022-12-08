//import logo from './logo.svg';
//import React from "react";
import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
class PostApi extends Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            first_Name: '',
            last_Name: '',
            email: '',
            phoneNumber: '',
            supervisor: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { first_Name, last_Name, email, phoneNumber, supervisor } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            value={first_Name}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label> Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            value={last_Name}
                            onChange={this.handleChange}
                        ></input>
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type='text'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        ></input>
                    </div>

                    <div>
                        <label>Phone Number</label>
                        <input
                            type='text'
                            name='phoneNumber'
                            value={phoneNumber}
                            onChange={this.handleChange}
                        ></input>
                    </div>

                    <div>
                        <label>Supervisor</label>
                        <input
                            type='text'
                            name='supervisor'
                            value={supervisor}
                            onChange={this.handleChange}
                        ></input>
                    </div>

                    <div>
                        <button type='submit'> Submit</button>
                    </div>

                </form>

            </div>
        )
    }
}

export default PostApi;
