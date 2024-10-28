/* what i am going to do is create a function that has a loop and tell it that every 15 numbers to put out fizzbuzz 
and for every 5 number to put out buzz and for every 3 numbers to put out fizz*/




/*function numberPrinted (number) {
    for(let i = 1; i < 100;i++) {
     
        if (i % 3 ===0){
           console.log("roger")
        } 
        else if (i %5 == 0){
            console.log("the goat")
        }
        else if (i%15 == 0) {
            console.log("hello!")
        }
        console.log(i +" "+ "---"+" "+i)
    } 
}

numberPrinted(1) */

const adding = (x,y,z) => {
let result = (x/y) + z;
return result
}

console.log(adding(30,5,3))