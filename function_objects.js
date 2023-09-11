let person={
    firstname:"prinz" ,
    lastname:"ashraf" ,
    fullname: function()
    {
        return this.firstname+" "+ this.lastname;
    }
}
console.log(person.fullname());