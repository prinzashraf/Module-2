let person = 
{
    name:"Ragini",
    age:13,
    gender:"Female",
    eyecolor:"black",
    cars:{
        car1:"Honda",
        car2:"BMW"
    }
}
for (i in person.cars){
    console.log(person.cars[i]);
}