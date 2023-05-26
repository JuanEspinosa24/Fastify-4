import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const uri = "mongodb+srv://prueba:prueba@cluster0.ptdypkd.mongodb.net/test";

export const connectDb = async () => {

    try {

        const db = await mongoose.connect(uri);
        console.log("Db Conectada " , db.connection.name);
        
    } catch (error) {
        console.log(`error al conectarse a la base de datos ${error.message}`);
    }

};

// ACOPLADO A FASTIFY :)