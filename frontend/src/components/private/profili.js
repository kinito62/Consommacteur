import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../css/member.css';
import { accountService } from '../../services/account.service';

export default function Profili() {
    const navigate = useNavigate();

    const handleLogout = () => {
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
