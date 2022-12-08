import React, { Component } from 'react';
import './App.css';
import GetList from './GetList';
import PostList from './PostList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
    return (
        
        /*
         * Error: the routes do not hook up correctly with the endpoint
         * However, to test GetList 
         * 1)                         <div className="App">
                                        <GetList></GetList>
                                    </div>
         * and PostForm as show below will work
         * 2)                         <div className="App">
                                        <PostList></PostList>
                                    </div>
        <BrowserRouter>
            <div className="App">
                <Routes>
                //get list render doesnt hook up responsive
                    <Route path='/' element={<h1>Home</h1>} />
                    <Route exact path='/api/supervisors' element={<GetList />} />
                    <Route exact path='/api/submit' element={<PostList />}/>
                </Routes>
                </div>
        </BrowserRouter>
        */

        <div className="App">
            <GetList></GetList>
        </div>



    );
}

export default App;
