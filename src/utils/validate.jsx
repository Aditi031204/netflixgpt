export const checkValidate = (email,password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid!";
    if(!isPasswordValid) return "Password is not valid!";

    return null;
}