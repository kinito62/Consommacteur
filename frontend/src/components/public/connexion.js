import React, { useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { accountService } from '../../services/account.service';
import { useRecoilState } from 'recoil';
import { loginState } from '../atoms/login';

export default function Connexion() {
  const navigate = useNavigate();
  const emailInput = useRef();
  const passwordInput = useRef();

  const [b, setN] = useRecoilState(loginState);

 
  
  function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: passwordInput.current.value,
        email: emailInput.current.value
      })
    };

    fetch('http://localhost:3000/auth/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        accountService.saveToken(data.token)
        setN(true);
        navigate('/conn/profile')
      });
  }

  return (
    <div className='layoutForm'>
      <div className='container'>
        <div className='titleForm'>
          <a>Connexion</a>
        </div>
        <form className='inscriptionForm' onSubmit={event => handleSubmit(event)}>
          <div className='row'>
            <div className='col-25'>
              <label htmlFor='email'>Email </label>
            </div>
            <div className='col-75'>
              <input required type='email' id='email' ref={emailInput} />
            </div>
          </div>
          <div className='row'>
            <div className='col-25'>
              <label htmlFor='passWord'>Mot de passe </label>
            </div>
            <div className='col-75'>
              <input required type='password' id='passWord' ref={passwordInput} />
            </div>
          </div>
          <div className='row'>
            <button type='submit'>connexion</button>
          </div>
        </form>
        <div className='row'>
          <div className='connexion'>
            <NavLink to='/inscription'>M'inscrire</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
