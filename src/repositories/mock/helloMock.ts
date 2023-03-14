import { getHelloRepository, HelloRepositories } from "../../usecases/helloUsecase";

const getHello: getHelloRepository = () => {
    return "Hello World"
}

export const mockHelloRepositories: HelloRepositories = {
    get: getHello,
}