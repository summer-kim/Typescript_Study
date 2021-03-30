function logMessage(value: string | number){
    //Type Guard
    if(typeof value === 'number'){
        value.toLocaleString()
    }if(typeof value === 'string'){
        value.toString()
    }
}
logMessage('string')
logMessage(2)

interface Animal{
    name : string,
    color: string
}

interface Human{
    name : string,
    age: number
}
//Union type
function distinguishSpecies1(sth: Animal | Human){
    sth.name
    //💣💥 sth.color
    //💣💥 sth.age
}
distinguishSpecies1({ name:'monkey', color: 'brown'})
distinguishSpecies1({ name:'summer', age:100})

//Intersection type
function distinguishSpecies2(sth: Animal & Human){
    sth.name
    sth.color
    sth.age
}
distinguishSpecies2({ name:'monkey', color: 'brown', age:100})
