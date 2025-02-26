import { Request, Response } from "express";

class ProfesoresController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      res.send("Hola mundo");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Hola mundo");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      res.send("Hola mundo");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Hola mundo");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Hola mundo");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
}

export default new ProfesoresController();
