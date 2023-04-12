import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class inscription extends React.Component {
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
    
    handleSubmit(event) {}


    render() {
		return (
            <div className='layoutForm'>
            <div className="container">
            <div className="titleForm">
                <a>Inscription</a>
                </div>
                <form className="inscriptionForm" onSubmit={event => this.handleSubmit(event)}>
                    <div className="row">
                        <div className="col-25">
                            <label for="lastName">nom </label>
                        </div> 
                        <div className="col-75">
                            <input required type="text" id="lastName" ref={this.LastName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="firstName">prénom </label>
                        </div>
                        <div className="col-75">
                            <input required type="text" id="firstName" ref={this.firstName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="email">Email </label>
                        </div>
                        <div className="col-75">
                            <input required type="email" id="email" ref={this.email} />
                        </div>
                    </div>
                    <div className="row">   
                        <div className="col-25">
                            <label for="passWord">mot de passe </label>
                        </div>
                        <div className="col-75">
                            <input required type="password" id="passWord" ref={this.password} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="confirmPassword">mot de passe </label>
                        </div>
                        <div className="col-75">
                            <input required type="password" id="ConfirmpassWord" ref={this.confirmPassWord} />
                        </div>
                    </div>
                    
                    <div className="row">
                        <button type="submit">Inscription</button>
                    </div>
                </form>
                <div className="row">
                    <div className="col-25">
                        <div className="connexion">
                            <NavLink to="/connexion">Me connecter</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}