import { useState, useEffect } from 'react';
import { validatePassword } from '../helpers/validatePassword';

export const usePasswords = (initialPasswords) => {
    const [passwordData, setPasswordData] = useState(initialPasswords);
    const [results, setResults] = useState([]);
    const [validCount, setValidCount] = useState(0);
    const [newRule, setNewRule] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const validatePasswords = (data) => {
        const validationResults = data.map(line => {
            if (line.includes(': ')) {
                const [rule, password] = line.split(': ');
                const [char, range] = rule.split(' ');
                const [min, max] = range.split('-').map(Number);

                const isValid = validatePassword(char, min, max, password);
                return { password, isValid };
            }
            return { password: 'Некорректная строка', isValid: false };
        });
        setResults(validationResults);

        const validPasswordsCount = validationResults.filter(result => result.isValid).length;
        setValidCount(validPasswordsCount);
    };

    useEffect(() => {
        validatePasswords(passwordData);
    }, [passwordData]);

    const handleAddPassword = () => {
        const rulePattern = /^[a-zA-Z]\s\d+-\d+$/;
        if (!rulePattern.test(newRule) || newPassword === '') {
            setError('Некоректний формат даних. Будь ласка, введіть правильно дані.');
            setNewRule('');
            setNewPassword('');
            return;
        }

        setError('');

        const newEntry = `${newRule}: ${newPassword}`;
        setPasswordData([...passwordData, newEntry]);
        setNewRule('');
        setNewPassword('');
    };

    return {
        passwordData,
        results,
        validCount,
        newRule,
        setNewRule,
        newPassword,
        setNewPassword,
        handleAddPassword,
        error,
    };
};
