import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error'

const NotFound = () => {
    return (
        <div className='text-center'>
            <Link to='/'><img src={error} alt="error" /></Link>
        </div>
    );
};

export default NotFound;