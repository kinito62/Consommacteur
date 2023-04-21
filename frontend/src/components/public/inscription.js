import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../css/member.css';

export default function Inscription() {
  const lastNameInput = useRef();
  const firstNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPassWordInput = useRef();
  const navigate = useNavigate();
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: passwordInput.current.value,
        email: emailInput.current.value,
        firstName: firstNameInput.current.value,
        lastName: lastNameInput.current.value,
      }),
    };
	console.log("passwordInput.current.value == confirmPassWordInput.current.value : ", passwordInput.current.value == confirmPassWordInput.current.value)
    if (passwordInput.current.value == confirmPassWordInput.current.value) {
      fetch('http://localhost:3000/auth/register', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          

            navigate('profile');
          
        })
        .catch((error) => {
          console.log(error);

          setInputError(true);
          console.log('inputError', inputError);
        });
    }else{
		setInputError(true);
	}
  };

  return (
    <div className='layoutForm'>
      <div className='container'>
        <div className='titleForm'>
          <a>Inscription</a>
        </div>
		{ inputError &&<>
        <div className='inputError'>
        <p>Entrées incorrectes veuillez entrer des saisies valides.</p>
        </div>
        </>
        }
        <form className='inscriptionForm' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-25'>
              <label htmlFor='lastName'>Nom* </label>
            </div>
            <div className='col-75'>
              <input
                required
                type='text'
                id='lastName'
                ref={lastNameInput}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-25'>
              <label htmlFor='firstName'>Prénom* </label>
            </div>
            <div className='col-75'>
              <input
                required
                type='text'
                id='firstName'
                ref={firstNameInput}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-25'>
              <label htmlFor='email'>Email* </label>
            </div>
            <div className='col-75'>
              <input required type='email' id='email' ref={emailInput} />
            </div>
          </div>
          <div className='row'>
            <div className='col-25'>
              <label htmlFor='passWord'>Mot de passe* </label>
            </div>
            <div className='col-75'>
              <input
                required
                type='password'
                id='passWord'
                ref={passwordInput}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-25'>
              <label htmlFor="confirmPassword">
									
									Confirmation mot de passe*
								</label>
							</div>
							<div className="col-75">
								<input
									required
									type="password"
									id="ConfirmpassWord"
									ref={confirmPassWordInput}
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
