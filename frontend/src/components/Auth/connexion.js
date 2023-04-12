import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

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
                <form className="inscriptionForm" onSubmit={event => this.handleSubmit(event)}>
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
                        <button type="submit">Inscription</button>
                    </div>
                </form>
                <div className="row">
                    <div className="col-25">
                        <div className="inscription">
                            <NavLink to="/inscription">M'inscrire</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}