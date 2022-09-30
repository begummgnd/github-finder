import React, { useState } from 'react';
import { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import AlertContext from '../context/alert/AlertContext';
const AlertMessage = () => {
    const {alert} = useContext(AlertContext)
    const [show, setShow] = useState(true);
    if (show)  {
    return (
        alert !== null && (
            <div className='container my-2'>
            <Alert key={alert.type} variant={alert.type} onClose={() => setShow(false)} dismissible>{alert.msg}</Alert> 
            </div>

        )
    )
}
}

export default AlertMessage