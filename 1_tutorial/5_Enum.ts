enum Shoes{
    Nike,
    Adidas,
    Puma
}
const myShoes = Shoes.Nike
console.log(myShoes)

enum Answer{
    Yes = 'Yes',
    No = 'No'
}
function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('Correct')
    }if(answer === Answer.No){
        console.log('Wrong')
    }
}
askQuestion(Answer.Yes)
//💣💥 askQuestion('yes')