import { Request, Response } from "express";
import { Estudiante } from "../models/estudianteModel";

class EstudiantesController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const data = await Estudiante.find();
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await Estudiante.findOneBy({ id: +id });
      if (!data) {
        throw new Error("No se encontró el estudiante");
      }
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const data = await Estudiante.save(req.body);
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Estudiante.findOneBy({ id: +id });
      if (!registro) {
        throw new Error("No se encontró el estudiante");
      }
      const data = await Estudiante.update({ id: +id }, req.body);

      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Estudiante.findOneBy({ id: +id });
      if (!registro) {
        throw new Error("No se encontró el estudiante");
      }
      const data = await Estudiante.delete({ id: +id });
      res.status(204).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
  async asociarEstudiante(req: Request, res: Response) {
    try {
      res.send("Hola mundo");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: `Error en el servidor ${error.message}` });
      }
    }
  }
}

export default new EstudiantesController();
