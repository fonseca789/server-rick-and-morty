const  validate =(email, password) => {
    //   const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*\d).{6,10}$/;
    let errors = {};
  
    if (!regexPassword.test(password)) errors.password = "Se requiere password valido";
  
    if (!regexEmail.test(email) && email.length <= 36)
      errors.email = "Debe ser un correo electrónico valido";
  
    return errors;
  }
  module.exports= validate;