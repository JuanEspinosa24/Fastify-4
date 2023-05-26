import Fastify from "fastify";
import cors from "@fastify/cors";
import formBody from "@fastify/formbody";
import multer from "fastify-multer";
import { connectDb } from "./database.js";
import { userRoutes } from "./routes/user.route.js";
import { postRoutes } from "./routes/post.route.js";

connectDb();

const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: "*" });
fastify.register(formBody);
fastify.register(multer.contentParser);

//Rutas

fastify.register(userRoutes, { prefix: "/user" });
fastify.register(postRoutes, { prefix: "/post" });

const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: "0.0.0.0" });
    console.log("Escuchandote por el puerto 4k");
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();

// ACOPLADO A FASTIFY :)

// FASTIFY 4 TERMINADO :)
