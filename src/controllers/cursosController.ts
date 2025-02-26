import { Request, Response } from "express";
import { Curso } from "../models/cursoModel";
import { Profesor } from "../models/profesorModel";
import { Estudiante } from "../models/estudianteModel";

class CursosController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const data = await Curso.find({
        relations: { profesor: true, estudiantes: true },
      });
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await Curso.findOne({
        where: { id: +id },
        relations: { profesor: true, estudiantes: true },
      });
      if (!data) {
        throw new Error("No se encontró el Curso");
      }
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const { profesor } = req.body;
      const profesorData = await Profesor.findOneBy({ id: profesor });
      if (!profesor) {
        throw new Error("No se encontró el profesor");
      }
      const data = await Curso.save(req.body);
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { profesor } = req.body;
      const profesorData = await Profesor.findOneBy({ id: profesor });
      if (!profesorData) {
        throw new Error("No se encontró el profesor");
      }
      const registro = await Curso.findOneBy({ id: +id });
      if (!registro) {
        throw new Error("No se encontró el Curso");
      }
      const data = await Curso.update({ id: +id }, req.body);

      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Curso.findOneBy({ id: +id });
      if (!registro) {
        throw new Error("No se encontró el Curso");
      }
      const data = await Curso.delete({ id: +id });
      res.status(204).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
  async asociarEstudiante(req: Request, res: Response) {
    try {
      const { estudiante_id, curso_id } = req.body;
      const estudiante = await Estudiante.findOneBy({ id: +estudiante_id });
      if (!estudiante) {
        throw new Error("No se encontró el Estudiante");
      }
      const curso = await Curso.findOne({
        where: { id: +curso_id },
        relations: { profesor: true, estudiantes: true },
      });
      if (!curso) {
        throw new Error("No se encontró el Curso");
      }

      curso.estudiantes = curso.estudiantes || [];
      curso.estudiantes.push(estudiante);

      const data = await Curso.save(curso);
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
}

export default new CursosController();
