import { useState } from "react";
import validation from "../Validation/validation";
import styles from "./Form.module.css";


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
        console.log('hola')
        login(userData);
    }


    return (
        <div className={styles.formBackG} >
        <form onSubmit={handleSubmit} >
        <div className={styles.mainContainer}>
        <div className={styles.container}>
        <label htmlFor="email">EMAIL: </label>
        <input name="email" type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} />
        {errors.email ? <div >{errors.email}</div> : <div>{" - "}</div> }
        <br></br>
        <label htmlFor="password">PASSWORD: </label>
        <input name="password" type="text" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange} />
        {errors.password ? <div >{errors.password}</div> : <div>{" - "}</div>}
        </div>
        <div>
        <button className={styles.submitBtn} onClick={handleSubmit}>Submit</button>
        </div>
        </div>
        <h2> - Solo falta agregarle Estilos -  😁</h2>
        </form>
        </div>
    )
}

export default Form;
