const validation = (name, value, errors, setErrors) => { // ESTOS PARAMETROS NO ESTAN BIEN
    if (name === 'email') {
    if(!/\S+@\S+\.\S+/.test(value) || value === '' || value.length > 35) {
        setErrors({
            ...errors,
            email: 'Por favor, ingrese una dirección válida '
        })
    } else {
        setErrors({
            ...errors,
            email: ''
        })
    }
    }

    if (name === 'password') {

    if (!/\d+/.test(value)) {
        setErrors({
            ...errors,
            password: 'Por favor, ingrese una contraseña válida, que contenga al menos un número '
        })
    } else if (value.length > 10 || value.length < 6){
        setErrors({
            ...errors,
            password: 'La contraseña debe tener entre 6 y 10 caracteres '
        })
    } else {
        setErrors({
            ...errors,
            password: ''
        })
    }
}
}
export default validation;