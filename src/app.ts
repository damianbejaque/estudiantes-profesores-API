import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import estudiantesRoutes from "./routes/estudiantesRoutes";
import profesoresRoutes from "./routes/profesoresRoutes";
import cursosRoutes from "./routes/cursosRoutes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/cursos", cursosRoutes);

export default app;
