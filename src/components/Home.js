import React, {Component} from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {Youtube} from './Youtube'
import HomeCss from './styles/home.module.css'
// import { notFound } from './notFound';

export class Home extends Component{
    // <Router>
        render(){
            return(
                <Router>
                    <div className="Main">
                        <div className="header">
                            <h1 className={HomeCss.title}>&#10097;Code Heist</h1>
                        </div>
                        <div className={HomeCss.ribbon}>
                            <NavLink to="/" id="home">Home</NavLink>
                            <NavLink to="/Youtube" id="youtube">YouTube</NavLink>
                            <NavLink to="/coding" id="coding">Coding</NavLink>
                            <NavLink to="/blogs">Blogs</NavLink>
                        </div>
                        <Route path="/Youtube" component={Youtube}/>
                    </div> 
                </Router>
            );
        }
}