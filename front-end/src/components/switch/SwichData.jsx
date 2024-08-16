// import { useState } from 'react';

import  { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';


function SwitchData(){
    const { mocked, setMocked } = useContext(DataContext); 

    const toggleSwitch = () => {
        setMocked(prevData => !prevData);
    }
    return (
        <div className='switch'>
            <span className="switch__txt">Données mockées ?</span>
            <label className="switch__btn">
                <input type="checkbox" checked={mocked} onChange={toggleSwitch} />
                <span className="slider"></span>
                <span className="value">{mocked}</span>
            </label>
        </div>
        
        )
}
export default SwitchData;