//import logo from './logo.svg';
import React, {  useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
export default function GetList() {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchPost = async () => {
        const response = await axios('https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers')
        setItems(response.data);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchPost();
    }, []);

    function handleRemove(jurisdiction) {
        const newList = items.filter((item) => item.jurisdiction !== (/[^0-9]/g));

        setItems(newList);
    }

    return (
        <div>
            <h1> API calls to display supervisor </h1>

            {isLoading && <p>Wait I'm Loading for you</p>}

            {
                items.slice().sort((a, b) => a.jurisdiction.localeCompare(b.jurisdiction) || a.lastName.localeCompare(b.lastName)).
                    map((item) => (
                        //handleRemove(item.jurisdiction),
                        <ol key={item.id} >
                            Jurisdiction: {item.jurisdiction},
                            First_Name: {item.firstName},
                            Last_Name: {item.lastName}
                        </ol>
                    ))
            }
        </div>
    );

}
