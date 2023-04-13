import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Profile extends React.Component {
    lastNameInput = React.createRef();
    firstNameInput = React.createRef();
    emailInput = React.createRef();
    passwordInput = React.createRef();
    confirmPassWordInput = React.createRef();

    state={
        lastName:null,
        firstName:null,
        email:null,
        password:null,
        confirmPassWord:null
    }
    
    


    render() {
		return (
            <div className='layoutForm'>
                <div className="container">
                    <div className="titleForm">
                        <a>Profile</a>
                    </div>
                    <div className='profile'>


                    <div className="row">
                            <button type="submit">Deconnexion</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}