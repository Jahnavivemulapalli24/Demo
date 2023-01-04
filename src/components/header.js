import React, { Component } from 'react';
import '../styles/header.css'


export default class HeaderComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='header' /> 
                <div> React Application </div>
                <img src='images/logo512.png' alt='logo' width="50" height='50'/>
            </div>
        )
    }
};

 