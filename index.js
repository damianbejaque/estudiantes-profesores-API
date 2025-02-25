const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');
const cursosRoutes = require('./routes/cursosRoutes');

app.use(express.json());
app.use(cors());

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/cursos", cursosRoutes);
app.get("/", (req, res) => {
    res.send("Hola Mundo")
});

app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});