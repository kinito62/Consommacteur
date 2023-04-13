import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../../css/member.css';

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
                            <label for="lastName">Nom* </label>
                        </div> 
                        <div className="col-75">
                            <input required type="text" id="lastName" ref={this.LastName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="firstName">Prénom* </label>
                        </div>
                        <div className="col-75">
                            <input required type="text" id="firstName" ref={this.firstName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="email">Email* </label>
                        </div>
                        <div className="col-75">
                            <input required type="email" id="email" ref={this.email} />
                        </div>
                    </div>
                    <div className="row">   
                        <div className="col-25">
                            <label for="passWord">Mot de passe* </label>
                        </div>
                        <div className="col-75">
                            <input required type="password" id="passWord" ref={this.password} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="confirmPassword"> Confirmation mot de passe* </label>
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
                        <div className="connexion">
                            <NavLink to="/connexion">Connexion</NavLink>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}