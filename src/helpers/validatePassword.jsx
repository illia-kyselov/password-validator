export const validatePassword = (char, min, max, password) => {
    const count = password.split('').filter(c => c === char).length;
    return count >= min && count <= max;
};
