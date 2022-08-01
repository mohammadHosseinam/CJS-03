"use strict"
console.log("star code")
conts name = reza 
//synaxError
const userName = "test"
const userName = "test2"
//synaxError
const sum = 10 *undefined
console.log(sum);
if(isNaN(sum)){
    console.error("sum" + "is not a number")
}
//Nan

const email ="test@example.com"
email = "test"
/*sart code
typeError
*/
console.log(mamad)
/*sart code
refrenseError
*/
const password = 1234
console.log(pasword)
/*sart code
refrenseError
*/

// try catch
try{
    const email ="test@example.com"
    email = "test"
}catch(err){
    console.error(err)
}
//just in srict mode
x=5
console.log(x)
console.log("end code")


//  Scope

// Global Scope
const userName1 = "user"
console.log(userName1)

// Function Scope

function sayMyName(){
    const actor = "heisenberg"
    console.log(userName1,actor);
}
sayMyName()
console.log(actor);

// Block scope

{
    {
        {
            {
                {
                    const geust = "geust";
                    console.log(geust)
                    {
                        {
                            {
                                console.log(geust)
                            }
                        }
                    }
                    console.log(geust)
                }
                console.log(geust)
            }
        }
    }
}
if(true){
    const test = "test"
    console.log(test);
}
console.log(test);



// calculater object 

const calculator = {
    result : 0,
    rightHand : 100,
    leftHand : 20,
    sum(){
       this.result = this.rightHand + this.leftHand
    },
    minus(){
        this.result = this.rightHand - this.leftHand

    },
    multiply(){
        this.result = this.rightHand * this.leftHand

    },
    kasr(){
        this.result = this.rightHand / this.leftHand
    }
};
calculator.sum()
console.log(calculator.result)
