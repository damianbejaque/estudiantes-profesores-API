const db = require("../database/conexion");

class CursosController {
    constructor() {

    }
    consultar(req, res) {
        try {
            db.query(`SELECT * FROM cursos`, (error, result) => {
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
            db.query(`SELECT * FROM cursos WHERE id=?`, id, (error, result) => {
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
            const { nombre, descripcion, profesor_id } = req.body;
            db.query(`INSERT INTO cursos (id, nombre, descripcion, profesor_id)
                VALUES(NULL, ?, ?, ?);`, [nombre, descripcion, profesor_id], (error, result) => {
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
            const { dni, nombre, apellido, email, profesion, telefono } = req.body;
            const id = req.params.id;
            db.query(`UPDATE cursos SET dni =?, nombre=?, apellido=?, email=?, profesion=?, telefono=?
                WHERE id=?;`, [dni, nombre, apellido, email, profesion, telefono, id], (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: `Error en el servidor ${error}` });
                } else {
                    if (result.affectedRows === 0) {
                        return res.status(404).json({ message: `Profesor no encontrado` });
                    }
                    return res.status(201).json({ message: `Profesor actualizado` });
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
            db.query(`DELETE FROM cursos WHERE id=?`, id, (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: `Error en el servidor ${error}` });
                } else {
                    if (result.affectedRows === 0) {
                        return res.status(404).json({ message: `Profesor no encontrado` });
                    }
                    return res.status(201).json({ message: `Profesor eliminado ${result.info}` });
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Error en el servidor ${error}` });
        }
    }
    asosciarEstudiante(req, res) {
        try {
            const { curso_id, estudiante_id } = req.body;
            db.query(`INSERT INTO cursos_estudiantes (curso_id, estudiante_id)
                VALUES(?, ?);`, [curso_id, estudiante_id], (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: `Error en el servidor ${error}` });
                } else {
                    return res.status(201).json({ message: 'Estudiante Registrado' });
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Error en el servidor ${error}` });
        }
    }
}
module.exports = new CursosController();