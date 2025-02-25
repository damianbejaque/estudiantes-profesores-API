const db = require("../database/conexion");

class EstudiantesController {
    constructor() {

    }
    consultar(req, res) {
        try {
            db.query(`SELECT * FROM estudiantes`, (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: `Error en el servidor ${error}` });
                } else {
                    return res.status(201).json(result);
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Error en el servidor ${error}` });
        }
    }
    consultarDetalle(req, res) {
        try {
            const id = req.params.id;
            db.query(`SELECT * FROM estudiantes WHERE id=?`, id, (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: `Error en el servidor ${error}` });
                } else {
                    return res.status(201).json(result[0]);
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Error en el servidor ${error}` });
        }
    }
    ingresar(req, res) {
        try {
            const { dni, nombre, apellido, email } = req.body;
            db.query(`INSERT INTO estudiantes (id, dni, nombre, apellido, email)
                VALUES(NULL, ?, ?, ?, ?);`, [dni, nombre, apellido, email], (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: `Error en el servidor ${error}` });
                } else {
                    return res.status(201).json({ id: result.insertId });
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Error en el servidor ${error}` });
        }
    }
    actualizar(req, res) {
        try {
            const { dni, nombre, apellido, email } = req.body;
            const id = req.params.id;
            db.query(`UPDATE estudiantes SET dni =?, nombre=?, apellido=?, email=?
                WHERE id=?;`, [dni, nombre, apellido, email, id], (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: `Error en el servidor ${error}` });
                } else {
                    if (result.affectedRows === 0) {
                        return res.status(404).json({ message: `Estudiante no encontrado` });
                    }
                    return res.status(201).json({ message: `Estudiante actualizado` });
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Error en el servidor ${error}` });
        }
    }
    borrar(req, res) {
        try {
            const id = req.params.id;
            db.query(`DELETE FROM estudiantes WHERE id=?`, id, (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: `Error en el servidor ${error}` });
                } else {
                    if (result.affectedRows === 0) {
                        return res.status(404).json({ message: `Estudiante no encontrado` });
                    }
                    return res.status(201).json({ message: `Estudiante eliminado ${result.info}` });
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Error en el servidor ${error}` });
        }
    }

}
module.exports = new EstudiantesController();