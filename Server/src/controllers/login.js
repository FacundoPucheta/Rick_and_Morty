const users = require('../utils/users');

const login = (req, res) => {
    const { email, password } = req.query;
    
    const userFound = users.find((user) => user.email === email && user.password === password)

    // return userFound
    // ? res.status(200).json({access: true})         // probar a cambiar de lógica y ver resultados
    // : res.status(400).json({access: false})

    if(userFound) return res.status(200).json({ access: true });
    return res.status(404).json({ access: false });
}


module.exports = {
    login
};