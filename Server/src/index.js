const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

//Server raised;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
