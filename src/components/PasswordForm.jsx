import React from 'react';

const PasswordForm = ({ newPassword, setNewPassword, newRule, setNewRule, handleAddPassword }) => {
    return (
        <div className="password-form">
            <h2>Додати свій пароль</h2>
            <div className="input-group">
                <label>Пароль:</label>
                <input
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="input-field"
                    placeholder='Пароль'
                />
            </div>
            <div className="input-group">
                <label>Умова (символ і діапазон, наприклад 'a 1-3'):</label>
                <input
                    type="text"
                    value={newRule}
                    onChange={(e) => setNewRule(e.target.value)}
                    className="input-field"
                    placeholder='Умова'
                />
            </div>
            <button className="add-button" onClick={handleAddPassword}>Додати</button>
        </div>
    );
};

export default PasswordForm;
