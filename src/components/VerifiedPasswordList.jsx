import React from 'react';

const VerifiedPasswordList = ({ results }) => {
    return (
        <div className="password-list">
            <h2>Перевірені паролі</h2>
            <ul>
                {results.map(({ password, isValid }, index) => (
                    <li key={index} style={{ color: isValid ? 'green' : 'red' }}>
                        {password}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VerifiedPasswordList;
