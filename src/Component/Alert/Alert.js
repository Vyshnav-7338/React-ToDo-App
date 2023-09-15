import React, { useEffect } from 'react'

function Alert({ type, msg, removeAlert }) {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => clearTimeout(timeOut)
    },);
    return (
        <p className={`alert alert-${type}`}>
            {msg}
        </p>
    )
}

export default Alert
