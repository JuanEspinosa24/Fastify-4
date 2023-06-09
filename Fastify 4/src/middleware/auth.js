import jwt from "jsonwebtoken";
import { response } from "../helpers/Response.js";
import { userModel } from "../models/user.model.js";

export const verifyToken = async (req, reply, done) => {
  let token = null;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, "abc123", async (err, payload) => {

      if (err) {
        return response(reply, 401, false, null, "no estas autorizado");
      }

      const user = await userModel.findById({_id:payload.user})
      if(!user){
        return response(reply, 401, false, null, "no estas autorizado");
      }

      req.userId = payload.user; 
      done();
    });
  }
  
  if (!token) {
    return response(reply, 401, false, null, "no estas autorizado");
  }
};

// ACOPLADO A FASTIFY :)