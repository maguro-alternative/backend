import { Router } from "express"
import { mockHelloRepositories } from "../repositories/mock/helloMock";
import { helloUsecase } from "../usecases/helloUsecase";

export const getHello = async () => {
    const route = Router();

    // hikisu kara
    route.get("", async (req, res ,next) => {
        try{
            res.json(await helloUsecase({}, mockHelloRepositories));
        }catch(e){
            next(e);
        }
        
    });
    return route;
}