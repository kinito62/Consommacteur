import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../css/member.css';

export default class inscription extends React.Component {
	constructor(props) {
		super(props);

		this.lastNameInput = React.createRef();
		this.firstNameInput = React.createRef();
		this.emailInput = React.createRef();
		this.passwordInput = React.createRef();
        this.confirmPassWordInput = React.createRef();
	}

	state = {
		lastName: null,
		firstName: null,
		email: null,
		password: null,
		confirmPassWord: null,
	};

	handleSubmit(event) {
        event.preventDefault();

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				password: this.passwordInput.current.value,
				email: this.emailInput.current.value,
				firstName: this.firstNameInput.current.value,
				lastName: this.lastNameInput.current.value,
			}),
		};

		fetch('http://localhost:3000/auth/register', requestOptions)
			.then(response => response.json())
            .then(data => {
                console.log(data);
				if (
					data &&
					data.emailInput &&
					data.passwordInput &&
					data.firstNameInput &&
					data.lastNameInput
				) {
					this.setState({
						lastName: data.lastNameInput,
						firstName: data.firstNameInput,
						email: data.emailInput,
						password: data.passwordInput,
						confirmPassWord: data.confirmPassWordInput,
					});
					this.props.navigate('profile');
				}
			});
	}

	render() {
		return (
			<div className="layoutForm">
				<div className="container">
					<div className="titleForm">
						<a>Inscription</a>
					</div>
					<form className="inscriptionForm" onSubmit={(event) => this.handleSubmit(event)}>
						<div className="row">
							<div className="col-25">
								<label htmlFor="lastName">Nom* </label>
							</div>
							<div className="col-75">
								<input
									required
									type="text"
									id="lastName"
									ref={this.lastNameInput}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-25">
								<label htmlFor="firstName">Prénom* </label>
							</div>
							<div className="col-75">
								<input
									required
									type="text"
									id="firstName"
									ref={this.firstNameInput}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-25">
								<label htmlFor="email">Email* </label>
							</div>
							<div className="col-75">
								<input required type="email" id="email" ref={this.emailInput} />
							</div>
						</div>
						<div className="row">
							<div className="col-25">
								<label htmlFor="passWord">Mot de passe* </label>
							</div>
							<div className="col-75">
								<input
									required
									type="password"
									id="passWord"
									ref={this.passwordInput}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-25">
								<label htmlFor="confirmPassword">
									{' '}
									Confirmation mot de passe*{' '}
								</label>
							</div>
							<div className="col-75">
								<input
									required
									type="password"
									id="ConfirmpassWord"
									ref={this.confirmPassWordInput}
								/>
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
		);
	}
}
