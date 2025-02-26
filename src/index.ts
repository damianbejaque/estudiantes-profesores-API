import express from "express";
import cors from "cors";
import morgan from "morgan";
import estudiantesRoutes from "./routes/estudiantesRoutes";
import profesoresRoutes from "./routes/profesoresRoutes";
import cursosRoutes from "./routes/cursosRoutes";

const app = express();

async function main() {
  app.use(morgan("dev"));
  app.use(cors());
  app.use("/estudiantes", estudiantesRoutes);
  app.use("/profesores", profesoresRoutes);
  app.use("/cursos", cursosRoutes);
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

main();
