const http = require('http');
const data = require('./utils/data')

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')){
    
    const id = req.url.split('/').at(-1);
    // console.log(+id); with '+' before id, we parse the id into a Number (it was a string)
    const characterFound = data.find((character) => {
        return character.id === +id;
    })
    return res.writeHead(200, {"Content-Type": "application/json"}) //return to end the execution
    .end(JSON.stringify(characterFound)) // JSON.stringify for send the info in JSON format
    
    }
})
.listen(3001, "localhost");


