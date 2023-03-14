import express from "express";
import { Express } from "express";
import { getHello } from "../controllers/helloController";

const exp = express();

export const registRouter = async (app: Express) => {
    // route
    app.use(express.json())
    app.use(
        express.urlencoded({
            extended:true,
        })
    );
    //  localhost:8080/hello
    app.use("/hello", await getHello());
}
