const server = require('./app');
const PORT = 3001;

//Server raised;

server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`);
});