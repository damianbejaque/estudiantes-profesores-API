import { Request, Response } from "express";

class CursosController {
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

export default new CursosController();
