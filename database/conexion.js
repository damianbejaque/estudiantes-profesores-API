const mysql = require("mysql2")
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "cursos"
})
db.connect((err) => {
    if (err) {
        console.log("Error de conexion")
        return
    }
    console.log("Conectado a la base de datos")
})
module.exports = db;