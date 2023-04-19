import { useState } from "react";
import validation from "../Validation/validation";

const Form = ({login}) => {

    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email:'',
        password: ''
    });


    const handleChange = (event) => {
        
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }


    return (
        <form onSubmit={handleSubmit} >
            {/* aca puede ir alguna imagen cuando hagas estilos para que quede piola */}
        <label htmlFor="email">EMAIL: </label>
        <input name="email" type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} />
        {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
        <br></br>
        <label htmlFor="password">PASSWORD: </label>
        <input name="password" type="text" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange} />
        {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}
        <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;
