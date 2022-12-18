var app = require('./app');
async function main(){
    await app.listen(3000);
    console.log("Servidor creado en el puerto 3000")
}
main();