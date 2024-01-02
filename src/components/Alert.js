import React from 'react';

export default function Alert(props) {
  
    const alertType = props.alert ? props.alert.type : 'primary'; // Fallback value

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <>
            {props.alert && (
                <div style={{ height: '50px' }}>
                    <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
                        <strong>{capitalize(props.alert.type)}&nbsp;</strong>&nbsp;{props.alert.msg}
                    </div>
                </div>
            )}
        </>
    );
}
