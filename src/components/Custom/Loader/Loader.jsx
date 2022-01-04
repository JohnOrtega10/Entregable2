import React from 'react';
import './Loader.styles.css'

const Loader = () => {
    return (
        <div className='loader'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>    
            <div className='message'>
                <p>Grant location permissions to continue.</p>
            </div>
        </div>
 
    );
};

export default Loader;