import { useNavigate } from 'react-router-dom';
import '../../../css/member.css';
import { accountService } from '../../services/account.service';
import { useRecoilState } from 'recoil';
import { loginState } from '../atoms/login';
import React, { useEffect } from 'react';


export default function Profili() {
    const navigate = useNavigate();
    const [b, setN] = useRecoilState(loginState);


    const handleLogout = () => {
        setN(false);
        accountService.logout();

        navigate('/');
    };
    return (
        <div className='layoutForm'>
            <div className="container">
                <div className="titleForm">
                    <a>Profile</a>
                </div>
                <div className='profile'>
                    <div className="row">
                        <button onClick={handleLogout}>Deconnexion</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
