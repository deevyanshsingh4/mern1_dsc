// using zod independently as not part of express its a independently validation library..

const zod = require("zod");

function validateInput(arr){
    const schema = zod.array(zod.number());  // array should be array of no
    const response=schema.safeParse(arr);  // using to validate safe parse.
    console.log(response);
}

validateInput([1,2,3]);

// but when we need to validate more than one parameters we use zod as an object

function validatesInput(obj){
    const schema1  = zod.object({
    email : zod.string().email(),  /// eamil is a valid predefined function to validate emails
    password :zod.string().min(8)
})
    const response=schema1.safeParse(obj);  
    console.log(response);

}

validatesInput({
    email : "deevyanshsinghchhabra@gmail.com",
    password : "1w22222222222222"
})

