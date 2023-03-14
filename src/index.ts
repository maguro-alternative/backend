import express from "express";
import { registRouter } from "./routes";

const DEFAULT_PORT = 8080

const main = async() =>{

    const app = express();
    registRouter(app)
    app.listen(DEFAULT_PORT, () => {
        console.log(`server is alive!!: http://localhost:${DEFAULT_PORT}`)
    });
};

main().catch((e)=>{
    console.error(e);
    throw e;
})