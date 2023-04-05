const Form = () => {


    return (
        <form>
            {/* aca puede ir alguna imagen cuando hagas estilos para que quede piola */}
        <label htmlFor="email">EMAIL: </label>
        <input type="email" />
        <br></br>
        <label htmlFor="password">PASSWORD: </label>
        <input type="text" />

        <button>Submit</button>
        </form>
    )
}

export default Form;
