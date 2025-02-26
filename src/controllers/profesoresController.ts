import { Request, Response } from "express";
import { Profesor } from "../models/profesorModel";

class ProfesoresController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const data = await Profesor.find();
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await Profesor.findOneBy({ id: +id });
      if (!data) {
        throw new Error("No se encontró el Profesor");
      }
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const data = await Profesor.save(req.body);
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Profesor.findOneBy({ id: +id });
      if (!registro) {
        throw new Error("No se encontró el Profesor");
      }
      const data = await Profesor.update({ id: +id }, req.body);

      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Profesor.findOneBy({ id: +id });
      if (!registro) {
        throw new Error("No se encontró el Profesor");
      }
      const data = await Profesor.delete({ id: +id });
      res.status(204).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
}

export default new ProfesoresController();
