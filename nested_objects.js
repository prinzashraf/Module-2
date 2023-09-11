//let us create an object
let person =
{
    name:"ashraf",
    age:19 ,
    gender:"male",
    eyecolor:"black" ,
    cars:{
        car1:"honda" ,
        car2:"BMW"
    }

    }
   for (i in person.cars)
   {
    console.log(person.cars[i]);
   }
