import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";


const app = express();

app.set("port", 5000);


//Routes

app.use("/api/categorias", categoriasRoutes);

export default app; //importanción de app que contiene a express
