import React from 'react';
import './styles/App.css';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';
import VerifiedPasswordList from './components/VerifiedPasswordList';
import { usePasswords } from './hooks/usePasswords';

function App() {
    const { passwordData, results, validCount, newRule, setNewRule, newPassword, setNewPassword, handleAddPassword, error } = usePasswords([
        'a 1-5: abcdj',
        'z 2-4: asfalseiruqwo',
        'b 3-6: bhhkkbbjjjb',
        't 1-3: ttatt',
        'x 2-4: xoxoox',
    ]);

    return (
        <div className="App">
            <header className="App-header">
            {error && <p style={{ color: 'red' }}>{error}</p>}

                <div className="password-lists">
                    <PasswordForm
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
                        newRule={newRule}
                        setNewRule={setNewRule}
                        handleAddPassword={handleAddPassword}
                    />
                    <PasswordList passwordData={passwordData} />
                    <VerifiedPasswordList results={results} />
                </div>

                <p>Кількість валідних паролів: <strong style={{ color: 'green' }}>{validCount}</strong></p>
            </header>
        </div>
    );
}

export default App;
