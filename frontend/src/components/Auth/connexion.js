import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
//import '../../../css/member.css';
export default class connexion extends React.Component {
    emailInput = React.createRef();
    password = React.createRef();

    state={
        email:null,
        password:null
    }
    
    handleSubmit(event) {}


    render() {
		return (
            <div className='layoutForm'>
            <div className="container">
                <div className="titleForm">
                <a>Connexion</a>
                </div>
                <form className="inscriptionForm" onSubmit={event => this.handleSubmit(event)}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="email">Email </label>
                        </div>
                        <div className="col-75">
                            <input required type="email" id="email" ref={this.email} />
                        </div>
                    </div>
                    <div className="row">   
                        <div className="col-25">
                            <label htmlFor="passWord">Mot de passe </label>
                        </div>
                        <div className="col-75">
                            <input required type="password" id="passWord" ref={this.password} />
                        </div>
                    </div>
                    
                    <div className="row">
                        <button type="submit">connexion</button>
                    </div>
                </form>
                <div className="row">
                        <div className="connexion">
                            <NavLink to="/inscription">M'inscrire</NavLink>
                        </div>
                    
                </div>
            </div>
            </div>
        )
    }
}