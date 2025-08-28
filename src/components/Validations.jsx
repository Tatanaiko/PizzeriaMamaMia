
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const noSpacesRegex = /^\S*$/;

export const validateEmail = (email) => {
    if (!email) return "El email es obligaorio";
    if (!emailRegex.test(email)) return "El email no tiene un formato válido";
    return "";
}

export const validatePassword = (password) => {
    if (!password) return "La contraseña es obligatoria";
    if (!noSpacesRegex.test(password)) return "La contraseña no puede llevar espacios";
    if (password.length < 6) return "La contraseña debe tener 6 caracteres mínimos";
    return "";
}

export const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) return "Debes confirmar la contraseña";
    if (password !== confirmPassword) return "Las contraseñas no coinciden";
    return "";
}