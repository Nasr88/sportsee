// import { useState } from 'react';

import  { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


function Switch(){
    const { userId, setUserId } = useContext(UserContext);
    const toggleSwitch = () => {
        setUserId(prevUserId => (prevUserId === 12 ? 18 : 12));
    }
    return (
        <div className='switch'>
            <span className="switch__txt">Choix d&apos;utilisateur:</span>
            <label className="switch__btn">
                <input type="checkbox" checked={userId === 18} onChange={toggleSwitch} />
                <span className="slider"></span>
                <span className="value">{userId}</span>
            </label>
        </div>
        
        )
}
export default Switch;