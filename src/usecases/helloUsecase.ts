import { UsecaseHandler } from "../interfaces/BaseUsecase";


// 入力の型宣言
type getHelloProps = {
};

// 処理する関数の型を決めておく
export type getHelloRepository = () => string;
export type postHelloRepository = () => string;
export type updateHelloRepository = () => string;
export type deleteHelloRepository = () => void;

export interface HelloRepositories {
    get: getHelloRepository;
}

interface getResult {
    hello: string;
}

export const helloUsecase: UsecaseHandler<getHelloProps, HelloRepositories, getResult> =async (props, repositories) => {

    return {
        hello: repositories.get()
    }
}

