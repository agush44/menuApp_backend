import express from "express";
import helmet from "helmet";
import cors from "cors";
import { productRoutes } from "./routes/productRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

app.disable("x-powered-by");

// Configuración de ETag para validación de caché
app.set("etag", "strong");

// Servir archivos estáticos con caché de 1 año
app.use(express.static("public", { maxAge: "1y" }));

// CORS
const allowedOrigins = [process.env.FRONTEND_URL];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por la política CORS"));
      }
    },
    credentials: true,
  })
);

app.use(helmet());

app.use(express.json());

// Rutas
app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);

app.use(errorMiddleware);

export default app;
