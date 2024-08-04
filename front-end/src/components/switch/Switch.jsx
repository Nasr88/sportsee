import { useState } from 'react';




function Switch(){
    const [userId, setUserId] = useState(12);
    const toggleSwitch = () => {
        setUserId(userId == 12 ? 18 : 12);
    }
    return (
        <div className='switch'>
            <h1 className="switch__txt">Choix d&apos;utilisateur:</h1>
            <label className="switch__btn">
                <input type="checkbox" checked={userId === 12} onChange={toggleSwitch} />
                <span className="slider"></span>
                <span className="value">{userId}</span>
            </label>
        </div>
        
        )
}
export default Switch;