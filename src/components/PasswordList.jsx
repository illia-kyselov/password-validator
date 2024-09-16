import React from 'react';

const PasswordList = ({ passwordData }) => {
    return (
        <div className="password-list">
            <h2>Список паролів</h2>
            <ul>
                {passwordData.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordList;
