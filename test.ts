interface User {
    userId: number;
    name: string;
    address?: string;
}

const user1:User = {
    userId: 11,
    name:"sigma",
    address:"aizu"
}

interface ptops{
    a:number;
    b:string;
}

type testtype = {
    a:number;
    b:string;
}

const tp: ptops = {
    a:1,
    b:"hello",
}

console.log(tp.a)
console.log(tp.b)


function gethello(){
    return "hello!";
}

type gethellotype = () => string

const gethellos = (name:string):string => {
    return "hello "+name;
}
console.log(gethellos("magro"))