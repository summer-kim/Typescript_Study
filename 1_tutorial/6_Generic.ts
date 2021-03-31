function returnType<T> (text: T):T {
    console.log(text)
    return text
}

const carrotNum = returnType<number>(2)
//decide type at the moment value has declared

const carrot = returnType<string>('carrot')
//able to use any API of string
carrot.split('')

//How to apply Generic on interface
interface Vegetable<T>{
    name: string
    color : T
}
const eggPlant: Vegetable<string> = {name:'eggPlant', color:'purple'}